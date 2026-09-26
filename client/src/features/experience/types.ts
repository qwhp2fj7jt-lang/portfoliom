export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: "Full Time" | "Part Time" | "Internship" | "Freelance";
  tech: string[];
  items: string[];
}
