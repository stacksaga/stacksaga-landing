import fs from "fs"
import path from "path"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Shield, Calendar, Building2 } from "lucide-react"
import { marked } from "marked"
import { LicenseViewer } from "@/components/license-viewer"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "StackSaga Artifact License 1.0 (SSAL-1.0) | StackSaga",
  description:
    "Official StackSaga Artifact License 1.0 (SSAL-1.0) governing the binary artifacts distributed under the org.stacksaga group ID on Maven Central.",
  keywords: [
    "StackSaga license",
    "SSAL-1.0",
    "StackSaga Artifact License",
    "Zoftstack Lanka license"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.stacksaga.org/legal/license/ssal-1.0",
  },
  openGraph: {
    title: "StackSaga Artifact License 1.0 (SSAL-1.0)",
    description:
      "Official StackSaga Artifact License 1.0 (SSAL-1.0) governing binary artifacts distributed under org.stacksaga on Maven Central.",
    url: "https://www.stacksaga.org/legal/license/ssal-1.0",
    siteName: "StackSaga",
    type: "article",
  },
}

export default async function LicensePage() {
  const filePath = path.join(process.cwd(), "public", "legal", "license", "ssal-1.0.md")
  const rawMarkdown = fs.readFileSync(filePath, "utf-8")
  
  // Configure marked for clean GFM parsing
  marked.use({
    gfm: true,
    breaks: false,
  })
  
  const htmlContent = await marked.parse(rawMarkdown)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.stacksaga.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Legal",
        "item": "https://www.stacksaga.org"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "StackSaga Artifact License 1.0 (SSAL-1.0)",
        "item": "https://www.stacksaga.org/legal/license/ssal-1.0"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto max-w-4xl px-4 py-12 flex-1">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              Effective 2026
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5" />
              Zoftstack Lanka
            </span>
          </div>
        </div>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-3">
            <Shield className="h-3.5 w-3.5" />
            Official Legal Document
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            StackSaga Artifact License 1.0
          </h1>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            Identifier: <code className="text-foreground font-mono font-medium">SSAL-1.0</code> • Canonical URI:{" "}
            <span className="text-foreground font-mono text-xs">/legal/license/ssal-1.0</span>
          </p>
        </div>

        <LicenseViewer
          htmlContent={htmlContent}
          rawMarkdown={rawMarkdown}
          fileName="ssal-1.0.md"
        />
      </div>

      <Footer />
    </div>
  )
}
