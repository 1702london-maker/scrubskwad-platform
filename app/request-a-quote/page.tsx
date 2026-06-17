'use client';

import { useState } from 'react';

export default function RequestAQuote() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', postcode: '',
    service: '', bedrooms: '', frequency: '', date: '', notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <span className="material-symbols-outlined text-primary text-7xl mb-8 block">check_circle</span>
          <h1 className="font-headline-lg text-headline-lg mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Quote Requested</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-2">Thank you, {form.name.split(' ')[0]}.</p>
          <p className="font-body-md text-body-md text-on-surface-variant">A member of our concierge team will contact you at {form.email} within two hours with your bespoke quote.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-20 max-w-[1200px] mx-auto">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Begin Here</span>
        <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Request a Quote</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Tell us about your home and requirements. We will prepare a bespoke quote and contact you within two hours.</p>
      </section>

      <section className="py-12 px-6 md:px-20 max-w-[900px] mx-auto pb-24">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal */}
          <div className="border border-[#c8c4be]/30 p-8 bg-white">
            <h3 className="font-headline-md text-headline-md mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Your Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-label-md text-label-md text-secondary block mb-2">Full Name *</label>
                <input required className="w-full bg-surface-container-low border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
              </div>
              <div>
                <label className="font-label-md text-label-md text-secondary block mb-2">Email Address *</label>
                <input required type="email" className="w-full bg-surface-container-low border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.co.uk" />
              </div>
              <div>
                <label className="font-label-md text-label-md text-secondary block mb-2">Phone Number</label>
                <input className="w-full bg-surface-container-low border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+44 ..." />
              </div>
              <div>
                <label className="font-label-md text-label-md text-secondary block mb-2">Postcode *</label>
                <input required className="w-full bg-surface-container-low border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                  value={form.postcode} onChange={e => setForm({ ...form, postcode: e.target.value })} placeholder="SW1X 7PJ" />
              </div>
            </div>
          </div>

          {/* Service */}
          <div className="border border-[#c8c4be]/30 p-8 bg-white">
            <h3 className="font-headline-md text-headline-md mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Service Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-label-md text-label-md text-secondary block mb-2">Service Type *</label>
                <select required className="w-full bg-surface-container-low border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                  value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select a service</option>
                  <option>Regular Home Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>End of Tenancy Cleaning</option>
                  <option>Office & Commercial Cleaning</option>
                  <option>Carpet & Upholstery Cleaning</option>
                </select>
              </div>
              <div>
                <label className="font-label-md text-label-md text-secondary block mb-2">Number of Bedrooms *</label>
                <select required className="w-full bg-surface-container-low border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                  value={form.bedrooms} onChange={e => setForm({ ...form, bedrooms: e.target.value })}>
                  <option value="">Select</option>
                  <option>Studio</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4 Bedrooms</option>
                  <option>5+ Bedrooms</option>
                </select>
              </div>
              <div>
                <label className="font-label-md text-label-md text-secondary block mb-2">Frequency</label>
                <select className="w-full bg-surface-container-low border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                  value={form.frequency} onChange={e => setForm({ ...form, frequency: e.target.value })}>
                  <option value="">Select</option>
                  <option>One-off</option>
                  <option>Weekly</option>
                  <option>Fortnightly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div>
                <label className="font-label-md text-label-md text-secondary block mb-2">Preferred Date</label>
                <input type="date" className="w-full bg-surface-container-low border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                  value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="border border-[#c8c4be]/30 p-8 bg-white">
            <h3 className="font-headline-md text-headline-md mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Additional Notes</h3>
            <textarea rows={5} className="w-full bg-surface-container-low border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors resize-none"
              value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}
              placeholder="Any specific requirements, access instructions, or questions..." />
          </div>

          <button type="submit" className="w-full bg-primary text-on-primary py-6 font-label-md text-label-md tracking-[0.2em] hover:bg-primary/90 transition-all text-lg">
            SUBMIT QUOTE REQUEST
          </button>
        </form>
      </section>
    </>
  );
}
