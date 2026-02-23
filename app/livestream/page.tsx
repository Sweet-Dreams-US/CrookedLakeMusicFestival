import { Video, Clock, Radio } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export default function LivestreamPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="LIVESTREAM" subtitle="Watch the festival from anywhere" />
        <ScrollReveal animation="fadeUp">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-lake-950 shadow-elevated mb-12">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-lake-900 to-lake-950">
              <div className="text-center">
                <Video size={64} className="text-white/20 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">Stream Starts July 24</h3>
                <p className="text-white/50 max-w-md mx-auto">The livestream will be available here during the festival. Check back on {SITE_CONFIG.dates}!</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3"><Radio size={20} className="text-pink" /><h3 className="font-display font-bold text-lake-950">Live Coverage</h3></div>
              <p className="text-sm text-sand-800/70">We&apos;ll be streaming live from the stage throughout the weekend.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3"><Clock size={20} className="text-lake" /><h3 className="font-display font-bold text-lake-950">Schedule</h3></div>
              <p className="text-sm text-sand-800/70">Stream runs noon to close each day. Check the schedule page for set times.</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="text-center mt-12"><Button href="/schedule">View Full Schedule</Button></div>
      </div>
    </div>
  );
}
