import { teamMembers, festivalStory } from '@/data/team';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Heart } from 'lucide-react';

const OFFICER_TITLES = new Set(['President', 'Vice President', 'Secretary/Treasurer', 'Secretary', 'Treasurer']);

export default function TeamPage() {
  const boardMembers = teamMembers.filter((m) => m.category === 'board').sort((a, b) => a.order - b.order);
  const officers = boardMembers.filter((m) => OFFICER_TITLES.has(m.title));
  const directors = boardMembers.filter((m) => !OFFICER_TITLES.has(m.title));
  const teamLeads = teamMembers.filter((m) => m.category === 'team').sort((a, b) => a.order - b.order);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="MEET THE TEAM" subtitle="The people behind the sandbar" />
        <section className="mb-20">
          <ScrollReveal animation="fadeUp">
            <div className="max-w-3xl mx-auto bg-lake-50 rounded-3xl p-8 md:p-12">
              <h3 className="font-display text-2xl font-bold text-lake-950 mb-4">Our Story</h3>
              <p className="text-sand-800/80 leading-relaxed">{festivalStory}</p>
            </div>
          </ScrollReveal>
        </section>

        {boardMembers.length > 0 && (
          <section className="mb-20">
            <h3 className="font-display text-2xl font-bold text-lake-950 text-center mb-8">Board of Directors</h3>

            {officers.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
                {officers.map((member, i) => (
                  <ScrollReveal key={member.id} animation="fadeUp" delay={i * 0.08}>
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center h-full">
                      <p className="text-lake text-xs font-bold uppercase tracking-wider mb-2">{member.title}</p>
                      <h4 className="font-display text-xl font-bold text-lake-950">{member.name}</h4>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {directors.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {directors.map((member, i) => (
                  <ScrollReveal key={member.id} animation="fadeUp" delay={i * 0.05}>
                    <div className="bg-white rounded-xl px-5 py-4 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center">
                      <h4 className="font-display font-bold text-lake-950">{member.name}</h4>
                      <p className="text-lake text-sm font-semibold mt-0.5">{member.title}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </section>
        )}

        {teamLeads.length > 0 && (
          <section className="mb-20">
            <h3 className="font-display text-2xl font-bold text-lake-950 text-center mb-8">Team Leads</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {teamLeads.map((member, i) => (
                <ScrollReveal key={member.id} animation="fadeUp" delay={i * 0.05}>
                  <div className="bg-white rounded-xl px-5 py-4 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center">
                    <h4 className="font-display font-bold text-lake-950">{member.name}</h4>
                    <p className="text-lake text-sm font-semibold mt-0.5">{member.title}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        <section className="mb-20">
          <ScrollReveal animation="fadeUp">
            <div className="bg-gradient-to-br from-lake-950 to-lake-900 rounded-3xl p-12 text-center">
              <Heart size={40} className="text-pink mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-white mb-4">Thank You</h3>
              <p className="text-white/70 max-w-xl mx-auto">Special thanks to our volunteers, sponsors, and the Crooked Lake community.</p>
            </div>
          </ScrollReveal>
        </section>

        <section>
          <ScrollReveal animation="scaleIn">
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-lake-950 mb-4">Want to Be Part of the Team?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/volunteer" size="lg">Volunteer With Us</Button>
                <Button href="/contact" variant="secondary" size="lg">Contact Us</Button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
