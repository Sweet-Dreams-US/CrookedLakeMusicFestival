import { sponsors } from '@/data/sponsors';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { cn, assetPath } from '@/lib/utils';
import type { Sponsor, SponsorTier } from '@/types';

const specialtyConfig: { tier: SponsorTier; heading: string; logoHeight: string; cols?: string }[] = [
  { tier: 'title', heading: 'Title Sponsor', logoHeight: 'h-40 md:h-48', cols: 'grid-cols-1' },
  { tier: 'stage', heading: 'Stage Sponsor', logoHeight: 'h-32 md:h-40', cols: 'grid-cols-1' },
  { tier: 'merchandise', heading: 'Merchandise Sponsors', logoHeight: 'h-28 md:h-32', cols: 'grid-cols-1 sm:grid-cols-2' },
  { tier: 'production', heading: 'Production Sponsor', logoHeight: 'h-28 md:h-32', cols: 'grid-cols-1' },
  { tier: 'fireworks', heading: 'Fireworks Sponsor', logoHeight: 'h-28 md:h-32', cols: 'grid-cols-1' },
];

const tierConfig: { tier: SponsorTier; heading: string; cols: string; logoHeight: string }[] = [
  { tier: 'platinum', heading: 'Platinum Sponsors', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', logoHeight: 'h-20' },
  { tier: 'gold', heading: 'Gold Sponsors', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', logoHeight: 'h-16' },
  { tier: 'silver', heading: 'Silver Sponsors', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', logoHeight: 'h-16' },
  { tier: 'community', heading: 'Community Partners', cols: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', logoHeight: 'h-16' },
];

function hasLogo(sponsor: Sponsor): boolean {
  return !sponsor.logo.endsWith('placeholder.svg');
}

function SponsorCard({
  sponsor,
  logoHeight,
  variant,
}: {
  sponsor: Sponsor;
  logoHeight: string;
  variant: 'specialty' | 'tier';
}) {
  const padding = variant === 'specialty' ? 'p-6 md:p-8' : 'p-4';
  const radius = variant === 'specialty' ? 'rounded-3xl' : 'rounded-2xl';
  const nameClass =
    variant === 'specialty'
      ? 'font-display font-bold text-lake-950 text-base md:text-lg mt-4 text-center'
      : 'font-display font-semibold text-lake-950 text-xs sm:text-sm mt-3 text-center';

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex flex-col items-center justify-center bg-white shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1',
        padding,
        radius,
      )}
    >
      {hasLogo(sponsor) && (
        <div className={cn('w-full flex items-center justify-center', logoHeight)}>
          <img src={assetPath(sponsor.logo)} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
        </div>
      )}
      <p className={nameClass}>{sponsor.name}</p>
    </a>
  );
}

export default function SponsorsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="OUR SPONSORS" subtitle="Making the music possible" />

        {/* Specialty named-role sponsors */}
        {specialtyConfig.map(({ tier, heading, logoHeight, cols }) => {
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
                    <SponsorCard sponsor={sponsor} logoHeight={logoHeight} variant="specialty" />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          );
        })}

        {/* Tier grids */}
        {tierConfig.map(({ tier, heading, cols, logoHeight }) => {
          const list = sponsors.filter((s) => s.tier === tier);
          if (list.length === 0) return null;
          return (
            <section key={tier} className="mb-16">
              <h3 className="font-display text-xl font-bold text-lake-950 text-center mb-8">{heading}</h3>
              <div className={cn('grid gap-6 max-w-5xl mx-auto', cols)}>
                {list.map((sponsor, i) => (
                  <ScrollReveal key={sponsor.id} animation="fadeUp" delay={(i % 8) * 0.05}>
                    <SponsorCard sponsor={sponsor} logoHeight={logoHeight} variant="tier" />
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
