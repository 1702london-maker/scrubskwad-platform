import Link from 'next/link';

export const metadata = { title: 'How It Works | Scrubskwad' };

export default function HowItWorks() {
  const steps = [
    { num: '01', icon: 'edit_note', title: 'Request a Quote', desc: 'Fill in our brief consultation form with your property details, preferred services, and schedule. We respond within 2 hours.' },
    { num: '02', icon: 'support_agent', title: 'Concierge Consultation', desc: 'A dedicated Scrubskwad concierge contacts you to refine your requirements, answer questions, and create a bespoke cleaning plan.' },
    { num: '03', icon: 'verified_user', title: 'Meet Your Team', desc: 'We assign a dedicated, vetted team to your residence. If you prefer, we arrange a complimentary pre-clean walkthrough.' },
    { num: '04', icon: 'cleaning_services', title: 'The Scrubskwad Clean', desc: 'Our specialists arrive precisely on time, equipped with professional-grade, eco-conscious products. They work with meticulous care and discretion.' },
    { num: '05', icon: 'star', title: 'Quality Assurance', desc: 'We conduct a thorough quality check upon completion. You receive a digital report with photos. If anything falls short, we return within 24 hours.' },
    { num: '06', icon: 'autorenew', title: 'Ongoing Excellence', desc: 'For regular clients, your dedicated team builds a deep knowledge of your home. Adjustments can be made at any time through your account.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-20 max-w-[1200px] mx-auto text-center">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">The Process</span>
        <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>How It Works</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">From first contact to an immaculate home — a seamless, six-step journey designed around you.</p>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step.num} className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${i % 2 === 0 ? '' : ''}`}>
              <div className={`relative p-16 ${i % 2 === 0 ? 'bg-surface-container-low' : 'bg-white'} border border-[#c8c4be]/20 flex flex-col justify-center order-1 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="flex items-start gap-6">
                  <span className="text-8xl font-light text-primary/15 leading-none select-none" style={{ fontFamily: 'EB Garamond, serif' }}>{step.num}</span>
                  <div>
                    <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{step.icon}</span>
                    <h3 className="font-headline-md text-headline-md mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>{step.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
                  </div>
                </div>
              </div>
              <div className={`h-[300px] md:h-auto order-2 ${i % 2 !== 0 ? 'md:order-1' : ''} overflow-hidden`}>
                <img className="w-full h-full object-cover"
                  src={i % 2 === 0
                    ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0"
                    : "https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg"}
                  alt={step.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] px-6 md:px-20 bg-surface-container border-t border-[#c8c4be]/20">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Ready to Begin?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">Start your Scrubskwad journey with a complimentary consultation. No commitment required.</p>
          <Link href="/request-a-quote" className="bg-primary text-on-primary px-16 py-6 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all inline-block">REQUEST A QUOTE</Link>
        </div>
      </section>
    </>
  );
}
