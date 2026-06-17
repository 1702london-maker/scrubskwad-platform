export const metadata = { title: 'Terms & Conditions | Scrubskwad' };

export default function TermsAndConditions() {
  return (
    <div className="pt-40 pb-24 px-6 md:px-20 max-w-[900px] mx-auto">
      <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Legal</span>
      <h1 className="font-display-lg text-display-lg md:text-5xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Terms & Conditions</h1>
      <p className="font-body-md text-body-md text-secondary mb-16">Last updated: January 2025</p>

      <div className="space-y-12 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {[
          { title: '1. Acceptance of Terms', body: 'By engaging the services of Scrubskwad Luxury Cleaning Ltd ("Scrubskwad", "we", "us"), whether via our website, telephone, or email, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.' },
          { title: '2. Services', body: 'Scrubskwad provides domestic and commercial cleaning services as described on our website. All services are subject to availability and our ability to fulfil your requirements. We reserve the right to decline any booking at our discretion. Service specifications may vary and will be confirmed in writing prior to your first appointment.' },
          { title: '3. Booking and Confirmation', body: 'A booking is confirmed only upon receipt of our written confirmation. Quotations are provided in good faith based on information supplied by the client. If the actual work required materially differs from the quotation, we reserve the right to revise the price. All prices are quoted in GBP and are inclusive of VAT.' },
          { title: '4. Payment Terms', body: 'Payment is due in full at the time of service unless otherwise agreed in writing. For regular contracted clients, invoices are issued monthly and payable within 14 days. We accept payment by bank transfer, credit card, and debit card. Late payments may incur interest at 8% above the Bank of England base rate.' },
          { title: '5. Cancellation Policy', body: 'Cancellations must be made at least 48 hours prior to the scheduled service. Cancellations made between 24–48 hours prior may incur a charge of 25% of the service fee. Cancellations within 24 hours will incur a charge of 50% of the service fee. No-shows will be charged in full. We reserve the right to cancel appointments due to unforeseen circumstances; in such cases, we will endeavour to reschedule at the earliest convenience.' },
          { title: '6. Access to Property', body: 'The client is responsible for providing safe and timely access to the property. If our team cannot gain access at the agreed time through no fault of our own, a cancellation charge may apply. The client warrants that they have the authority to permit us to access the property.' },
          { title: '7. Liability', body: 'Scrubskwad holds full public liability insurance. We will exercise reasonable care when attending your property. We are not liable for pre-existing damage, inherent defects, or items of exceptional value not disclosed prior to the service. Our maximum liability for any single claim shall not exceed the value of the services provided in the preceding month. We are not liable for indirect or consequential losses.' },
          { title: '8. Satisfaction Guarantee', body: 'If you are not satisfied with the standard of cleaning, you must notify us within 24 hours of the service. We will arrange a complimentary return visit to address the specific concerns raised. This guarantee does not apply to issues resulting from client-directed work or pre-existing conditions.' },
          { title: '9. Confidentiality', body: 'We treat all information about your property and household with absolute confidentiality. Our team members sign strict confidentiality agreements. We will not disclose any client information to third parties except where required by law.' },
          { title: '10. Governing Law', body: 'These Terms & Conditions shall be governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales. If you wish to raise a complaint, please contact us at legal@scrubskwad.co.uk in the first instance.' },
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
