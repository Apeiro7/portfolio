export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'C / C++', level: 85, category: 'Languages' },
  { name: 'JavaScript', level: 80, category: 'Languages' },
  { name: 'HTML & CSS', level: 88, category: 'Languages' },
  { name: 'SQL', level: 82, category: 'Languages' },
  { name: 'Django', level: 78, category: 'Frameworks' },
  { name: 'Next.js', level: 75, category: 'Frameworks' },
  { name: 'Bootstrap', level: 85, category: 'Frameworks' },
  { name: 'TensorFlow', level: 80, category: 'Frameworks' },
  { name: 'SUMO', level: 82, category: 'Frameworks' },
  { name: 'Linux', level: 80, category: 'Tools' },
  { name: 'Google Cloud (GCP)', level: 75, category: 'Tools' },
  { name: 'GitHub', level: 88, category: 'Tools' },
  { name: 'VS Code', level: 90, category: 'Tools' },
  { name: 'Anaconda / Colab', level: 82, category: 'Tools' },
  { name: 'MySQL', level: 80, category: 'Tools' },
  { name: 'Canva', level: 75, category: 'Design' },
  { name: 'MS Office Suite', level: 85, category: 'Design' },
];

export const projects = [
  {
    title: 'Adaptive Traffic Management System',
    description:
      'Built using Reinforcement Learning and Deep Learning to optimize traffic flow. Achieved 15% faster travel time and 12% lower waiting time using LSTM and Q-Learning. Trained models on real-time SUMO data over 500 steps with 25+ traffic lights.',
    tags: ['SUMO', 'Python', 'TensorFlow', 'Q-Learning', 'LSTM', 'CNN'],
    image: '🚦',
    color: 'from-emerald-500/20 to-cyan-500/20',
    borderColor: 'border-emerald-500/30',
    link: '#',
    github: '#',
    date: 'Dec 2024',
  },
  {
    title: 'CDTARS – Congestion Detection & Routing',
    description:
      'Congestion Detection and Traffic Adaptive Routing System. Reduced congestion and waiting time by 10% using CNN and LSTM-based congestion prediction. Trained models with 10,000+ data points from SUMO, achieving 92% prediction accuracy.',
    tags: ['Python', 'TensorFlow', 'Reinforcement Learning', 'SUMO'],
    image: '🛣️',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
    link: '#',
    github: '#',
    date: 'Nov 2023',
  },
];

export const experiences = [
  {
    role: 'VAPT Intern (Virtual)',
    company: 'C3i Hub, IIT Kanpur',
    location: 'Bilaspur, CG',
    period: 'Jan 2024 – Feb 2024',
    description:
      'Gained hands-on experience in vulnerability assessment and penetration testing across embedded systems and web applications.',
    achievements: [
      'Gained hands-on experience with embedded systems, embedded OS, and bootloaders',
      'Acquired expertise in application penetration testing and web penetration testing',
      'Enhanced cybersecurity skills across various domains',
    ],
  },
  {
    role: 'Cybersecurity Team Lead',
    company: 'Google Developer Student Clubs',
    location: 'Bilaspur, CG',
    period: 'Jul 2023 – Jun 2024',
    description:
      'Led cybersecurity initiatives and conducted workshops to strengthen students\' cybersecurity awareness and skills.',
    achievements: [
      'Spearheaded initiatives to improve campus-wide security awareness and best practices',
      'Coordinated and conducted multiple workshops and projects to strengthen students\' cybersecurity skills',
    ],
  },
  {
    role: 'Employability Skill Development Program',
    company: 'Zensar (RPG Foundation)',
    location: 'Bilaspur, CG',
    period: 'Dec 2023 – Mar 2024',
    description:
      'Completed extensive training on technical and interpersonal skills essential for professional growth.',
    achievements: [
      'Applied theoretical knowledge in practical settings through hands-on projects',
      'Acquired skills in Core Java, Advanced Java, PL/SQL, Aptitude, and Python',
    ],
  },
];

export const education = [
  {
    institution: 'Guru Ghasidas Vishwavidyalaya',
    location: 'Bilaspur, CG',
    degree: 'B.Tech in Computer Science',
    period: 'Dec 2021 – May 2025',
    gpa: '7.83 / 10',
    coursework: [
      'Computer Programming',
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Database Management',
      'Software Engineering',
    ],
  },
  {
    institution: 'H G M Jay Bharat Eng M School',
    location: 'Bilaspur, CG',
    degree: 'Senior Secondary (CBSE)',
    period: 'Jul 2018 – Jul 2021',
    gpa: '92.4% (12th) · 75.5% (10th)',
    coursework: [],
  },
];

export const achievements = [
  {
    title: 'Top 100 in Cyber Security Skilling Program',
    description:
      'Secured a position among the top 100 out of 10,000 students in the Cyber Security Skilling Program (IFACET) by the Indian Institute of Technology Kanpur (2023-2024).',
    icon: '🏆',
  },
  {
    title: 'NAAC Website Contribution',
    description:
      'Managed data transfer, uploading, and manipulation for the university\'s new website for NAAC preparation.',
    icon: '🌐',
  },
  {
    title: 'GDSC Cybersecurity Team Lead',
    description:
      'Led the cybersecurity vertical of Google Developer Student Clubs, organizing workshops and security awareness initiatives.',
    icon: '🛡️',
  },
];

export const stats = [
  { label: 'CGPA', value: '7.83' },
  { label: 'Projects Built', value: '5+' },
  { label: 'Internships', value: '3' },
  { label: 'Top Rank (IFACET)', value: '100' },
];
