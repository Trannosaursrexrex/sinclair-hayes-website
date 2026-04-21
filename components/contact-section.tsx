"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type SubmitStatus = "idle" | "submitting" | "success" | "error"

export function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus("submitting")
    setMessage("")

    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error ?? "Unable to submit your request.")
      }

      setStatus("success")
      setMessage("Thank you. We will contact you shortly.")
      form.reset()
    } catch (error) {
      setStatus("error")
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Speak with our team
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Share a few details about your business and goals. We will follow up
            with a focused recommendation for your next digital upgrade.
          </p>
        </div>

        <div className="max-w-3xl border border-border rounded-lg bg-background p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea id="message" name="message" rows={6} required />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {status === "submitting" ? "Submitting..." : "Send Message"}
            </Button>

            {message && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-muted-foreground" : "text-destructive"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
