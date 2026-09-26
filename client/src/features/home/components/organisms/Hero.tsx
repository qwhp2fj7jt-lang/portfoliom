import { site } from "@/config/site";
import { ButtonLink, Heading } from "@/components/atoms";
import { ProfileBadge } from "../molecules/ProfileBadge";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex flex-col gap-7 pt-[clamp(56px,10vw,112px)] pb-[clamp(48px,8vw,84px)]"
    >
      <ProfileBadge />
      <Heading as="h1" size="display" id="hero-title">
        <span className="block">Ölçeklenebilir arayüzler.</span>{" "}
        <span className="block text-accent">Performans odaklı mimari.</span>
      </Heading>
      <p className="max-w-[58ch] text-[17px] leading-7 text-neutral-200">{site.description}</p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/blog">Yazıları oku</ButtonLink>
        <ButtonLink href="/projects" variant="ghost">
          Projelerim
        </ButtonLink>
        <ButtonLink href="/about" variant="ghost">
          Hakkımda
        </ButtonLink>
      </div>
    </section>
  );
}
