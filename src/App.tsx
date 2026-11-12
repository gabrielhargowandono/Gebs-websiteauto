/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { WorkTutorial } from './components/WorkTutorial';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col selection:bg-rose-600 selection:text-white">
      {/* Sticky Single-page Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Bagian Pembuka */}
        <Hero />

        {/* Tentang Saya */}
        <About />

        {/* Prestasi Sains & Riset */}
        <Achievements />

        {/* Karya: Panduan IMO 100 Mobile Legends */}
        <WorkTutorial />

        {/* Tautan Publik & Kontak */}
        <SocialLinks />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
