import {Card} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {ArrowRight, Workflow, Zap} from "lucide-react"
import Link from "next/link"

export function Frameworks() {
    return (
        <section id="frameworks" className="py-20 px-4 bg-card/30">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Implementation</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        StackSaga offers two powerful implementations tailored to your architecture needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-8 border-border bg-card hover:border-accent/50 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-accent/10">
                                <Zap className="h-6 w-6 text-accent"/>
                            </div>
                            <h3 className="text-2xl font-bold">StackSaga Framework</h3>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Core implementation for orchestrating long-running transactions within request-response
                            patterns. Perfect
                            for synchronous microservice architectures requiring reliable transaction management.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-2">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"/>
                                <span className="text-sm text-muted-foreground">Spring Boot MVC & WebFlux support</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"/>
                                <span className="text-sm text-muted-foreground">Request-response pattern support</span>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"/>
                                <span
                                    className="text-sm text-muted-foreground">Synchronous transaction orchestration</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"/>
                                <span className="text-sm text-muted-foreground">Built-in compensation logic</span>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                            <Link
                                href="https://docs.stacksaga.org/stacksaga/latest/implementations/stacksaga-sync/overview.html"
                                target="_blank">
                                Learn More
                                <ArrowRight className="h-4 w-4"/>
                            </Link>
                        </Button>
                    </Card>

                    <Card className="p-8 border-border bg-card hover:border-accent/50 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-accent/10">
                                <Workflow className="h-6 w-6 text-accent"/>
                            </div>
                            <h3 className="text-2xl font-bold">StackSaga Kafka</h3>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Event-driven implementation built on Apache Kafka for managing long-running transactions in
                            distributed
                            architectures. Leverages Kafka's messaging backbone for reliable orchestration.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-2">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"/>
                                <span className="text-sm text-muted-foreground">Spring Boot MVC & WebFlux support</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"/>
                                <span className="text-sm text-muted-foreground">Event-driven architecture</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"/>
                                <span className="text-sm text-muted-foreground">Apache Kafka integration</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent"/>
                                <span className="text-sm text-muted-foreground">Eventual consistency support</span>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                            <Link
                                href="https://docs.stacksaga.org/stacksaga/latest/implementations/stacksaga-kafka/overview.html"
                                target="_blank">
                                Learn More
                                <ArrowRight className="h-4 w-4"/>
                            </Link>
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    )
}
