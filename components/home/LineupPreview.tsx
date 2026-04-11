import { Mic } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { artists } from '@/data/artists';
import { assetPath } from '@/lib/utils';

export default function LineupPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="2026 LINEUP" subtitle="Two days of incredible live music on the water" />
        <ScrollReveal animation="fadeUp">
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
          <p className="text-center text-sand-800/60 mt-8 text-sm">Performance times &amp; schedule coming soon!</p>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mt-8 max-w-xl mx-auto bg-lake-50 rounded-2xl p-6 text-center">
            <Mic size={24} className="text-lake mx-auto mb-3" />
            <h4 className="font-display font-bold text-lake-950 mb-2">Want to Play Next Year?</h4>
            <p className="text-sand-800/70 text-sm mb-4">Artist and band submissions for the 2027 festival will open after this year&apos;s event. Follow us on social media for updates!</p>
            <Button href="/contact" variant="ghost" size="sm">Contact Us</Button>
          </div>
        </ScrollReveal>
        <div className="text-center mt-8">
          <Button href="/schedule" variant="secondary" size="lg">View Full Lineup</Button>
        </div>
      </div>
    </section>
  );
}
