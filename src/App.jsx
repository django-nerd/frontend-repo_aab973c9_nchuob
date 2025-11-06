import React from 'react';
import HeroHeader from './components/HeroHeader';
import TeamsShowcase from './components/TeamsShowcase';
import Bracket from './components/Bracket';
import StatsAwards from './components/StatsAwards';
import { Rocket } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      <header className="mx-auto max-w-6xl px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-white/60 leading-none">E-Sports</p>
              <h1 className="text-lg font-bold leading-none">Valorant Tournament</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#teams" className="hover:text-white">Teams</a>
            <a href="#bracket" className="hover:text-white">Bracket</a>
            <a href="#awards" className="hover:text-white">Awards</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20 space-y-12">
        <HeroHeader />
        <TeamsShowcase />
        <Bracket />
        <div id="awards">
          <StatsAwards />
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Valorant E-Sports Championship</p>
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
