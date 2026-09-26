import Link from "next/link";
import type { Project } from "../../types";

export function ProjectPreviewRow({ project }: { project: Project }) {
  return (
    <article className="group rule-top relative flex flex-wrap items-baseline gap-x-[clamp(24px,4vw,64px)] gap-y-2 py-7 [--rule-color:var(--color-neutral-700)] has-[a:focus-visible]:rounded-sm has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent">
      <span className="flex-[0_0_48px] text-[15px] text-accent tabular-nums" aria-hidden="true">
        {project.num}
      </span>
      <div className="flex flex-[1_1_220px] flex-col gap-1.5">
        <h3 className="text-2xl leading-7 tracking-[-0.01em]">
          <Link href="/projects" className="stretched-link group-hover:text-accent-300">
            {project.name}
          </Link>
        </h3>
        <p className="text-[13px] text-neutral-400">{project.subtitle}</p>
      </div>
      <p className="max-w-[56ch] flex-[2_1_320px] text-[15.5px] leading-7 text-neutral-300">
        {project.description}
      </p>
    </article>
  );
}
