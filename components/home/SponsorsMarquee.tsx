import { sponsors } from '@/data/sponsors';
import SectionHeading from '@/components/ui/SectionHeading';
import Marquee from '@/components/ui/Marquee';
import Button from '@/components/ui/Button';
import { assetPath, cn } from '@/lib/utils';
import type { Sponsor, SponsorTier } from '@/types';

const FEATURED_TIERS: SponsorTier[] = ['title', 'stage', 'merchandise', 'production', 'fireworks'];

const tierStyles: Record<SponsorTier, { size: string; label: string }> = {
  title: { size: 'w-64 h-32', label: 'Title Sponsor' },
  stage: { size: 'w-56 h-28', label: 'Stage Sponsor' },
  merchandise: { size: 'w-48 h-24', label: 'Merchandise Sponsor' },
  production: { size: 'w-48 h-24', label: 'Production Sponsor' },
  fireworks: { size: 'w-48 h-24', label: 'Fireworks Sponsor' },
  platinum: { size: 'w-44 h-22', label: '' },
  gold: { size: 'w-40 h-20', label: '' },
  silver: { size: 'w-36 h-18', label: '' },
  community: { size: 'w-36 h-18', label: '' },
};

function FeaturedSponsor({ sponsor }: { sponsor: Sponsor }) {
  const style = tierStyles[sponsor.tier];
  return (
    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group text-center">
      {style.label && (
        <span className="block text-xs font-bold uppercase tracking-wider text-lake mb-2">{style.label}</span>
      )}
      <div className={cn(style.size, 'rounded-xl bg-lake-50 flex items-center justify-center transition-all duration-300 group-hover:shadow-elevated p-4')}>
        <img src={assetPath(sponsor.logo)} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
      </div>
    </a>
  );
}

export default function SponsorsMarquee() {
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
      </div>

      {/* Scrolling marquee for remaining sponsors */}
      <Marquee className="mt-12" pauseOnHover>
        {remaining.map((sponsor) => {
          const style = tierStyles[sponsor.tier];
          return (
            <a key={sponsor.id} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="mx-8 flex-shrink-0 group">
              <div className={cn(style.size, 'rounded-xl bg-lake-50 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group-hover:shadow-soft p-3')}>
                <img src={assetPath(sponsor.logo)} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
              </div>
            </a>
          );
        })}
      </Marquee>

      <div className="text-center mt-12">
        <Button href="/sponsors" variant="ghost">Become a Sponsor</Button>
      </div>
    </section>
  );
}
