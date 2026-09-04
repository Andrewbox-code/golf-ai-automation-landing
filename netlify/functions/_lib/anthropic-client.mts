import Anthropic from '@anthropic-ai/sdk'
import { BASE_SYSTEM_PROMPT } from './persona.mts'

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

/**
 * Calls Claude with the shared Recepta AI persona. Returns null (rather
 * than throwing) when no API key is configured, so callers can fall back
 * gracefully instead of treating "not set up yet" as an error.
 */
export async function getAiReply(
  messages: ChatMessage[],
  systemAddendum = '',
): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return null

  const anthropic = new Anthropic({ apiKey })
  const model = process.env.CHAT_MODEL || 'claude-sonnet-5'

  const response = await anthropic.messages.create({
    model,
    max_tokens: 300,
    system: BASE_SYSTEM_PROMPT + systemAddendum,
    messages,
  })

  const textBlock = response.content.find((block) => block.type === 'text')
  return textBlock && 'text' in textBlock ? textBlock.text : null
}
