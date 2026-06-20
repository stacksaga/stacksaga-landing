import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Boxes, FileCode, Sparkles } from "lucide-react"
import Link from "next/link"

export function Initializer() {
  const steps = [
    {
      icon: Boxes,
      title: "Pick your stack",
      description:
        "Choose the StackSaga version, build tool, orchestration or coordinator type, application mode and database.",
    },
    {
      icon: FileCode,
      title: "Copy the snippets",
      description:
        "Get the ready-to-use BOM, dependencies and configuration — formatted for Maven or Gradle.",
    },
    {
      icon: Rocket,
      title: "Start building",
      description: "Drop the snippets into your project and you're ready to orchestrate sagas.",
    },
  ]

  return (
    <section id="initializer" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/10 text-sm text-accent">
                <Sparkles className="h-4 w-4" />
                New Tool
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">StackSaga Initializer</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Bootstrap a StackSaga project in seconds. Select your version, build tool,
                orchestration or coordinator type and database — then copy the exact dependencies
                and configuration you need, no boilerplate hunting required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="https://initializer.stacksaga.org" target="_blank">
                    Open Initializer
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 border-t border-border bg-secondary/30 p-8 md:p-12 lg:border-t-0 lg:border-l">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg border border-accent/20 bg-accent/10 p-3">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
