import { Layers, GitMerge, RefreshCw, ShieldCheck } from "lucide-react"

export function Scale() {
  const stats = [
    {
      icon: Layers,
      value: "Enterprise-Grade",
      label: "Designed for large-scale distributed systems",
    },
    {
      icon: GitMerge,
      value: "Multi-Service",
      label: "Orchestrate across unlimited microservices",
    },
    {
      icon: RefreshCw,
      value: "Eventual Consistency",
      label: "Guaranteed data consistency across all services",
    },
    {
      icon: ShieldCheck,
      value: "Fault-Tolerant",
      label: "Auto-retry and compensation on any failure",
    },
  ]

  return (
    <section className="py-12 px-4 border-y border-border bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          Built to handle the demands of large-scale production environments
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <stat.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
