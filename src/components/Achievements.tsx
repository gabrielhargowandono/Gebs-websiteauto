import React from 'react';
import { Trophy, Award, Sparkles, CheckCircle2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/profileData';

export const Achievements: React.FC = () => {
  return (
    <section id="prestasi" className="py-20 relative bg-slate-950/50 border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-blue-400" />
            Rekam Prestasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pencapaian & <span className="bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">Gelar Kejuaraan</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Daftar kompetisi riset ilmiah dan kompetisi sains berskala nasional yang telah diraih oleh Gabriel Triestan Hargo Wandono.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((item, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={item.id}
                className={`relative rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  isFirst
                    ? 'bg-gradient-to-b from-slate-900/90 to-slate-900/60 border border-rose-500/30 shadow-xl shadow-rose-950/20 hover:border-rose-500/60'
                    : 'bg-gradient-to-b from-slate-900/90 to-slate-900/60 border border-blue-500/30 shadow-xl shadow-blue-950/20 hover:border-blue-500/60'
                }`}
              >
                {/* Top Corner Ribbon / Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                      isFirst
                        ? 'bg-gradient-to-br from-rose-500 to-rose-700 text-white shadow-rose-600/30'
                        : 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-blue-600/30'
                    }`}
                  >
                    {isFirst ? <Trophy className="w-7 h-7" /> : <Award className="w-7 h-7" />}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isFirst
                        ? 'bg-rose-500/15 border border-rose-500/40 text-rose-300'
                        : 'bg-blue-500/15 border border-blue-500/40 text-blue-300'
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                    {item.category} • {item.organizer}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-medium"
                      >
                        <CheckCircle2 className={`w-3 h-3 ${isFirst ? 'text-rose-400' : 'text-blue-400'}`} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting note regarding national competition standards */}
        <div className="mt-12 max-w-3xl mx-auto p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 text-xs sm:text-sm text-slate-300">
          <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <strong className="text-white block font-medium">Pengakuan Standar Akademik Tinggi</strong>
            Pencapaian dalam Lomba Peneliti Belia (LPB) dan Ruang Guru menguji orisinalitas ide, pemahaman konsep fisika, serta daya nalar kritis terhadap masalah saintifik riil.
          </div>
        </div>

      </div>
    </section>
  );
};
