'use client';

import { useState } from 'react';

export default function JoinOurTeam() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', experience: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative h-[60vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover brightness-75" alt="Join Scrubskwad"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMiLL-nMzswzuRR_LmxrI39wHeneQfDrCUMP0micnc4mRyE7ngg3t44INwrsCSeieI-Dh-63xd4Kl8ti7U7vhClwXFByKjqqFV64R_MCuUzJ_75aeU1X0aEVF77w73ijD_I85YFlgh1hBC70iYc0aZR6weV6hP_U4PDnqfcW2efiTgq7ojLpvVQyydohVwdAxhyYguj1UeoBIYF-qPyFYR3RiwXlszsWNcMO8JRHVPl-kbBDhVeM-VFEcO4smycAL2PFVLAtWP8lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-20">
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Careers</span>
          <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Join Our Team</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">We are always looking for exceptional individuals who take pride in their craft.</p>
        </div>
      </section>

      <section className="py-[120px] px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-8" style={{ fontFamily: 'EB Garamond, serif' }}>Why Scrubskwad?</h2>
            <div className="space-y-6">
              {[
                { icon: 'payments', title: 'Competitive Pay', desc: 'Above-market hourly rates, plus performance bonuses and tips from grateful clients.' },
                { icon: 'schedule', title: 'Flexible Hours', desc: 'Full-time, part-time, and weekend positions available to suit your lifestyle.' },
                { icon: 'school', title: 'Professional Training', desc: 'Paid training programme and ongoing development in premium cleaning techniques.' },
                { icon: 'group', title: 'Supportive Team', desc: 'A respectful, professional environment where every team member is valued.' },
                { icon: 'local_taxi', title: 'Travel Support', desc: 'Travel allowance for distances beyond our central zones.' },
              ].map(item => (
                <div key={item.icon} className="flex gap-5 p-5 bg-surface-container-low border border-[#c8c4be]/30">
                  <span className="material-symbols-outlined text-primary text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-headline-md text-[18px] mb-1" style={{ fontFamily: 'EB Garamond, serif' }}>{item.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-surface-container-low border border-[#c8c4be]/30 p-16 text-center h-full flex flex-col justify-center">
                <span className="material-symbols-outlined text-primary text-6xl mb-6 block">how_to_reg</span>
                <h3 className="font-headline-md text-headline-md mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Application Received</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Thank you for your interest in joining Scrubskwad. Our talent team will review your application and be in touch within 5 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-headline-md text-headline-md mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Apply Now</h3>
                {[
                  { label: 'Full Name *', key: 'name', type: 'text', placeholder: 'Your full name' },
                  { label: 'Email Address *', key: 'email', type: 'email', placeholder: 'your@email.co.uk' },
                  { label: 'Phone Number *', key: 'phone', type: 'tel', placeholder: '+44 ...' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="font-label-md text-label-md text-secondary block mb-2">{f.label}</label>
                    <input required type={f.type} className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                      value={(form as any)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder} />
                  </div>
                ))}
                <div>
                  <label className="font-label-md text-label-md text-secondary block mb-2">Position Interested In</label>
                  <select className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                    value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
                    <option value="">Select a role</option>
                    <option>Domestic Cleaner</option>
                    <option>Deep Clean Specialist</option>
                    <option>Carpet & Upholstery Technician</option>
                    <option>Team Leader / Supervisor</option>
                    <option>Commercial Cleaning Operative</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-secondary block mb-2">Years of Experience</label>
                  <select className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                    value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })}>
                    <option value="">Select</option>
                    <option>No experience (willing to train)</option>
                    <option>Less than 1 year</option>
                    <option>1–3 years</option>
                    <option>3–5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-secondary block mb-2">Cover Letter</label>
                  <textarea rows={5} className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors resize-none"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us why you'd like to join the Scrubskwad team..." />
                </div>
                <button type="submit" className="w-full bg-primary text-on-primary py-5 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all">
                  SUBMIT APPLICATION
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
