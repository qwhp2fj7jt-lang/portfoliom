

import { Hero, ProjectsAndExperience, Blog } from "@/widgets";
import { Skills } from "@/components/molecules";
export default function HomeRoute() {


  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Hero />
      <Skills />
      <Blog />
      <ProjectsAndExperience />
    </div>
  );
}
