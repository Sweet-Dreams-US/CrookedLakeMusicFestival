'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { cn, assetPath } from '@/lib/utils';
import { mainNavLinks, moreNavLinks } from '@/data/navigation';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', isScrolled ? 'bg-pink shadow-soft py-2' : 'bg-pink/90 backdrop-blur-sm py-3')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src={assetPath('/images/CrookedLakeSandbarMusicFestLogoNoShadow.png')} alt="Crooked Lake Sandbar Music Festival" className={cn('transition-all duration-300 drop-shadow-[0_0_12px_rgba(0,0,0,0.4)]', isScrolled ? 'h-10' : 'h-12')} />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {mainNavLinks.map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 text-white/90 hover:text-white hover:bg-white/10">
                  {link.label}
                </Link>
              ))}

              <div className="relative">
                <button onClick={() => setIsMoreOpen(!isMoreOpen)} onBlur={() => setTimeout(() => setIsMoreOpen(false), 200)} className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1 text-white/90 hover:text-white">
                  More <ChevronDown size={14} className={cn('transition-transform', isMoreOpen && 'rotate-180')} />
                </button>
                {isMoreOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-elevated overflow-hidden py-2">
                    {moreNavLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-lake-950 hover:bg-lake/5 hover:text-lake transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/donate" className="ml-4 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 bg-sunset text-lake-950 hover:shadow-glow-sunset hover:bg-sunset-light">
                <Heart size={14} /> Donate
              </Link>
            </div>

            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden p-2 rounded-full transition-colors text-white hover:bg-white/10" aria-label="Toggle menu">
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
