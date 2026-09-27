import { Container } from "@/components/atoms/Container";
import { Skeleton } from "@/components/atoms/Skeleton";

export default function BlogLoading() {
  return (
    <Container>
      <div role="status" aria-label="Yazılar yükleniyor" className="flex flex-col gap-6 pt-[clamp(48px,8vw,84px)] pb-21">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-5 w-full max-w-xl" />
        <Skeleton className="mt-4 h-10 w-full rounded-md" />
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="flex flex-col gap-2.5 border-t border-neutral-800 pt-6">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        ))}
      </div>
    </Container>
  );
}
