import { generateObject } from 'ai'
import { createOpenAI as createGroq } from '@ai-sdk/openai'
import { z } from 'zod'

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
})

const { object } = await generateObject({
  model: groq('llama-3.1-70b-versatile'),
  schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
      steps: z.array(z.string()),
    }),
  }),
  prompt: 'Generate a lasagna recipe.',
})
export default Test
