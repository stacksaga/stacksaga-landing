import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-32 pb-10 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground">
          100% Free • Spring Boot Support • No License Fees
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          Production-Ready <span className="text-accent">Saga Orchestration</span> for Microservices
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
          Engineered for <span className="text-foreground font-medium">large-scale enterprise microservices</span> — manage complex, long-running distributed transactions with eventual consistency, automatic compensation, and full observability. Free to use with battle-tested implementations for both synchronous and event-driven patterns.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="gap-2" asChild>
            <Link href="https://docs.stacksaga.org/stacksaga/latest/introduction-to-stacksaga.html" target="_blank">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
            <Link href="https://docs.stacksaga.org/stacksaga/latest/introduction-to-stacksaga.html" target="_blank">
              <BookOpen className="h-4 w-4" />
              Read Documentation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
