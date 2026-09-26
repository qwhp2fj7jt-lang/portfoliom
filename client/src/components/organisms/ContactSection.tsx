import { Heading } from "@/components/atoms/Heading";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { Text } from "@/components/atoms/Text";

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="rule-top mt-7 flex flex-col gap-[18px] py-14 [--rule-color:var(--color-divider)]"
    >
      <Heading as="h2" size="xs" id="contact-title">
        Birlikte çalışalım
      </Heading>
      <Text variant="small">
        Projeler, işbirlikleri ya da frontend mimarisi üzerine sohbet için doğrudan yazabilirsiniz.
      </Text>
      <SocialLinks />
    </section>
  );
}
