import type { ReactNode } from 'react';
import { sponsors } from '@/data/sponsors';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { assetPath, cn } from '@/lib/utils';
import type { Sponsor, SponsorTier } from '@/types';

const FEATURED_TIERS: SponsorTier[] = ['title', 'stage', 'merchandise', 'production', 'fireworks', 'marketing'];

const featuredStyles: Record<string, { size: string; label: string }> = {
  title: { size: 'w-64 h-32', label: 'Title Sponsor' },
  stage: { size: 'w-56 h-28', label: 'Stage Sponsor' },
  merchandise: { size: 'w-48 h-24', label: 'Merchandise Sponsor' },
  production: { size: 'w-48 h-24', label: 'Production Sponsor' },
  fireworks: { size: 'w-48 h-24', label: 'Fireworks Sponsor' },
  marketing: { size: 'w-48 h-24', label: 'Marketing Sponsor' },
};

function hasLink(sponsor: Sponsor) {
  return Boolean(sponsor.website) && sponsor.website !== '#';
}

function hasLogo(sponsor: Sponsor) {
  return !sponsor.logo.endsWith('placeholder.svg');
}

// Wrap in an external link only when the sponsor has a real website; otherwise a plain div.
function SponsorWrap({ sponsor, className, children }: { sponsor: Sponsor; className: string; children: ReactNode }) {
  if (hasLink(sponsor)) {
    return (
      <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return <div className={className}>{children}</div>;
}

function FeaturedSponsor({ sponsor }: { sponsor: Sponsor }) {
  const style = featuredStyles[sponsor.tier];
  return (
    <SponsorWrap sponsor={sponsor} className="flex-shrink-0 group text-center">
      {style?.label && (
        <span className="block text-xs font-bold uppercase tracking-wider text-lake mb-1">{style.label}</span>
      )}
      <span className="block font-display font-bold text-lake-950 text-sm mb-2">{sponsor.name}</span>
      <div className={cn(style?.size, 'rounded-xl bg-lake-50 flex items-center justify-center transition-all duration-300 group-hover:shadow-elevated p-4')}>
        {hasLogo(sponsor) && (
          <img src={assetPath(sponsor.logo)} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
        )}
      </div>
    </SponsorWrap>
  );
}

export default function SponsorsSection() {
  const featured = sponsors.filter((s) => FEATURED_TIERS.includes(s.tier));
  const remaining = sponsors.filter((s) => !FEATURED_TIERS.includes(s.tier));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="OUR SPONSORS" subtitle="Making the music possible" />

        {/* Featured sponsors (specialty tiers) displayed prominently */}
        <div className="flex flex-wrap justify-center items-end gap-8 mt-12">
          {featured.map((sponsor) => (
            <FeaturedSponsor key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>

        {/* All remaining sponsors — static grid, business name above each logo */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {remaining.map((sponsor) => (
            <SponsorWrap
              key={sponsor.id}
              sponsor={sponsor}
              className="flex flex-col items-center rounded-xl bg-lake-50 p-3 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-display font-semibold text-lake-950 text-xs sm:text-sm text-center leading-tight mb-2 min-h-[2.25rem] flex items-center justify-center">
                {sponsor.name}
              </span>
              <div className="flex-1 flex items-center justify-center w-full h-16">
                {hasLogo(sponsor) && (
                  <img src={assetPath(sponsor.logo)} alt={sponsor.name} className="max-w-full max-h-16 object-contain" />
                )}
              </div>
            </SponsorWrap>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/sponsors" variant="ghost">Become a Sponsor</Button>
        </div>
      </div>
    </section>
  );
}
