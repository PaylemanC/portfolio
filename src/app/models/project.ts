export interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  skills: string[];
  github: string;
  deploy: string;
  status: 'COMPLETED' | 'IN PROGRESS';
  category: string;
}
