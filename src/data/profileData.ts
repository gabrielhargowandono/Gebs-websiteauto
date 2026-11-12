export interface Achievement {
  id: string;
  title: string;
  organizer: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  icon: 'trophy' | 'award' | 'atom' | 'compass';
}

export interface TutorialChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  keyPoints: string[];
  explanation: string;
  proTip: string;
}

export const PROFILE = {
  name: "Gabriel Triestan Hargo Wandono",
  shortName: "Gabriel",
  initials: "GTHW",
  tagline: "Peneliti Muda & Peminat Fisika | Penyusun Strategi Taktis",
  focus: "Fisika",
  focusDescription: "Mendalami hukum-hukum Fisika, mekanika, termodinamika, serta pemodelan analitis yang melatih ketelitian logika dan pemecahan masalah kompleks.",
  bio: "Juara 1 Lomba Peneliti Belia tingkat Nasional Bidang Geografi, Finalis Kompetisi Sains Ruang Guru 2024-2026.",
  bioLong: "Saya adalah pelajar dan peneliti muda yang memiliki minat mendalam pada disiplin Fisika dan ilmu kebumian. Dengan fondasi logika ilmiah dan analisis empiris, saya memadukan rasa ingin tahu akademis dengan pendekatan rasional dalam menghadapi setiap tantangan—baik dalam riset penelitian belia, kompetisi sains bergengsi, hingga perumusan strategi kompetitif makro dan mikro.",
  instagram: {
    handle: "iyellthll_",
    displayUrl: "instagram.com/iyellthll_",
    fullUrl: "https://instagram.com/iyellthll_",
  },
  stats: [
    { label: "Fokus Akademik", value: "Fisika", detail: "Analisis & Logika Sains" },
    { label: "Tingkat Nasional", value: "Juara 1", detail: "Lomba Peneliti Belia" },
    { label: "Kompetisi Sains", value: "Finalis", detail: "Ruang Guru 2024–2026" },
    { label: "Target Rank ML", value: "IMO 100", detail: "Metode Rasional Teruji" },
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "lpb-nasional",
    title: "Juara 1 Lomba Peneliti Belia (LPB) Tingkat Nasional",
    organizer: "Center for Young Scientists (CYS) / Tingkat Nasional",
    year: "Tingkat Nasional",
    category: "Bidang Geografi",
    description: "Meraih peringkat pertama dalam kompetisi riset ilmiah belia nasional dengan menyusun karya ilmiah berbasis observasi lapangan, analisis data spasial, dan metodologi riset yang ketat.",
    tags: ["Juara 1 Nasional", "Riset Ilmiah", "Geografi & Lingkungan", "Metodologi Ilmiah"],
    icon: "trophy"
  },
  {
    id: "ruangguru-sains",
    title: "Finalis Kompetisi Sains Ruang Guru",
    organizer: "Ruang Guru",
    year: "2024 – 2026",
    category: "Sains & Analisis Kritis",
    description: "Berhasil lolos hingga babak final dalam kompetisi sains terkemuka berskala nasional, menguji penguasaan konsep fisika, pemecahan soal berdaya nalar tinggi (HOTS), dan konsistensi kompetitif.",
    tags: ["Finalis", "Kompetisi Sains Nasional", "Fisika & Problem Solving", "2024–2026"],
    icon: "award"
  }
];

export const WORK_DATA = {
  title: "Panduan Menuju Mythical Immortal 100 Bintang (IMO 100)",
  game: "Mobile Legends: Bang Bang",
  tagline: "Metode Rasional, Terstruktur, dan Masuk Akal Tanpa Menjadi 'Dark Sistem'",
  summary: "Tutorial komprehensif cara menembus Mythical Immortal (IMO) 100 Stars di Mobile Legends dengan pendekatan analitis yang masuk akal dan dapat diikuti oleh siapa saja. Menghapus ketergantungan pada keberuntungan atau kepasrahan terhadap 'dark sistem' melalui manajemen makro, timing objektif, disiplin hero pool, serta evaluasi berbasis hasil nyata.",
  chapters: [
    {
      id: "ch1",
      number: "01",
      title: "Dekonstruksi Pola Pikir & Manajemen Algoritma Matchmaking",
      subtitle: "Memahami Cara Keluar dari Siklus Negatif 'Dark Sistem'",
      explanation: "Banyak pemain menyalahkan 'dark sistem' ketika mengalami kekalahan beruntun, padahal sebagian besar kekalahan di rank tinggi berasal dari 'tilt queueing' (terus memaksakan main saat emosi tidak stabil) dan hilangnya fokus objektif. Untuk mencapai IMO 100, langkah pertama adalah menerapkan disiplin mental ilmiah: anggap setiap match sebagai variabel terkontrol.",
      keyPoints: [
        "Aturan 'Max 2 Lose Streak': Jika kalah 2 kali berturut-turut, wajib berhenti minimal 30 menit. Reset fokus dan mental.",
        "Stop bermain dengan emosi: Tidak mengetik di chat in-game untuk hal tidak penting, gunakan quick chat & ping taktikal.",
        "Manajemen jam bermain: Hindari jam rawan troll party dan pilih waktu di mana koneksi serta fokus sedang prima."
      ],
      proTip: "Pemain IMO 100 konsisten bukan yang tidak pernah dapat tim acak, melainkan yang tidak membiarkan kekalahan satu match merusak performa match berikutnya."
    },
    {
      id: "ch2",
      number: "02",
      title: "Fisika Pertempuran: Makro & Manajemen Wave Minion",
      subtitle: "Kalkulasi Waktu Spawn, Rotasi Matematis, dan Jalur Minion",
      explanation: "Mobile Legends di tier Immortal bukan lagi soal mekanik tangan semata, melainkan perhitungan ruang dan waktu (spatiotemporal). Wave minion adalah jam detak sebenarnya di Land of Dawn. Ketika kamu mengontrol jalur minion, kamu mengontrol pergerakan musuh.",
      keyPoints: [
        "Setup Wave Sebelum Turtle/Lord: Wajib 'cut' atau 'push' wave minion di sisi berlawanan objektif 35 detik sebelum Lord/Turtle spawn.",
        "Kalkulasi Rotasi Efisien: Jangan merotasi melewati semak tanpa visi. Selalu ambil jalur teraman kecuali tim memiliki kontrol map penuh.",
        "Visi dan Bush Zoning: Roamer dan Midlaner wajib membuka bush strategis tanpa harus menunjukkan posisi sebelum teamfight pecah."
      ],
      proTip: "Satu wave minion yang masuk ke turret musuh bernilai lebih dari 1 kill kosong tanpa objektif."
    },
    {
      id: "ch3",
      number: "03",
      title: "Hero Pool Terukur & Fleksibilitas Tanpa Beban",
      subtitle: "Menguasai 2-3 Hero Pilar per Role yang Stabil di Segala Meta",
      explanation: "Kesalahan umum yang membuat pemain menjadi beban atau 'dark sistem' bagi timnya adalah memaksakan hero yang sedang out-of-meta atau memainkan hero mekanik tinggi tanpa konsistensi. Strategi rasional ke IMO 100 adalah menguasai hero yang memiliki utility tinggi dan daya balik keadaan.",
      keyPoints: [
        "Spesialisasi 1 Main Role + 1 Role Cadangan (wajib bisa Roamer atau EXP jika terpaksa filling).",
        "Pilih hero dengan kemampuan clear wave cepat dan crowd control (CC) yang tidak mudah di-counter.",
        "Drafting cerdas: Prioritaskan sinergi tim di atas ego solo carry. Ambil hero yang menutup kelemahan draft."
      ],
      proTip: "Pemain hebat di Immortal adalah pemain yang bisa menang meski tidak mendapatkan kill terbanyak."
    },
    {
      id: "ch4",
      number: "04",
      title: "Eksekusi Late Game & 'Lord Dance' Rasional",
      subtitle: "Disiplin Penentuan Target dan Penyelesaian Game yang Bersih",
      explanation: "Di atas 70 bintang, game sering kali ditentukan oleh satu keputusan di menit 18+ (Enhanced Lord). Di fase ini, kekalahan terjadi bukan karena kekurangan damage, tetapi karena ketidaksabaran atau overcommit di luar base musuh.",
      keyPoints: [
        "Disiplin Lord: Jangan paksa Lord jika midlaner/jungler tim belum siap atau ulti krusial musuh masih aktif.",
        "Lord Baiting: Gunakan Lord untuk memancing musuh keluar dari safe zone mereka, bukan sekadar memukul Lord hingga sekarat saat musuh masih lengkap 5 orang.",
        "Target Prioritization: Kunci sumber damage musuh terlebih dahulu, jangan buang seluruh skill ultimate pada tank musuh."
      ],
      proTip: "Sabar adalah senjata terkuat di late game. Menunggu musuh melakukan blunder lebih efektif daripada memaksakan dive."
    },
    {
      id: "ch5",
      number: "05",
      title: "Hasil & Evaluasi Nyata (The Outcome)",
      subtitle: "Tolok Ukur Keberhasilan dan Peningkatan Win Rate Konsisten",
      explanation: "Dengan menerapkan seluruh metodologi rasional ini secara disiplin, hasil yang dicapai bukan sekadar angka bintang, melainkan stabilitas statistik dan kualitas permainan.",
      keyPoints: [
        "Kenaikan Win Rate: Win rate ranked stabil di kisaran 65% - 75%+ dalam solo/duo/trio.",
        "Penurunan Kematian Tak Perlu: Rata-rata death per game menurun drastis karena kesadaran map makro yang tinggi.",
        "Pencapaian IMO 100 Stars: Menembus tier Mythical Immortal 100 bintang secara masuk akal, terhormat, dan konsisten tanpa joki."
      ],
      proTip: "Catat dan evaluasi 1 kesalahan utama dari setiap match yang kalah. Perbaikan kecil yang konsisten selalu menghasilkan lompatan besar."
    }
  ],
  checklist: [
    "Koneksi internet stabil (Ping hijau < 30ms)",
    "Kondisi mental tenang dan tidak sedang lelah/tertekan",
    "Komitmen menerapkan aturan Max 2 Lose Streak (berhenti bila kalah 2x)",
    "Memeriksa hero pool yang siap dimainkan sesuai draft",
    "Mematikan ego pribadi demi objektif utama (menghancurkan base musuh)"
  ]
};
