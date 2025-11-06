import React from 'react';
import { Trophy, Crown } from 'lucide-react';

const rounds = {
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
  final: [
    { a: 'Winner SF1', b: 'Winner SF2' },
  ],
};

function MatchCard({ a, b, round }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
      <div className="flex-1">
        <p className="text-white text-sm font-semibold">{a}</p>
        <p className="text-white/60 text-xs">{round}</p>
      </div>
      <span className="px-2 text-white/40">vs</span>
      <div className="flex-1 text-right">
        <p className="text-white text-sm font-semibold">{b}</p>
        <p className="text-white/60 text-xs">{round}</p>
      </div>
    </div>
  );
}

export default function Bracket() {
  return (
    <section id="bracket" className="mt-14">
      <div className="flex items-center gap-3">
        <Trophy className="h-5 w-5 text-yellow-300" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">Tournament Bracket</h2>
      </div>
      <p className="text-white/70 text-sm mt-1">Best teams progress from Quarterfinals to Semifinals and the Grand Final.</p>

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
