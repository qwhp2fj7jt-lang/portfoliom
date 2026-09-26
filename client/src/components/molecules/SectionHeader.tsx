import { ArrowLink } from "@/components/atoms/ArrowLink";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  id: string;
  link?: { href: string; label: string };
}

export function SectionHeader({ eyebrow, title, id, link }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-col gap-3">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h2" size="md" id={id}>
          {title}
        </Heading>
      </div>
      {link && <ArrowLink href={link.href}>{link.label}</ArrowLink>}
    </div>
  );
}
