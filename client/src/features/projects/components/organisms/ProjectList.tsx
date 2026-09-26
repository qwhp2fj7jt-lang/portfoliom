import { projects } from "../../data/projects";
import { ProjectItem } from "../molecules/ProjectItem";

export function ProjectList() {
  return (
    <ul role="list">
      {projects.map((p) => (
        <li key={p.num}>
          <ProjectItem project={p} />
        </li>
      ))}
    </ul>
  );
}
