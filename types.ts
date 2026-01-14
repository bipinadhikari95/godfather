export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Interest {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export enum SectionType {
  HERO = 'HERO',
  ACADEMIC = 'ACADEMIC',
  TECH = 'TECH',
  INTERESTS = 'INTERESTS',
  CONTACT = 'CONTACT'
}