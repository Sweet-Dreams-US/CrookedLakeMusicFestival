import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import TikTokIcon from '@/components/icons/TikTokIcon';
import { SITE_CONFIG } from '@/lib/constants';

const footerLinks = [
  { label: 'Schedule', href: '/schedule' },
  { label: 'Venue', href: '/venue' },
  { label: 'Donate', href: '/donate' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-lake-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">SANDBAR MUSIC FEST</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">{SITE_CONFIG.tagline}</p>
            <p className="text-white/60 text-sm">A charity music festival on Crooked Lake,<br />Angola, Indiana</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/70 hover:text-white text-sm transition-colors py-1">{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href={SITE_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="TikTok"><TikTokIcon size={18} /></a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Email"><Mail size={18} /></a>
            </div>
            <p className="text-white/40 text-sm">{SITE_CONFIG.email}</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="text-white/40 text-sm">All proceeds donated to charity.</p>
        </div>
        <div className="mt-4 text-center">
          <a href="https://sweetdreams.us/" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/40 text-xs transition-colors">Website built by Sweet Dreams</a>
        </div>
      </div>
    </footer>
  );
}
