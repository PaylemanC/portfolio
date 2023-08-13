export interface Course {
  id: number;
  date: string;
  title: string;
  description?: string[];
}

export interface Institute {
  id: number;
  institute: string;
  courses: Course[];
}