export const metadata = { title: 'Privacy Policy | Scrubskwad' };

export default function PrivacyPolicy() {
  return (
    <div className="pt-40 pb-24 px-6 md:px-20 max-w-[900px] mx-auto">
      <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Legal</span>
      <h1 className="font-display-lg text-display-lg md:text-5xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Privacy Policy</h1>
      <p className="font-body-md text-body-md text-secondary mb-16">Last updated: January 2025</p>

      <div className="space-y-12 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {[
          { title: '1. Introduction', body: 'Scrubskwad Luxury Cleaning Ltd ("Scrubskwad", "we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website at scrubskwad.co.uk. Please read this policy carefully. By using our services, you consent to the practices described herein.' },
          { title: '2. Information We Collect', body: 'We may collect personal information including: your name, email address, telephone number, and home address when you register or request a quote; payment information processed securely via our payment provider; information about your property and cleaning requirements; and communication records between you and our team. We also collect technical data such as IP address, browser type, and pages visited.' },
          { title: '3. How We Use Your Information', body: 'We use your personal information to provide and manage our cleaning services; process bookings and payments; send you service confirmations and updates; respond to your enquiries; improve our services and website; send marketing communications where you have consented; and comply with our legal obligations.' },
          { title: '4. Legal Basis for Processing', body: 'We process your personal data on the following legal bases: performance of a contract (to provide our services); legitimate interests (to improve our business and services); compliance with legal obligations; and with your consent where applicable.' },
          { title: '5. Data Sharing', body: 'We do not sell your personal data. We may share information with: our cleaning teams (solely for service delivery); payment processors; IT service providers; and regulatory authorities where required by law. All third parties are bound by appropriate data protection obligations.' },
          { title: '6. Data Retention', body: 'We retain your personal data for as long as necessary to provide our services and comply with legal obligations. Client data is typically retained for 7 years following the conclusion of our relationship in accordance with UK financial regulations.' },
          { title: '7. Your Rights', body: 'Under UK GDPR, you have the right to: access your personal data; rectify inaccurate data; request erasure; restrict or object to processing; data portability; and withdraw consent at any time. To exercise these rights, contact us at privacy@scrubskwad.co.uk.' },
          { title: '8. Cookies', body: 'Our website uses essential and analytical cookies to improve your experience. You may control cookie settings through your browser. A detailed Cookie Policy is available on our website.' },
          { title: '9. Security', body: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.' },
          { title: '10. Contact Us', body: 'For any privacy-related enquiries or to exercise your rights, contact our Data Protection Officer at: privacy@scrubskwad.co.uk or The Atrium, Belgravia Square, Westminster, London SW1X 7PJ. You also have the right to lodge a complaint with the Information Commissioner\'s Office (ICO) at ico.org.uk.' },
        ].map(section => (
          <section key={section.title}>
            <h2 className="font-headline-md text-[22px] text-on-surface mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
