export type TabId = 'profile' | 'quests' | 'skills' | 'achievements' | 'contact' | 'character';

export interface NavItem {
  id: TabId;
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  maxGold: number;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export interface Quest {
  title: string;
  status: 'active' | 'in-progress' | 'complete';
  description: string;
  tags: string[];
  link?: string;
  link2?: string;
}

export interface Achievement {
  icon: string;
  name: string;
  desc: string;
  unlocked: boolean;
}

export interface LootItem {
  icon: string;
  platform: string;
  handle: string;
  rarity: 'common' | 'rare' | 'epic';
  href?: string;
}

export interface FloatingIcon {
  icon: string;
  left: number;
  duration: number;
  delay: number;
}