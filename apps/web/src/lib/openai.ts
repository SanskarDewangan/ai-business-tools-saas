import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateContent(prompt: string, model: string = 'gpt-3.5-turbo') {
  try {
    const response = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 1000
    })

    return response.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('OpenAI API error:', error)
    throw new Error('Failed to generate content')
  }
}