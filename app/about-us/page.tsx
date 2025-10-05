import Link from "next/link"
import { ArrowLeft, Code2, Shield, Zap, Users } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What is Stacksaga Framework?</h2>
            <p className="leading-relaxed">
              Stacksaga Framework is a lightweight and robust Java framework designed to simplify building and managing
              distributed transactions in microservice architectures. It helps developers implement the Saga pattern
              efficiently, ensuring reliability and consistency in long-running business processes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Purpose</h2>
            <p className="leading-relaxed">
              Our goal is to provide developers with a framework that reduces complexity when handling distributed
              transactions. Stacksaga enables seamless orchestration, error handling, and monitoring of transactions
              across multiple microservices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Saga-based Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Supports Saga-based distributed transaction management for complex workflows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lightweight Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Easy to integrate with existing microservices without heavy dependencies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Monitoring & Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Provides monitoring and failure analysis tools for better observability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Free & Maintained</h3>
                  <p className="text-sm text-muted-foreground">
                    Completely free to use and actively maintained by the community.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <p className="leading-relaxed">
              To learn more, explore the documentation, or contribute to the project, visit our{" "}
              <a
                href="https://github.com/stacksaga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub repository
              </a>{" "}
              and{" "}
              <a
                href="https://docs.stacksaga.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                official documentation
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About the Team</h2>
            <p className="leading-relaxed">
              Stacksaga Framework was developed by a team of experienced Java developers passionate about microservices
              and scalable architectures. We aim to make distributed transaction management simpler, more reliable, and
              developer-friendly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="leading-relaxed">If you have questions, feedback, or want to collaborate, reach us at:</p>
            <ul className="list-none space-y-2 mt-4">
              <li>
                <strong>Company:</strong> StackSaga
              </li>
              <li>
                <strong>Email:</strong> [email protected]
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://stacksaga.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://stacksaga.org
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  )
}
