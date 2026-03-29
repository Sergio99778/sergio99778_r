export interface Title {
  name: string;
  to: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface ProjectItem {
  name: string;
  url: string;
  img?: string;
  desc: string;
}

export interface SkillItem {
  name: string;
  img: string;
}

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}
