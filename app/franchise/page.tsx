import Link from 'next/link';

export const metadata = { title: 'Franchise | Scrubskwad' };

export default function Franchise() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover brightness-75" alt="Franchise opportunity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-20">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Business Opportunity</span>
          <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Own a Scrubskwad Franchise</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Join the UK's most prestigious cleaning franchise and build a business in the luxury service sector.</p>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>The Scrubskwad Franchise Model</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              We are selectively expanding the Scrubskwad brand across the United Kingdom. We do not seek volume — we seek exceptional operators who share our commitment to excellence and understand the luxury service market.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              As a Scrubskwad franchisee, you receive full rights to operate under our brand, access to our operational systems, marketing support, supplier relationships, and the ongoing guidance of our founding team.
            </p>
            <Link href="/contact" className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md tracking-wider hover:bg-primary/90 transition-all inline-block">
              REQUEST PROSPECTUS
            </Link>
          </div>
          <div className="space-y-6">
            {[
              { icon: 'trending_up', title: 'Proven Revenue Model', desc: 'Our franchise locations average £250k+ revenue in Year 1, with growth trajectory built on recurring contracts.' },
              { icon: 'school', title: 'Comprehensive Training', desc: 'A full 8-week induction programme covering operations, sales, team management, and client relations.' },
              { icon: 'support_agent', title: 'Ongoing Support', desc: 'Dedicated franchise support team, monthly performance reviews, and a national marketing fund.' },
              { icon: 'map', title: 'Exclusive Territory', desc: 'Protected territories ensuring no internal competition within agreed geographic boundaries.' },
            ].map(item => (
              <div key={item.icon} className="flex gap-6 p-6 bg-surface-container-low border border-[#c8c4be]/30">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-headline-md text-[20px] mb-1" style={{ fontFamily: 'EB Garamond, serif' }}>{item.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-surface-container-low py-[120px] border-y border-[#c8c4be]/20">
        <div className="px-6 md:px-20 max-w-[1200px] mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-center mb-16" style={{ fontFamily: 'EB Garamond, serif' }}>Investment Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Franchise Fee', value: '£25,000', desc: 'One-time licence fee for your exclusive territory and brand rights.' },
              { label: 'Total Investment', value: '£45,000–£70,000', desc: 'Including equipment, vehicle, working capital, and initial marketing.' },
              { label: 'Royalty', value: '8% of revenue', desc: 'Monthly royalty fee for ongoing brand support and national marketing.' },
            ].map(item => (
              <div key={item.label} className="bg-white p-10 border border-[#c8c4be]/30">
                <p className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4">{item.label}</p>
                <p className="text-4xl text-on-surface mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>{item.value}</p>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center font-body-md text-body-md text-secondary mt-12">Finance packages available through approved lenders. We also work with major UK banks on franchise lending.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] px-6 md:px-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Is This the Right Opportunity for You?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">We are looking for driven individuals with customer service experience and a passion for excellence. Previous cleaning experience is not required.</p>
          <Link href="/contact" className="bg-primary text-on-primary px-16 py-6 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all inline-block">ENQUIRE NOW</Link>
        </div>
      </section>
    </>
  );
}
