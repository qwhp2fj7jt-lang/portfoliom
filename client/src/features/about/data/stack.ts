export interface StackGroup {
  group: string;
  items: string[];
}

export const stack: StackGroup[] = [
  { group: "Frontend", items: ["TypeScript", "HTML5", "CSS3", "React.js", "Next.js"] },
  { group: "State Management", items: ["Redux", "Zustand", "Context API", "TanStack Query"] },
  { group: "UI Frameworks", items: ["TailwindCSS", "Material UI", "Bootstrap", "Ant Design", "Shadcn UI"] },
  { group: "Architecture & Patterns", items: ["RBAC", "Protected Routes", "Feature Based", "Adapter", "Repository", "Custom Hooks"] },
  { group: "Araçlar", items: ["Git", "GitHub", "JIRA", "Azure DevOps", "Claude"] },
  { group: "Diğer", items: ["SSR / CSR", "Lazy Loading", "Atomic Design", "Core Web Vitals", "Açık Kaynak"] },
];
