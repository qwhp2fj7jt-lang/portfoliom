import { Tag } from "@/components/atoms";

export function AvailabilityBadge() {
  return (
    <Tag className="gap-1.5">
      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
      Yeni fırsatlara açığım
    </Tag>
  );
}
