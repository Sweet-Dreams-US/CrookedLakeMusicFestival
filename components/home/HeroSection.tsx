'use client';

import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import CountdownTimer from './CountdownTimer';
import { SITE_CONFIG } from '@/lib/constants';
import { assetPath } from '@/lib/utils';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const content = heroRef.current.querySelector('.hero-content') as HTMLElement;
      if (content) {
        content.style.transform = `translateY(${scrollY * 0.2}px)`;
        content.style.opacity = `${Math.max(0, 1 - scrollY / (window.innerHeight * 1.1))}`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={assetPath('/images/hero/HEADER.jpg')} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/0" />

      <div className="hero-content relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-3 inline-block">
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-semibold border border-white/10">
            A Charity Music Festival
          </span>
        </div>
        <p className="text-lg sm:text-xl text-white/70 font-display font-semibold mb-3">2026 is Coming Soon</p>
        <h1 className="font-[var(--font-anton)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3 leading-[0.9] tracking-tight" style={{ fontFamily: 'var(--font-anton)', textShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
          <span className="block text-lake whitespace-nowrap">CROOKED LAKE</span>
          <span className="block text-pink">SANDBAR</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 text-white/90">MUSIC FESTIVAL</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/70 font-display font-semibold mb-1 mt-5">{SITE_CONFIG.dates}</p>
        <p className="text-base sm:text-lg text-white/50 mb-6">The Sandbar &bull; Crooked Lake &bull; Angola, Indiana</p>
        <CountdownTimer targetDate={SITE_CONFIG.eventDate} />
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/donate" size="lg" magnetic glow className="bg-gradient-to-r from-pink to-pink-light hover:shadow-glow-pink">Donate Now</Button>
          <Button href="/schedule" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">View Schedule</Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
        <ChevronDown size={32} className="text-white/50" />
      </div>
    </section>
  );
}
