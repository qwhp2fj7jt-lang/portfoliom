import { BriefcaseIcon, MapPinIcon } from "@phosphor-icons/react/ssr";
import { Tag } from "@/components/atoms";
import type { Experience } from "../../types";

export function ExperienceItem({ item, index }: { item: Experience; index: number }) {
  const titleId = `experience-${index}`;
  return (
    <article
      aria-labelledby={titleId}
      className="rule-top flex flex-wrap gap-x-[clamp(24px,5vw,80px)] gap-y-4 py-9 [--rule-color:var(--color-neutral-700)]"
    >
      <div className="flex max-w-80 flex-[1_1_240px] flex-col gap-2.5">
        <p className="text-sm text-accent tabular-nums">{item.period}</p>
        <h2 id={titleId} className="text-[clamp(22px,2.6vw,26px)] leading-[1.2] tracking-[-0.01em]">
          {item.company}
        </h2>
        <p className="text-[15px] text-neutral-200">{item.role}</p>
        <ul role="list" className="flex flex-wrap gap-x-3.5 gap-y-2 text-[13px] text-neutral-400">
          <li className="inline-flex items-center gap-1">
            <MapPinIcon size={14} aria-hidden />
            <span className="sr-only">Konum: </span>
            {item.location}
          </li>
          <li className="inline-flex items-center gap-1">
            <BriefcaseIcon size={14} aria-hidden />
            <span className="sr-only">Çalışma tipi: </span>
            {item.type}
          </li>
        </ul>
      </div>
      <div className="flex flex-[2_1_380px] flex-col gap-[18px]">
        <ul role="list" className="flex flex-col gap-2.5">
          {item.items.map((text) => (
            <li key={text} className="flex gap-3 text-base leading-[26px] text-neutral-200">
              <span className="mt-[13px] h-px flex-[0_0_12px] bg-accent" aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <ul role="list" aria-label="Kullanılan teknolojiler" className="flex flex-wrap gap-1.5">
          {item.tech.map((t) => (
            <li key={t}>
              <Tag tone="outline-muted">{t}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
