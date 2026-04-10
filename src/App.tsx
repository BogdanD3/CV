import { useState, useEffect } from 'react';
import type { TabId } from './types';
import Sidebar from './components/Sidebar';
import ProfileTab from './tabs/ProfileTab';
import QuestsTab from './tabs/QuestsTab';
import SkillsTab from './tabs/SkillsTab';
import AchievementsTab from './tabs/AchievementsTab';
import ContactTab from './tabs/ContactTab';
import CharacterTab from './tabs/CharacterTab';

const TAB_TITLES: Record<TabId, string> = {
  profile:      '👤 Profile',
  quests:       '📜 Quest Log',
  skills:       '⚔️ Skill Tree',
  achievements: '🏆 Achievements',
  contact:      '💌 Contact & Loot',
  character:    '🧙 Character',
};

function Stars() {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 2 + Math.random() * 5,
    delay: Math.random() * 5,
  }));
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('profile');

  useEffect(() => {
    document.querySelector('main')?.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0e0b1f] text-purple-100 overflow-hidden">
      <Stars />
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px)' }}
      />
      <div className="relative z-10 flex h-screen max-w-[1200px] mx-auto">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between px-5 py-3 bg-[#16112e] border-b-2 border-[#3d2a6e] flex-shrink-0">
            <span className="font-pixel text-[16px] text-pink-400">{TAB_TITLES[activeTab]}</span>
            <span className="font-pixel text-[8px] px-3 py-1 bg-violet-700 text-white tracking-widest">BOGDAND3</span>
          </header>
          <main className="flex-1 overflow-y-auto p-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-900">
            {activeTab === 'profile'      && <ProfileTab onNavigate={setActiveTab} />}
            {activeTab === 'quests'       && <QuestsTab />}
            {activeTab === 'skills'       && <SkillsTab />}
            {activeTab === 'achievements' && <AchievementsTab />}
            {activeTab === 'contact'      && <ContactTab />}
            {activeTab === 'character'    && <CharacterTab />}
          </main>
        </div>
      </div>
    </div>
  );
}