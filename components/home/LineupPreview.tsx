import { Music, Mic } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function LineupPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="2026 LINEUP" subtitle="Two days of incredible live music on the water" />
        <ScrollReveal animation="fadeUp">
          <div className="mt-12 flex flex-col items-center justify-center text-center py-16">
            <div className="w-20 h-20 rounded-full bg-lake/10 flex items-center justify-center mb-6">
              <Music size={40} className="text-lake" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-lake-950 mb-3">Lineup Announcement Coming Soon</h3>
            <p className="text-sand-800/70 text-lg max-w-md">This year&apos;s lineup is solidified &mdash; official announcement dropping soon. Stay tuned!</p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mt-4 max-w-xl mx-auto bg-lake-50 rounded-2xl p-6 text-center">
            <Mic size={24} className="text-lake mx-auto mb-3" />
            <h4 className="font-display font-bold text-lake-950 mb-2">Want to Play Next Year?</h4>
            <p className="text-sand-800/70 text-sm mb-4">Artist and band submissions for the 2027 festival will open after this year&apos;s event. Follow us on social media for updates!</p>
            <Button href="/contact" variant="ghost" size="sm">Contact Us</Button>
          </div>
        </ScrollReveal>
        <div className="text-center mt-8">
          <Button href="/schedule" variant="secondary" size="lg">View Schedule</Button>
        </div>
      </div>
    </section>
  );
}
