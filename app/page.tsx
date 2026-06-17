'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const services = [
  { icon: 'home', title: 'Regular Home Cleaning', desc: 'Consistent, scheduled maintenance keeping your home in perfect order week after week.', href: '/services/regular-home-cleaning' },
  { icon: 'sanitizer', title: 'Deep Cleaning', desc: 'A thorough top-to-bottom clean covering every surface, corner, and hidden space.', href: '/services/deep-cleaning' },
  { icon: 'key', title: 'End of Tenancy Cleaning', desc: 'Deposit-return standard cleaning carried out to inventory-check specification.', href: '/services/end-of-tenancy-cleaning' },
  { icon: 'business', title: 'Office & Commercial', desc: 'Bespoke maintenance programmes for offices, showrooms, and commercial premises.', href: '/services/office-commercial-cleaning' },
  { icon: 'texture', title: 'Carpet & Upholstery', desc: 'Specialist restoration for carpets, rugs, sofas, and delicate fabric surfaces.', href: '/services/carpet-upholstery-cleaning' },
];

const shopItems = [
  { id: 1, name: 'Citrus Pro Degreaser 1L',           category: 'Chemicals',  price: '£24.99', badge: 'Best Seller' },
  { id: 2, name: 'Marble & Stone Polish 500ml',        category: 'Chemicals',  price: '£34.99', badge: '' },
  { id: 3, name: 'Professional Microfibre Set (12pk)', category: 'Tools',      price: '£42.00', badge: 'New' },
  { id: 4, name: 'Telescopic Window Wiper',            category: 'Tools',      price: '£58.00', badge: '' },
  { id: 5, name: 'Steam Mop Pro 2000W',                category: 'Machines',   price: '£189.00', badge: 'Best Seller' },
  { id: 6, name: 'Cordless HEPA Vacuum',               category: 'Machines',   price: '£345.00', badge: '' },
  { id: 7, name: 'Limescale Power Remover 500ml',      category: 'Chemicals',  price: '£22.00', badge: 'New' },
  { id: 8, name: 'Extendable Duster 100cm',            category: 'Tools',      price: '£35.00', badge: '' },
];

const shopImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDHYJVv_6XpshEpcZ8cueQ1ah5g-17bnl9uI--iC6WXSs-9h4OEC_AIntYv6ihrkvRvPykWDXamNJPchY1LCYIM9qkthA-hOfuAtvU9qML8BOB9ZmOjTtV-SYOWfyHu-zQaBXpSsW15mEHuQETO9FYqd_TVUX1x20hQfbfjnb2ntdTQri8ymonWPCQz8EchtxEvvbKp7-FIaXLrO2G03lZokwz56aJAuS8DpqIStwLomW7mV-lUyJL5cxQdpVnvA2gmrmWMMYCXlp4',
];

const testimonials = [
  { quote: 'The standard of cleaning has been consistently outstanding. Every visit exceeds expectations — the attention to detail is remarkable.', author: 'Private Homeowner', location: 'London' },
  { quote: 'Professional, punctual, and thorough. Our office has never looked better. The team are discreet and efficient — exactly what we needed.', author: 'Office Manager', location: 'Central London' },
  { quote: 'Booked an end of tenancy clean and received the full deposit back without question. Exceptional value and an exceptional service.', author: 'Residential Tenant', location: 'London' },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0"
            alt="Pristine luxury interior"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-20 py-24">
          <div className="max-w-[580px]">
            <span className="font-label-md text-label-md text-primary tracking-[0.22em] uppercase mb-6 block">
              London's Premium Cleaning Concierge
            </span>
            <h1
              className="text-[52px] md:text-[68px] leading-[1.08] text-on-surface mb-7 tracking-tight"
              style={{ fontFamily: 'EB Garamond, serif', fontWeight: 400 }}
            >
              Immaculate Homes.<br />Impeccable Standards.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-[480px] leading-relaxed">
              Professional cleaning services delivered with precision and discretion. Trusted by homeowners and businesses across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-a-quote"
                className="bg-primary text-on-primary px-10 py-4 font-label-md text-label-md tracking-[0.18em] uppercase hover:bg-primary/90 transition-all text-center shadow-lg shadow-primary/20"
              >
                Book Your Clean
              </Link>
              <a
                href="#services"
                className="border border-on-surface/20 px-10 py-4 font-label-md text-label-md tracking-[0.18em] uppercase text-secondary hover:bg-surface-container transition-all text-center"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-on-surface animate-pulse" />
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-24 md:py-32 bg-surface-container-low border-y border-tertiary-fixed">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="mb-16 fade-up stagger-in">
            <span className="font-label-md text-label-md text-primary tracking-[0.22em] uppercase mb-3 block">What We Do</span>
            <h2 className="text-[38px] md:text-[48px] text-on-surface" style={{ fontFamily: 'EB Garamond, serif', fontWeight: 400 }}>
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group bg-white border border-tertiary-fixed p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all fade-up stagger-in ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-11 h-11 bg-primary/8 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-[22px]">{s.icon}</span>
                </div>
                <h3
                  className="text-[22px] text-on-surface mb-3 group-hover:text-primary transition-colors"
                  style={{ fontFamily: 'EB Garamond, serif', fontWeight: 400 }}
                >
                  {s.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">{s.desc}</p>
                <span className="font-label-md text-label-md text-primary flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Learn More <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST PILLARS ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative fade-up stagger-in order-2 md:order-1">
              <div className="image-frame">
                <img
                  className="w-full h-[460px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg"
                  alt="Professional cleaning"
                />
              </div>
            </div>
            {/* Content */}
            <div className="order-1 md:order-2 fade-up stagger-in">
              <span className="font-label-md text-label-md text-primary tracking-[0.22em] uppercase mb-3 block">Why Choose Us</span>
              <h2 className="text-[38px] md:text-[46px] text-on-surface mb-10" style={{ fontFamily: 'EB Garamond, serif', fontWeight: 400 }}>
                The Standard You Deserve
              </h2>
              <div className="space-y-8">
                {[
                  { icon: 'verified_user', title: 'Vetted & Fully Insured', desc: 'Every specialist is background-checked, reference-verified, and covered by comprehensive public liability insurance.' },
                  { icon: 'workspace_premium', title: 'Satisfaction Guaranteed', desc: 'If the result does not meet your expectations, we return within 24 hours and make it right — at no charge.' },
                  { icon: 'receipt_long', title: 'Transparent Pricing', desc: 'Fixed, itemised quotes with no hidden charges. You know exactly what you are paying before we arrive.' },
                ].map(item => (
                  <div key={item.icon} className="flex gap-5">
                    <div className="w-10 h-10 bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-[20px]">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface tracking-wider uppercase mb-1.5">{item.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 mt-10 font-label-md text-label-md text-primary tracking-wider group"
              >
                See How It Works <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — 3-step strip ──────────────────────── */}
      <section className="py-20 bg-surface-container border-y border-tertiary-fixed">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-tertiary-fixed">
            {[
              { num: '01', icon: 'edit_note',         title: 'Request a Quote',  desc: 'Fill in your details online. We respond within two hours with a fixed, no-obligation quote.' },
              { num: '02', icon: 'cleaning_services', title: 'We Come to You',   desc: 'Your dedicated team arrives on time, fully equipped. We work around your schedule.' },
              { num: '03', icon: 'star',              title: 'Enjoy Your Home',  desc: 'A guaranteed result, every visit. If something is not right, we return within 24 hours.' },
            ].map(step => (
              <div key={step.num} className="flex gap-6 p-8 md:px-12">
                <span className="text-5xl text-primary/20 leading-none shrink-0 select-none" style={{ fontFamily: 'EB Garamond, serif' }}>{step.num}</span>
                <div>
                  <span className="material-symbols-outlined text-primary mb-3 block">{step.icon}</span>
                  <h4 className="text-[20px] text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>{step.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP SNAPSHOT ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex items-end justify-between mb-12 fade-up stagger-in">
            <div>
              <span className="font-label-md text-label-md text-primary tracking-[0.22em] uppercase mb-3 block">Our Store</span>
              <h2 className="text-[38px] md:text-[46px] text-on-surface" style={{ fontFamily: 'EB Garamond, serif', fontWeight: 400 }}>
                Professional Products
              </h2>
            </div>
            <Link href="/shop" className="font-label-md text-label-md text-primary flex items-center gap-1.5 hover:gap-3 transition-all shrink-0 ml-6 mb-2">
              View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {shopItems.map((item, i) => (
              <Link key={item.id} href="/shop" className="group bg-surface-container-low border border-tertiary-fixed hover:border-primary/30 hover:shadow-md transition-all">
                <div className="relative overflow-hidden h-40">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={shopImages[i % shopImages.length]}
                    alt={item.name}
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 bg-primary text-on-primary font-label-md text-[10px] px-2 py-0.5 tracking-widest uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-label-md text-[10px] text-secondary uppercase tracking-widest mb-1">{item.category}</p>
                  <h4 className="text-[14px] text-on-surface leading-snug mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>{item.name}</h4>
                  <p className="font-label-md text-label-md text-primary">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface-container-low border-y border-tertiary-fixed">
        <div className="max-w-[900px] mx-auto px-6 md:px-20 text-center">
          <span className="font-label-md text-label-md text-primary tracking-[0.22em] uppercase mb-3 block">Client Reviews</span>
          <h2 className="text-[38px] md:text-[46px] text-on-surface mb-16" style={{ fontFamily: 'EB Garamond, serif', fontWeight: 400 }}>
            What Our Clients Say
          </h2>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-10">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-primary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>

          {/* Testimonial */}
          <div className="relative min-h-[160px]">
            <span className="absolute -top-6 left-0 text-[100px] text-primary/10 leading-none select-none" style={{ fontFamily: 'EB Garamond, serif' }}>"</span>
            <p
              className="text-[22px] md:text-[26px] text-on-surface italic leading-relaxed relative z-10 mb-8"
              style={{ fontFamily: 'EB Garamond, serif', fontWeight: 400 }}
            >
              {testimonials[activeTestimonial].quote}
            </p>
            <p className="font-label-md text-label-md text-primary tracking-widest uppercase">
              {testimonials[activeTestimonial].author}
            </p>
            <p className="font-body-md text-body-md text-secondary mt-1">{testimonials[activeTestimonial].location}</p>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-primary w-6' : 'bg-tertiary-container'}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 text-center">
          <h2
            className="text-[38px] md:text-[54px] text-on-primary mb-6 leading-tight"
            style={{ fontFamily: 'EB Garamond, serif', fontWeight: 400 }}
          >
            Ready for a Cleaner Home?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-lg mx-auto mb-12">
            Get a fixed, no-obligation quote today. We respond within two hours.
          </p>
          <Link
            href="/request-a-quote"
            className="inline-block bg-white text-primary px-14 py-5 font-label-md text-label-md tracking-[0.2em] uppercase hover:bg-primary-container transition-all shadow-xl shadow-black/10"
          >
            Book Your Clean
          </Link>
        </div>
      </section>
    </>
  );
}
