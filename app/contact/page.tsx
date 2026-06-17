'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-20 max-w-[1200px] mx-auto">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Get in Touch</span>
        <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Contact Us</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Our concierge team is available to assist you. We aim to respond to all enquiries within two hours during business hours.</p>
      </section>

      <section className="py-20 px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Contact Details */}
          <div className="space-y-10">
            <div>
              <h3 className="font-headline-md text-headline-md mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Our Office</h3>
              <div className="space-y-4">
                <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                  The Atrium, Belgravia Square<br />Westminster, London SW1X 7PJ
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">call</span>
                  +44 (0) 20 7946 0123
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  concierge@scrubskwad.co.uk
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Hours</h3>
              <div className="space-y-2">
                {[
                  ['Monday – Friday', '8:00 – 20:00'],
                  ['Saturday', '9:00 – 18:00'],
                  ['Sunday', 'Emergency only'],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between font-body-md text-body-md">
                    <span className="text-secondary">{day}</span>
                    <span className="text-on-surface">{time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Areas Served</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Westminster · Kensington & Chelsea · Mayfair · Belgravia · Notting Hill · Hampstead · Richmond · Surrey & Home Counties
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {sent ? (
              <div className="bg-surface-container-low border border-[#c8c4be]/30 p-16 text-center">
                <span className="material-symbols-outlined text-primary text-6xl mb-6 block">mark_email_read</span>
                <h3 className="font-headline-md text-headline-md mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Message Received</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Thank you for your enquiry. A member of our concierge team will be in touch within two hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-md text-label-md text-secondary block mb-2">Full Name</label>
                    <input required className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-secondary block mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.co.uk" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-md text-label-md text-secondary block mb-2">Phone Number</label>
                    <input className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+44 ..." />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-secondary block mb-2">Subject</label>
                    <input required className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                      value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
                  </div>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-secondary block mb-2">Message</label>
                  <textarea required rows={6} className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors resize-none"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Please describe your requirements..." />
                </div>
                <button type="submit" className="w-full bg-primary text-on-primary py-5 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all">
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
