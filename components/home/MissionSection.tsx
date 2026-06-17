import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { assetPath } from '@/lib/utils';
import { Heart } from 'lucide-react';

const SHELTER_VIDEO_ID = 'a5be567ba670d8e102cf9b507a4ad936';

export default function MissionSection() {
  return (
    <section className="py-24 bg-sunset">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fadeUp">
          <div className="text-center">
            <img
              src={assetPath('/images/sponsors/CommunityHumaneShelterLogo.png')}
              alt="Community Humane Shelter of Steuben County"
              className="mx-auto w-full max-w-md h-auto mb-8"
            />

            <h2 className="font-display text-4xl md:text-5xl font-bold text-lake-950 mb-5">
              Music with a Mission
            </h2>

            <p className="max-w-2xl mx-auto text-lake-950/80 text-lg leading-relaxed mb-12">
              Every boat on the sandbar and every dollar raised goes to the{' '}
              <span className="font-semibold text-lake-950">Community Humane Shelter of Steuben County</span>
              {' '}&mdash; giving homeless dogs and cats food, care, and a second chance at a forever home.
            </p>

            <div className="relative aspect-video max-w-3xl mx-auto rounded-3xl overflow-hidden bg-lake-950 shadow-elevated">
              <iframe
                src={`https://customer-w6h9o08eg118alny.cloudflarestream.com/${SHELTER_VIDEO_ID}/iframe`}
                title="Community Humane Shelter of Steuben County"
                className="w-full h-full"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-10">
              <Button
                href="/donate"
                size="lg"
                glow
                magnetic
                className="bg-gradient-to-r from-pink to-pink-light hover:shadow-glow-pink text-white"
              >
                <Heart size={20} className="mr-2" /> Donate to the Shelter
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
