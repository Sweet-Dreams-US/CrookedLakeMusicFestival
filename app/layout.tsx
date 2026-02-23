import type { Metadata } from 'next';
import Script from 'next/script';
import { fontDisplay, fontBody, fontMono, fontAnton } from '@/lib/fonts';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Crooked Lake Sandbar Music Festival 2026',
    template: '%s | Sandbar Music Fest 2026',
  },
  description:
    'A charity music festival on the sandbar at Crooked Lake in Angola, Indiana. July 24-25, 2026. Boat out, enjoy live music, and support a great cause.',
  keywords: [
    'music festival',
    'Crooked Lake',
    'Angola Indiana',
    'sandbar',
    'charity',
    'live music',
    'lake festival',
    'boat',
  ],
  openGraph: {
    title: 'Crooked Lake Sandbar Music Festival 2026',
    description:
      'A charity music festival on the sandbar at Crooked Lake. July 24-25, 2026.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} ${fontAnton.variable}`}>
      <body className="font-body antialiased">
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="lazyOnload" />
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
