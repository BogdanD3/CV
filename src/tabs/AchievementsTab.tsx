import { ACHIEVEMENTS } from '../data';

export default function AchievementsTab() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
      {ACHIEVEMENTS.map((a) => (
        <div
          key={a.name}
          className={`border bg-[#16112e] p-3 text-center transition-colors
            ${a.unlocked
              ? 'border-amber-500 hover:border-amber-400'
              : 'border-[#3d2a6e] opacity-50'}`}
        >
          <div className={`text-[32px] mb-2 ${!a.unlocked ? 'grayscale brightness-50' : ''}`}>
            {a.icon}
          </div>
          <p className={`font-pixel text-[7px] leading-relaxed ${a.unlocked ? 'text-amber-400' : 'text-purple-500'}`}>
            {a.name}
          </p>
          <p className="font-pixel text-[6px] text-purple-500 mt-1 leading-relaxed">
            {a.desc}
          </p>
          {!a.unlocked && (
            <p className="font-pixel text-[6px] text-[#3d2a6e] mt-2">LOCKED</p>
          )}
        </div>
      ))}
    </div>
  );
}
