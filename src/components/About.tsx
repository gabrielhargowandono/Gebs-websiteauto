import React from 'react';
import { Atom, Compass, Lightbulb, Target, CheckCircle2, BookOpen, Layers } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 relative border-t border-slate-900">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Atom className="w-3.5 h-3.5 text-rose-400" />
            Tentang Saya
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dedikasi pada <span className="bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">Fisika & Pendekatan Ilmiah</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Menghubungkan pemikiran rasional, observasi mendalam, dan pemecahan masalah analitis dalam sains maupun strategi.
          </p>
        </div>

        {/* Grid Layout: Main Narrative + Interactive Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative (Left side - 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  Filosofi Belajar & Riset
                </div>

                <p className="text-white font-medium text-lg leading-snug">
                  Halo! Saya <span className="text-rose-400 font-bold">{PROFILE.name}</span>. Bidang utama yang menjadi fokus dan dedikasi saya adalah <span className="text-blue-400 font-bold">Fisika</span>.
                </p>

                <p>
                  Bagi saya, Fisika bukan sekadar rumus di atas kertas, melainkan sebuah kerangka berpikir (<i>framework of thinking</i>). Fisika melatih kita melihat sistem yang rumit, mengidentifikasi variabel yang menentukan, serta memprediksi hasil secara rasional melalui hukum-hukum fundamental alam.
                </p>

                <p>
                  Pola pikir ini membawa saya meraih prestasi sebagai <strong className="text-rose-300 font-semibold">Juara 1 Lomba Peneliti Belia tingkat Nasional (Bidang Geografi)</strong> dan menjadi <strong className="text-blue-300 font-semibold">Finalis Kompetisi Sains Ruang Guru 2024–2026</strong>. Pengalaman riset dan kompetisi mengasah ketelitian metodologi, kemampuan analisis data, serta ketahanan mental dalam menghadapi tantangan berdaya nalar tinggi.
                </p>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 italic border-l-4 border-l-rose-500">
                  &ldquo;Jika sebuah masalah dipecah menjadi variabel-variabel dasarnya, tidak ada kekacauan yang tidak bisa dipahami—baik dalam fenomena fisis maupun dalam pertandingan kompetitif.&rdquo;
                </div>
              </div>
            </div>

            {/* Quick Core Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-500/15 text-rose-400 shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Analisis Empiris</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Berpikir berbasis data, bukan asumsi.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Pemikiran Sistemik</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Memahami sebab-akibat setiap pergerakan.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400 shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Orientasi Solusi</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Hasil terukur dan dapat direplikasi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side Profile Details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Identity Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-blue-600 p-[2px] shadow-lg shadow-rose-600/20">
                  <div className="w-full h-full bg-[#090e1a] rounded-[14px] flex items-center justify-center">
                    <Atom className="w-7 h-7 text-rose-400 animate-spin-slow" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Profil Ringkas</h3>
                  <p className="text-xs text-slate-400 font-mono">ID: {PROFILE.name}</p>
                </div>
              </div>

              <div className="space-y-4 pt-5">
                <div>
                  <span className="text-xs font-medium text-slate-400 block">Nama Lengkap</span>
                  <span className="text-sm font-semibold text-slate-100">{PROFILE.name}</span>
                </div>

                <div>
                  <span className="text-xs font-medium text-slate-400 block">Fokus Utama</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm font-bold text-rose-400">{PROFILE.focus}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 font-mono">Sains & Pemodelan</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-medium text-slate-400 block">Bio & Rekam Jejak</span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    {PROFILE.bio}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-medium text-slate-400 block">Minat Tambahan</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                      Geografi Spasial
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                      Analisis Makro Game
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                      Logika Kompetitif
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#prestasi"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-xs font-semibold text-white border border-slate-700 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    Lihat Rincian Prestasi Ilmiah
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
