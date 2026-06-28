export interface Project {
  id: string;
  name: string;
  descriptionEN: string;
  descriptionID: string;
  category: 'Web' | 'Desktop/AI' | 'Mobile';
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI/Tools';
  description?: string;
}

export const PORTFOLIO_CONFIG = {
  name: 'Afridho Nur Zaki',
  titleEN: 'Software Engineer | Full-Stack Web & AI Developer',
  titleID: 'Software Engineer | Full-Stack Web & AI Developer',
  githubUsername: 'dhodo999',
  email: 'dashdho2@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/afridho-nur-zaki/',
  githubUrl: 'https://github.com/dhodo999',
  resumeUrl: '/resume/CV_Dhodo.pdf',

  // Custom facts about Afridho
  factsEN: [
    'Experienced in bridging Web apps, WPF desktop clients, and AI APIs.',
    'Passionate about writing clean, maintainable code using TypeScript, C#, and PHP.',
    'Enthusiast of Bun, Rsbuild, and optimizing build pipelines.',
    'Always exploring new frontiers in AI integration and deep learning models.',
  ],
  factsID: [
    'Berpengalaman menghubungkan Web, aplikasi desktop WPF, dan API AI.',
    'Sangat menyukai penulisan kode yang bersih dan mudah dirawat menggunakan TypeScript, C#, dan PHP.',
    'Penggemar Bun, Rsbuild, dan optimalisasi pipeline build.',
    'Selalu mengeksplorasi teknologi baru dalam integrasi AI dan model deep learning.',
  ],

  // Backup static projects
  projects: [
    {
      id: 'sobat-obat',
      name: 'Sobat Obat',
      descriptionEN:
        'An interactive pharmaceutical consultation and store management platform designed for modern web browsers.',
      descriptionID:
        'Platform konsultasi farmasi dan manajemen toko interaktif yang dirancang untuk browser web modern.',
      category: 'Web',
      tech: ['TypeScript', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/dhodo999/sobat-obat',
      isFeatured: true,
    },
    {
      id: 'intermedia-lms',
      name: 'Intermedia LMS',
      descriptionEN:
        'A complete PHP/Laravel-based Learning Management System featuring course management, student progress metrics, and administrator control panels.',
      descriptionID:
        'Sistem Manajemen Pembelajaran (LMS) berbasis PHP/Laravel lengkap yang menampilkan manajemen kursus, metrik kemajuan siswa, dan panel kontrol admin.',
      category: 'Web',
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      githubUrl: 'https://github.com/dhodo999/intermedia-lms',
      isFeatured: true,
    },
    {
      id: 'ambatubees-pos-java',
      name: 'Ambatubees POS',
      descriptionEN:
        'A desktop Point of Sale (POS) system built in Java to process sales transactions, inventory updates, and generate transaction invoices.',
      descriptionID:
        'Sistem Point of Sale (POS) desktop yang dibangun di Java untuk memproses transaksi penjualan, pembaruan inventaris, dan membuat faktur transaksi.',
      category: 'Desktop/AI',
      tech: ['Java', 'Swing', 'MySQL'],
      githubUrl: 'https://github.com/dhodo999/ambatubees-pos-java',
      isFeatured: true,
    },
    {
      id: 'meal-planner-java',
      name: 'Meal Planner Java',
      descriptionEN:
        'A daily meal planning software program written in Java that interfaces with MySQL database models to organize ingredients and menu records.',
      descriptionID:
        'Program perangkat lunak perencanaan makanan harian yang ditulis dalam Java yang menghubungkan model database MySQL untuk mengatur bahan dan catatan menu.',
      category: 'Desktop/AI',
      tech: ['Java', 'MySQL', 'JDBC'],
      githubUrl: 'https://github.com/dhodo999/meal-planner-java',
      isFeatured: true,
    },
    {
      id: 'kalkulator-history-js',
      name: 'Kalkulator History JS',
      descriptionEN:
        'A responsive web calculator application featuring computational logs, calculations history memory storage, and theme adjustment controls.',
      descriptionID:
        'Aplikasi kalkulator web responsif yang menampilkan log komputasi, penyimpanan memori riwayat perhitungan, dan kontrol penyesuaian tema.',
      category: 'Web',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      demoUrl: 'https://kalkulator-history-js.vercel.app',
      githubUrl: 'https://github.com/dhodo999/kalkulator-history-js',
      isFeatured: true,
    },
    {
      id: 'parking-thingspeak-esp8266',
      name: 'IoT Parking ESP8266',
      descriptionEN:
        'An IoT-enabled smart parking lot management system utilizing ultrasonic sensors, ESP8266 microcontrollers, and real-time telemetry logging via ThingSpeak API.',
      descriptionID:
        'Sistem manajemen lot parkir pintar berbasis IoT menggunakan sensor ultrasonik, mikrokontroler ESP8266, dan pencatatan telemetri real-time melalui API ThingSpeak.',
      category: 'Desktop/AI',
      tech: ['C++', 'ESP8266', 'ThingSpeak'],
      githubUrl: 'https://github.com/dhodo999/parking-thingspeak-esp8266',
      isFeatured: true,
    },
  ] as Project[],

  // Grouped skills
  skills: [
    // Frontend
    {
      name: 'React & Next.js',
      category: 'Frontend',
      description: 'Interactive UIs',
    },
    {
      name: 'TypeScript & ES6+',
      category: 'Frontend',
      description: 'Type-safe scripts',
    },
    {
      name: 'WPF (XAML / MVVM)',
      category: 'Frontend',
      description: 'Native Windows desktop',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      description: 'Utility-first layout styling',
    },
    {
      name: 'HTML5 & CSS3',
      category: 'Frontend',
      description: 'Semantic structure',
    },

    // Backend
    {
      name: 'Node.js & Express',
      category: 'Backend',
      description: 'REST APIs & middleware',
    },
    {
      name: 'C# & ASP.NET Core',
      category: 'Backend',
      description: 'Scalable services',
    },
    {
      name: 'PHP & Laravel',
      category: 'Backend',
      description: 'Rapid backend apps',
    },
    {
      name: 'MySQL & PostgreSQL',
      category: 'Backend',
      description: 'Relational data design',
    },
    {
      name: 'MongoDB',
      category: 'Backend',
      description: 'Document-based stores',
    },
    {
      name: 'FastAPI (Python)',
      category: 'Backend',
      description: 'High-performance API endpoints',
    },

    // AI / Tools
    {
      name: 'PyTorch & Transformers',
      category: 'AI/Tools',
      description: 'Deep learning & LLMs',
    },
    {
      name: 'OpenAI API & LangChain',
      category: 'AI/Tools',
      description: 'AI agents',
    },
    {
      name: 'Bun & Rsbuild / Vite',
      category: 'AI/Tools',
      description: 'Blazing fast toolchains',
    },
    {
      name: 'Git & GitHub Actions',
      category: 'AI/Tools',
      description: 'CI/CD and VCS',
    },
    {
      name: 'Unity Engine (C#)',
      category: 'AI/Tools',
      description: 'Interactive environments & game dev',
    },
  ] as Skill[],
};
