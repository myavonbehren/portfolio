export interface Work {
  id: string;
  startDate: Date;
  endDate: Date | null;
  title: string;
  company: string;
  description: string;
  icon: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Education {
  id: string;
  startDate: Date;
  endDate: Date;
  title: string;
  company: string;
  icon: string | null;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  github: string | null;
  live: string | null;
  image: string | null;
  startDate: Date;
  endDate: Date;
}

export interface Skills {
  id: string;
  languages: string[];
  frameworksAndLibraries: string[];
  developerToolsAndPlatforms: string[];
  design: string[];
}

export interface About {
  id: string;
  name: string;
  description: string;
  image: string | null;
} 