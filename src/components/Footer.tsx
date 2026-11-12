import React from 'react';
import { ArrowUp, Atom, Instagram, Heart, Shield } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070f] border-t border-slate-900 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Left: Branding & Focus */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-[#080d1a] rounded-[7px] flex items-center justify-center text-xs font-mono font-bold text-white">
                  <span className="text-rose-400">G</span>
                  <span className="text-blue-400">T</span>
                </div>
              </div>
              <span className="text-base font-bold text-white">
                {PROFILE.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Fokus <span className="text-rose-400 font-semibold">Fisika</span> • Juara 1 LPB Nasional (Geografi) • Finalis Sains Ruang Guru (2024–2026) • Karya Taktis IMO 100 Mobile Legends.
            </p>
          </div>

          {/* Right: Quick actions & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.instagram.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-rose-400" />
              <span>@{PROFILE.instagram.handle}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-rose-600/20 to-blue-600/20 hover:from-rose-600/30 hover:to-blue-600/30 text-xs font-medium text-white border border-rose-500/30 transition-all cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 text-rose-400" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Dibuat dengan</span>
            <span className="text-rose-500 font-bold">Aksen Merah & Biru</span>
            <span>untuk presentasi ilmiah & taktis</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
