import { Card } from "@/components/ui/card"
import { Workflow, LineChart, RotateCcw, Layers } from "lucide-react"

export function Ecosystem() {
  const components = [
    {
      icon: Workflow,
      title: "Saga Orchestrator",
      description: "Core engine for managing distributed transactions with automatic compensation and rollback logic.",
      features: ["Transaction coordination", "Compensation handling", "State management"],
    },
    {
      icon: LineChart,
      title: "Transaction Tracing Dashboard",
      description: "Real-time monitoring and visualization of saga executions across your distributed system.",
      features: ["Live transaction tracking", "Performance metrics", "Error diagnostics"],
    },
    {
      icon: RotateCcw,
      title: "Retry Agents",
      description: "Intelligent retry mechanisms that ensure eventual consistency and handle transient failures.",
      features: ["Configurable retry policies", "Exponential backoff", "Dead letter handling"],
    },
    {
      icon: Layers,
      title: "Event Sourcing Support",
      description: "Optional event sourcing capabilities for complete audit trails and temporal queries.",
      features: ["Event store integration", "Audit logging", "Time-travel debugging"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete Ecosystem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for distributed transaction management in one cohesive platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {components.map((component, index) => (
            <Card key={index} className="p-8 border-border bg-card hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 flex-shrink-0">
                  <component.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{component.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
