import { getAiReply, type ChatMessage } from './_lib/anthropic-client.mts'
import { getBusiness } from './_lib/business-store.mts'
import { buildSystemPrompt } from './_lib/persona.mts'

function isValidMessage(value: unknown): value is ChatMessage {
  if (typeof value !== 'object' || value === null) return false
  const candidate = value as Record<string, unknown>
  return (
    (candidate.role === 'user' || candidate.role === 'assistant') &&
    typeof candidate.content === 'string' &&
    candidate.content.length > 0 &&
    candidate.content.length <= 2000
  )
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'method_not_allowed' }, 405)
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return jsonResponse({ error: 'not_configured' }, 503)
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return jsonResponse({ error: 'invalid_json' }, 400)
  }

  const rawMessages = (body as { messages?: unknown })?.messages
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return jsonResponse({ error: 'missing_messages' }, 400)
  }

  const messages = rawMessages.filter(isValidMessage).slice(-12)
  if (messages.length === 0) {
    return jsonResponse({ error: 'invalid_messages' }, 400)
  }

  // Lets this same widget eventually be embedded on a real customer's
  // own site by passing their business key — defaults to the landing
  // page's own demo persona when none is given.
  const rawBusinessKey = (body as { business?: unknown })?.business
  const businessKey = typeof rawBusinessKey === 'string' ? rawBusinessKey.slice(0, 200) : undefined

  try {
    const business = await getBusiness(businessKey)
    const reply = await getAiReply(messages, buildSystemPrompt(business))
    if (!reply) {
      return jsonResponse({ error: 'empty_reply' }, 502)
    }
    return jsonResponse({ reply }, 200)
  } catch (error) {
    console.error('Anthropic API error:', error)
    return jsonResponse({ error: 'upstream_error' }, 502)
  }
}
