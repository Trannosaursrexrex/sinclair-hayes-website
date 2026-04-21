import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
            Digital Infrastructure for Trades
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
            High-Conversion Systems That Book More Jobs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-pretty">
            We replace outdated, leaky websites with automated systems designed
            specifically to capture emergency search traffic, route leads, and
            book service calls.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Button 1: Email Routing */}
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
            >
              <Link href="#contact">
                Request a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            {/* Button 2: Jump to Process Section */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base border-border text-foreground hover:bg-secondary"
            >
              <Link href="#process">Our Process</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base border-border text-foreground hover:bg-secondary"
            >
              <Link href="#contact">Contact</Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}