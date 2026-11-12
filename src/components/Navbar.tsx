import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Sparkles, BookOpen, User, Trophy, Compass, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['beranda', 'tentang', 'prestasi', 'karya', 'kontak'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', icon: Sparkles },
    { id: 'tentang', label: 'Tentang Saya', icon: User },
    { id: 'prestasi', label: 'Prestasi', icon: Trophy },
    { id: 'karya', label: 'Karya: IMO 100', icon: BookOpen },
    { id: 'kontak', label: 'Tautan & Kontak', icon: Compass },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('beranda');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-rose-600 to-blue-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-rose-500/20">
              <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center font-mono font-bold text-sm tracking-wider text-white">
                <span className="text-rose-400">G</span>
                <span className="text-blue-400">T</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-100 text-base sm:text-lg tracking-tight group-hover:text-white transition-colors block leading-tight">
                Gabriel Triestan
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:block">
                Hargo Wandono • <span className="text-rose-400">Fisika</span> & <span className="text-blue-400">Taktik</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-rose-500/20 to-blue-500/20 text-white border border-rose-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-rose-400' : 'text-slate-400'}`} />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button: Instagram */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PROFILE.instagram.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-rose-600 to-blue-600 hover:from-rose-500 hover:to-blue-500 text-white shadow-md shadow-rose-600/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Instagram</span>
              <span className="text-rose-200 text-[11px] font-normal">@{PROFILE.instagram.handle}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rose-100" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PROFILE.instagram.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Gabriel"
              className="p-2 rounded-lg bg-slate-800/80 text-rose-400 hover:text-white border border-slate-700/60"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b14]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="px-3 py-2 mb-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Navigasi Halaman</span>
            <span className="text-[11px] text-rose-400 font-mono">Gabriel Triestan H. W.</span>
          </div>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-500/20 to-blue-500/20 text-white border border-rose-500/40'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-rose-400' : 'text-slate-400'}`} />
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800/80">
            <a
              href={PROFILE.instagram.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-blue-600 text-white text-sm font-semibold shadow-md"
            >
              <span>Kunjungi Instagram: @{PROFILE.instagram.handle}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
