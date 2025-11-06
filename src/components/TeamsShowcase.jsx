import React from 'react';
import { Users, Sword } from 'lucide-react';
import { motion } from 'framer-motion';

const TEAMS_BY_GAME = {
  Valorant: [
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
  ],
  PUBG: [
    {
      name: 'Storm Hawks',
      tag: 'STH',
      color: 'from-amber-500 to-orange-600',
      players: [
        { name: 'Hawkeye', role: 'IGL' },
        { name: 'Falcon', role: 'Fragger' },
        { name: 'Nomad', role: 'Scout' },
        { name: 'Warden', role: 'Support' },
      ],
    },
    {
      name: 'Shadow Wolves',
      tag: 'SHW',
      color: 'from-zinc-500 to-slate-600',
      players: [
        { name: 'Shade', role: 'Fragger' },
        { name: 'Grim', role: 'IGL' },
        { name: 'Viper', role: 'Scout' },
        { name: 'Keen', role: 'Support' },
      ],
    },
  ],
  FIFA: [
    {
      name: 'Royal Strikers',
      tag: 'RYS',
      color: 'from-emerald-500 to-green-600',
      players: [
        { name: 'Leo', role: 'Attacker' },
        { name: 'Javi', role: 'Playmaker' },
        { name: 'Nico', role: 'Defender' },
        { name: 'Gian', role: 'Keeper' },
      ],
    },
    {
      name: 'Blue United',
      tag: 'BLU',
      color: 'from-sky-500 to-blue-600',
      players: [
        { name: 'Kai', role: 'Attacker' },
        { name: 'Milo', role: 'Playmaker' },
        { name: 'Rami', role: 'Defender' },
        { name: 'Ivo', role: 'Keeper' },
      ],
    },
  ],
};

export default function TeamsShowcase({ game = 'Valorant' }) {
  const teams = TEAMS_BY_GAME[game] ?? TEAMS_BY_GAME.Valorant;

  return (
    <section id="teams" className="mt-14">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Teams</h2>
          <p className="text-white/70 text-sm mt-1">Browse rosters by game. Switch titles above to see different teams.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <Users className="h-4 w-4 text-white/80" />
          <span className="text-xs text-white/70">{teams.length} teams in {game}</span>
        </div>
      </div>

      <motion.div
        layout
        className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {teams.map((team) => (
          <motion.div
            layout
            key={team.tag}
            className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className={`h-1 w-full bg-gradient-to-r ${team.color}`} />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-white/10 text-white/90 text-xs font-bold">{team.tag}</span>
                    {team.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-1">Coordinated and clutch-ready.</p>
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
