import { FullLogo } from '@/components/common/logo/full-logo'

const PrivacyPolicy = () => {
  return (
    <div className="px-4 py-6 max-w-3xl mx-auto">
      <FullLogo variant="icon" className="w-64 h-64 mx-auto mb-6" />
      <h1 className="text-2xl font-bold mb-2">Adventure Keeper Privacy Policy</h1>
      <h2 className="text-sm text-muted-foreground font-semibold mb-6">Last updated: October 30, 2024</h2>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-base">
          At <em>Adventure Keeper</em> or <em>"our"</em>), we are committed to respecting your privacy and protecting your personal data. This Privacy Policy outlines how we
          collect, use, and safeguard your information in compliance with the Brazilian General Data Protection Law (Lei Geral de Proteção de Dados - LGPD).
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. Data Collection</h2>
        <div className="pl-4 border-l-4 border-gray-300">
          <h3 className="text-lg font-medium mt-4 mb-1">2.1 Authentication Data</h3>
          <p className="text-base">
            We collect only the minimal, non-sensitive personal data necessary for authentication purposes. This data is obtained from identity providers through non-sensitive
            scopes and may include:
          </p>
          <ul className="list-disc list-inside text-base">
            <li>
              <strong>Basic Profile Information:</strong> Such as your username and email address.
            </li>
          </ul>
          <p className="text-base">We do not collect sensitive personal data or any additional information beyond what is required for authentication.</p>

          <h3 className="text-lg font-medium mt-4 mb-1">2.2 User-Generated Content</h3>
          <p className="text-base">
            All content you create within the app—including adventures, character sheets, spells, and messages (<em>"User Content"</em>)—remains your property.
          </p>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. Use of Collected Data</h2>
        <div className="pl-4 border-l-4 border-gray-300">
          <h3 className="text-lg font-medium mt-4 mb-1">3.1 Authentication and Access</h3>
          <p className="text-base">The authentication data we collect is used solely to:</p>
          <ul className="list-disc list-inside text-base">
            <li>Verify your identity when you log in.</li>
            <li>Provide you with access to your account and User Content.</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-1">3.2 No Additional Processing</h3>
          <p className="text-base">
            We do not use your personal data for any other purposes, such as analytics or sharing with third parties. Your data may be used in marketing communications only if you
            explicitly opt in.
          </p>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">4. Data Subject Rights</h2>
        <p className="text-base">Under the LGPD, you have the following rights concerning your personal data and User Content:</p>
        <div className="pl-4 border-l-4 border-gray-300">
          <h3 className="text-lg font-medium mt-4 mb-1">4.1 Access and Correction</h3>
          <ul className="list-disc list-inside text-base">
            <li>
              <strong>Access:</strong> You may request access to the personal data we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You have the right to request the correction of inaccurate or outdated personal data.
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-1">4.2 Deletion and Removal</h3>
          <ul className="list-disc list-inside text-base">
            <li>
              <strong>Deletion of Personal Data:</strong> You may request that we delete your personal data from our systems.
            </li>
            <li>
              <strong>Removal of User Content:</strong> You are entitled to request the removal of your User Content from the app.
            </li>
          </ul>
          <p className="text-base">
            To exercise any of these rights, please contact us at <strong>[Contact Email]</strong>.
          </p>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p className="text-base">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These
          measures include:
        </p>
        <ul className="list-disc list-inside text-base">
          <li>Secure servers and encrypted connections.</li>
          <li>Regular security assessments and updates.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">6. Data Sharing and Disclosure</h2>
        <p className="text-base">We do not share, sell, or disclose your personal data to third parties, except as required by law or legal process.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">7. Retention of Data</h2>
        <p className="text-base">
          We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or
          permitted by law.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
        <p className="text-base">
          We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting the revised policy within the app. We encourage you to review
          this Privacy Policy periodically.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
        <p className="text-base">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
        <p className="text-base">
          Email: <strong>[Contact Email]</strong>
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
