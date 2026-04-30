export type Experience = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
  score: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  [x: string]: string;
  [x: string]: string;
  id: number;
  title: string;
  desc: string;
  image?: string;
  tech: string[];
  category: string;
  impact?: string;
};
