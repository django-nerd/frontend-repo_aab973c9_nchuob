import React, { useState } from 'react';
import HeroHeader from './components/HeroHeader';
import TeamsShowcase from './components/TeamsShowcase';
import Bracket from './components/Bracket';
import StatsAwards from './components/StatsAwards';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const GAMES = ['Valorant', 'PUBG', 'FIFA'];

export default function App() {
  const [selectedGame, setSelectedGame] = useState('Valorant');

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      {/* Top Bar */}
      <header className="mx-auto max-w-6xl px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-white/60 leading-none">E-Sports</p>
              <h1 className="text-lg font-bold leading-none">Gaming Championships</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#teams" className="hover:text-white">Teams</a>
            <a href="#bracket" className="hover:text-white">Bracket</a>
            <a href="#awards" className="hover:text-white">Awards</a>
          </nav>
        </div>

        {/* Game Switcher */}
        <div className="mt-6">
          <div className="inline-flex rounded-xl bg-white/5 border border-white/10 p-1 backdrop-blur">
            {GAMES.map((g) => {
              const active = g === selectedGame;
              return (
                <button
                  key={g}
                  onClick={() => setSelectedGame(g)}
                  className={`relative mx-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
                    active ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="game-pill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 to-pink-600"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{g}</span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-white/60">Currently viewing: <span className="text-white">{selectedGame}</span></p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-6 pb-20 space-y-12">
        <HeroHeader />

        {/* Content Sections */}
        <TeamsShowcase game={selectedGame} />
        <Bracket game={selectedGame} />
        <div id="awards">
          <StatsAwards game={selectedGame} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Multi-Game E-Sports Championship</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/90">Rules</a>
            <a href="#" className="hover:text-white/90">Code of Conduct</a>
            <a href="#" className="hover:text-white/90">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
