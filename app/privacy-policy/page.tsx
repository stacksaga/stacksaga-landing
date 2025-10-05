import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: 25 September 2025</p>

          <p className="leading-relaxed">
            Welcome to Stacksaga Framework ("we," "our," "us"). We respect your privacy and are committed to protecting
            any information you may provide while using our website, https://stacksaga.org. This Privacy Policy explains
            what information we collect, how we use it, and your choices regarding your information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="leading-relaxed">
            We do not collect personal information through signups, accounts, or forms. However, we may collect limited
            information automatically for website functionality and analytics, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Log Data:</strong> IP address, browser type, operating system, and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> Used by Google Analytics and Google AdSense to track usage and serve contextual
              ads.
            </li>
            <li>
              <strong>Contact Information:</strong> If you voluntarily email us at info@stacksaga.org, we may collect
              your name and email to respond to your inquiry.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="leading-relaxed">We use the collected information only to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Improve website performance and user experience.</li>
            <li>Analyze website traffic and usage patterns via Google Analytics.</li>
            <li>Serve contextual ads via Google AdSense.</li>
            <li>Respond to inquiries sent voluntarily via email.</li>
          </ul>
          <p className="leading-relaxed mt-4">We do not sell or rent your information to third parties.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies and Tracking</h2>
          <p className="leading-relaxed">We use cookies only for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics to analyze website traffic (anonymized).</li>
            <li>Google AdSense to display contextual ads.</li>
          </ul>
          <p className="leading-relaxed mt-4">You can disable cookies in your browser settings if you prefer.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
          <p className="leading-relaxed">
            Our website uses third-party services, including Google Analytics and Google AdSense, which may collect
            limited information for analytics and advertising purposes. Please refer to their privacy policies for more
            details:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google Analytics Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google AdSense Privacy Policy
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <p className="leading-relaxed">
            We take reasonable measures to protect your information. However, no method of transmission over the
            internet is completely secure, so we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You can opt out of Google Analytics tracking using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
            <li>
              You can opt out of Google AdSense ads using{" "}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google Ad Settings
              </a>
              .
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Donations</h2>
          <p className="leading-relaxed">
            Our website includes a "Donate" button that allows visitors to support the Stacksaga Framework. All
            donations are processed through third-party payment providers (such as PayPal or Stripe). We do not collect
            or store any payment information on our website. For details on how your information is handled, please
            refer to the respective provider's privacy policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised
            "Last Updated" date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p className="leading-relaxed">If you have questions about this Privacy Policy, please contact us at:</p>
          <ul className="list-none space-y-2">
            <li>
              <strong>Email:</strong> info@stacksaga.org
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
        </article>
      </div>
    </div>
  )
}
