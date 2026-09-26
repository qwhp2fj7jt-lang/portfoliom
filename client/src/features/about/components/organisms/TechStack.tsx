import { Container, Eyebrow, Heading } from "@/components/atoms";
import { stack } from "../../data/stack";
import { StackGroup } from "../molecules/StackGroup";

export function TechStack() {
  return (
    <section
      aria-labelledby="stack-title"
      className="bg-section bg-[radial-gradient(900px_420px_at_85%_-40%,color-mix(in_srgb,var(--color-section-glow)_70%,transparent),transparent_64%)] py-[clamp(48px,7vw,70px)]"
    >
      <Container className="flex flex-col gap-9">
        <div className="flex flex-col gap-3">
          <Eyebrow tone="section">Tech Stack</Eyebrow>
          <Heading as="h2" size="md" id="stack-title">
            Günlük geliştirme araçlarım
          </Heading>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-x-12 gap-y-8">
          {stack.map((g) => (
            <StackGroup key={g.group} {...g} />
          ))}
        </div>
      </Container>
    </section>
  );
}
