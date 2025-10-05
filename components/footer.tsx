import Link from "next/link"
import { Code2, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">StackSaga</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              A powerful Java framework for orchestrating long-running transactions in microservice architectures using
              the Saga pattern.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://stacksaga.org/"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://stacksaga.org/"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="https://stacksaga.org/"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/stacksaga"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://stacksaga.org/"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} StackSaga. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/stacksaga"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
