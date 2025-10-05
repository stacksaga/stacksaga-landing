import { Sparkles, Gauge, Shield, Cloud, Activity, Package } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Package,
      title: "No Separate Event Store",
      description:
        "Uses your existing database infrastructure. No need for additional event store setup or maintenance.",
    },
    {
      icon: Activity,
      title: "Built-in Transaction Tracing",
      description:
        "Comprehensive dashboard for monitoring and tracing distributed transactions in real-time across all services.",
    },
    {
      icon: Cloud,
      title: "Cloud-Native Ready",
      description:
        "First-class support for Kubernetes, Eureka, and modern cloud platforms. Deploy anywhere with confidence.",
    },
    {
      icon: Gauge,
      title: "Intelligent Retry Agents",
      description: "Automatic retry mechanisms with configurable policies ensure resilience and eventual consistency.",
    },
    {
      icon: Shield,
      title: "Production Battle-Tested",
      description:
        "Proven in enterprise environments handling millions of transactions with guaranteed data consistency.",
    },
    {
      icon: Sparkles,
      title: "Completely Free",
      description:
        "No license fees, no hidden costs, no payment required. Free for all developers and all use cases, forever.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose StackSaga?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for developers who need reliable distributed transaction management without the complexity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
