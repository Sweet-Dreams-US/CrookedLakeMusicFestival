'use client';

import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

type DayFilter = 'friday' | 'saturday';

export default function SchedulePage() {
  const [day, setDay] = useState<DayFilter>('friday');

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="LINEUP & SCHEDULE" subtitle="Two days of non-stop music on the water" />

        <div className="flex justify-center gap-2 mb-12">
          <button onClick={() => setDay('friday')} className={cn('px-6 py-3 rounded-full font-bold text-sm transition-all', day === 'friday' ? 'bg-lake text-white shadow-glow-sm' : 'bg-lake-50 text-lake-950 hover:bg-lake-100')}>Friday, July 24</button>
          <button onClick={() => setDay('saturday')} className={cn('px-6 py-3 rounded-full font-bold text-sm transition-all', day === 'saturday' ? 'bg-lake text-white shadow-glow-sm' : 'bg-lake-50 text-lake-950 hover:bg-lake-100')}>Saturday, July 25</button>
        </div>

        <ScrollReveal animation="fadeUp">
          <div className="bg-white rounded-2xl p-12 shadow-soft border-2 border-lake/10 text-center">
            <Clock size={48} className="mx-auto text-lake/30 mb-4" />
            <h3 className="font-display font-bold text-2xl text-lake-950 mb-2">Lineup Announcement Coming Soon</h3>
            <p className="text-sand-800/60 max-w-md mx-auto">This year&apos;s lineup is solidified &mdash; the official {day === 'friday' ? 'Friday' : 'Saturday'} schedule will be announced soon. Check back!</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
