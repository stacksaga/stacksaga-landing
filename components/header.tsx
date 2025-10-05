"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"
import image from "../public/stacksaga-icon.svg";


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src={image} alt="StackSaga Icon" width={32} height={32} className="h-8 w-8"/>
            <span className="text-xl font-bold">StackSaga</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="#frameworks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Frameworks
            </Link>
            <Link
              href="https://stacksaga.org/"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link
              href="https://stackoverflow.com/questions/tagged/stacksaga?tab=Newest"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQs
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/stacksaga" target="_blank">
              GitHub
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-primary/20 hover:bg-primary/10 bg-transparent"
            asChild
          >
            <Link href="https://www.paypal.com/donate" target="_blank">
              <Heart className="h-4 w-4 fill-primary text-primary" />
              Donate
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="https://stacksaga.org/" target="_blank">
              Get Started
            </Link>
          </Button>
        </div>
        <button
          className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#frameworks"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Frameworks
            </Link>
            <Link
              href="https://stacksaga.org/"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="https://stacksaga.org/"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            <div className="flex flex-col gap-3 pt-2 border-t border-border">
              <Button variant="ghost" size="sm" asChild className="justify-start">
                <Link href="https://github.com/stacksaga" target="_blank">
                  GitHub
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-primary/20 hover:bg-primary/10 bg-transparent justify-start"
                asChild
              >
                <Link href="https://www.paypal.com/donate" target="_blank">
                  <Heart className="h-4 w-4 fill-primary text-primary" />
                  Donate
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="https://stacksaga.org/" target="_blank">
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
