import HeroSection from '@/components/home/HeroSection';
import LineupPreview from '@/components/home/LineupPreview';
import VideoSection from '@/components/home/VideoSection';
import VenuePreview from '@/components/home/VenuePreview';
import SponsorsSection from '@/components/home/SponsorsSection';
import NewsletterSignup from '@/components/home/NewsletterSignup';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <SponsorsSection />
      <LineupPreview />
      <VenuePreview />
      <NewsletterSignup />
    </>
  );
}
