import { site } from "@/config/site";
import { Container } from "@/components/atoms/Container";
import { ContactSection } from "./ContactSection";

export function SiteFooter() {
  return (
    <footer>
      <Container>
        <ContactSection />
        <div className="flex flex-wrap justify-between gap-3 pt-6 pb-12 text-[13px] leading-5 text-neutral-400">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Core Web Vitals ve Feature Based Architecture ile keyifle kodlandı.</p>
        </div>
      </Container>
    </footer>
  );
}
