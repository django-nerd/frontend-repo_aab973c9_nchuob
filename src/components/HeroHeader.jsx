import React from 'react';
import Spline from '@splinetool/react-spline';
import { Trophy, Users } from 'lucide-react';

export default function HeroHeader() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f1115] via-[#0a0c10] to-[#141726]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 mb-4 border border-white/10 backdrop-blur">
          <Trophy className="h-4 w-4 text-yellow-300" />
          <span className="text-xs tracking-wide uppercase">Valorant E-Sports Championship</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
          Loading Into The Arena
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
          A modern, minimalist loading animation sets the stage while teams gear up for battle.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="#teams"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium shadow-lg shadow-red-600/30 transition"
          >
            <Users className="h-4 w-4" /> View Teams
          </a>
          <a
            href="#bracket"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 backdrop-blur transition"
          >
            <Trophy className="h-4 w-4" /> View Bracket
          </a>
        </div>
      </div>
    </section>
  );
}
