import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { artists } from '@/data/artists';
import { assetPath } from '@/lib/utils';

export default function SchedulePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="2026 LINEUP" subtitle="Two days of non-stop music on the water" />

        <ScrollReveal animation="fadeUp">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <div key={artist.id} className="flex flex-col items-center">
                <div className="w-full aspect-square rounded-2xl border-2 border-lake/20 bg-lake-50 shadow-soft overflow-hidden flex items-center justify-center p-3">
                  <img
                    src={assetPath(artist.image)}
                    alt={artist.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="mt-2 text-sm font-bold text-lake-950 text-center">{artist.name}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-soft border-2 border-lake/10 text-center">
            <p className="text-sand-800/70 text-lg">Performance times &amp; full schedule will be announced soon. Check back!</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
