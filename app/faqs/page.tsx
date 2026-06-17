'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  { q: 'What areas do you serve?', a: 'We primarily serve London and the Home Counties, including Westminster, Kensington & Chelsea, Mayfair, Belgravia, Notting Hill, Hampstead, Richmond, and Surrey. Contact us to discuss coverage for your specific area.' },
  { q: 'Are your cleaners vetted and insured?', a: 'Yes. Every member of our team undergoes a rigorous vetting process including DBS (Disclosure and Barring Service) checks, reference verification, and our own internal assessment. All team members are fully insured for public liability.' },
  { q: 'Do I need to provide cleaning products?', a: 'No. We bring all professional-grade, eco-conscious cleaning products and equipment. If you have specific product preferences or requirements (e.g., fragrance-free, specific brands), please let us know and we will accommodate where possible.' },
  { q: 'How are your prices determined?', a: 'Our pricing is based on the size of your property, the service type, and the frequency of cleaning. We provide transparent, fixed quotes with no hidden fees. Request a quote to receive a bespoke price for your property.' },
  { q: 'Can I have the same team every visit?', a: 'Absolutely — for our regular home cleaning clients, we assign a dedicated team. This ensures they become familiar with your home, your preferences, and your routines. We believe consistency is key to true excellence.' },
  { q: 'What is your cancellation policy?', a: 'We ask for at least 48 hours\' notice for cancellations or rescheduling. Cancellations within 24 hours may incur a charge of 50% of the service fee. We understand that life is unpredictable and handle exceptional circumstances with discretion.' },
  { q: 'Do you offer a satisfaction guarantee?', a: 'Yes. If you are not completely satisfied with our work, contact us within 24 hours and we will return to rectify any issues at no additional cost. This is central to the Scrubskwad standard.' },
  { q: 'How do I book a clean?', a: 'You can book through our Request a Quote page, by phone, or by email. A concierge will contact you within two hours to confirm details and schedule your first clean.' },
  { q: 'Are you available at weekends?', a: 'Yes. We offer weekend cleans, though availability varies. Weekend cleans may be subject to a small premium. Please specify your preferred schedule when requesting a quote.' },
  { q: 'Do you offer gift vouchers?', a: 'We do offer gift vouchers for our cleaning services — a truly thoughtful present for someone who values their home environment. Please contact our concierge team to arrange.' },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="pt-40 pb-20 px-6 md:px-20 max-w-[1200px] mx-auto text-center">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Support</span>
        <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Frequently Asked Questions</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">Everything you need to know about the Scrubskwad experience.</p>
      </section>

      <section className="py-20 px-6 md:px-20 max-w-[800px] mx-auto">
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#c8c4be]/30">
              <button
                className="w-full flex justify-between items-center py-6 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-headline-md text-[18px] text-on-surface" style={{ fontFamily: 'EB Garamond, serif' }}>{faq.q}</span>
                <span className="font-label-md text-[16px] text-primary">{open === i ? '-' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="font-body-md text-body-md text-on-surface-variant">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-surface-container-low border-t border-[#c8c4be]/20">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Still have questions?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Our concierge team is here to help. Reach out anytime.</p>
          <Link href="/contact" className="bg-primary text-on-primary px-12 py-5 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all inline-block">CONTACT US</Link>
        </div>
      </section>
    </>
  );
}
