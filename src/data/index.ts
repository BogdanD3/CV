import type { NavItem, SkillGroup, Quest, Achievement, LootItem } from '../types';
import InstagramIcon from '../assets/icons/contactIcons/InstagramIcon.png'
import DiscordIcon from '../assets/icons/contactIcons/DiscordIcon.png'
import GitHubIcon from '../assets/icons/contactIcons/GitHubIcon.png'
import FileIcon from '../assets/icons/contactIcons/FileIcon.png'
import CV from '../assets/cv.pdf'

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
    title: 'MAIN QUEST: E-COMMERCE WEBSITE',
    status: 'active',
    description:
      'Fully custom e-commerce website for electrical supply company. Laravel backend + React/TS frontend. Fast, responsive design with integrated admin panel for full client control over content. Custom features including Excel-to-database upload.',
    tags: ['Laravel', 'React', 'TypeScript', 'Hosting', 'MySQL', 'Admin Panel'],
    link: 'https://elektrosaraf.me'
  },
  {
    title: 'SIDE QUEST: STUDENT EXAM SCHEDULER',
    status: 'in-progress',
    description:
      'Software solution for students that simplifies the exam scheduling process. Collaborative team project focused on UX and practical utility.',
    tags: ['React Native', 'Expo', 'UX Design'],
    link: 'https://github.com/BogdanD3/UniPortal',
  },
  {
    title: 'COMPLETED: CV WEBSITE V1',
    status: 'complete',
    description:
    'Designed and deployed personal CV website. React + Vite + Tailwind. Showcases frontend skills and UI design sensibility.',
    tags: ['React', 'Vite', 'Tailwind', 'GitHub Pages'],
    link: 'https://bogdand3.github.io/CV-WebSite/',
  },
  {
    title: 'COMPLETED: CORTEX PROJECTS YEAR 1',
    status: 'complete',
    description:
      'First website developed in Cortex summer practice and a website built for first year\'s competition. Built type-safe React + TypeScript components, integrated Ant Design and Axios for more efficient code. Delivered high-quality features under tight deadlines.',
    tags: ['React', 'TypeScript', 'Ant Design', 'Axios', 'Team Lead'],
    link: 'https://github.com/BogdanD3/online-library',
    link2: 'https://github.com/BogdanD3/takmicenje-tim-5'
  },
];

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'FRONT-END',
    skills: [
      { name: 'HTML / CSS',  icon: `${BASE}/html5/html5-original.svg`,         level: 5, maxGold: 5 },
      { name: 'JavaScript',  icon: `${BASE}/javascript/javascript-original.svg`, level: 5, maxGold: 4 },
      { name: 'TypeScript',  icon: `${BASE}/typescript/typescript-original.svg`, level: 5, maxGold: 5 },
      { name: 'React',       icon: `${BASE}/react/react-original.svg`,           level: 5, maxGold: 5 },
      { name: 'Tailwind',    icon: `${BASE}/tailwindcss/tailwindcss-original.svg`, level: 5, maxGold: 5 },
      { name: 'Node.js',     icon: `${BASE}/nodejs/nodejs-original.svg`,         level: 5, maxGold: 3 },
    ],
  },
  {
    label: 'BACK-END',
    skills: [
      { name: 'PHP',      icon: `${BASE}/php/php-original.svg`,         level: 5, maxGold: 3 },
      { name: 'Laravel',  icon: `${BASE}/laravel/laravel-original.svg`, level: 5, maxGold: 3 },
      { name: 'Python',   icon: `${BASE}/python/python-original.svg`,   level: 5, maxGold: 4 },
      { name: 'MySQL',    icon: `${BASE}/mysql/mysql-original.svg`,     level: 5, maxGold: 3 },
      { name: 'Firebase', icon: `${BASE}/firebase/firebase-original.svg`, level: 5, maxGold: 2 },
    ],
  },
  {
    label: 'TECH STACK',
    skills: [
      { name: 'C / C++', icon: `${BASE}/cplusplus/cplusplus-original.svg`, level: 5, maxGold: 4 },
      { name: 'Java',    icon: `${BASE}/java/java-original.svg`,            level: 5, maxGold: 4 },
      { name: 'Linux',   icon: `${BASE}/linux/linux-original.svg`,          level: 5, maxGold: 5 },
      { name: 'Git',     icon: `${BASE}/git/git-original.svg`,              level: 5, maxGold: 5 },
      { name: 'Docker',  icon: `${BASE}/docker/docker-original.svg`,        level: 5, maxGold: 3 },
      { name: 'Lua',     icon: `${BASE}/lua/lua-original.svg`,              level: 5, maxGold: 2 },
    ],
  },
  {
    label: 'TOOLS & LIBRARIES',
    skills: [
      { name: 'Redux',      icon: `${BASE}/redux/redux-original.svg`,         level: 5, maxGold: 3 },
      { name: 'Vite',       icon: `${BASE}/vitejs/vitejs-original.svg`,       level: 5, maxGold: 5 },
      { name: 'Postman',    icon: `${BASE}/postman/postman-original.svg`,     level: 5, maxGold: 3 },
      { name: 'Figma',      icon: `${BASE}/figma/figma-original.svg`,         level: 5, maxGold: 2 },
      { name: 'Photoshop',  icon: `${BASE}/photoshop/photoshop-original.svg`, level: 5, maxGold: 4 },
      { name: 'Ant Design', icon: `${BASE}/antdesign/antdesign-original.svg`, level: 5, maxGold: 4 },
      { name: 'Bootstrap',  icon: `${BASE}/bootstrap/bootstrap-original.svg`, level: 5, maxGold: 4 },
      { name: 'Axios',      icon: `${BASE}/axios/axios-plain.svg`,            level: 5, maxGold: 4 },
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
  { icon: InstagramIcon, platform: 'INSTAGRAM', handle: '@delicbogdan_', rarity: 'rare',   href: 'https://www.instagram.com/delicbogdan_' },
  { icon: DiscordIcon, platform: 'DISCORD',   handle: 'BD30604',       rarity: 'epic',   href: 'https://discord.com/'},
  { icon: GitHubIcon, platform: 'GITHUB',    handle: 'BogdanD3',      rarity: 'epic',   href: 'https://github.com/BogdanD3' },
  { icon: FileIcon, platform: 'RESUME',    handle: 'Download CV',   rarity: 'epic',   href: CV },
];