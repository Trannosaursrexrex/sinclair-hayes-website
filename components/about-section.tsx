export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              About Sinclair Hayes
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
              We specialize in one thing: making trades businesses more money
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every day, homeowners search for plumbers, electricians, HVAC
                technicians, and other trade professionals. Most of those
                searchers land on slow, outdated websites that fail to convert.
              </p>
              <p>
                We built Sinclair Hayes to solve this problem. Our team combines
                deep expertise in conversion optimization, web development, and
                marketing automation to build digital infrastructure that
                actually works.
              </p>
              <p>
                No generic templates. No cookie-cutter solutions. Just
                purpose-built systems designed to capture emergency traffic and
                turn it into booked jobs.
              </p>
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-8 lg:p-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Built for Trades
                </h3>
                <p className="text-sm text-muted-foreground">
                  We work exclusively with service businesses—plumbers,
                  electricians, HVAC, roofers, and more.
                </p>
              </div>
              <div className="border-t border-border pt-8">
                <h3 className="font-semibold text-foreground mb-2">
                  Results-Focused
                </h3>
                <p className="text-sm text-muted-foreground">
                  We measure success by one metric: how many more jobs you book
                  after working with us.
                </p>
              </div>
              <div className="border-t border-border pt-8">
                <h3 className="font-semibold text-foreground mb-2">
                  Full Integration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our systems integrate with the tools you already use—no need
                  to change your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
