import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Scale } from "@/components/scale"
import { Features } from "@/components/features"
import { Frameworks } from "@/components/frameworks"
import { Benefits } from "@/components/benefits"
import { Ecosystem } from "@/components/ecosystem"
import { Initializer } from "@/components/initializer"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Scale />
      <Frameworks />
      <Benefits />
      <Ecosystem />
      <Initializer />
      <Features />
      <Footer />
    </main>
  )
}
