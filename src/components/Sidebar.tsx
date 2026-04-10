import type { TabId } from '../types';
import { NAV_ITEMS } from '../data';

interface Props {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}

export default function Sidebar({ activeTab, onTabChange }: Props) {
  return (
    <aside className="w-[220px] flex-shrink-0 bg-[#1a1035] border-r-2 border-[#3d2a6e] flex flex-col">
      {/* Profile block */}
      <div className="p-4 border-b-2 border-[#3d2a6e]">
        <p className="font-pixel text-[9px] text-fuchsia-500 tracking-widest mb-2">▸ PLAYER PROFILE</p>
        <h2 className="font-pixel text-[20px] text-white leading-snug mb-1">
          BOGDAN<br />DELIC
          <span className="animate-blink">_</span>
        </h2>
        <p className="font-pixel text-[8px] text-pink-400 leading-relaxed mb-3">
          FULLSTACK DEV · LV.12<br />CS STUDENT · Y2
        </p>
        <img
          src="assets/1000058332.png"
          alt="Character"
          className="w-full border border-[#3d2a6e]"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Nav */}
      <div className="font-pixel text-[9px] text-purple-500 tracking-widest px-4 py-4 pt-5 border-b border-[#3d2a6e]">
        ▸ MENU
      </div>
      <nav className="flex flex-col">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex items-center gap-3 px-4 py-[10px] text-left font-pixel text-[8px] tracking-wide
              border-l-[3px] transition-all duration-150
              ${activeTab === item.id
                ? 'bg-fuchsia-900/30 text-pink-400 border-l-fuchsia-500'
                : 'text-purple-400 border-l-transparent hover:bg-fuchsia-900/20 hover:text-white hover:border-l-violet-500'
              }`}
          >
            <span className="text-[13px] w-5 text-center flex-shrink-0">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto px-4 py-3 font-pixel text-[5px] text-[#3d2a6e] tracking-widest border-t border-[#3d2a6e]">
        CV ROBOTS.TXT · v2.0 · 2026
      </div>
    </aside>
  );
}