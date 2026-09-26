import { BriefcaseIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { ButtonLink, Eyebrow, Heading, Text } from "@/components/atoms";
import { SocialLinks } from "@/components/molecules";
import { bio } from "../../data/bio";

export function AboutProfile() {
  return (
    <section
      aria-labelledby="about-title"
      className="flex flex-wrap items-start gap-x-[clamp(32px,6vw,96px)] gap-y-9 pt-[clamp(48px,8vw,84px)] pb-14"
    >
      <div className="flex flex-[0_1_280px] flex-col gap-4">
        <div className="lighten relative aspect-square w-full max-w-[280px] overflow-hidden rounded-lg">
          <Image
            src={images.profile.src}
            alt={`${site.name} portresi`}
            fill
            sizes="280px"
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            blurDataURL={images.profile.blurDataURL}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xl font-medium">{site.name}</p>
          <p className="text-sm leading-[22px] text-neutral-300">{site.tagline}</p>
        </div>
        <ButtonLink href="/experience" variant="secondary" className="self-start">
          <BriefcaseIcon size={16} aria-hidden />
          Deneyimlerim <span aria-hidden="true">→</span>
        </ButtonLink>
        <SocialLinks variant="icons" />
      </div>
      <div className="flex flex-[1_1_420px] flex-col gap-5">
        <Eyebrow>Hakkımda</Eyebrow>
        <Heading as="h1" size="lg" id="about-title">
          Teknik yaklaşım
        </Heading>
        {bio.map((p) => (
          <Text key={p.slice(0, 24)}>{p}</Text>
        ))}
      </div>
    </section>
  );
}
