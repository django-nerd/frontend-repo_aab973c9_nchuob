import React from 'react';
import { Users, Sword } from 'lucide-react';

const teams = [
  {
    name: 'Crimson Vipers',
    tag: 'CRV',
    color: 'from-rose-500 to-red-600',
    players: [
      { name: 'Nova', role: 'Duelist' },
      { name: 'Spectre', role: 'Controller' },
      { name: 'Echo', role: 'Sentinel' },
      { name: 'Rush', role: 'Initiator' },
      { name: 'Blitz', role: 'Flex' },
    ],
  },
  {
    name: 'Azure Phantoms',
    tag: 'AZP',
    color: 'from-sky-500 to-blue-600',
    players: [
      { name: 'Draco', role: 'Duelist' },
      { name: 'Mist', role: 'Controller' },
      { name: 'Opal', role: 'Sentinel' },
      { name: 'Kite', role: 'Initiator' },
      { name: 'Pulse', role: 'Flex' },
    ],
  },
  {
    name: 'Neon Titans',
    tag: 'NTN',
    color: 'from-teal-500 to-emerald-600',
    players: [
      { name: 'Vex', role: 'Duelist' },
      { name: 'Cinder', role: 'Controller' },
      { name: 'Halo', role: 'Sentinel' },
      { name: 'Rift', role: 'Initiator' },
      { name: 'Zen', role: 'Flex' },
    ],
  },
];

export default function TeamsShowcase() {
  return (
    <section id="teams" className="mt-14">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Teams</h2>
          <p className="text-white/70 text-sm mt-1">Each team fields five players. Roles cover Duelist, Controller, Sentinel, Initiator, and Flex.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <Users className="h-4 w-4 text-white/80" />
          <span className="text-xs text-white/70">12 teams registered</span>
        </div>
      </div>

      <div className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {teams.map((team) => (
          <div key={team.tag} className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className={`h-1 w-full bg-gradient-to-r ${team.color}`} />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-white/10 text-white/90 text-xs font-bold">{team.tag}</span>
                    {team.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-1">Aggressive, coordinated, and clutch-ready.</p>
                </div>
                <Sword className="h-5 w-5 text-white/60" />
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {team.players.map((p) => (
                  <div key={p.name} className="flex items-center justify-between rounded-lg bg-black/40 border border-white/10 px-3 py-2">
                    <div>
                      <p className="text-white text-sm font-medium">{p.name}</p>
                      <p className="text-white/60 text-xs">{p.role}</p>
                    </div>
                    <span className="text-[10px] text-white/60">#{team.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
