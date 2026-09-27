import { PageTemplate } from "@/components/templates";
import { ZoneGridSkeleton } from "@/features/zone";

export default function ZoneLoading() {
  return (
    <PageTemplate eyebrow="Zeynep Zone" title="Kodun dışındaki anlar">
      <ZoneGridSkeleton />
    </PageTemplate>
  );
}
