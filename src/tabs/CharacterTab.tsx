import TeamLeaderIcon from '../assets/icons/badgeIcons/TeamLeaderIcon.png'
import ApiArchitectIcon from '../assets/icons/badgeIcons/ApiArchitectIcon.png'
import ArchIcon from '../assets/icons/badgeIcons/ArchIcon.png'
import DeadlineIcon from '../assets/icons/badgeIcons/DeadlineIcon.png'
import BugHunterIcon from '../assets/icons/badgeIcons/BugHunterIcon.png'
import CTFIcon from '../assets/icons/badgeIcons/CTFIcon.png'
import CharacterSprite from '../assets/1000058333.png'
import TypeScriptBladeIcon from '../assets/icons/gearIcons/TypeScriptBladeIcon.png'
import ReactShellIcon from '../assets/icons/gearIcons/ReactShellIcon.png'
import LaravelTomeIcon from '../assets/icons/gearIcons/LaravelTomeIcon.png'
import LinuxRunnerIcon from '../assets/icons/gearIcons/LinuxRunnerIcon.png'
import CyberVisorIcon from '../assets/icons/gearIcons/CyberVisorIcon.png'
import GitRingIcon from '../assets/icons/gearIcons/GitRingIcon.png'

const JOURNEY = [
  {
    period: 'Late 2023',
    title: 'Front-End Foundation',
    color: '#14b8a6',
    icon: '🌱',
    bullets: [
      'HTML, CSS, JS from scratch — Cortex front-end course + self-study',
      'Git, version control, clean code mindset',
      'C++ intro — first algorithmic thinking',
    ],
  },
  {
    period: '2024',
    title: 'React & Real Projects',
    color: '#7c3aed',
    icon: '⚡',
    bullets: [
      'React + TypeScript — internship & team projects',
      'Redux, Axios, Ant Design, React Router',
      'Led 7-member team as primary frontend dev',
      'Cortex back-end course started',
    ],
  },
  {
    period: '2025',
    title: 'Full-Stack & Freelance',
    color: '#ec4899',
    icon: '🔴',
    bullets: [
      'PHP, MySQL, Laravel — REST APIs & full apps',
      'Own Linux server via Nginx — real deployment',
      'Freelance: custom sites, admin panels, Excel→DB',
    ],
  },
  {
    period: 'Late 2025 → Now',
    title: 'Cybersecurity Focus',
    color: '#f59e0b',
    icon: '🔒',
    bullets: [
      'Cybersecurity deep dive — CTFs, secure architecture',
      'LeetCode-style algorithmic practice daily',
      'System design & resilient application patterns',
    ],
  },
];

const EQUIPPED = [
  { slot: 'WEAPON',    icon: TypeScriptBladeIcon, item: 'TypeScript Blade',  rarity: 'epic',      desc: 'Type-safe components, strict interfaces, zero any' },
  { slot: 'ARMOR',     icon: ReactShellIcon,  item: 'React Shell',       rarity: 'epic',      desc: 'Hooks, context, scalable component architecture' },
  { slot: 'OFFHAND',   icon: LaravelTomeIcon, item: 'Laravel Tome',      rarity: 'rare',      desc: 'REST APIs, Eloquent ORM, full MVC backend' },
  { slot: 'BOOTS',     icon: LinuxRunnerIcon, item: 'Linux Runner',      rarity: 'rare',      desc: 'Nginx server setup, SSH, real deployment pipelines' },
  { slot: 'HELM',      icon: CyberVisorIcon,  item: 'Cyber Visor [VIP]', rarity: 'legendary', desc: 'Secure auth, OWASP awareness, CTF training' },
  { slot: 'ACCESSORY', icon: GitRingIcon,     item: 'Git Ring',          rarity: 'common',    desc: 'Branching, PRs, team workflows, clean commit history' },
];

const RARITY: Record<string, { color: string; label: string }> = {
  legendary: { color: '#f59e0b', label: 'LEGENDARY' },
  epic:      { color: '#a855f7', label: 'EPIC'      },
  rare:      { color: '#3b82f6', label: 'RARE'      },
  common:    { color: '#6b7280', label: 'COMMON'    },
};

const UNLOCKED_BADGES = [
  { icon: TeamLeaderIcon, name: 'TEAM LEADER'     },
  { icon: ApiArchitectIcon, name: 'API ARCHITECT'   },
  { icon: ArchIcon, name: 'I USE ARCH BTW'   },
  { icon: DeadlineIcon, name: 'DEADLINE SLAYER' },
  { icon: BugHunterIcon, name: 'BUG HUNTER'       },
  { icon: CTFIcon, name: 'CTF VETERAN'  },
];

const STAT_BARS = [
  { label: 'INTELLIGENCE', val: 93, color: '#7c3aed', desc: 'Code architecture' },
  { label: 'DEXTERITY',    val: 88, color: '#14b8a6', desc: 'UI implementation' },
  { label: 'ENDURANCE',    val: 80, color: '#f59e0b', desc: 'Deadline performance' },
  { label: 'STRENGTH',     val: 89, color: '#ec4899', desc: 'Problem solving' },
  { label: 'STEALTH',      val: 67, color: '#a855f7', desc: 'Security knowledge' },
];

const TRAITS = [
  { label: 'Fast learner',         icon: '⚡' },
  { label: 'Detail-oriented',      icon: '🔍' },
  { label: 'Team player',          icon: '🤝' },
  { label: 'Self-driven',          icon: '🎯' },
  { label: 'Deadline-reliable',    icon: '📅' },
  { label: 'Clean code advocate',  icon: '✨' },
];

const GLITCH_SUBTITLE = 'FROM FIRST HTML TAG TO FULL-STACK SYSTEMS';

export default function CharacterTab() {
  return (
    <div className="flex flex-col gap-6">

      {/* TOP — Journey left, Character right */}
      <div className="grid grid-cols-2 gap-4 items-start">

        {/* LEFT — Timeline */}
        <div className="relative border border-[#3d2a6e] bg-[#16112e] p-5">
          <span className="absolute -top-2 left-3 font-pixel text-[6px] text-amber-400 bg-[#16112e] px-2">
            &gt; DEVELOPMENT JOURNEY
          </span>

          {/* Glitchy subtitle */}
          <p className="font-pixel text-[6px] text-purple-600 tracking-widest mb-5 mt-1 glitch">
            {GLITCH_SUBTITLE}
          </p>

          {/* Vertical rail */}
          <div className="absolute left-[28px] top-[72px] bottom-6 w-[2px] bg-[#3d2a6e]" />

          <div className="flex flex-col gap-7">
            {JOURNEY.map((stop, i) => (
              <div key={i} className="flex gap-4 relative">
                <div
                  className="w-8 h-8 border-2 flex items-center justify-center text-[14px] bg-[#0e0b1f] flex-shrink-0 z-10"
                  style={{ borderColor: stop.color }}
                >
                  {stop.icon}
                </div>
                <div className="flex-1">
                  <span className="font-pixel text-[5px] text-purple-600 tracking-widest">{stop.period}</span>
                  <h3 className="font-pixel text-[7px] leading-relaxed mb-2" style={{ color: stop.color }}>
                    {stop.title}
                  </h3>
                  <div
                    className="border border-[#3d2a6e] bg-[#0e0b1f] px-3 py-2"
                    style={{ borderLeftColor: stop.color, borderLeftWidth: 2 }}
                  >
                    {stop.bullets.map((b, j) => (
                      <p key={j} className="font-vt text-[15px] text-purple-300 leading-snug">
                        <span style={{ color: stop.color }}>▸ </span>{b}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Locked next */}
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 border-2 border-dashed border-[#3d2a6e] flex items-center justify-center text-[14px] bg-[#0e0b1f] flex-shrink-0 z-10">
                ❓
              </div>
              <div className="flex-1 border border-dashed border-[#3d2a6e] bg-[#0e0b1f] px-3 py-2 flex items-center">
                <span className="font-pixel text-[5px] text-[#3d2a6e] tracking-widest">NEXT CHAPTER · UNLOCKING...</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Character */}
        <div className="flex flex-col gap-4">

          {/* Sprite area — wide rectangle */}
        <img
          src={CharacterSprite}
          alt="Character"
          className="w-full object-cover border-2 border-[#3d2a6e]"
          style={{ imageRendering: 'pixelated' }}
        />

          {/* Stats + Traits box */}
          <div className="border border-[#3d2a6e] bg-[#16112e] p-4">
            <div className="grid grid-cols-2 gap-4">

              {/* Stat bars */}
              <div>
                <p className="font-pixel text-[6px] text-fuchsia-500 tracking-widest mb-3">▸ BASE STATS</p>
                <div className="flex flex-col gap-[10px]">
                  {STAT_BARS.map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between mb-[6px]">
                        <span className="font-pixel text-[8px] text-purple-400">{s.label}</span>
                        <span className="font-pixel text-[6px]" style={{ color: s.color }}>{s.val}</span>
                      </div>
                      <div className="h-[5px] bg-[#0a0818] border border-[#3d2a6e] overflow-hidden">
                        <div className="h-full" style={{ width: `${s.val}%`, backgroundColor: s.color }} />
                      </div>
                      <p className="font-pixel text-[7px] text-purple-700 mt-[2px]">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal traits */}
              <div>
                <p className="font-pixel text-[5px] text-teal-400 tracking-widest mb-3">▸ TRAITS</p>
                <div className="flex flex-col gap-2">
                  {TRAITS.map((t) => (
                    <div key={t.label} className="flex items-center gap-2 border border-[#3d2a6e] bg-[#0e0b1f] px-2 py-[5px]">
                      <span className="text-[15px]">{t.icon}</span>
                      <span className="font-pixel text-[7px] text-purple-300">{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Badges */}
          <div className="border border-[#3d2a6e] bg-[#16112e] p-3">
            <p className="font-pixel text-[7px] text-amber-400 tracking-widest mb-2">▸ BADGES EARNED</p>
            <div className="grid grid-cols-3 gap-2">
              {UNLOCKED_BADGES.map((b) => (
                <div key={b.name} className="border border-amber-500/40 bg-[#0e0b1f] p-2 text-center flex flex-col items-center">
                  <div className="text-[20px] mb-1">
                    <img src={b.icon} alt={b.name} className="w-12 h-12 object-cover" />
                  </div>
                  <p className="font-pixel text-[7px] text-amber-400 leading-relaxed">{b.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM — Equipped gear */}
      <div className="border border-[#3d2a6e] bg-[#16112e] p-4">
        <p className="font-pixel text-[6px] text-amber-400 tracking-widest mb-3">▸ EQUIPPED GEAR</p>
        <div className="grid grid-cols-2 gap-3">
          {EQUIPPED.map((gear) => {
            const r = RARITY[gear.rarity];
            return (
              <div
                key={gear.slot}
                className="border border-[#3d2a6e] bg-[#0e0b1f] p-3 hover:border-violet-600 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={gear.icon} alt={gear.item} className="w-10 h-10 object-contain" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-pixel text-[5px] text-purple-600">{gear.slot}</span>
                        <span
                          className="font-pixel text-[5px] px-1 py-[2px] border leading-none"
                          style={{ color: r.color, borderColor: r.color }}
                        >
                          {r.label}
                      </span>
                    </div>
                    <p className="font-pixel text-[6px] text-white mt-[2px]">{gear.item}</p>
                  </div>
                </div>
                <p className="font-vt text-[14px] text-purple-300 leading-snug border-t border-[#3d2a6e] pt-2">
                  ▸ {gear.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}