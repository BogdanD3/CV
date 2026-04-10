import type { Quest } from '../types';
import { QUESTS } from '../data';

const STATUS_STYLES: Record<Quest['status'], { label: string; classes: string }> = {
  active:      { label: '● ACTIVE',      classes: 'text-teal-400 border-teal-500 bg-teal-900/20' },
  'in-progress': { label: '⚙ IN PROGRESS', classes: 'text-amber-400 border-amber-500 bg-amber-900/20' },
  complete:    { label: '✓ COMPLETE',    classes: 'text-purple-400 border-purple-700 bg-purple-900/10' },
};

function QuestCard({ quest }: { quest: Quest }) {
  const status = STATUS_STYLES[quest.status];

  return (
    <div className="border border-[#3d2a6e] border-l-[3px] border-l-amber-500 bg-[#16112e] p-4 mb-4
      transition-colors hover:border-amber-500/60 group">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-pixel text-[8px] text-amber-400 leading-relaxed">{quest.title}</h3>
        <span className={`font-pixel text-[7px] px-2 py-1 border flex-shrink-0 ${status.classes}`}>
          {status.label}
        </span>
      </div>
      <p className="font-vt text-[15px] text-purple-300/80 leading-relaxed mb-3">
        {quest.description}
      </p>
      <div className="flex flex-wrap gap-1 mb-3">
        {quest.tags.map((tag) => (
          <span key={tag} className="font-pixel text-[6px] px-2 py-[2px] bg-violet-900/20 border border-violet-700 text-violet-400">
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={() => quest.link ? window.open(quest.link, '_blank') : alert('Link coming soon!')}
        className="font-pixel text-[5px] px-3 py-[5px] border border-pink-500 text-pink-400
          hover:bg-pink-500 hover:text-white transition-colors"
      >
        ▸ VIEW PROJECT
      </button>
    </div>
  );
}

export default function QuestsTab() {
  return (
    <div>
      {QUESTS.map((q, i) => (
        <QuestCard key={i} quest={q} />
      ))}
    </div>
  );
}
