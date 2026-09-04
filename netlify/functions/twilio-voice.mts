import { missedCallOpener } from './_lib/messages.mts'
import { sendSms } from './_lib/twilio-sms.mts'
import { parseTwilioForm, verifyTwilioSignature } from './_lib/twilio-verify.mts'
import { escapeXml, twimlResponse } from './_lib/twiml.mts'

/**
 * Twilio Voice webhook: fires the moment someone calls the business's
 * Twilio number. If BUSINESS_FORWARD_NUMBER is set, tries to ring the
 * real business line first (see twilio-voice-status.mts for what
 * happens if that goes unanswered). If it isn't set, there's no one to
 * ring, so it texts the caller back immediately instead.
 */
export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const authToken = process.env.TWILIO_AUTH_TOKEN
  if (!authToken) {
    return new Response('Not configured', { status: 503 })
  }

  const params = await parseTwilioForm(req)
  const signature = req.headers.get('x-twilio-signature')
  if (!verifyTwilioSignature(req.url, params, signature, authToken)) {
    return new Response('Invalid signature', { status: 403 })
  }

  const forwardNumber = process.env.BUSINESS_FORWARD_NUMBER
  const businessName = process.env.BUSINESS_NAME || 'the team'
  const caller = params.From

  if (!forwardNumber) {
    if (caller) {
      await sendSms(caller, missedCallOpener(businessName)).catch((error) =>
        console.error('Text-back send failed:', error),
      )
    }
    return twimlResponse('<Say>Thanks for calling. We are texting you right now so we can help.</Say><Hangup/>')
  }

  const statusCallback = new URL('/.netlify/functions/twilio-voice-status', req.url).toString()
  return twimlResponse(
    `<Dial timeout="18" action="${escapeXml(statusCallback)}"><Number>${escapeXml(forwardNumber)}</Number></Dial>`,
  )
}
