'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export default function Account() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    supabase.auth.getUser().then(({ data }: any) => {
      setUser(data.user);
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_ev: any, session: any) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) { setError('Authentication not configured yet.'); return; }
    setError('');
    setMessage('');
    setSubmitting(true);
    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setError(error.message);
      } else {
        const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
        if (error) setError(error.message);
        else setMessage('Registration successful! Check your email to verify your account.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="font-label-md text-[12px] uppercase tracking-[0.18em] text-primary">Loading</span>
      </div>
    );
  }

  if (user) {
    return (
      <>
        <section className="pt-40 pb-12 px-6 md:px-20 max-w-[1200px] mx-auto">
          <h1 className="font-display-lg text-display-lg md:text-5xl text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>My Account</h1>
          <p className="font-body-md text-body-md text-secondary">Welcome back, {user.user_metadata?.full_name || user.email}</p>
        </section>

        <section className="px-6 md:px-20 max-w-[1200px] mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'calendar_today', title: 'My Bookings', desc: 'View and manage your upcoming cleaning appointments.', action: 'View Bookings' },
              { icon: 'shopping_bag', title: 'My Orders', desc: 'Track and review your shop orders and delivery status.', action: 'View Orders' },
              { icon: 'settings', title: 'Account Settings', desc: 'Update your contact details, address, and preferences.', action: 'Edit Profile' },
            ].map(item => (
              <div key={item.icon} className="bg-surface-container-low border border-[#c8c4be]/30 p-8">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{item.icon}</span>
                <h3 className="font-headline-md text-headline-md mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>{item.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{item.desc}</p>
                <button className="font-label-md text-label-md text-primary flex items-center gap-2 hover:gap-3 transition-all">
                  {item.action}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-[#c8c4be]/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-label-md text-label-md text-secondary">Signed in as</p>
                <p className="font-body-md text-body-md text-on-surface">{user.email}</p>
              </div>
              <button onClick={handleSignOut}
                className="border border-outline/30 px-8 py-3 font-label-md text-label-md text-secondary hover:bg-surface-container hover:text-primary transition-all">
                SIGN OUT
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-20 max-w-[500px] mx-auto">
        <h1 className="font-display-lg text-display-lg md:text-5xl text-on-surface mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </h1>
        <p className="font-body-md text-body-md text-secondary mb-10">
          {mode === 'login' ? 'Access your bookings and orders.' : 'Join to manage your cleaning services.'}
        </p>

        <form onSubmit={handleAuth} className="space-y-6">
          {mode === 'register' && (
            <div>
              <label className="font-label-md text-label-md text-secondary block mb-2">Full Name</label>
              <input required className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
                value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" />
            </div>
          )}
          <div>
            <label className="font-label-md text-label-md text-secondary block mb-2">Email Address</label>
            <input required type="email" className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
              value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.co.uk" />
          </div>
          <div>
            <label className="font-label-md text-label-md text-secondary block mb-2">Password</label>
            <input required type="password" className="w-full bg-white border border-[#c8c4be]/50 px-5 py-4 font-body-md outline-none focus:border-primary transition-colors"
              value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" minLength={6} />
          </div>

          {error && <p className="text-red-600 font-body-md text-sm bg-red-50 border border-red-100 px-4 py-3">{error}</p>}
          {message && <p className="text-green-700 font-body-md text-sm bg-green-50 border border-green-100 px-4 py-3">{message}</p>}

          <button type="submit" disabled={submitting}
            className="w-full bg-primary text-on-primary py-5 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all disabled:opacity-60">
            {submitting ? 'Please wait...' : mode === 'login' ? 'SIGN IN' : 'CREATE ACCOUNT'}
          </button>

          <p className="text-center font-body-md text-body-md text-secondary">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button type="button" onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); setMessage(''); }}
              className="text-primary hover:underline font-medium">
              {mode === 'login' ? 'Register' : 'Sign In'}
            </button>
          </p>
        </form>
      </section>
    </>
  );
}
