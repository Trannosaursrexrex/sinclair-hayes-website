const stats = [
  {
    value: "3.2x",
    label: "Average increase in booked calls",
  },
  {
    value: "47%",
    label: "Reduction in cost per lead",
  },
  {
    value: "24/7",
    label: "Automated lead capture",
  },
  {
    value: "< 2s",
    label: "Average page load time",
  },
]

export function ResultsSection() {
  return (
    <section id="results" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest mb-4 opacity-70">
            Proven Results
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl mx-auto text-balance">
            Numbers that matter for trades businesses
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold mb-2">
                {stat.value}
              </div>
              <p className="text-sm opacity-70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
