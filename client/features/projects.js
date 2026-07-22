import { Card } from "@/widgets";
import  project  from "@/shared/json/project";
export default function Projects() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 min-h-screen">
      <Card project={project} />
    </div>
  );
}
