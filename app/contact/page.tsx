'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="px-6 pb-14 pt-32 md:px-20 md:pt-36">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h1 className="font-display-lg text-[36px] leading-tight text-on-surface md:text-[50px]">
            Tell us what the property needs.
          </h1>
          <p className="max-w-[620px] font-body-md text-[15px] leading-7 text-on-surface-variant">
            Share the rooms, timing, service type, and any access notes. The Scrubskwad team will respond with a clear next step.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="border-y border-tertiary-fixed py-8">
            <h2 className="font-headline-md text-[30px] leading-tight text-on-surface">Enquiry guide</h2>
            <div className="mt-8 space-y-6">
              {[
                ['Service', 'Home cleaning, deep cleaning, end of tenancy, office, or specialist fabric care.'],
                ['Property', 'Rooms, size, surfaces, pets, access, and anything delicate.'],
                ['Timing', 'Preferred date, frequency, and any arrival window that matters.'],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="font-label-md text-[11px] uppercase tracking-[0.2em] text-primary">{title}</p>
                  <p className="mt-2 font-body-md text-[14px] leading-6 text-secondary">{text}</p>
                </div>
              ))}
            </div>
          </aside>

          <div>
            {sent ? (
              <div className="bg-white p-10 text-center">
                <h2 className="font-headline-md text-[30px] text-on-surface">Message received</h2>
                <p className="mx-auto mt-4 max-w-[460px] font-body-md text-[14px] leading-7 text-secondary">
                  Thank you. The Scrubskwad team will review your enquiry and come back with the next step.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 bg-white p-6 md:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">Full name</span>
                    <input
                      required
                      className="w-full border border-tertiary-fixed bg-surface-container-low px-4 py-3 font-body-md text-[14px] outline-none transition focus:border-primary"
                      value={form.name}
                      onChange={event => setForm({ ...form, name: event.target.value })}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">Email</span>
                    <input
                      required
                      type="email"
                      className="w-full border border-tertiary-fixed bg-surface-container-low px-4 py-3 font-body-md text-[14px] outline-none transition focus:border-primary"
                      value={form.email}
                      onChange={event => setForm({ ...form, email: event.target.value })}
                    />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">Phone</span>
                    <input
                      className="w-full border border-tertiary-fixed bg-surface-container-low px-4 py-3 font-body-md text-[14px] outline-none transition focus:border-primary"
                      value={form.phone}
                      onChange={event => setForm({ ...form, phone: event.target.value })}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">Subject</span>
                    <input
                      required
                      className="w-full border border-tertiary-fixed bg-surface-container-low px-4 py-3 font-body-md text-[14px] outline-none transition focus:border-primary"
                      value={form.subject}
                      onChange={event => setForm({ ...form, subject: event.target.value })}
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">Message</span>
                  <textarea
                    required
                    rows={6}
                    className="w-full resize-none border border-tertiary-fixed bg-surface-container-low px-4 py-3 font-body-md text-[14px] outline-none transition focus:border-primary"
                    value={form.message}
                    onChange={event => setForm({ ...form, message: event.target.value })}
                  />
                </label>
                <button
                  type="submit"
                  className="bg-primary px-8 py-4 font-label-md text-[11px] uppercase tracking-[0.2em] text-on-primary transition hover:bg-primary/90"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
