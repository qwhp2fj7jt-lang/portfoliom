import { Tag } from "@/components/atoms";
import type { StackGroup as StackGroupType } from "../../data/stack";

export function StackGroup({ group, items }: StackGroupType) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[13px] leading-[1.55] tracking-[0.06em] text-foreground/72 uppercase">{group}</h3>
      <ul role="list" className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li key={item}>
            <Tag tone="outline-light">{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}
