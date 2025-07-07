import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'
import { deductCredits } from '@/lib/credits'
import { generateAIResponse } from '@/lib/openai'

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const user = await getCurrentUser()
    const { inputData } = await req.json()

    const tool = await prisma.aITool.findUnique({
      where: { slug: params.slug, isActive: true }
    })

    if (!tool) {
      return NextResponse.json({ error: 'Tool not found' }, { status: 404 })
    }

    if (user.credits < tool.creditCost) {
      return NextResponse.json({ error: 'Insufficient credits' }, { status: 402 })
    }

    // Build prompt from template and input data
    let prompt = tool.promptTemplate
    Object.entries(inputData).forEach(([key, value]) => {
      prompt = prompt.replace(new RegExp(`{{${key}}}`, 'g'), value as string)
    })

    let output = ''
    let status = 'success'
    let errorMessage = null

    try {
      output = await generateAIResponse(prompt)
      await deductCredits(user.id, tool.creditCost)
    } catch (error) {
      status = 'error'
      errorMessage = error instanceof Error ? error.message : 'Unknown error'
    }

    // Record usage
    const usage = await prisma.toolUsage.create({
      data: {
        userId: user.id,
        toolId: tool.id,
        inputData,
        output,
        creditsUsed: status === 'success' ? tool.creditCost : 0,
        status,
        errorMessage
      }
    })

    return NextResponse.json({
      id: usage.id,
      output,
      status,
      creditsUsed: usage.creditsUsed,
      errorMessage
    })
  } catch (error) {
    console.error('Error executing tool:', error)
    return NextResponse.json({ error: 'Failed to execute tool' }, { status: 500 })
  }
}
