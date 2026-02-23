import { sponsors } from '@/data/sponsors';
import SectionHeading from '@/components/ui/SectionHeading';
import Marquee from '@/components/ui/Marquee';
import Button from '@/components/ui/Button';
import { assetPath, cn } from '@/lib/utils';

const tierStyles: Record<string, { size: string; label: string }> = {
  title: { size: 'w-64 h-32', label: 'Title Sponsor' },
  gold: { size: 'w-52 h-26', label: 'Stage Sponsor' },
  silver: { size: 'w-40 h-20', label: '' },
  community: { size: 'w-36 h-18', label: '' },
};

export default function SponsorsMarquee() {
  const featured = sponsors.filter((s) => s.tier === 'title' || s.tier === 'gold');
  const remaining = sponsors.filter((s) => s.tier !== 'title' && s.tier !== 'gold');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="OUR SPONSORS" subtitle="Making the music possible" />

        {/* Featured sponsors (title & gold) displayed prominently */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          {featured.map((sponsor) => {
            const style = tierStyles[sponsor.tier];
            return (
              <a key={sponsor.id} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group text-center">
                {style.label && <span className="block text-xs font-bold uppercase tracking-wider text-lake mb-2">{style.label}</span>}
                <div className={cn(style.size, 'rounded-xl bg-lake-50 flex items-center justify-center hover:grayscale-0 transition-all duration-300 group-hover:shadow-elevated p-4')}>
                  <img src={assetPath(sponsor.logo)} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                </div>
              </a>
            );
          })}
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
