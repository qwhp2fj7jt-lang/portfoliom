const GRID = "grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] items-start gap-5";

export function ZoneGridSkeleton() {
  return (
    <ul role="list" aria-busy="true" aria-label="Paylaşımlar yükleniyor" className={GRID}>
      {Array.from({ length: 4 }, (_, i) => (
        <li key={i} className="flex animate-pulse flex-col overflow-hidden rounded-lg bg-surface shadow-edge">
          <div className="aspect-4/3 bg-neutral-900" />
          <div className="flex flex-col gap-3 p-[18px]">
            <div className="h-8 w-40 rounded-md bg-neutral-800" />
            <div className="h-4 w-full rounded bg-neutral-800" />
            <div className="h-4 w-2/3 rounded bg-neutral-800" />
          </div>
        </li>
      ))}
    </ul>
  );
}
