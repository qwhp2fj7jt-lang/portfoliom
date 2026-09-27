import { Container } from "@/components/atoms/Container";
import { Skeleton } from "@/components/atoms/Skeleton";

export default function PostLoading() {
  return (
    <Container>
      <div role="status" aria-label="Yazı yükleniyor" className="flex max-w-article flex-col gap-5 pt-[clamp(40px,7vw,72px)] pb-14">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-8 w-56 rounded-full" />
        {Array.from({ length: 6 }, (_, i) => (
          <Skeleton key={i} className={i % 3 === 0 ? "mt-6 h-7 w-1/2" : "h-4 w-full"} />
        ))}
      </div>
    </Container>
  );
}
