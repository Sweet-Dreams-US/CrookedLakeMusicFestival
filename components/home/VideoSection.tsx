import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Images } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="relative py-16 bg-lake-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lake-950 via-lake-900 to-lake-950 opacity-50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">2026 Festival Recap</h2>
            <p className="text-white/60 text-lg">See what makes our festival like no other</p>
          </div>
          <div className="relative aspect-video max-h-[75vh] mx-auto rounded-3xl overflow-hidden bg-lake-900 shadow-elevated">
            <iframe
              src="https://customer-w6h9o08eg118alny.cloudflarestream.com/bf3bf5227fc0638d4158108ce74215a7/iframe"
              title="2026 Crooked Lake Sandbar Music Festival Recap"
              className="w-full h-full"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="text-center mt-6">
            <Button href="/gallery" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <Images size={20} className="mr-2" /> View All Media
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
