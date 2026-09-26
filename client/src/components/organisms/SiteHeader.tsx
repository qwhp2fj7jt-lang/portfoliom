import Link from "next/link";
import { navItems, site } from "@/config/site";
import { ButtonLink } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "@/components/molecules/NavLinks";
import { SearchButton } from "@/components/molecules/SearchButton";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 bg-background/82 backdrop-blur-md">
      <Container className="flex min-h-header items-center gap-3">
        <Link href="/" className="mr-auto text-lg font-medium text-foreground hover:text-foreground">
          {site.name}
          <span className="sr-only"> — Ana sayfa</span>
        </Link>
        <nav aria-label="Ana menü" className="hidden items-center gap-3 nav:flex">
          <NavLinks items={navItems} />
          <SearchButton />
          <ButtonLink href={`mailto:${site.email}`}>İletişim</ButtonLink>
        </nav>
        <MobileMenu items={navItems} email={site.email} />
      </Container>
    </header>
  );
}
