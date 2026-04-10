import type { Skill } from '../types';
import { SKILL_GROUPS } from '../data';
import PipRow from '../components/PipRow';

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="border border-[#3d2a6e] bg-[#110d28] p-3 text-center
      transition-all hover:border-fuchsia-600 hover:bg-[#1a1040] group cursor-default">
      <div className="text-[36px] mb-1">{skill.icon}</div>
      <p className="font-pixel text-[6px] text-purple-400 mb-1 group-hover:text-pink-400 transition-colors">
        {skill.name}
      </p>
      <PipRow total={skill.level} maxGold={skill.maxGold} />
    </div>
  );
}

export default function SkillsTab() {
  return (
    <div className="flex flex-col gap-5">
      {SKILL_GROUPS.map((group) => (
        <div key={group.label}>
          <p className="font-pixel text-[7px] text-teal-400 tracking-widest mb-2 pb-1
            border-b border-[#3d2a6e]">
            ▸ {group.label}
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
            {group.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
