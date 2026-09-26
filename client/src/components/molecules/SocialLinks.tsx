import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/atoms/Button";

interface SocialLinksProps {
  variant?: "icons" | "labeled";
}

const links = [
  { href: site.github, label: "GitHub", Icon: GithubLogoIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedinLogoIcon },
];

export function SocialLinks({ variant = "labeled" }: SocialLinksProps) {
  const iconsOnly = variant === "icons";
  const mail = `mailto:${site.email}`;

  return (
    <ul role="list" className={cn("flex flex-wrap", iconsOnly ? "gap-2" : "gap-3")}>
      {!iconsOnly && (
        <li>
          <ButtonLink href={mail}>
            <EnvelopeSimpleIcon size={16} aria-hidden />
            {site.email}
          </ButtonLink>
        </li>
      )}
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <ButtonLink href={href} variant="ghost" iconOnly={iconsOnly} aria-label={iconsOnly ? label : undefined}>
            <Icon size={iconsOnly ? 18 : 16} aria-hidden />
            {!iconsOnly && label}
          </ButtonLink>
        </li>
      ))}
      {iconsOnly && (
        <li>
          <ButtonLink href={mail} variant="ghost" iconOnly aria-label="E-posta gönder">
            <EnvelopeSimpleIcon size={18} aria-hidden />
          </ButtonLink>
        </li>
      )}
    </ul>
  );
}
