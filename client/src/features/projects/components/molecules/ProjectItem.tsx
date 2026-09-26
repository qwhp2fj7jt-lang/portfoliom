import { GithubLogoIcon } from "@phosphor-icons/react/ssr";
import { ButtonLink, Tag } from "@/components/atoms";
import type { Project } from "../../types";

export function ProjectItem({ project }: { project: Project }) {
  const titleId = `project-${project.num}`;
  return (
    <article
      aria-labelledby={titleId}
      className="rule-top flex flex-wrap gap-x-[clamp(24px,4vw,64px)] gap-y-4 py-9 [--rule-color:var(--color-neutral-700)]"
    >
      <span className="flex-[0_0_48px] text-[15px] text-accent tabular-nums" aria-hidden="true">
        {project.num}
      </span>
      <div className="flex flex-[1_1_240px] flex-col gap-2">
        <h2 id={titleId} className="text-[clamp(24px,3vw,32px)] leading-[1.15] tracking-[-0.012em]">
          {project.name}
        </h2>
        <p className="text-sm text-neutral-400">{project.subtitle}</p>
      </div>
      <div className="flex flex-[2_1_340px] flex-col gap-[18px]">
        <p className="max-w-[58ch] text-base leading-7 text-neutral-200">{project.description}</p>
        <ul role="list" aria-label="Özellikler" className="flex flex-wrap gap-2">
          {project.features.map((f) => (
            <li key={f}>
              <Tag tone="outline-muted">{f}</Tag>
            </li>
          ))}
        </ul>
        <div>
          <ButtonLink href={project.url} variant="secondary">
            <GithubLogoIcon size={16} aria-hidden />
            GitHub’da incele<span className="sr-only">: {project.name}</span>
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
