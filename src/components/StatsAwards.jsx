import React from 'react';
import { Medal, Flame, Target, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const AWARDS_BY_GAME = {
  Valorant: [
    { title: 'MVP', icon: Medal, stat: 'Impact 1.35', desc: 'Highest impact with clutches and multi-kills.', color: 'from-yellow-500 to-amber-600' },
    { title: 'Top Fragger', icon: Flame, stat: 'KPM 24.7', desc: 'Most eliminations per map with strong entries.', color: 'from-rose-500 to-red-600' },
    { title: 'Assist King', icon: Target, stat: 'APM 15.2', desc: 'Utility and info plays to set up teammates.', color: 'from-sky-500 to-blue-600' },
    { title: 'Ace Hunter', icon: Award, stat: 'Aces 3 | Clutches 7', desc: 'Most aces and clutches under pressure.', color: 'from-emerald-500 to-green-600' },
  ],
  PUBG: [
    { title: 'Last Squad Standing', icon: Star, stat: 'Wins 5', desc: 'Highest chicken dinners secured.', color: 'from-amber-500 to-orange-600' },
    { title: 'Sharpshooter', icon: Target, stat: 'HS% 37', desc: 'Headshot accuracy leader across matches.', color: 'from-sky-500 to-blue-600' },
    { title: 'Frag Leader', icon: Flame, stat: 'Avg Kills 8.2', desc: 'Highest average eliminations per round.', color: 'from-rose-500 to-red-600' },
    { title: 'Support Ace', icon: Medal, stat: 'Revives 22', desc: 'Most revives and team support actions.', color: 'from-emerald-500 to-green-600' },
  ],
  FIFA: [
    { title: 'Golden Boot', icon: Flame, stat: 'Goals 19', desc: 'Top scorer across the tournament.', color: 'from-rose-500 to-red-600' },
    { title: 'Playmaker', icon: Medal, stat: 'Assists 14', desc: 'Most assists and key passes created.', color: 'from-yellow-500 to-amber-600' },
    { title: 'Clean Sheets', icon: Award, stat: 'Shutouts 7', desc: 'Most matches with no goals conceded.', color: 'from-emerald-500 to-green-600' },
    { title: 'Precision', icon: Target, stat: 'Shot Acc 68%', desc: 'Highest shot accuracy on target.', color: 'from-sky-500 to-blue-600' },
  ],
};

export default function StatsAwards({ game = 'Valorant' }) {
  const awards = AWARDS_BY_GAME[game] ?? AWARDS_BY_GAME.Valorant;

  return (
    <section className="mt-14">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Awards & Stats</h2>
      <p className="text-white/70 text-sm mt-1">Honors and performance metrics tailored for each title.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {awards.map(({ title, icon: Icon, stat, desc, color }) => (
          <motion.div
            key={title}
            className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.25 }}
          >
            <div className={`h-1 w-full bg-gradient-to-r ${color}`} />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
                <span className="text-xs text-white/60">{game}</span>
              </div>
              <p className="text-2xl font-extrabold text-white mt-3">{stat}</p>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-5">
        <h4 className="text-white font-semibold">Scoring Format</h4>
        <ul className="mt-3 text-sm text-white/80 list-disc pl-5 space-y-1">
          {game === 'Valorant' && (
            <>
              <li>Rounds are first to 13. Overtime is win by 2.</li>
              <li>Stats: kills, assists, deaths, clutches, entry success.</li>
            </>
          )}
          {game === 'PUBG' && (
            <>
              <li>Placement points + kill points determine standings.</li>
              <li>Stats: kills, headshots, revives, survival time.</li>
            </>
          )}
          {game === 'FIFA' && (
            <>
              <li>Aggregate score over legs advances players.</li>
              <li>Stats: goals, assists, shot accuracy, clean sheets.</li>
            </>
          )}
        </ul>
      </div>
    </section>
  );
}
