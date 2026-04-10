import type { NavItem, SkillGroup, Quest, Achievement, LootItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'profile',      label: 'Profile',        icon: '👤' },
  { id: 'quests',       label: 'Quest Log',       icon: '📜' },
  { id: 'skills',       label: 'Skill Tree',      icon: '⚔️' },
  { id: 'achievements', label: 'Achievements',    icon: '🏆' },
  { id: 'character',    label: 'Character',       icon: '🧙' },
  { id: 'contact',      label: 'Contact & Loot',  icon: '💌' },
];

export const STAT_BARS = [
  { label: 'XP',  pct: 78, color: '#7c3aed' },
  { label: 'UI',  pct: 85, color: '#ec4899' },
  { label: 'DEV', pct: 80, color: '#14b8a6' },
  { label: 'SEC', pct: 40, color: '#f59e0b' },
];

export const TRAITS = [
  'React & TypeScript', 'UI Design', 'Laravel', 'Team Lead',
  'REST APIs', 'Linux Enthusiast', 'Cybersecurity',
];

export const ACTIVE_STATUS = [
  { icon: '🚀', color: '#14b8a6', text: 'Building food-sharing e-commerce platform' },
  { icon: '📚', color: '#f59e0b', text: 'Deep-diving Laravel & backend architecture' },
  { icon: '🔒', color: '#ec4899', text: 'Expanding cybersecurity knowledge' },
];

export const FLOAT_ICONS = ['⚛', '🔷', '🐧', '⚡', '🌊', '🔴', '🐳', '🌙', '⚙️', '🎨', '🔒', '☕'];

export const QUESTS: Quest[] = [
  {
    title: 'MAIN QUEST: FOOD-SHARING PLATFORM',
    status: 'active',
    description:
      'Fully custom e-commerce website for food sharing. Laravel backend + React/TS frontend. Fast, responsive design with integrated admin panel for full client control over content. Custom features including Excel-to-database upload.',
    tags: ['Laravel', 'React', 'TypeScript', 'MySQL', 'Admin Panel'],
  },
  {
    title: 'SIDE QUEST: STUDENT EXAM SCHEDULER',
    status: 'in-progress',
    description:
      'Software solution for students that simplifies the exam scheduling process. Collaborative team project focused on UX and practical utility.',
    tags: ['React', 'TypeScript', 'REST API'],
  },
  {
    title: 'COMPLETED: TEAM FRONTEND LEAD · Y1',
    status: 'complete',
    description:
      'Led a 7-member team and took primary responsibility for the entire frontend of a responsive web app. Built type-safe React + TypeScript components, integrated Ant Design, and designed custom RESTful APIs. Delivered high-quality features under tight deadlines.',
    tags: ['React', 'TypeScript', 'Ant Design', 'REST API', 'Team Lead'],
  },
  {
    title: 'COMPLETED: CV WEBSITE V1',
    status: 'complete',
    description:
      'Designed and deployed personal CV website. React + Vite + Tailwind. Showcases frontend skills and UI design sensibility.',
    tags: ['React', 'Vite', 'Tailwind', 'GitHub Pages'],
    link: 'https://bogdand3.github.io/CV-WebSite/',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'FRONT-END',
    skills: [
      { name: 'HTML / CSS',   icon: '🌐', level: 5, maxGold: 5 },
      { name: 'JavaScript',   icon: '⚡', level: 5, maxGold: 4 },
      { name: 'TypeScript',   icon: '🔷', level: 5, maxGold: 4 },
      { name: 'React',        icon: '⚛',  level: 5, maxGold: 4 },
      { name: 'Tailwind',     icon: '🌊', level: 5, maxGold: 4 },
      { name: 'Node.js',      icon: '🟩', level: 5, maxGold: 3 },
    ],
  },
  {
    label: 'BACK-END',
    skills: [
      { name: 'PHP',      icon: '🐘', level: 5, maxGold: 3 },
      { name: 'Laravel',  icon: '🔴', level: 5, maxGold: 3 },
      { name: 'Python',   icon: '🐍', level: 5, maxGold: 3 },
      { name: 'MySQL',    icon: '🗄',  level: 5, maxGold: 3 },
      { name: 'Firebase', icon: '🔥', level: 5, maxGold: 2 },
    ],
  },
  {
    label: 'TECH STACK',
    skills: [
      { name: 'C / C++',  icon: '⚙️', level: 5, maxGold: 4 },
      { name: 'Java',     icon: '☕', level: 5, maxGold: 3 },
      { name: 'Linux',    icon: '🐧', level: 5, maxGold: 4 },
      { name: 'Git',      icon: '🌿', level: 5, maxGold: 4 },
      { name: 'Docker',   icon: '🐳', level: 5, maxGold: 2 },
      { name: 'Lua',      icon: '🌙', level: 5, maxGold: 3 },
    ],
  },
  {
    label: 'TOOLS & LIBRARIES',
    skills: [
      { name: 'Redux',       icon: '📦', level: 5, maxGold: 3 },
      { name: 'Vite',        icon: '⚡', level: 5, maxGold: 4 },
      { name: 'Postman',     icon: '📮', level: 5, maxGold: 4 },
      { name: 'Figma',       icon: '🎨', level: 5, maxGold: 4 },
      { name: 'Photoshop',   icon: '🖼',  level: 5, maxGold: 3 },
      { name: 'Ant Design',  icon: '🦠', level: 5, maxGold: 4 },
      { name: 'Bootstrap',   icon: '🅱',  level: 5, maxGold: 3 },
      { name: 'Axios',       icon: '🔗', level: 5, maxGold: 4 },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { icon: '🥇', name: 'CODE FOR EQUALITY',   desc: '1st place · Hackathon',                     unlocked: true  },
  { icon: '🥉', name: 'TEAM LEADER',         desc: 'Led 7 devs to podium · Cortex Web Dev',     unlocked: true  },
  { icon: '🌱', name: 'ECO HACKER',          desc: '3rd place · m:tel Digitalna Fabrika',       unlocked: true  },
  { icon: '🎮', name: 'GAME JAM VETERAN',    desc: '3rd place · MonteGames Jam 2025',           unlocked: true  },
  { icon: '🚀', name: 'STARTUP FINALIST',    desc: 'Top 4 · CODES Startup Program',             unlocked: true  },
  { icon: '🕵️', name: 'THM OPERATIVE',       desc: '250+ rooms cleared · TryHackMe',            unlocked: true  },
  { icon: '🎯', name: 'GAME DEVELOPER',      desc: 'Unity & Pygame courses completed',          unlocked: true  },
  { icon: '🐧', name: 'SERVER ADMIN',        desc: 'Self-managed Nginx server on Linux',        unlocked: true  },
  { icon: '🔒', name: 'CYBER GUARD',         desc: '???',                                       unlocked: false },
  { icon: '⭐', name: 'OPEN SOURCE',         desc: '???',                                       unlocked: false },
  { icon: '💼', name: 'FIRST JOB',           desc: '???',                                       unlocked: false },
  { icon: '🏆', name: 'OPEN SOURCE',         desc: '???',                                       unlocked: false },
];

export const LOOT_ITEMS: LootItem[] = [
  { icon: '/src/assets/icons/contactIcons/InstagramIcon.png', platform: 'INSTAGRAM', handle: '@delicbogdan_', rarity: 'rare',   href: 'https://www.instagram.com/delicbogdan_' },
  { icon: '/src/assets/icons/contactIcons/DiscordIcon.png', platform: 'DISCORD',   handle: 'BD30604',       rarity: 'epic',   href: 'https://discord.com/'},
  { icon: '/src/assets/icons/contactIcons/GitHubIcon.png', platform: 'GITHUB',    handle: 'BogdanD3',      rarity: 'epic',   href: 'https://github.com/BogdanD3' },
  { icon: '/src/assets/icons/contactIcons/FileIcon.png', platform: 'RESUME',    handle: 'Download CV',   rarity: 'epic',   href: '/src/assets/cv.pdf' },
];