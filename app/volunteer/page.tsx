'use client';

import { useState } from 'react';
import { Heart, Shirt, Coffee, Users, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Turnstile from '@/components/ui/Turnstile';
import { SITE_CONFIG } from '@/lib/constants';

const benefits = [
  { icon: Heart, title: 'Free Festival Access', desc: 'Enjoy the festival on your off-shift time' },
  { icon: Shirt, title: 'Volunteer T-Shirt', desc: 'Exclusive volunteer gear to keep' },
  { icon: Coffee, title: 'Food & Drinks', desc: 'Meals and refreshments during your shift' },
  { icon: Users, title: 'Community', desc: 'Be part of the team that makes it all happen' },
];

const roles = ['Gate & Tickets', 'Parking & Boat Launch', 'Boat Shuttle', 'Setup & Teardown', 'Info Booth', 'Safety & First Aid', 'Merchandise', 'Food & Beverage', 'General Support'];

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) return;
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const GOOGLE_SCRIPT_URL = SITE_CONFIG.googleSheetsUrl;
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, turnstileToken, type: 'volunteer', timestamp: new Date().toISOString() }) });
      }
      setSubmitted(true);
    } catch { alert('Something went wrong. Please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="JOIN THE TEAM" subtitle="Volunteer with us and help make the sandbar magic happen" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} animation="fadeUp" delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-soft text-center hover:shadow-elevated transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-lake/10 flex items-center justify-center mx-auto mb-4"><b.icon size={28} className="text-lake" /></div>
                <h3 className="font-display font-bold text-lake-950 mb-2">{b.title}</h3>
                <p className="text-sm text-sand-800/70">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <section className="mb-20">
          <h3 className="font-display text-2xl font-bold text-lake-950 text-center mb-8">Volunteer Roles</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {roles.map((role) => (<span key={role} className="px-4 py-2 bg-lake-50 rounded-full text-sm font-semibold text-lake-950">{role}</span>))}
          </div>
        </section>
        <section className="max-w-2xl mx-auto">
          <ScrollReveal animation="fadeUp">
            {submitted ? (
              <div className="bg-lake-50 rounded-3xl p-12 text-center">
                <CheckCircle size={48} className="text-lake mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-lake-950 mb-2">Application Received!</h3>
                <p className="text-sand-800/70">Thanks for signing up. We&apos;ll be in touch!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-soft space-y-5">
                <h3 className="font-display text-2xl font-bold text-lake-950 mb-6">Sign Up to Volunteer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input label="First Name" name="firstName" id="firstName" required placeholder="Your first name" />
                  <Input label="Last Name" name="lastName" id="lastName" required placeholder="Your last name" />
                </div>
                <Input label="Email" name="email" id="volEmail" type="email" required placeholder="you@example.com" />
                <Input label="Phone" name="phone" id="volPhone" type="tel" placeholder="(555) 123-4567" />
                <div className="space-y-1.5">
                  <label htmlFor="role" className="block text-sm font-semibold text-lake-950">Preferred Role</label>
                  <select name="role" id="role" className="w-full px-4 py-3 rounded-xl border-2 border-lake-100 bg-white text-lake-950 focus:outline-none focus:border-lake focus:ring-2 focus:ring-lake/20 transition-all">
                    <option value="">Select a role...</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-lake-950">Availability</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm text-sand-800"><input type="checkbox" name="friday" className="rounded border-lake-200 text-lake focus:ring-lake" /> Friday</label>
                    <label className="flex items-center gap-2 text-sm text-sand-800"><input type="checkbox" name="saturday" className="rounded border-lake-200 text-lake focus:ring-lake" /> Saturday</label>
                    <label className="flex items-center gap-2 text-sm text-sand-800"><input type="checkbox" name="bothDays" className="rounded border-lake-200 text-lake focus:ring-lake" /> Both</label>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="notes" className="block text-sm font-semibold text-lake-950">Experience / Notes</label>
                  <textarea name="notes" id="notes" rows={4} placeholder="Any relevant experience..." className="w-full px-4 py-3 rounded-xl border-2 border-lake-100 bg-white text-lake-950 placeholder:text-sand-800/40 focus:outline-none focus:border-lake focus:ring-2 focus:ring-lake/20 transition-all resize-none" />
                </div>
                <Turnstile onVerify={setTurnstileToken} />
                <Button type="submit" size="lg" className="w-full justify-center" loading={loading} disabled={!turnstileToken}>Submit Application</Button>
              </form>
            )}
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
