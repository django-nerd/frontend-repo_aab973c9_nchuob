import React from 'react';
import { Trophy, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const BRACKETS = {
  Valorant: {
    quarterfinals: [
      { a: 'CRV', b: 'AZP' },
      { a: 'NTN', b: 'BLZ' },
      { a: 'GHO', b: 'RAV' },
      { a: 'ONY', b: 'QRT' },
    ],
    semifinals: [
      { a: 'Winner QF1', b: 'Winner QF2' },
      { a: 'Winner QF3', b: 'Winner QF4' },
    ],
    final: [{ a: 'Winner SF1', b: 'Winner SF2' }],
  },
  PUBG: {
    quarterfinals: [
      { a: 'STH', b: 'SHW' },
      { a: 'VAL', b: 'DRK' },
      { a: 'EKO', b: 'FOX' },
      { a: 'RPT', b: 'ZUL' },
    ],
    semifinals: [
      { a: 'Winner QF1', b: 'Winner QF2' },
      { a: 'Winner QF3', b: 'Winner QF4' },
    ],
    final: [{ a: 'Winner SF1', b: 'Winner SF2' }],
  },
  FIFA: {
    quarterfinals: [
      { a: 'RYS', b: 'BLU' },
      { a: 'VRT', b: 'ACE' },
      { a: 'UNI', b: 'KNG' },
      { a: 'BRD', b: 'LIO' },
    ],
    semifinals: [
      { a: 'Winner QF1', b: 'Winner QF2' },
      { a: 'Winner QF3', b: 'Winner QF4' },
    ],
    final: [{ a: 'Winner SF1', b: 'Winner SF2' }],
  },
};

function MatchCard({ a, b, round }) {
  return (
    <motion.div
      className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center justify-between"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex-1">
        <p className="text-white text-sm font-semibold">{a}</p>
        <p className="text-white/60 text-xs">{round}</p>
      </div>
      <span className="px-2 text-white/40">vs</span>
      <div className="flex-1 text-right">
        <p className="text-white text-sm font-semibold">{b}</p>
        <p className="text-white/60 text-xs">{round}</p>
      </div>
    </motion.div>
  );
}

export default function Bracket({ game = 'Valorant' }) {
  const rounds = BRACKETS[game] ?? BRACKETS.Valorant;

  return (
    <section id="bracket" className="mt-14">
      <div className="flex items-center gap-3">
        <Trophy className="h-5 w-5 text-yellow-300" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">Tournament Bracket</h2>
      </div>
      <p className="text-white/70 text-sm mt-1">Dynamic bracket by game — quarterfinals to the grand final.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-white/80 font-semibold mb-3">Quarterfinals</h3>
          <div className="space-y-3">
            {rounds.quarterfinals.map((m, i) => (
              <MatchCard key={i} a={m.a} b={m.b} round={`QF${i + 1}`} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-white/80 font-semibold mb-3">Semifinals</h3>
          <div className="space-y-3">
            {rounds.semifinals.map((m, i) => (
              <MatchCard key={i} a={m.a} b={m.b} round={`SF${i + 1}`} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-white/80 font-semibold mb-3 flex items-center gap-2">Grand Final <Crown className="h-4 w-4 text-yellow-300" /></h3>
          <div className="space-y-3">
            {rounds.final.map((m, i) => (
              <MatchCard key={i} a={m.a} b={m.b} round={`Final`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
