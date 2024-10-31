import { FullLogo } from "@/components/common/logo/full-logo"

const TermsOfService = () => {
  return (
    <div className="px-4 py-6 max-w-3xl mx-auto">
      <FullLogo variant="icon" className="w-64 h-64 mx-auto mb-6" />
      <h1 className="text-2xl font-bold mb-2">Adventure Keeper Terms of Service</h1>
      <h2 className="text-sm text-muted-foreground font-semibold mb-6">Last updated: October 30, 2024</h2>
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="text-base">
          By accessing or using <strong>Adventure Keeper</strong> ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of
          these Terms, you must not use the App.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
        <div className="pl-4 border-l-4 border-gray-300">
          <h3 className="text-lg font-medium mt-4 mb-1">2.1 User-Generated Content</h3>
          <p className="text-base">
            You are solely responsible for all content you create, upload, or share within the App, including but not limited to adventures, character sheets, spells, and messages
            ("User Content"). We do not endorse or assume any liability for such content.
          </p>

          <h3 className="text-lg font-medium mt-4 mb-1">2.2 Prohibited Content</h3>
          <p className="text-base">
            You agree not to post or share any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, hateful, or otherwise objectionable.
            This includes, but is not limited to, hate speech, racism, discrimination, and any form of harassment.
          </p>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. Enforcement and Termination</h2>
        <div className="pl-4 border-l-4 border-gray-300">
          <h3 className="text-lg font-medium mt-4 mb-1">3.1 Monitoring</h3>
          <p className="text-base">
            While we are not obligated to monitor User Content, we reserve the right to review and remove any content that violates these Terms at our sole discretion.
          </p>

          <h3 className="text-lg font-medium mt-4 mb-1">3.2 Account Termination</h3>
          <p className="text-base">
            We reserve the right to suspend or terminate your account without notice if you violate these Terms. Users found engaging in prohibited conduct may be banned
            permanently from the platform.
          </p>

          <h3 className="text-lg font-medium mt-4 mb-1">3.3 Legal Action</h3>
          <p className="text-base">We may take appropriate legal action against users who violate these Terms, which may include reporting to law enforcement authorities.</p>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p className="text-base">
          Under no circumstances shall <strong>Platiplus.DEV</strong> be liable for any indirect, incidental, special, consequential, or exemplary damages resulting from your use
          of the App or from any User Content.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">5. Indemnification</h2>
        <p className="text-base">
          You agree to indemnify and hold harmless <strong>Platiplus.DEV</strong> from any claims, damages, losses, liabilities, and expenses arising out of your use of the App
          or violation of these Terms.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
          <p className="text-base">
            All rights, titles, and interests in and to the App are and will remain the exclusive property of <strong>Platiplus.DEV</strong>.
          </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">7. Disclaimers</h2>
        <p className="text-base">
          The App is provided "as is" without warranties of any kind. We do not guarantee that the App will be available at all times or that it will be free from errors or
          omissions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
        <p className="text-base">
          These Terms shall be governed by and construed in accordance with the laws of <strong>Brazil</strong>, without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
        <p className="text-base">
          We reserve the right to modify or replace these Terms at any time. Your continued use of the App after any such changes constitutes acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">10. Contact Information</h2>
        <p className="text-base">
          If you have any questions about these Terms, please contact us at <strong>hello@platiplus.dev</strong>.
        </p>
      </section>

      <p className="text-base mt-8">
        <strong>Acknowledgment:</strong> By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
      </p>
    </div>
  )
}

export default TermsOfService
