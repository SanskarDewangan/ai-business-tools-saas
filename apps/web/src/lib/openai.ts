import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateAIResponse(prompt: string, maxTokens: number = 1000) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful AI assistant for business productivity tools.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: maxTokens,
      temperature: 0.7,
    })

    return response.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('OpenAI API Error:', error)
    throw new Error('Failed to generate AI response')
  }
}