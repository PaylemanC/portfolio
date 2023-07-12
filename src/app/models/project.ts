export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  github: string;
  deploy?: string;
}
