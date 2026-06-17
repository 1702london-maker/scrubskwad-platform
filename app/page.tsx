'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.stagger-in').forEach(el => observer.observe(el));
    const handleScroll = () => {
      const heroImg = document.querySelector<HTMLImageElement>('#hero-img');
      if (heroImg) heroImg.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img id="hero-img" className="w-full h-full object-cover brightness-[0.97]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0"
            alt="Luxury living room" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full">
          <div className="max-w-2xl stagger-in">
            <span className="font-label-md text-label-md text-primary tracking-[0.2em] uppercase mb-6 block">Refined Precision for Modern Living</span>
            <h1 className="font-display-lg text-display-lg md:text-[72px] text-on-surface mb-8 leading-tight" style={{ fontFamily: 'EB Garamond, serif' }}>
              Exquisite Cleanliness, <br />Tailored to Your Estate.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
              The UK's premier cleaning concierge for discerning homeowners. We bring the serenity of a luxury spa to your private residence with meticulous attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-quote" className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md tracking-wider hover:bg-primary/90 transition-all shadow-xl shadow-primary/10 text-center">
                BOOK YOUR CLEAN
              </Link>
              <Link href="/services/deep-cleaning" className="border border-outline/30 px-10 py-5 font-label-md text-label-md tracking-wider text-secondary hover:bg-surface-container transition-all text-center">
                VIEW SERVICES
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <span className="material-symbols-outlined text-tertiary">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Our Bespoke Services</h2>
          <div className="w-20 h-px bg-primary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Regular Home Cleaning - large */}
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low border border-[#c8c4be]/30 h-[400px]">
            <div className="absolute inset-0 z-0">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHYJVv_6XpshEpcZ8cueQ1ah5g-17bnl9uI--iC6WXSs-9h4OEC_AIntYv6ihrkvRvPykWDXamNJPchY1LCYIM9qkthA-hOfuAtvU9qML8BOB9ZmOjTtV-SYOWfyHu-zQaBXpSsW15mEHuQETO9FYqd_TVUX1x20hQfbfjnb2ntdTQri8ymonWPCQz8EchtxEvvbKp7-FIaXLrO2G03lZokwz56aJAuS8DpqIStwLomW7mV-lUyJL5cxQdpVnvA2gmrmWMMYCXlp4"
                alt="Regular Home Cleaning" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent p-10 flex flex-col justify-end">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>Regular Home Cleaning</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-6">Consistent, high-level maintenance to ensure your sanctuary remains pristine day after day.</p>
              <Link href="/services/regular-home-cleaning" className="font-label-md text-label-md text-primary flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Deep Cleaning */}
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low border border-[#c8c4be]/30 h-[400px]">
            <div className="p-10 flex flex-col h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-primary mb-6 text-4xl">sanitizer</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>Deep Cleaning</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">A comprehensive architectural revival of your home's surfaces and spaces.</p>
              </div>
              <Link href="/services/deep-cleaning" className="font-label-md text-label-md text-primary flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* End of Tenancy */}
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low border border-[#c8c4be]/30 h-[400px]">
            <div className="p-10 flex flex-col h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-primary mb-6 text-4xl">key</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>End of Tenancy</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Guaranteed deposit return service for the UK's most exclusive rentals.</p>
              </div>
              <Link href="/services/end-of-tenancy-cleaning" className="font-label-md text-label-md text-primary flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Carpet & Upholstery - large */}
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low border border-[#c8c4be]/30 h-[400px]">
            <div className="absolute inset-0 z-0">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg"
                alt="Carpet & Upholstery" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent p-10 flex flex-col justify-end">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>Carpet & Upholstery</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-6">Specialized restoration for delicate fibers and heirloom furniture.</p>
              <Link href="/services/carpet-upholstery-cleaning" className="font-label-md text-label-md text-primary flex items-center gap-2 group/link">
                Learn More <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Office & Commercial */}
          <div className="md:col-span-12 group relative overflow-hidden bg-surface-container-low border border-[#c8c4be]/30 h-[280px]">
            <div className="p-10 flex flex-col md:flex-row h-full items-center justify-between gap-8">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-4xl mt-1">business</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>Office & Commercial Cleaning</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Bespoke commercial maintenance programs for London's most prestigious offices, showrooms, and estates.</p>
                </div>
              </div>
              <Link href="/services/office-commercial-cleaning" className="font-label-md text-label-md text-primary flex items-center gap-2 group/link shrink-0">
                Learn More <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="bg-surface-container-low py-[120px] border-y border-[#c8c4be]/20">
        <div className="px-6 md:px-20 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: 'verified_user', title: 'Vetted & Insured', desc: 'Only the top 1% of candidates pass our rigorous selection process and background checks.' },
              { icon: 'workspace_premium', title: 'The Standard', desc: 'A 100% satisfaction guarantee. If it\'s not perfect, we return within 24 hours.' },
              { icon: 'payments', title: 'Transparent Pricing', desc: 'No hidden fees or complex contracts. Bespoke quotes tailored to your specific needs.' },
            ].map(item => (
              <div key={item.icon} className="text-center">
                <div className="w-16 h-16 bg-white border border-[#c8c4be]/50 mx-auto flex items-center justify-center mb-8 rotate-45">
                  <span className="material-symbols-outlined text-primary text-3xl -rotate-45">{item.icon}</span>
                </div>
                <h4 className="font-headline-md text-headline-md mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>{item.title}</h4>
                <p className="font-body-md text-body-md text-on-secondary-container">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[120px] px-6 md:px-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-16" style={{ fontFamily: 'EB Garamond, serif' }}>What Our Clients Say</h2>
          <div className="relative">
            <span className="font-display-lg text-[120px] text-primary/10 absolute -top-16 -left-10 leading-none" style={{ fontFamily: 'EB Garamond, serif' }}>"</span>
            <div className="relative z-10">
              <p className="font-headline-md text-headline-md italic text-on-surface mb-10 leading-relaxed" style={{ fontFamily: 'EB Garamond, serif' }}>
                "The level of attention Scrubskwad brings to our Kensington property is unparalleled. It's not just about cleaning; it's about the preservation of our home's character. They are truly the silent partners of our household."
              </p>
              <div>
                <p className="font-label-md text-label-md text-primary tracking-widest uppercase">Eleanor V. — Estate Manager</p>
                <p className="text-secondary text-sm mt-1">Kensington, London</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-12">
            <button className="w-10 h-10 border border-[#c8c4be] flex items-center justify-center hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-secondary">chevron_left</span>
            </button>
            <button className="w-10 h-10 border border-[#c8c4be] flex items-center justify-center hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-secondary">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-[120px] px-6 md:px-20 bg-surface-container overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #6a5d41 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h2 className="font-headline-lg text-headline-lg md:text-5xl text-on-surface mb-8" style={{ fontFamily: 'EB Garamond, serif' }}>Experience the Difference</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
            Elevate your living standards today. Join our exclusive circle of clients who refuse to compromise on cleanliness.
          </p>
          <Link href="/request-a-quote" className="bg-primary text-on-primary px-16 py-6 font-label-md text-label-md tracking-[0.2em] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 inline-block">
            BOOK NOW
          </Link>
        </div>
      </section>
    </>
  );
}
