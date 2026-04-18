import { Resend } from 'resend'

/**
 * Contactformulier endpoint voor StageStart Curaçao.
 *
 * Verwacht een POST met JSON body: { name, email, message, subject?, website? }.
 * Het veld `website` is een honeypot en moet leeg blijven (bots vullen dit).
 *
 * Vereiste environment variables (in Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY        De Resend API-key (nooit in code)
 *   CONTACT_TO_EMAIL      Ontvangend adres, bijv. info@jescoinnovation.nl (optioneel, default hieronder)
 *   CONTACT_FROM_EMAIL    Verzendend adres op een in Resend geverifieerd domein.
 *                         Tot jescoinnovation.nl of stagestartcuracao.nl geverifieerd is:
 *                         gebruik 'onboarding@resend.dev'
 */

const TO_DEFAULT = 'info@jescoinnovation.nl'
const FROM_DEFAULT = 'onboarding@resend.dev'
const MAX_FIELD_LENGTH = 5000
const MIN_MESSAGE_LENGTH = 10

function isValidEmail(value) {
  if (typeof value !== 'string') return false
  const trimmed = value.trim()
  if (trimmed.length < 5 || trimmed.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
}

function sanitize(value) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, MAX_FIELD_LENGTH)
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set in environment')
    return res.status(500).json({ error: 'Configuratie onvolledig' })
  }

  const toAddress = process.env.CONTACT_TO_EMAIL || TO_DEFAULT
  const fromAddress = process.env.CONTACT_FROM_EMAIL || FROM_DEFAULT

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ error: 'Ongeldige body' })
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Ongeldige body' })
  }

  const name = sanitize(body.name)
  const email = sanitize(body.email)
  const subject = sanitize(body.subject) || 'Bericht via contactformulier'
  const message = sanitize(body.message)
  const honeypot = typeof body.website === 'string' ? body.website.trim() : ''

  if (honeypot.length > 0) {
    return res.status(200).json({ ok: true })
  }

  if (!name || name.length < 2) {
    return res.status(400).json({ error: 'Vul een geldige naam in' })
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Vul een geldig e-mailadres in' })
  }
  if (!message || message.length < MIN_MESSAGE_LENGTH) {
    return res.status(400).json({ error: `Bericht moet minimaal ${MIN_MESSAGE_LENGTH} tekens zijn` })
  }

  const resend = new Resend(apiKey)

  const plainTextBody = [
    `Nieuw bericht via het contactformulier op StageStart Curaçao.`,
    ``,
    `Naam: ${name}`,
    `E-mail: ${email}`,
    `Onderwerp: ${subject}`,
    ``,
    `Bericht:`,
    message,
  ].join('\n')

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #2C2420; max-width: 600px;">
      <p style="color: #8B7D6B; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Bericht via contactformulier</p>
      <h2 style="font-family: Georgia, serif; font-weight: normal; color: #2C2420; margin-top: 0;">StageStart Curaçao</h2>
      <table style="border-collapse: collapse; margin-bottom: 16px;">
        <tr><td style="padding: 4px 12px 4px 0; color: #8B7D6B;">Naam:</td><td style="padding: 4px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #8B7D6B;">E-mail:</td><td style="padding: 4px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #1A7EC5;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #8B7D6B;">Onderwerp:</td><td style="padding: 4px 0;">${escapeHtml(subject)}</td></tr>
      </table>
      <div style="border-left: 3px solid #1A7EC5; padding-left: 16px; white-space: pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `

  try {
    const result = await resend.emails.send({
      from: `StageStart Curaçao <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `[StageStart] ${subject}`,
      text: plainTextBody,
      html: htmlBody,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return res.status(502).json({ error: 'Bericht kon niet worden verstuurd' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact form failure:', err)
    return res.status(500).json({ error: 'Er ging iets mis bij het verzenden' })
  }
}
