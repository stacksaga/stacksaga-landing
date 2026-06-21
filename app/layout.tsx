import type React from "react"
import type {Metadata, Viewport} from "next"
import {GeistSans} from "geist/font/sans"
import {GeistMono} from "geist/font/mono"
import {Suspense} from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
    title: "StackSaga - Production-Ready Saga Orchestration for Spring Boot",
    description: "StackSaga is a free, production-ready Saga orchestration framework for Spring Boot. Manage long-running distributed transactions in microservices with built-in compensation, retry agents, and transaction tracing.",
    keywords: [
        "StackSaga",
        "stack saga",
        "saga orchestration",
        "saga pattern",
        "saga orchestrator",
        "spring boot",
        "spring boot saga",
        "spring boot microservices",
        "spring boot integration",
        "long-running transactions",
        "distributed transactions",
        "microservices",
        "transaction management",
        "event-driven architecture",
        "kafka saga",
        "compensation transaction",
        "distributed saga pattern",
        "spring microservices",
        "hybrid orchestration",
        "eventual consistency"
    ],
    authors: [
        {name: "Zoftstack Lanka Private Limited", url: "https://www.stacksaga.org"},
        {name: "Mafei (Tharindu Kalhara)", url: "https://github.com/mafei-dev"}
    ],
    creator: "Mafei (Tharindu Kalhara)",
    publisher: "Zoftstack Lanka Private Limited",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://www.stacksaga.org",
    },
    icons: {
        icon: "./fav/favicon.ico",
        shortcut: "./fav/favicon-16x16.png",
        apple: "./fav/apple-touch-icon.png",
    },
    openGraph: {
        type: "website",
        images: [
            {
                url: "https://stacksaga.org/images/stacksaga.jpg",
                width: 1200,
                height: 630,
                alt: "StackSaga - Production-Ready Saga Orchestration for Spring Boot",
            }
        ],
        title: "StackSaga - Production-Ready Saga Orchestration for Spring Boot",
        description: "StackSaga is a free, production-ready Saga orchestration framework for Spring Boot. Manage long-running distributed transactions in microservices with built-in compensation, retry agents, and transaction tracing.",
        url: "https://www.stacksaga.org",
        siteName: "StackSaga",
    },
    twitter: {
        card: "summary_large_image",
        title: "StackSaga - Production-Ready Saga Orchestration for Spring Boot",
        description: "StackSaga is a free, production-ready Saga orchestration framework for Spring Boot. Manage long-running distributed transactions in microservices with built-in compensation, retry agents, and transaction tracing.",
        images: ["https://stacksaga.org/images/stacksaga.jpg"],
    },
}

export const viewport: Viewport = {
    themeColor: "#28b76b",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-LJFGXZ1SXD"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-LJFGXZ1SXD');
            `}
        </Script>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </body>
        </html>
    )
}
