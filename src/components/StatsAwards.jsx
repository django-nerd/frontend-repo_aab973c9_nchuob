import React from 'react';
import { Medal, Flame, Target, Award } from 'lucide-react';

const awards = [
  {
    title: 'MVP',
    icon: Medal,
    stat: 'Impact Rating 1.35',
    desc: 'Highest overall impact across maps with clutch rounds and multi-kills.',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    title: 'Top Fragger',
    icon: Flame,
    stat: 'Kills per Map 24.7',
    desc: 'Most eliminations per map with excellent entry success.',
    color: 'from-rose-500 to-red-600',
  },
  {
    title: 'Assist King',
    icon: Target,
    stat: 'Assists per Map 15.2',
    desc: 'Sets up teammates with utility and precise info plays.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Ace Hunter',
    icon: Award,
    stat: 'Aces 3 | Clutches 7',
    desc: 'Most round-ending aces and clutches under pressure.',
    color: 'from-emerald-500 to-green-600',
  },
];

export default function StatsAwards() {
  return (
    <section className="mt-14">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Player Awards & Stats</h2>
      <p className="text-white/70 text-sm mt-1">Kills, assists, clutches, and impact metrics determine end-of-event honors.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {awards.map(({ title, icon: Icon, stat, desc, color }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className={`h-1 w-full bg-gradient-to-r ${color}`} />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
                <span className="text-xs text-white/60">Valorant</span>
              </div>
              <p className="text-2xl font-extrabold text-white mt-3">{stat}</p>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-5">
        <h4 className="text-white font-semibold">Scoring Format</h4>
        <ul className="mt-3 text-sm text-white/80 list-disc pl-5 space-y-1">
          <li>Rounds are first to 13. Overtime is win by 2.</li>
          <li>Scores are tracked per round; kills, assists, deaths recorded each map.</li>
          <li>Best teams advance to semifinals and the grand final based on match wins.</li>
          <li>Awards are computed from total kills, assists, K/D, clutches, and entry success.</li>
        </ul>
      </div>
    </section>
  );
}
