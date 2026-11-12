import React from 'react';
import { ArrowDown, Atom, Trophy, Compass, Sparkles, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic ambient background glows: Crimson Rose on top-left, Electric Sapphire on bottom-right */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-1000" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-r from-rose-900/10 via-slate-900/0 to-blue-900/10 blur-2xl pointer-events-none -z-10" />

      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg shadow-black/30 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Portofolio Personal & Rekam Jejak
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs font-mono font-medium text-blue-400 flex items-center gap-1">
              <Atom className="w-3.5 h-3.5" /> Fokus Fisika
            </span>
          </div>

          {/* Main Name Heading with Dual Red-Blue Gradient */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Gabriel Triestan <br />
              <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-blue-500 bg-clip-text text-transparent">
                Hargo Wandono
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              Peneliti Muda dengan fokus pada <span className="text-rose-400 font-semibold underline decoration-rose-500/50 underline-offset-4">Fisika</span>, peraih gelar juara riset sains, dan perumus metode taktis logis.
            </p>
          </div>

          {/* Bio Summary Callout Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 shadow-xl backdrop-blur-md text-left relative overflow-hidden group hover:border-slate-700 transition-all">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-rose-500" />
                  Ringkasan Rekam Jejak & Bio Resmi
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-medium">
                  {PROFILE.bio}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                  <Atom className="w-3.5 h-3.5 text-blue-400" /> Sains & Geografi
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollTo('karya')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-blue-600 hover:from-rose-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-rose-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Pelajari Karya: Tutorial IMO 100</span>
            </button>

            <button
              onClick={() => scrollTo('tentang')}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Tentang & Prestasi</span>
            </button>

            <a
              href={PROFILE.instagram.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-rose-300 font-semibold text-sm border border-slate-700/80 transition-all duration-200 group"
            >
              <span>Instagram: @{PROFILE.instagram.handle}</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-400 transition-colors" />
            </a>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 text-left">
            {PROFILE.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors backdrop-blur-sm"
              >
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                <div className="text-xl sm:text-2xl font-extrabold text-white mt-1 flex items-center gap-2">
                  <span className={idx % 2 === 0 ? "text-rose-400" : "text-blue-400"}>
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">{stat.detail}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center pt-14">
          <button
            onClick={() => scrollTo('tentang')}
            className="flex flex-col items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer group"
          >
            <span>Gulir untuk eksplorasi</span>
            <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-slate-600 transition-colors">
              <ArrowDown className="w-4 h-4 animate-bounce text-rose-400" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
