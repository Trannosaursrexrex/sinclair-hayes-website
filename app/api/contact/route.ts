import { NextResponse } from "next/server"
import { Resend } from "resend"

const RECIPIENT_EMAIL = "maxaboy2nd@gmail.com"

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email notifications are not configured" },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Name, phone, email, and message are required" },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: "notifications@sinclairhayes.com",
      to: RECIPIENT_EMAIL,
      subject: `New Lead: ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    )
  }
}