import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Frameworks } from "@/components/frameworks"
import { Benefits } from "@/components/benefits"
import { Ecosystem } from "@/components/ecosystem"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Frameworks />
      <Benefits />
      <Ecosystem />
      <Features />
      <Footer />
    </main>
  )
}
