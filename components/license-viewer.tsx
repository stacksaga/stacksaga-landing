"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Download, FileText, Code, ExternalLink, ShieldCheck, Scale } from "lucide-react"

interface LicenseViewerProps {
  htmlContent: string
  rawMarkdown: string
  fileName?: string
}

export function LicenseViewer({
  htmlContent,
  rawMarkdown,
  fileName = "ssal-1.0.md",
}: LicenseViewerProps) {
  const [viewMode, setViewMode] = useState<"formatted" | "raw">("formatted")
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawMarkdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleDownload = () => {
    const blob = new Blob([rawMarkdown], { type: "text/markdown;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Key highlights banner */}
      <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 md:p-6 text-foreground shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold">StackSaga Artifact License 1.0 (SSAL-1.0)</h2>
              <p className="text-xs text-muted-foreground">Official binary distribution license for org.stacksaga artifacts</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-accent/40 text-accent font-medium">
              SSAL-1.0
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Single Source of Truth
            </Badge>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 pt-3 border-t border-accent/15 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Commercial Production:</strong> Free to use as binary dependency in internal &amp; commercial applications.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Maven Central:</strong> Applicable to compiled artifacts under <code className="text-foreground font-mono">org.stacksaga</code>.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <span>
              <strong className="text-foreground">Attribution:</strong> Visible &quot;Powered by StackSaga&quot; credit linked to stacksaga.org.
            </span>
          </div>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm">
        <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-md">
          <Button
            variant={viewMode === "formatted" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setViewMode("formatted")}
            className="text-xs gap-1.5 h-8 font-medium"
          >
            <FileText className="h-3.5 w-3.5" />
            Formatted View
          </Button>
          <Button
            variant={viewMode === "raw" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setViewMode("raw")}
            className="text-xs gap-1.5 h-8 font-medium"
          >
            <Code className="h-3.5 w-3.5" />
            Raw Markdown
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="text-xs gap-1.5 h-8 flex-1 sm:flex-initial"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-accent" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy Markdown
              </>
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="text-xs gap-1.5 h-8 flex-1 sm:flex-initial"
          >
            <Download className="h-3.5 w-3.5" />
            Download .md
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-xs gap-1.5 h-8 hidden md:inline-flex"
          >
            <a
              href="/legal/license/ssal-1.0.md"
              target="_blank"
              rel="noopener noreferrer"
              title="Open raw markdown file directly"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Raw URL
            </a>
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === "formatted" ? (
        <div className="rounded-xl border border-border bg-card p-6 sm:p-10 shadow-sm">
          <article
            className="license-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      ) : (
        <div className="relative rounded-xl border border-border bg-card/40 p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-xs text-muted-foreground font-mono">
            <span>ssal-1.0.md (Single Source of Truth)</span>
            <span>{rawMarkdown.length} characters</span>
          </div>
          <pre className="overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-foreground whitespace-pre-wrap select-all font-medium">
            {rawMarkdown}
          </pre>
        </div>
      )}
    </div>
  )
}
