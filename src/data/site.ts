// =====================================================================
//  SITE DATA  — your CV in structured form.
//  Edit this file to update the About page, home page, and CV sections.
//  Everything here was seeded from CV-Jeremia-2025.pdf.
// =====================================================================

export const site = {
  name: 'Jeremia Manurung',
  title: 'Jeremia Manurung, S.Kom., Gr.',
  tagline:
    'Computer Science graduate & Master’s student — web, mobile & game development, AI/ML.',
  email: 'jeremiaman49@gmail.com',
  github: 'https://github.com/jeremia49',
  orcid: 'https://orcid.org/0009-0002-1809-7480',
  // shown in <head> as the default social/SEO description
  description:
    'Portfolio and blog of Jeremia Manurung — Computer Science (UNIMED), Master’s student at Universitas Gadjah Mada. Web, mobile, game development and applied AI/ML.',
};

export const about = {
  summary: `Passionate Computer Science graduate from Universitas Negeri Medan with a GPA of 3.92, specializing in web, mobile application, and game development. Experienced in delivering scalable technology solutions in education and cooperative sectors, and seeking opportunities to create positive real-world impact through technology. Currently pursuing a Master’s degree in Computer Science at Universitas Gadjah Mada.`,
};

export const employment = [
  {
    role: 'Operator',
    org: 'Koperasi Argado Bona Ni Pinasa',
    period: '2022 – present',
    points: [
      'Developed a cooperative information website using WordPress.',
      'Built a cooperative marketplace system using WordPress, WooCommerce, and WFCM Marketplace.',
      'Developed a website for editing ulos (traditional Batak cloth) using Laravel (PHP) and JavaScript.',
    ],
  },
  {
    role: 'Operator',
    org: 'PAUD Golden Kids Medan',
    period: '2020 – present',
    points: [
      'Managed school tuition (SPP) payments.',
      'Maintained and managed student data.',
    ],
  },
  {
    role: 'Operator',
    org: 'Yayasan LPIJ (Lembaga Pendidikan Indonesia - Jerman)',
    period: '2020 – present',
    points: [
      'Developed and managed the foundation’s information website using Laravel and PHP.',
      'Developed and managed an academic information system website using Laravel and PHP.',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Computer Science',
    org: 'Universitas Gadjah Mada',
    period: '2025 – Present',
    detail: 'Ongoing.',
  },
  {
    degree: 'Teacher Professional Education Program (PPG)',
    org: 'Universitas Negeri Manado',
    period: '2025',
    detail: 'Specialization: Informatics.',
  },
  {
    degree: 'Bachelor of Computer Science',
    org: 'Universitas Negeri Medan',
    period: '2020 – 2024',
    detail:
      'GPA 3.92. Thesis: Implementation of Convolutional Neural Networks (CNN) for Road Condition Classification and Development of an Android-Based Geographic Information System (Case Study: Simalungun Regency).',
  },
  {
    degree: 'Senior High School (Natural Sciences / IPA)',
    org: 'SMA S Methodist 2 Medan',
    period: '2017 – 2020',
    detail: '',
  },
];

export const publications = [
  {
    authors: 'J. Manurung, M. As, H. Nasution, S. I. Al Idrus, and K. Saputra',
    title:
      'Automatic classifier of road condition and early warning system for potholes',
    venue:
      'Indonesian Journal of Artificial Intelligence and Data Mining, vol. 8, no. 1, pp. 249–261, 2025',
    doi: 'https://doi.org/10.24014/ijaidm.v8i1.31866',
  },
  {
    authors:
      'F. Aulia, K. H. Hasibuan, J. Manurung, P. Ambarita, A. Azkia, and K. Saputra',
    title:
      'Al-mate: Solusi pembelajaran matematika SMP swasta Jambi Medan di masa pandemi',
    venue:
      'JPPM (Jurnal Pengabdian dan Pemberdayaan Masyarakat), vol. 7, no. 2, pp. 405–410, 2023',
    doi: 'https://doi.org/10.30595/jppm.v7i2.11477',
  },
  {
    authors:
      'J. Manurung, N. Azizi, D. Anastasya, N. Valentino, A. Sanjaya, and K. Saputra',
    title:
      'Deteksi kemacetan dengan deep learning YOLOv4 dan Euclidean distance tracker pada jalan raya di kota Medan',
    venue:
      'JUSTINDO (Jurnal Sistem dan Teknologi Informasi Indonesia), vol. 8, no. 1, pp. 57–63, 2023',
    doi: 'https://doi.org/10.32528/justindo.v8i1.220',
  },
];

export const skills = [
  { group: 'Languages', items: ['Bahasa Indonesia', 'English'] },
  {
    group: 'Coding',
    items: ['Python', 'JavaScript', 'PHP', 'Go', 'Kotlin', 'Java', 'C#', 'C/C++', 'LaTeX'],
  },
  { group: 'AI', items: ['TensorFlow', 'TensorFlow Lite', 'PyTorch'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite'] },
  { group: 'Web Dev', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'] },
  { group: 'Mobile Dev', items: ['Native Android', 'Flutter', 'React Native'] },
  { group: 'Game Dev', items: ['Unity 2D', 'Unity 3D'] },
  { group: 'Misc.', items: ['Academic research', 'Teaching', 'Training', 'Consultation'] },
];

export const awards = [
  {
    year: '2025',
    title: 'Beasiswa Unggulan Magister Scholarship Awardee',
    org: 'Ministry of Education, Culture, Research, and Technology (Kemendikbud)',
  },
  {
    year: '2024',
    title: 'Best Graduate Award',
    org: 'Universitas Negeri Medan (UNIMED)',
  },
  {
    year: '2024',
    title: 'PKM–PI Funding Recipient',
    org: '“Kreasi Teselasi Pemanfaatan Etnomatematika pada Motif Ulos Berbasis Website di Koperasi Argado Bona Ni Pinasa” — Kemendikbud',
  },
  {
    year: '2023',
    title: 'Graduate with Distinction',
    org: 'Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka',
  },
  {
    year: '2023',
    title: 'PKM–PI Funding Recipient',
    org: '“Kreasi Teselasi Pemanfaatan Etnomatematika pada Motif Ulos Berbasis Website di Koperasi Argado Bona Ni Pinasa” — Kemendikbud',
  },
  {
    year: '2022',
    title: 'Second Place, Programming Competition',
    org: 'DIMAS-TI AMLI',
  },
  {
    year: '2021',
    title: 'Finalist, Competitive Programming',
    org: 'GEMASTIK',
  },
  {
    year: '2021',
    title: 'Finalist, Capture The Flag',
    org: 'GEMASTIK',
  },
  {
    year: '2022',
    title: 'PKM–PM Funding Recipient',
    org: '“Smart AR Mathematics Book berbasis Kearifan Lokal…” — Kemendikbud',
  },
  {
    year: '2021',
    title: 'PKM–PM Funding Recipient',
    org: '“Al-Mate: Model Pembelajaran Matematika di Masa Pandemi Berbasis Virtual Web” — Kemendikbud',
  },
];

export const certifications = [
  { year: '2025', title: 'Uji Kemahiran Bahasa Indonesia (Score 695 — Sangat Unggul)', org: 'Kemendikdasmen' },
  { year: '2025', title: 'TOEFL ITP (Score 597)', org: 'Colorado Course Bengkulu' },
  { year: '2025', title: 'TOEFL ITP (Score 587)', org: 'Universitas Negeri Medan' },
  { year: '2024', title: 'Back-End for Beginners with JavaScript', org: 'Dicoding Indonesia' },
  { year: '2024', title: 'Basic JavaScript Programming', org: 'Dicoding Indonesia' },
  { year: '2023', title: 'TensorFlow Developer Certificate', org: 'TensorFlow Certificate Program' },
  { year: '2023', title: 'DeepLearning.AI TensorFlow Developer Specialization', org: 'Coursera' },
  { year: '2023', title: 'TensorFlow: Data and Deployment Specialization', org: 'Coursera' },
  { year: '2023', title: 'Machine Learning Specialization', org: 'Coursera' },
  { year: '2023', title: 'Mathematics for Machine Learning Specialization', org: 'Coursera' },
  { year: '2023', title: 'Data Visualization Fundamentals', org: 'Dicoding Indonesia' },
  { year: '2023', title: 'Python Programming Fundamentals', org: 'Dicoding Indonesia' },
  { year: '2022', title: 'Machine Learning for Beginners', org: 'Dicoding Indonesia' },
  { year: '2022', title: 'Flutter App Development for Beginners', org: 'Dicoding Indonesia' },
  { year: '2022', title: 'Dart Programming Fundamentals', org: 'Dicoding Indonesia' },
  { year: '2021', title: 'Python', org: 'Progate' },
  { year: '2020', title: 'React', org: 'Progate' },
];

// Navigation shown in the header
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];
