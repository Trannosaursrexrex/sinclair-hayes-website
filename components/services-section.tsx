import { Zap, Globe, FormInput } from "lucide-react"

const services = [
  {
    icon: Globe,
    number: "01",
    title: "High-Conversion Websites",
    description:
      "Purpose-built websites designed specifically for trades. Optimized to capture emergency search traffic and turn visitors into booked service calls.",
  },
  {
    icon: FormInput,
    number: "02",
    title: "Lead Capture Forms",
    description:
      "Strategic form placement and design that maximizes conversions. Every field, button, and CTA engineered to capture leads before they bounce.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Automated Lead Routing",
    description:
      "Instant lead delivery to your team via email, SMS, or CRM. No more missed opportunities or leads sitting in an inbox.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            What We Build
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground max-w-2xl text-balance">
            Infrastructure designed to turn searches into service calls
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="p-8 border border-border rounded-lg bg-background hover:border-primary/30 transition-colors"
            >
              <span className="text-5xl font-light text-muted-foreground/30 mb-4 block">
                {service.number}
              </span>
              <div className="flex items-center gap-3 mb-4">
                <service.icon className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
