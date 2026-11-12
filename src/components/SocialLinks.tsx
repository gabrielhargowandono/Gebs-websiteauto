import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Instagram, MessageCircle, Send, Sparkles, Heart } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const SocialLinks: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [msgText, setMsgText] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.instagram.fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgText.trim()) return;
    setSubmittedMessage(true);
  };

  return (
    <section id="kontak" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-rose-600/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Instagram className="w-3.5 h-3.5 text-rose-400" />
            Tautan Publik & Kontak
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terhubung dengan <span className="bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">Gabriel Triestan</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Kunjungi profil Instagram resmi atau kirim pesan sapaan untuk berdiskusi seputar riset Fisika maupun strategi taktis.
          </p>
        </div>

        {/* Central Social Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Main Instagram Showcase Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#0c1527] border border-slate-800 shadow-xl relative overflow-hidden group hover:border-slate-700 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-rose-500/15 via-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px] shadow-lg shadow-rose-500/20">
                    <div className="w-full h-full bg-[#0a0f1d] rounded-[14px] flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-rose-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">Instagram Resmi</h3>
                    <p className="text-xs text-rose-400 font-mono">@{PROFILE.instagram.handle}</p>
                  </div>
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Aktif
                </span>
              </div>

              <div className="space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
                <div className="text-xs text-slate-400 font-medium">Tautan Profil Publik:</div>
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <span className="truncate">{PROFILE.instagram.displayUrl}</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-200 transition-colors shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Temukan pembaruan seputar aktivitas akademik, riset sains, dan konten menarik lainnya langsung di Instagram.
              </p>
            </div>

            {/* Direct CTA */}
            <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={PROFILE.instagram.fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-blue-600 hover:from-rose-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-rose-600/25 transition-all duration-200"
              >
                <span>Buka Profil @{PROFILE.instagram.handle}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopy}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Tautan Tersalin' : 'Salin Tautan'}</span>
              </button>
            </div>
          </div>

          {/* Quick Note / Interaction Box (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                <MessageCircle className="w-4 h-4" />
                Sapaan / Pesan Cepat
              </div>

              <h3 className="text-lg font-bold text-white">
                Tinggalkan Pesan & Diskusi
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                Ingin bertukar ide seputar pemodelan Fisika, kompetisi sains, atau strategi macro gaming? Kirim pesan langsung di sini.
              </p>

              {submittedMessage ? (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-center space-y-2 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Heart className="w-5 h-5 fill-emerald-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Terima Kasih atas Pesanmu!</h4>
                  <p className="text-xs text-slate-300">
                    Pesanmu telah dicatat. Jangan ragu juga untuk mengirim DM langsung ke Instagram <strong className="text-rose-400">@{PROFILE.instagram.handle}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedMessage(false);
                      setMsgText('');
                    }}
                    className="text-xs text-blue-400 hover:underline pt-1 cursor-pointer"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitNote} className="space-y-3 pt-1">
                  <div>
                    <label htmlFor="input-name" className="text-[11px] font-medium text-slate-400 block mb-1">
                      Nama atau Panggilan
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      value={msgName}
                      onChange={(e) => setMsgName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500/70"
                    />
                  </div>

                  <div>
                    <label htmlFor="input-message" className="text-[11px] font-medium text-slate-400 block mb-1">
                      Pesan atau Pertanyaan
                    </label>
                    <textarea
                      id="input-message"
                      rows={3}
                      required
                      value={msgText}
                      onChange={(e) => setMsgText(e.target.value)}
                      placeholder="Tuliskan pesanmu di sini..."
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500/70 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Sapaan</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] text-slate-500 text-center">
              Website personal statis tanpa server atau pelacakan privasi.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
