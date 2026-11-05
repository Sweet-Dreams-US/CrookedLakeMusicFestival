import { Sponsor } from '@/types';

// Confirmed 2027 sponsors so far. Add new ones as they are confirmed.
export const sponsors: Sponsor[] = [
  // Title Sponsor
  { id: 'k9grass-foreverlawn', name: 'K9Grass by ForeverLawn Indiana', logo: '/images/sponsors/placeholder.svg', website: 'https://foreverlawnofnein.com/', tier: 'title' },

  // Production Sponsor
  { id: 'koosters', name: "Koester's Body and Frame", logo: '/images/sponsors/KoostersBodyandFrameShoplogo.png', website: 'https://www.koestersales.com/', tier: 'production' },

  // Platinum Sponsors (order matters)
  { id: 'crush-house', name: 'Crush House Entertainment LLC', logo: '/images/sponsors/CrushHouseEntLogo.jpg', website: 'https://crushhouseent.com/', tier: 'platinum' },
  { id: 'contact-financial', name: 'CFS Inc. (Contact Financial Services)', logo: '/images/sponsors/ContactFinancialServicesLogo.png', website: '#', tier: 'platinum' },
  { id: 'hoover-mover', name: 'Hoover The Mover', logo: '/images/sponsors/HooverTheMoverLogo.png', website: 'https://www.hoovermover.com/', tier: 'platinum' },
  { id: 'pier-place', name: 'Pier Place Angola', logo: '/images/sponsors/PierPlaceOfAngolaLogo.png', website: 'https://www.thepierplace.com/', tier: 'platinum' },
  { id: 'michiana-productions', name: 'Michiana Productions', logo: '/images/sponsors/michianalogo.jpeg', website: 'https://www.michianaproductions.com/', tier: 'platinum' },

  // Gold Sponsors (order matters)
  { id: 'steuben-campground', name: 'Steuben County Campground', logo: '/images/sponsors/campgroundlogo.png', website: 'https://www.co.steuben.in.us/departments/county_park_department/camping_rentals.php', tier: 'gold' },
];
