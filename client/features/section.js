import { Hero, ProjectsAndExperience, Blog } from "@/widgets";
import { Skills } from "@/components/molecules";
export default function HomeRoute({ articles }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Hero />
      <Skills />
      <Blog articles={articles} />
      <ProjectsAndExperience />
    </div>
  );
}
