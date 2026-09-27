import { site } from "@/config/site";
import { Container } from "@/components/atoms/Container";
import { ContactSection } from "./ContactSection";

const domain = new URL(site.url).hostname.replace(/^www\./, "");

export function SiteFooter() {
  return (
    <footer>
      <Container>
        <ContactSection />
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 pb-12 text-[13px] leading-5 text-neutral-400">
          <p>
            © {new Date().getFullYear()} {domain} <span aria-hidden="true">·</span> Tüm hakları saklıdır
          </p>
          <a href="#top" className="text-neutral-400 no-underline hover:text-foreground">
            Başa dön <span aria-hidden="true">↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
