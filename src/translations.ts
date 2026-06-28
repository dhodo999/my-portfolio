export type Language = 'en' | 'id';

export interface ExperienceEntry {
  company: string;
  role: string;
  type?: string;
  duration: string;
  location: string;
  points: string[];
  skills: string[];
  logo?: string;
}

export interface AwardEntry {
  title: string;
  category: string;
  duration: string;
  description: string;
  skills: string[];
}

export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      resume: 'View Resume',
    },
    hero: {
      greeting: "hi, i'm",
      typingTitles: [
        'Dhodo',
        'Software Engineer',
        'Freelancer',
        'Full-Stack Developer',
      ],
      quote: "To me, engineering isn't a skill. It's a way of thinking.",
      cta: 'Get in touch',
      available: 'Available for collaborations',
    },
    about: {
      title: 'About Me',
      paragraph1:
        'I am a Software Engineer driven by the challenge of transforming complex ideas into functional, scalable, and user-centric digital products. My experience bridges frontend interface design, backend architecture, and DevOps automation.',
      paragraph2:
        'I specialize in modern JavaScript/TypeScript web environments (React, Node.js), C# desktop platforms (WPF), and PHP backend APIs (Laravel). I am also highly interested in artificial intelligence, model integration with FastAPI, and optimizing developer workflows using tools like Bun and Rsbuild.',
      paragraph3:
        "When I'm not coding, I study computational physics, write automation scripts for fun, play around with game engines (Unity), and read about technical design architectures.",
      techTitle: 'Tech I Use',
      linkedinLink: 'LinkedIn',
      instaLink: 'Instagram',
    },
    experience: {
      title: 'Experience & Achievements',
      awardsTitle: 'Competitions & Awards',
      workTitle: 'Work Experience',
      awards: [
        {
          title: '1st Place — TechnoSprint 2026',
          category: 'Web Development Competition',
          duration: '2026',
          description:
            'Built Ruang Setara, a gamified web platform for learning BISINDO (Indonesian Sign Language) powered by on-device AI hand-tracking. The system runs MediaPipe Hands and TensorFlow.js entirely in the browser — no video is sent to any server — delivering real-time gesture feedback with full user privacy. Features include a four-stage learning structure, XP-based gamification, competitive leaderboard, achievement system, and dynamic device benchmarking to switch between Snapshot and Real-time AI modes based on device capability.',
          skills: [
            'React 19',
            'TensorFlow.js',
            'MediaPipe',
            'Express.js',
            'Bun',
            'Supabase',
            'Tailwind CSS v4',
          ],
        },
        {
          title: 'Semifinalist — Proxocoris 2025',
          category: 'Web Development Competition',
          duration: '2025',
          description:
            'Collaborated as part of a team to build Airin, a water utility management system that reached the semifinal round of the Proxocoris 2025 international web development competition hosted by Universitas Klabat. The platform handles customer data, billing, meter readings, service management, and dynamic reporting dashboards — built on a scalable Laravel architecture with role-based access control and mobile-ready API endpoints.',
          skills: [
            'PHP',
            'Laravel',
            'JavaScript',
            'Vite',
            'Bootstrap',
            'Sass',
            'Axios',
            'REST API',
          ],
        },
      ] as AwardEntry[],
      work: [
        {
          company: 'CV Prabu Bima Tech',
          role: 'Full-Stack Developer Intern (Periode 2)',
          duration: 'Mar 2025 – Jun 2025',
          location: 'Remote/Onsite',
          points: [
            "HerbaTrace — Developed a traceability and material verification platform for Indonesia's herbal and pharmaceutical industry. Built AI-powered document extraction (CoA & Surat Jalan) using GPT OSS 120B, visual authentication of raw herbal materials via Llama 4 Scout Vision, end-to-end batch traceability with QR Code scanning, and real-time compliance alerts for QC staff. Deployed on Microsoft Azure.",
            'Sobat Obat — Developed a premium AI-powered healthcare assistant for drug interaction checking, medicine label OCR scanning, and secure health vault management. Integrated Groq Qwen 3 (32B) for AI consultation, TomTom API for nearby pharmacy/clinic discovery, Pakasir payment gateway for premium subscriptions, and AES-256-GCM zero-knowledge encryption for health data.',
          ],
          skills: [
            'Next.js',
            'Node.js',
            'Express.js',
            'TypeScript',
            'MongoDB',
            'Azure',
            'React 19',
            'Bun',
            'Groq SDK',
            'TomTom API',
            'Tailwind CSS',
          ],
        },
        {
          company: 'CV Prabu Bima Tech',
          role: 'Full-Stack Developer Intern (Periode 1)',
          duration: 'Okt 2024 – Jan 2025',
          location: 'Remote/Onsite',
          points: [
            'FingerPOS — Developed a Windows desktop application built with WPF and .NET 8 for managing student pocket money (uang saku santri) across pesantren and educational institutions. Implemented multi-role authentication (Admin, Bendahara, Kasir, Supervisor, PJ Unit), cash transaction management, fingerprint-based authentication via DigitalPersona U.are.U SDK, offline mode handling, and Excel export for daily and monthly reports.',
          ],
          skills: [
            'C#',
            'WPF',
            '.NET 8',
            'DigitalPersona SDK',
            'ClosedXML',
            'REST API',
          ],
        },
        {
          company: 'LMS Intermedia',
          role: 'Website Maintainer',
          duration: '2024 – 2025',
          location: 'Purwokerto, Indonesia (Onsite)',
          points: [
            "Responsible for maintaining and ensuring the operational stability of the Intermedia LMS, an internal learning management system built for Amikom Purwokerto's UKM Intermedia.",
            'Handled routine updates, bug fixes, and monitoring to support platform continuity for active users.',
            'The platform supports course management, user roles, and content delivery for organization members.',
          ],
          skills: ['PHP', 'Laravel', 'Blade', 'Tailwind CSS', 'Vite', 'Docker'],
        },
      ] as ExperienceEntry[],
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Showcasing a collection of my featured builds and dynamic live GitHub repositories.',
      filterAll: 'All',
      filterWeb: 'Web',
      filterDesktopAI: 'Desktop & AI',
      filterMobile: 'Mobile',
      liveBadge: 'Live',
      ongoingBadge: 'Ongoing',
      githubExplorerTitle: 'GitHub Explorer',
      githubExplorerDesc:
        'Fetch live code metrics and public repositories directly from any GitHub profile. Enter a username:',
      githubInputPlaceholder: 'GitHub username...',
      githubFetchBtn: 'Fetch Repos',
      githubActiveUser: 'Showing repositories for: ',
      githubError:
        'Failed to fetch repositories. Please check spelling or API limits.',
      githubNoRepos: 'No public repositories found.',
      demoUrl: 'Live Demo',
      githubUrl: 'GitHub Code',
      demoComingSoon: 'Demo coming soon',
    },
    skills: {
      title: 'Skills & Toolkit',
      subtitle: 'My technical stack categorized by area of expertise.',
      frontend: 'Frontend & Mobile',
      backend: 'Backend & Databases',
      aiTools: 'AI & Developer Tools',
    },
    contact: {
      title: 'Get in Touch',
      subtitle:
        "Let's build something amazing together! Fill out the form below or reach out via email.",
      emailLabel: 'Email Address',
      emailCopied: 'Email copied to clipboard!',
      emailCopyError: 'Failed to copy email.',
      formName: 'Name',
      formEmail: 'Email Address',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      formSubmitting: 'Sending...',
      formSuccess: 'Message sent successfully! Thank you for reaching out.',
      errNameRequired: 'Name is required.',
      errEmailInvalid: 'Please enter a valid email address.',
      errMessageShort: 'Message must be at least 10 characters.',
    },
    footer: {
      copyright: 'Afridho Nur Zaki · Software Developer',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      projects: 'Proyek',
      experience: 'Pengalaman',
      resume: 'Lihat Resume',
    },
    hero: {
      greeting: 'halo, saya',
      typingTitles: [
        'Dhodo',
        'Software Engineer',
        'Freelancer',
        'Full-Stack Developer',
      ],
      quote:
        'Bagi saya, rekayasa perangkat lunak bukan sekadar keahlian. Ini adalah cara berpikir.',
      cta: 'Hubungi saya',
      available: 'Tersedia untuk kolaborasi',
    },
    about: {
      title: 'Tentang Saya',
      paragraph1:
        'Saya adalah seorang Software Engineer yang termotivasi oleh tantangan untuk mengubah ide-ide kompleks menjadi produk digital yang fasional, terukur, dan berpusat pada pengguna. Pengalaman saya menjembatani desain antarmuka frontend, arsitektur backend, dan otomatisasi DevOps.',
      paragraph2:
        'Saya berspesialisasi dalam lingkungan web JavaScript/TypeScript modern (React, Node.js), platform desktop C# (WPF), dan API backend PHP (Laravel). Saya juga sangat tertarik pada kecerdasan buatan, integrasi model dengan FastAPI, serta optimalisasi alur kerja pengembang menggunakan Bun dan Rsbuild.',
      paragraph3:
        'Saat tidak sedang memprogram, saya mempelajari fisika komputasi, menulis skrip otomatisasi untuk bersenang-senang, mencoba engine game (Unity), dan membaca tentang arsitektur desain teknis.',
      techTitle: 'Teknologi yang Saya Gunakan',
      linkedinLink: 'LinkedIn',
      instaLink: 'Instagram',
    },
    experience: {
      title: 'Pengalaman & Pencapaian',
      awardsTitle: 'Kompetisi & Penghargaan',
      workTitle: 'Pengalaman Kerja',
      awards: [
        {
          title: 'Juara 1 — TechnoSprint 2026',
          category: 'Kompetisi Pengembangan Web',
          duration: '2026',
          description:
            'Membangun Ruang Setara, sebuah platform web gamifikasi untuk belajar BISINDO (Bahasa Isyarat Indonesia) yang didukung oleh pelacakan tangan AI pada perangkat. Sistem ini menjalankan MediaPipe Hands dan TensorFlow.js sepenuhnya di browser — tidak ada video yang dikirim ke server mana pun — memberikan umpan balik gestur waktu nyata dengan privasi pengguna penuh. Fitur-fiturnya meliputi struktur pembelajaran empat tahap, gamifikasi berbasis XP, papan peringkat kompetitif, sistem pencapaian, dan tolok ukur perangkat dinamis untuk beralih antara mode AI Snapshot dan Real-time berdasarkan kemampuan perangkat.',
          skills: [
            'React 19',
            'TensorFlow.js',
            'MediaPipe',
            'Express.js',
            'Bun',
            'Supabase',
            'Tailwind CSS v4',
          ],
        },
        {
          title: 'Semifinalis — Proxocoris 2025',
          category: 'Kompetisi Pengembangan Web',
          duration: '2025',
          description:
            'Berkolaborasi sebagai bagian dari tim untuk membangun Airin, sistem manajemen utilitas air yang mencapai babak semifinal kompetisi pengembangan web internasional Proxocoris 2025 yang diselenggarakan oleh Universitas Klabat. Platform ini menangani data pelanggan, penagihan, pembacaan meter, manajemen layanan, dan dasbor pelaporan dinamis — dibangun di atas arsitektur Laravel yang terukur dengan kontrol akses berbasis peran dan endpoint API ramah seluler.',
          skills: [
            'PHP',
            'Laravel',
            'JavaScript',
            'Vite',
            'Bootstrap',
            'Sass',
            'Axios',
            'REST API',
          ],
        },
      ] as AwardEntry[],
      work: [
        {
          company: 'CV Prabu Bima Tech',
          role: 'Full-Stack Developer Intern (Periode 2)',
          duration: 'Mar 2025 – Jun 2025',
          location: 'Remote/Onsite',
          points: [
            'HerbaTrace — Mengembangkan platform penelusuran dan verifikasi bahan untuk industri herbal dan farmasi Indonesia. Membangun ekstraksi dokumen bertenaga AI (CoA & Surat Jalan) menggunakan GPT OSS 120B, autentikasi visual bahan herbal mentah melalui Llama 4 Scout Vision, penelusuran batch ujung-ke-ujung dengan pemindaian Kode QR, dan peringatan kepatuhan waktu nyata untuk staf QC. Diterapkan di Microsoft Azure.',
            'Sobat Obat — Mengembangkan asisten perawatan kesehatan premium bertenaga AI untuk pemeriksaan interaksi obat, pemindaian OCR label obat, dan manajemen brankas kesehatan yang aman. Mengintegrasikan Groq Qwen 3 (32B) untuk konsultasi AI, TomTom API untuk penemuan apotek/klinik terdekat, gerbang pembayaran Pakasir untuk langganan premium, dan enkripsi zero-knowledge AES-256-GCM untuk data kesehatan.',
          ],
          skills: [
            'Next.js',
            'Node.js',
            'Express.js',
            'TypeScript',
            'MongoDB',
            'Azure',
            'React 19',
            'Bun',
            'Groq SDK',
            'TomTom API',
            'Tailwind CSS',
          ],
        },
        {
          company: 'CV Prabu Bima Tech',
          role: 'Full-Stack Developer Intern (Periode 1)',
          duration: 'Okt 2024 – Jan 2025',
          location: 'Remote/Onsite',
          points: [
            'FingerPOS — Mengembangkan aplikasi desktop Windows yang dibangun dengan WPF dan .NET 8 untuk mengelola uang saku santri di pesantren dan lembaga pendidikan. Menerapkan autentikasi multi-peran (Admin, Bendahara, Kasir, Supervisor, PJ Unit), manajemen transaksi kas, autentikasi berbasis sidik jari melalui DigitalPersona U.are.U SDK, penanganan mode offline, dan ekspor Excel untuk laporan harian dan bulanan.',
          ],
          skills: [
            'C#',
            'WPF',
            '.NET 8',
            'DigitalPersona SDK',
            'ClosedXML',
            'REST API',
          ],
        },
        {
          company: 'LMS Intermedia',
          role: 'Website Maintainer',
          duration: '2024 – 2025',
          location: 'Purwokerto, Indonesia (Onsite)',
          points: [
            'Bertanggung jawab untuk memelihara dan memastikan stabilitas operasional Intermedia LMS, sistem manajemen pembelajaran internal yang dibangun untuk UKM Intermedia Amikom Purwokerto.',
            'Menangani pembaruan rutin, perbaikan bug, dan pemantauan untuk mendukung kelangsungan platform bagi pengguna aktif.',
            'Platform ini mendukung manajemen kursus, peran pengguna, dan pengiriman konten untuk anggota organisasi.',
          ],
          skills: ['PHP', 'Laravel', 'Blade', 'Tailwind CSS', 'Vite', 'Docker'],
        },
      ] as ExperienceEntry[],
    },
    projects: {
      title: 'Proyek',
      subtitle:
        'Menampilkan koleksi proyek pilihan saya dan repositori GitHub langsung yang diambil secara dinamis.',
      filterAll: 'Semua',
      filterWeb: 'Web',
      filterDesktopAI: 'Desktop & AI',
      filterMobile: 'Mobile',
      liveBadge: 'Aktif',
      ongoingBadge: 'Berjalan',
      githubExplorerTitle: 'Eksplorasi GitHub',
      githubExplorerDesc:
        'Ambil metrik kode langsung dan repositori publik langsung dari profil GitHub mana pun. Masukkan username:',
      githubInputPlaceholder: 'Username GitHub...',
      githubFetchBtn: 'Ambil Repos',
      githubActiveUser: 'Menampilkan repositori dari: ',
      githubError:
        'Gagal mengambil repositori. Silakan periksa ejaan atau batas API.',
      githubNoRepos: 'Tidak ada repositori publik yang ditemukan.',
      demoUrl: 'Demo Langsung',
      githubUrl: 'Kode GitHub',
      demoComingSoon: 'Demo segera hadir',
    },
    skills: {
      title: 'Keahlian & Toolkit',
      subtitle:
        'Toolkit teknis saya yang dikelompokkan berdasarkan bidang keahlian.',
      frontend: 'Frontend & Mobile',
      backend: 'Backend & Database',
      aiTools: 'AI & Alat Pengembang',
    },
    contact: {
      title: 'Hubungi Saya',
      subtitle:
        'Mari membangun sesuatu yang luar biasa bersama! Isi formulir di bawah ini atau hubungi via email.',
      emailLabel: 'Alamat Email',
      emailCopied: 'Email disalin ke papan klip!',
      emailCopyError: 'Gagal menyalin email.',
      formName: 'Nama',
      formEmail: 'Alamat Email',
      formMessage: 'Pesan',
      formSubmit: 'Kirim Pesan',
      formSubmitting: 'Mengirim...',
      formSuccess:
        'Pesan berhasil dikirim! Terima kasih telah menghubungi saya.',
      errNameRequired: 'Nama wajib diisi.',
      errEmailInvalid: 'Silakan masukkan alamat email yang valid.',
      errMessageShort: 'Pesan harus minimal 10 karakter.',
    },
    footer: {
      copyright: 'Afridho Nur Zaki · Software Developer',
    },
  },
};
