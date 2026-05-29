export interface Artist {
  id: string;
  name: string;
  slug: string;
  image: string;
  genre: string;
  tier: 'headliner' | 'supporting' | 'local';
  day: 'friday' | 'saturday' | 'both';
  performanceTime?: string;
  stage?: string;
  bio?: string;
  socialLinks?: {
    spotify?: string;
    instagram?: string;
    website?: string;
  };
  featured: boolean;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  artistId?: string;
  stage: 'main' | 'sandbar' | 'general';
  day: 'friday' | 'saturday';
  startTime: string;
  endTime: string;
  description?: string;
  isHeadliner?: boolean;
}

export type SponsorTier =
  | 'title'
  | 'stage'
  | 'merchandise'
  | 'production'
  | 'fireworks'
  | 'platinum'
  | 'gold'
  | 'silver'
  | 'community';

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: SponsorTier;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'tickets' | 'venue' | 'lodging';
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio?: string;
  category: 'board' | 'team';
  order: number;
  socialLinks?: {
    email?: string;
    linkedin?: string;
    facebook?: string;
  };
  yearJoined?: number;
}

export interface DonationTier {
  id: string;
  amount: number;
  name: string;
  description?: string;
  isPopular?: boolean;
  perks?: string[];
}

export interface FundAllocation {
  category: string;
  percentage: number;
  icon: string;
  color: string;
}

export interface GalleryImage {
  id: string;
  type: 'image';
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GalleryVideo {
  id: string;
  type: 'video';
  videoId: string;
  alt: string;
}

export type GalleryItem = GalleryImage | GalleryVideo;

export interface NavLink {
  label: string;
  href: string;
}
