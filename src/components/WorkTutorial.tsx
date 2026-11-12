import React, { useState } from 'react';
import { BookOpen, CheckSquare, Square, Swords, Shield, Zap, Flame, Brain, Sparkles, TrendingUp, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { WORK_DATA } from '../data/profileData';

export const WorkTutorial: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState(WORK_DATA.chapters[0].id);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true
  });

  const activeChapter = WORK_DATA.chapters.find((c) => c.id === activeChapterId) || WORK_DATA.chapters[0];

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const totalChecked = Object.values(checkedItems).filter(Boolean).length;
  const checklistPercentage = Math.round((totalChecked / WORK_DATA.checklist.length) * 100);

  return (
    <section id="karya" className="py-20 relative border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-500/15 to-blue-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-rose-400" />
            Karya & Panduan Taktis
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tutorial Cara Naik ke <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-blue-400 bg-clip-text text-transparent">IMO 100 Mobile Legends</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Memberi tutorial cara ke IMO di ML tapi dengan cara yang <strong className="text-white">masuk akal</strong> dan <strong className="text-white">dapat diikuti</strong> tanpa menjadi dark sistem, beserta hasilnya.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3.5 py-1 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Karya ditampilkan langsung sebagai teks panduan interaktif lengkap</span>
          </div>
        </div>

        {/* Highlight Banner: Filosofi Masuk Akal vs Dark Sistem */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-[#0c1427] border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 via-purple-500 to-blue-500" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                <Brain className="w-4 h-4" />
                Pendekatan Rasional & Masuk Akal
              </div>
              <h3 className="text-xl font-bold text-white">
                Bukan Sekadar Push Rank, Ini Soal Keputusan Terkalkulasi
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Banyak orang terjebak menjadi <i>&quot;dark sistem&quot;</i>—memilih hero secara egois, bermain saat sedang emosi (tilt), atau menyalahkan matchmaking acak. Dengan menerapkan prinsip analitis (mirip hukum Fisika: aksi, reaksi, dan probabilitas ruang), perjalanan menuju Mythical Immortal 100 Bintang dapat dicapai secara sistematis dan terukur.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Target Pencapaian:</span>
                <span className="text-rose-400 font-bold font-mono">100 Stars</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Tier Tujuan:</span>
                <span className="text-blue-400 font-bold">Mythical Immortal</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Metode Utama:</span>
                <span className="text-emerald-400 font-bold">Anti-Dark Sistem</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Chapter Navigation + Reader View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Chapter Selector (Left - 4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 pb-1 flex items-center justify-between">
              <span>Daftar Bab Panduan</span>
              <span className="font-mono text-rose-400">{WORK_DATA.chapters.length} Bab</span>
            </div>

            <div className="space-y-2">
              {WORK_DATA.chapters.map((ch) => {
                const isActive = ch.id === activeChapterId;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapterId(ch.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 border cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-gradient-to-r from-rose-950/40 via-slate-900 to-blue-950/40 border-rose-500/50 shadow-lg text-white'
                        : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/60 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                          isActive
                            ? 'bg-gradient-to-br from-rose-500 to-blue-600 text-white shadow-md'
                            : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                        }`}
                      >
                        {ch.number}
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-snug line-clamp-1">{ch.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{ch.subtitle}</div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? 'text-rose-400 translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Interactive Checklist Widget */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                  <CheckSquare className="w-4 h-4 text-blue-400" />
                  Checklist Anti-Dark Sistem
                </div>
                <span className="text-xs font-mono font-bold text-rose-400">
                  {checklistPercentage}% Siap
                </span>
              </div>

              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-gradient-to-r from-rose-500 to-blue-500 h-full transition-all duration-300"
                  style={{ width: `${checklistPercentage}%` }}
                />
              </div>

              <p className="text-[11px] text-slate-400 mb-3">
                Centang kesiapan dirimu sebelum menekan tombol &apos;Matchmaking&apos;:
              </p>

              <div className="space-y-2">
                {WORK_DATA.checklist.map((item, idx) => {
                  const isChecked = !!checkedItems[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className="w-full text-left flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer group"
                    >
                      <div className="pt-0.5 text-slate-400 group-hover:text-rose-400">
                        {isChecked ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                      <span
                        className={`text-xs leading-tight ${
                          isChecked ? 'text-slate-200 line-through opacity-70' : 'text-slate-300'
                        }`}
                      >
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Active Chapter Detail View (Right - 8 cols) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Chapter Header */}
              <div className="pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-gradient-to-r from-rose-500 to-rose-600 text-white font-mono font-bold text-xs">
                    Bab {activeChapter.number}
                  </span>
                  <span className="text-xs font-mono text-blue-400">Karya Taktis ML</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {activeChapter.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1 font-medium">
                  {activeChapter.subtitle}
                </p>
              </div>

              {/* Chapter Body / Explanation */}
              <div className="py-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Brain className="w-3.5 h-3.5 text-rose-400" />
                    Analisis & Landasan Logis
                  </h4>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {activeChapter.explanation}
                  </p>
                </div>

                {/* Key Points (Cara yang Masuk Akal & Dapat Diikuti) */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Swords className="w-3.5 h-3.5 text-blue-400" />
                    Langkah Nyata yang Dapat Diikuti (Actionable Steps)
                  </h4>
                  <div className="space-y-2.5">
                    {activeChapter.keyPoints.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {pIdx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tip Box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/30 via-slate-900 to-blue-950/30 border border-slate-700/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      Kaidah Utama (Golden Rule):
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 italic">
                      &ldquo;{activeChapter.proTip}&rdquo;
                    </p>
                  </div>
                </div>

              </div>

              {/* Navigation footer between chapters */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Bab {activeChapter.number} dari {WORK_DATA.chapters.length}
                </span>

                <div className="flex items-center gap-2">
                  {WORK_DATA.chapters.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => setActiveChapterId(ch.id)}
                      className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        ch.id === activeChapterId
                          ? 'bg-rose-500 text-white shadow-sm'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {ch.number}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
