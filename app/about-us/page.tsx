import Link from 'next/link';

export const metadata = { title: 'About Us | Scrubskwad' };

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover brightness-75" alt="Scrubskwad team"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-20">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Our Story</span>
          <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface" style={{ fontFamily: 'EB Garamond, serif' }}>About Scrubskwad</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-8" style={{ fontFamily: 'EB Garamond, serif' }}>Born from a Belief That Cleanliness Is an Art Form</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Scrubskwad was founded in London with a singular conviction: that the UK's most discerning homeowners deserved a cleaning service that matched their standards — not a compromise.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              We began in Kensington and Chelsea, serving a small clientele of estate managers and private households who demanded absolute discretion and uncompromising quality. Word spread, as it does in those circles, and today we serve some of London's most prestigious addresses across Westminster, Mayfair, Notting Hill, and beyond.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every member of the Scrubskwad team is personally vetted, rigorously trained in our proprietary methodology, and bound by strict confidentiality protocols. We don't just clean homes — we preserve sanctuaries.
            </p>
          </div>
          <div className="image-frame">
            <img className="w-full h-[500px] object-cover" alt="Scrubskwad founders"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-low py-[120px] border-y border-[#c8c4be]/20">
        <div className="px-6 md:px-20 max-w-[1200px] mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-center mb-16" style={{ fontFamily: 'EB Garamond, serif' }}>Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'visibility_off', title: 'Discretion', desc: 'Our clients trust us implicitly. We operate with complete confidentiality at all times.' },
              { icon: 'workspace_premium', title: 'Excellence', desc: 'We hold ourselves to the highest standard. Good enough is never good enough.' },
              { icon: 'eco', title: 'Sustainability', desc: 'We use eco-conscious, non-toxic products that protect both your home and our planet.' },
              { icon: 'handshake', title: 'Integrity', desc: 'Transparent pricing, honest communication, and accountability in everything we do.' },
            ].map(v => (
              <div key={v.icon} className="text-center">
                <div className="w-16 h-16 bg-white border border-[#c8c4be]/50 mx-auto flex items-center justify-center mb-6 rotate-45">
                  <span className="material-symbols-outlined text-primary text-3xl -rotate-45">{v.icon}</span>
                </div>
                <h4 className="font-headline-md text-headline-md mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>{v.title}</h4>
                <p className="font-body-md text-body-md text-on-secondary-container">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[120px] px-6 md:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '5,000+', label: 'Homes Served' },
            { stat: '98%', label: 'Client Retention' },
            { stat: '250+', label: 'Trained Specialists' },
            { stat: '12+', label: 'Years of Excellence' },
          ].map(s => (
            <div key={s.stat}>
              <p className="text-5xl md:text-6xl text-primary mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>{s.stat}</p>
              <p className="font-label-md text-label-md text-secondary tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-t border-primary/10 py-20">
        <div className="text-center px-6">
          <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Join Our Circle of Clients</h2>
          <Link href="/request-a-quote" className="bg-primary text-on-primary px-12 py-5 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all inline-block">BOOK YOUR FIRST CLEAN</Link>
        </div>
      </section>
    </>
  );
}
