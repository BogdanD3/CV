import GlitchTitle from '../components/GlitchTitle';
import FloatingIcons from '../components/FloatingIcons';
import { TRAITS } from '../data';

interface Props {
  onNavigate: (tab: import('../types').TabId) => void;
}

export default function ProfileTab({ onNavigate }: Props) {
  return (
    <div>
      <div className="relative overflow-hidden min-h-[140px]">
        <FloatingIcons />
        <GlitchTitle text="BOGDAN DELIC" />
      </div>

      {/* Bio */}
      <div className="relative border border-[#3d2a6e] bg-[#16112e] p-4 mt-3">
        <span className="absolute -top-2 left-3 font-pixel text-[8px] text-fuchsia-500 bg-[#16112e] px-2">
          &gt; PROFILE.TXT
        </span>
        <p className="font-vt text-[20px] text-purple-100 leading-relaxed">
          I'm a full-stack developer with a strong front-end foundation, focused on building
          efficient, user-centered web applications. I work confidently with modern technologies
          across the stack, combining clean design with solid functionality.
          <br /><br />
          Currently diving deeper into cybersecurity while strengthening problem-solving skills
          through regular algorithmic practice. My goal is to build applications that perform well,
          stay secure, and reflect a deeper understanding of how systems work under the hood.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {TRAITS.map((t) => (
            <span key={t} className="font-pixel text-[7px] px-2 py-1 border border-violet-600 text-violet-400 bg-violet-900/20">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Tech breakdown */}
      <div className="relative border border-[#3d2a6e] bg-[#16112e] p-4 mt-3">
        <span className="absolute -top-2 left-3 font-pixel text-[8px] text-teal-400 bg-[#16112e] px-2">
          &gt; TECH.LOG
        </span>
        <div className="grid grid-cols-2 gap-3 mt-1">
          {[
            {
              label: 'FRONT-END',
              color: '#14b8a6',
              items: 'React · TypeScript · Tailwind · Redux · Ant Design · Bootstrap · Axios · Vite',
            },
            {
              label: 'BACK-END',
              color: '#7c3aed',
              items: 'Laravel · PHP · MySQL · REST APIs · Eloquent ORM · Node.js · Firebase',
            },
            {
              label: 'SYSTEMS',
              color: '#ec4899',
              items: 'Linux · Nginx · SSH · Docker · Git · Bash · Server deployment',
            },
            {
              label: 'LANGUAGES',
              color: '#f59e0b',
              items: 'JavaScript · TypeScript · PHP · Python · C · C++ · Java · Lua',
            },
            {
              label: 'TOOLS',
              color: '#a855f7',
              items: 'Figma · Photoshop · Postman · VS Code · Neovim · npm',
            },
            {
              label: 'CURRENT FOCUS',
              color: '#f59e0b',
              items: 'Cybersecurity · CTFs · OWASP · Algorithms · System design',
            },
          ].map((cat) => (
            <div
              key={cat.label}
              className="border border-[#3d2a6e] bg-[#0e0b1f] p-3"
              style={{ borderLeftColor: cat.color, borderLeftWidth: 2 }}
            >
              <p className="font-pixel text-[5px] tracking-widest mb-2" style={{ color: cat.color }}>
                ▸ {cat.label}
              </p>
              <p className="font-vt text-[15px] text-purple-300 leading-snug">{cat.items}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Journey teaser */}
      <div className="relative border border-[#3d2a6e] bg-[#16112e] p-4 mt-3">
        <span className="absolute -top-2 left-3 font-pixel text-[8px] text-amber-400 bg-[#16112e] px-2">
          &gt; DEVELOPMENT JOURNEY
        </span>
        <div className="flex flex-col gap-3 mb-4 mt-1">
          {[
            { year: '2023', label: 'Front-End Foundation',    color: '#14b8a6' },
            { year: '2024', label: 'Full-Stack Growth',       color: '#7c3aed' },
            { year: '2025', label: 'Backend & Freelance',     color: '#ec4899' },
            { year: 'NOW',  label: 'Cybersecurity & Systems', color: '#f59e0b' },
          ].map((stop, i, arr) => (
            <div key={stop.year} className="flex items-center gap-3">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-3 h-3 border-2 flex-shrink-0"
                  style={{ borderColor: stop.color, background: stop.color + '33' }} />
                {i < arr.length - 1 && <div className="w-[1px] h-4 bg-[#3d2a6e]" />}
              </div>
              <span className="font-pixel text-[6px] text-purple-500 w-8 flex-shrink-0">{stop.year}</span>
              <span className="font-vt text-[17px]" style={{ color: stop.color }}>{stop.label}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => onNavigate('character')}
          className="w-full font-pixel text-[6px] py-2 border border-amber-500 text-amber-400
            hover:bg-amber-500 hover:text-black transition-colors tracking-widest"
        >
          ▸ VIEW FULL JOURNEY
        </button>
      </div>

      {/* Projects teaser */}
      <div
        onClick={() => onNavigate('quests')}
        className="relative border border-[#3d2a6e] bg-[#16112e] p-4 mt-3 cursor-pointer
          hover:border-pink-500 transition-colors group overflow-hidden"
      >
        {/* Decorative corner tags */}
        <span className="absolute top-2 right-2 font-pixel text-[5px] text-[#3d2a6e]">[ 4 ENTRIES ]</span>
        <div className="flex items-center gap-4">
          <div className="text-4xl opacity-40 group-hover:opacity-70 transition-opacity select-none flex-shrink-0">
            📁
          </div>
          <div>
            <p className="font-pixel text-[8px] text-pink-400 mb-2">▸ PROJECT ARCHIVE</p>
            <p className="font-vt text-[17px] text-purple-300 leading-snug">
              Team lead · Freelance builds · E-commerce · Exam scheduler
            </p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-[1px] bg-[#3d2a6e] group-hover:bg-pink-900 transition-colors" />
          <p className="font-pixel text-[6px] text-pink-500 group-hover:text-pink-300 transition-colors">
            ▸ OPEN QUEST LOG ›
          </p>
          <div className="flex-1 h-[1px] bg-[#3d2a6e] group-hover:bg-pink-900 transition-colors" />
        </div>
      </div>
    </div>
  );
}