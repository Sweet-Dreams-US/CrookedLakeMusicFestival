import { MapPin, Car, Anchor, Sun, Droplets, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const venueHighlights = [
  { icon: Anchor, title: 'Boat Access', desc: 'Boat directly to the sandbar from the public launch on Crooked Lake' },
  { icon: Sun, title: 'Sun & Sand', desc: 'Natural sandbar setting with shallow water perfect for wading' },
  { icon: ShieldCheck, title: 'Safety First', desc: 'On-water safety patrol and first aid on site' },
  { icon: Droplets, title: 'Lake Life', desc: 'Swim, float, and enjoy the water between sets' },
];

const accommodations = [
  { name: 'Potawatomi Inn', type: 'Hotel', note: 'Inside Pokagon State Park' },
  { name: 'Pokagon State Park', type: 'Camping', note: 'Tent & RV sites available' },
  { name: 'Holiday Inn Express Angola', type: 'Hotel', note: '15 min from the lake' },
  { name: 'Lake area vacation rentals', type: 'Rental', note: 'Check Airbnb/VRBO for lake houses' },
];

export default function VenuePage() {
  return (
    <div className="pt-24 pb-16">
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-lake-900 to-lake-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lake-950/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">THE SANDBAR</h1>
          <p className="text-white/70 text-xl flex items-center justify-center gap-2"><MapPin size={20} />Crooked Lake, Angola, Indiana</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16">
          <ScrollReveal animation="fadeUp">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-lake-100 to-lake-200 shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2465.961883041318!2d-85.0460007599389!3d41.67500778259373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1769962432742!5m2!1sen!2sus"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </section>
        <section className="py-16">
          <SectionHeading title="VENUE HIGHLIGHTS" subtitle="Everything you need to know about the sandbar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {venueHighlights.map((item, i) => (
              <ScrollReveal key={item.title} animation="fadeUp" delay={i * 0.1}>
                <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-lake/10 flex items-center justify-center flex-shrink-0"><item.icon size={24} className="text-lake" /></div>
                  <div><h3 className="font-display font-bold text-lake-950 mb-1">{item.title}</h3><p className="text-sm text-sand-800/70">{item.desc}</p></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
        <section className="py-16">
          <SectionHeading title="GETTING THERE" />
          <div className="max-w-2xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="bg-white rounded-3xl p-8 shadow-soft space-y-6">
                <div className="flex items-start gap-4"><MapPin size={24} className="text-lake flex-shrink-0 mt-1" /><div><h3 className="font-display font-bold text-lake-950 mb-1">Address</h3><p className="text-sand-800/70">The Sandbar, Crooked Lake<br />Angola, Indiana 46703</p></div></div>
                <div className="flex items-start gap-4"><Car size={24} className="text-lake flex-shrink-0 mt-1" /><div><h3 className="font-display font-bold text-lake-950 mb-1">By Boat</h3><p className="text-sand-800/70">Access the sandbar by boat from the public launch on Crooked Lake. The sandbar is located in the center of the lake.</p></div></div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        <section className="py-16">
          <SectionHeading title="PUBLIC PARKING" subtitle="Park here and head to the lake" />
          <ScrollReveal animation="fadeUp">
            <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-lake-100 to-lake-200 shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.9893715752158!2d-85.03635195013644!3d41.666534276575376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88162f3bca1906ed%3A0x5fea30d2b632d356!2sCrooked%20Lake%2C%20IN%2046703!5e1!3m2!1sen!2sus!4v1770865445301!5m2!1sen!2sus"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </section>
        <section className="py-16">
          <SectionHeading title="WHERE TO STAY" subtitle="Nearby accommodations for the weekend" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8">
            {accommodations.map((acc, i) => (
              <ScrollReveal key={acc.name} animation="fadeUp" delay={i * 0.1}>
                <div className="bg-white rounded-xl p-5 shadow-soft">
                  <span className="text-xs font-semibold text-lake uppercase tracking-wider">{acc.type}</span>
                  <h3 className="font-display font-bold text-lake-950 mt-1">{acc.name}</h3>
                  <p className="text-sm text-sand-800/60 mt-1">{acc.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
