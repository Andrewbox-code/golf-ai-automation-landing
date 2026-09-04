import { getAiReply, type ChatMessage } from './_lib/anthropic-client.mts'

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

  try {
    const reply = await getAiReply(messages)
    if (!reply) {
      return jsonResponse({ error: 'empty_reply' }, 502)
    }
    return jsonResponse({ reply }, 200)
  } catch (error) {
    console.error('Anthropic API error:', error)
    return jsonResponse({ error: 'upstream_error' }, 502)
  }
}
