import { SectionHeader } from "@/components/molecules";
import { projects } from "../../data/projects";
import { ProjectPreviewRow } from "../molecules/ProjectPreviewRow";

export function ProjectsPreview() {
  return (
    <section aria-labelledby="projects-preview-title" className="pt-21 pb-7">
      <SectionHeader
        eyebrow="Projelerim"
        title="Açık kaynak projeler"
        id="projects-preview-title"
        link={{ href: "/projects", label: "Tüm projeleri göster" }}
      />
      <ul role="list">
        {projects.map((p) => (
          <li key={p.num}>
            <ProjectPreviewRow project={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}
