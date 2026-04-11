const steps = [
  {
    step: "01",
    title: "Audit & Strategy",
    description:
      "We analyze your current digital presence, identify where leads are leaking, and map out a custom conversion strategy.",
  },
  {
    step: "02",
    title: "Build & Integrate",
    description:
      "We build your high-conversion system and integrate it with your existing tools—CRM, scheduling software, and call tracking.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description:
      "We launch your new infrastructure and continuously optimize based on real performance data to maximize conversions.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground max-w-2xl mx-auto text-balance">
            A straightforward approach to better results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <div className="text-6xl font-light text-border mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
