import { Shield, GitBranch, RefreshCw, Boxes } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Reliable Transaction Management",
      description:
        "Ensure data consistency across distributed services with built-in compensation and rollback mechanisms.",
    },
    {
      icon: GitBranch,
      title: "Saga Pattern Implementation",
      description: "Industry-standard saga pattern for managing complex, long-running business transactions.",
    },
    {
      icon: RefreshCw,
      title: "Automatic Compensation",
      description: "Intelligent rollback and compensation logic to handle failures gracefully in distributed systems.",
    },
    {
      icon: Boxes,
      title: "Microservice Ready",
      description: "Purpose-built for microservice architectures with support for both sync and async patterns.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Modern Architectures</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to orchestrate complex transactions across your microservices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg border border-border bg-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-muted-foreground">
                Explore our comprehensive documentation and examples to begin orchestrating your microservices.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://stacksaga.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                View Documentation
              </a>
              <a
                href="https://github.com/stacksaga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-accent/10 transition-colors whitespace-nowrap"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
