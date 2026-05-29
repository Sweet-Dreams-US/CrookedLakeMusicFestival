import { sponsors } from '@/data/sponsors';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { cn, assetPath } from '@/lib/utils';
import type { Sponsor, SponsorTier } from '@/types';

const specialtyConfig: { tier: SponsorTier; heading: string; size: string; cols?: string }[] = [
  { tier: 'title', heading: 'Title Sponsor', size: 'h-48 md:h-56', cols: 'grid-cols-1' },
  { tier: 'stage', heading: 'Stage Sponsor', size: 'h-40 md:h-48', cols: 'grid-cols-1' },
  { tier: 'merchandise', heading: 'Merchandise Sponsors', size: 'h-32 md:h-40', cols: 'grid-cols-1 sm:grid-cols-2' },
  { tier: 'production', heading: 'Production Sponsor', size: 'h-32 md:h-40', cols: 'grid-cols-1' },
  { tier: 'fireworks', heading: 'Fireworks Sponsor', size: 'h-32 md:h-40', cols: 'grid-cols-1' },
];

const tierConfig: { tier: SponsorTier; heading: string; cols: string; size: string }[] = [
  { tier: 'platinum', heading: 'Platinum Sponsors', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', size: 'h-28' },
  { tier: 'gold', heading: 'Gold Sponsors', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', size: 'h-24' },
  { tier: 'silver', heading: 'Silver Sponsors', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', size: 'h-20' },
  { tier: 'community', heading: 'Community Partners', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', size: 'h-20' },
];

function SpecialtyCard({ sponsor, size }: { sponsor: Sponsor; size: string }) {
  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex items-center justify-center rounded-3xl bg-white p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1',
        size,
      )}
    >
      <img src={assetPath(sponsor.logo)} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
    </a>
  );
}

export default function SponsorsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="OUR SPONSORS" subtitle="Making the music possible" />

        {/* Specialty named-role sponsors */}
        {specialtyConfig.map(({ tier, heading, size, cols }) => {
          const list = sponsors.filter((s) => s.tier === tier);
          if (list.length === 0) return null;
          return (
            <section key={tier} className="mb-16 max-w-3xl mx-auto">
              <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-lake text-center mb-4">
                {heading}
              </h3>
              <div className={cn('grid gap-6', cols ?? 'grid-cols-1')}>
                {list.map((sponsor, i) => (
                  <ScrollReveal key={sponsor.id} animation="fadeUp" delay={i * 0.1}>
                    <SpecialtyCard sponsor={sponsor} size={size} />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          );
        })}

        {/* Tier grids */}
        {tierConfig.map(({ tier, heading, cols, size }) => {
          const list = sponsors.filter((s) => s.tier === tier);
          if (list.length === 0) return null;
          return (
            <section key={tier} className="mb-16">
              <h3 className="font-display text-xl font-bold text-lake-950 text-center mb-8">{heading}</h3>
              <div className={cn('grid gap-6 max-w-5xl mx-auto', cols)}>
                {list.map((sponsor, i) => (
                  <ScrollReveal key={sponsor.id} animation="fadeUp" delay={(i % 8) * 0.05}>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'flex items-center justify-center rounded-2xl bg-white p-4 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1',
                        size,
                      )}
                    >
                      <img src={assetPath(sponsor.logo)} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          );
        })}

        <section className="mt-20">
          <ScrollReveal animation="fadeUp">
            <div className="bg-gradient-to-br from-lake-950 to-lake-900 rounded-3xl p-12 text-center">
              <h3 className="font-display text-3xl font-bold text-white mb-4">Become a Sponsor</h3>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Partner with the Crooked Lake Sandbar Music Festival and support live music for charity.
              </p>
              <Button href="/contact" variant="secondary" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Get Sponsorship Info
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
