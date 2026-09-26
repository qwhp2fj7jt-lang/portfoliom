export function SkipLink({ targetId = "main" }: { targetId?: string }) {
  return (
    <a
      href={`#${targetId}`}
      className="absolute top-2 left-2 z-100 -translate-y-[200%] rounded-md bg-surface px-4 py-2.5 text-foreground shadow-raised focus-visible:translate-y-0"
    >
      İçeriğe geç
    </a>
  );
}
