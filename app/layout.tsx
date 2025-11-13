import type React from "react"
import type {Metadata} from "next"
import {GeistSans} from "geist/font/sans"
import {GeistMono} from "geist/font/mono"
import {Suspense} from "react"
import "./globals.css"

export const metadata: Metadata = {
    title: "StackSaga - Java Framework for Saga Pattern",
    description: "StackSaga is a spring boot compatible and, totally Free to use Saga orchestrator framework that simplifies long-running transaction management using the Saga pattern, offering a scalable and fault-tolerant approach to microservices.",
    keywords: [
        "spring boot",
        "stacksaga",
        "stack saga",
        "StackSaga",
        "Saga orchestrator",
        "Saga pattern",
        "long-running transactions",
        "microservices",
        "transaction management",
        "spring boot integration",
        "distributed transactions",
        "event-driven architecture",
        "hybrid orchestration"
    ],
    generator: "v0.app",
    authors: [
        {name: "Mafei", url: "https://github.com/mafei-dev"}
    ],
    icons: {
        icon: "./fav/favicon.ico",
        shortcut: "./fav/favicon-16x16.png",
        apple: "./fav/apple-touch-icon.png",
    },
    themeColor: "#28b76b",
    openGraph: {
        type: "website",
        images: [
            {
                url: "https://stacksaga.org/images/stacksaga.jpg"
            }
        ],
        title: "StackSaga - Java Framework for Saga Pattern",
        description: "StackSaga is a spring boot compatible and, totally Free to use Saga orchestrator framework that simplifies long-running transaction management using the Saga pattern, offering a scalable and fault-tolerant approach to microservices.",
        url: "https://www.stacksaga.org",
        emails: "info@stacksaga.org",
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </body>
        </html>
    )
}
