'use client';

import { useState } from 'react';
import { Heart, Lock, Facebook, Instagram, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Turnstile from '@/components/ui/Turnstile';
import TikTokIcon from '@/components/icons/TikTokIcon';
import { donationTiers, SWIPESIMPLE_LINKS, SWIPESIMPLE_ANY_AMOUNT } from '@/data/donations';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { DonationTier } from '@/types';

const inquiryTypes = ['Volunteer', 'Sponsor', 'General Inquiry'];

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<DonationTier | null>(donationTiers[1]);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const activeAmount = isCustom ? Number(customAmount) || 0 : selectedTier?.amount || 0;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');

  const handleDonate = () => {
    if (activeAmount < 5) return;
    const paymentUrl = SWIPESIMPLE_LINKS[activeAmount] || SWIPESIMPLE_ANY_AMOUNT;
    window.open(paymentUrl, '_blank');
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) return;
    setFormLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const GOOGLE_SCRIPT_URL = SITE_CONFIG.googleSheetsUrl;
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, turnstileToken, type: 'donate-inquiry', timestamp: new Date().toISOString() }) });
      }
      setFormSubmitted(true);
    } catch { alert('Something went wrong. Please try again.'); }
    finally { setFormLoading(false); }
  };

  return (
    <div className="pt-24 pb-16">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lake-950 via-lake-900 to-lake-800" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lake/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Heart size={48} className="text-pink mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Support the Sandbar</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">Help us keep the music alive on Crooked Lake. Every dollar goes to charity.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16">
          <ScrollReveal animation="fadeUp">
            <div className="bg-lake-50 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-lake-950 mb-4">Why Donate?</h2>
              <p className="text-sand-800/80 leading-relaxed">The Crooked Lake Sandbar Music Festival is a community-driven charity event run entirely by volunteers. Your donations fund artists, equipment, safety, and operations. All proceeds go directly to charity.</p>
            </div>
          </ScrollReveal>
        </section>

        <section className="py-16">
          <SectionHeading title="CHOOSE YOUR LEVEL" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
            {donationTiers.map((tier) => (
              <button key={tier.id} onClick={() => { setSelectedTier(tier); setIsCustom(false); }} className={cn('relative rounded-2xl p-5 text-center transition-all duration-300 border-2', !isCustom && selectedTier?.id === tier.id ? 'border-lake bg-lake/5 shadow-glow-sm scale-[1.02]' : 'border-lake-100 bg-white hover:border-lake/30 hover:-translate-y-1')}>
                {tier.isPopular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-pink text-white text-xs font-bold rounded-full">Popular</span>}
                <p className="font-display text-3xl font-bold text-lake-950">${tier.amount}</p>
                <p className="font-semibold text-lake text-sm mt-1">{tier.name}</p>
                {tier.description && <p className="text-xs text-sand-800/50 mt-1">{tier.description}</p>}
              </button>
            ))}
            <button onClick={() => setIsCustom(true)} className={cn('rounded-2xl p-5 text-center transition-all duration-300 border-2', isCustom ? 'border-lake bg-lake/5 shadow-glow-sm' : 'border-lake-100 bg-white hover:border-lake/30')}>
              <p className="font-display text-lg font-bold text-lake-950 mb-1">Custom</p>
              {isCustom ? (
                <div className="flex items-center justify-center gap-1">
                  <span className="text-lake-950 font-bold">$</span>
                  <input type="number" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} min={5} placeholder="0" className="w-20 text-center text-2xl font-bold bg-transparent border-b-2 border-lake focus:outline-none text-lake-950" autoFocus />
                </div>
              ) : <p className="text-sm text-sand-800/50">Any amount</p>}
            </button>
          </div>
          <div className="max-w-md mx-auto text-center mt-8">
            <Button onClick={handleDonate} size="lg" glow magnetic className="w-full justify-center bg-gradient-to-r from-pink to-pink-light hover:shadow-glow-pink text-lg" disabled={activeAmount < 5}>
              <Heart size={20} className="mr-2" /> Donate {activeAmount > 0 ? `$${activeAmount}` : ''}
            </Button>
            <p className="flex items-center justify-center gap-2 text-sand-800/40 text-xs mt-4"><Lock size={12} />Secure payment processing</p>
          </div>
        </section>

        {/* WHERE YOUR MONEY GOES - hidden until percentages are finalized */}

        <section className="py-16">
          <SectionHeading title="OTHER WAYS TO HELP" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
            <ScrollReveal animation="fadeUp" delay={0}><div className="bg-white rounded-2xl p-6 shadow-soft text-center hover:shadow-elevated transition-all hover:-translate-y-1"><h3 className="font-display font-bold text-lake-950 mb-2">Volunteer</h3><p className="text-sm text-sand-800/70 mb-4">Donate your time</p><Button href="/volunteer" variant="ghost" size="sm">Sign Up</Button></div></ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}><div className="bg-white rounded-2xl p-6 shadow-soft text-center hover:shadow-elevated transition-all hover:-translate-y-1"><h3 className="font-display font-bold text-lake-950 mb-2">Sponsor</h3><p className="text-sm text-sand-800/70 mb-4">Business partnerships</p><Button href="/sponsors" variant="ghost" size="sm">Learn More</Button></div></ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="bg-white rounded-2xl p-6 shadow-soft text-center hover:shadow-elevated transition-all hover:-translate-y-1">
                <h3 className="font-display font-bold text-lake-950 mb-2">Spread the Word</h3>
                <p className="text-sm text-sand-800/70 mb-4">Share on social media</p>
                <div className="flex justify-center gap-2">
                  <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-lake/10 hover:bg-lake hover:text-white flex items-center justify-center transition-all text-lake" aria-label="Facebook"><Facebook size={16} /></a>
                  <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-lake/10 hover:bg-lake hover:text-white flex items-center justify-center transition-all text-lake" aria-label="Instagram"><Instagram size={16} /></a>
                  <a href={SITE_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-lake/10 hover:bg-lake hover:text-white flex items-center justify-center transition-all text-lake" aria-label="TikTok"><TikTokIcon size={16} /></a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16">
          <SectionHeading title="GET IN TOUCH" subtitle="Questions about donating, sponsoring, or volunteering?" />
          <div className="max-w-2xl mx-auto mt-8">
            <ScrollReveal animation="fadeUp">
              {formSubmitted ? (
                <div className="bg-lake-50 rounded-3xl p-12 text-center">
                  <CheckCircle size={48} className="text-lake mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-lake-950 mb-2">Message Sent!</h3>
                  <p className="text-sand-800/70">We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="bg-white rounded-3xl p-8 shadow-soft space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input label="Name" name="name" id="donateName" required placeholder="Your name" />
                    <Input label="Email" name="email" id="donateEmail" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-lake-950">I&apos;m interested in...</label>
                    <select name="inquiryType" id="inquiryType" className="w-full px-4 py-3 rounded-xl border-2 border-lake-100 bg-white text-lake-950 focus:outline-none focus:border-lake focus:ring-2 focus:ring-lake/20 transition-all">
                      {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="donateMessage" className="block text-sm font-semibold text-lake-950">Message</label>
                    <textarea name="message" id="donateMessage" rows={4} required placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border-2 border-lake-100 bg-white text-lake-950 placeholder:text-sand-800/40 focus:outline-none focus:border-lake focus:ring-2 focus:ring-lake/20 transition-all resize-none" />
                  </div>
                  <Turnstile onVerify={setTurnstileToken} />
                  <Button type="submit" size="lg" className="w-full justify-center" loading={formLoading} disabled={!turnstileToken}>Send Message</Button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
