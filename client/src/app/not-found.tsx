import { PageTemplate } from "@/components/templates";
import { ButtonLink } from "@/components/atoms";

export default function NotFound() {
  return (
    <PageTemplate
      eyebrow="404"
      title="Sayfa bulunamadı"
      lead="Aradığın sayfa taşınmış ya da hiç var olmamış olabilir."
    >
      <ButtonLink href="/">Ana sayfaya dön</ButtonLink>
    </PageTemplate>
  );
}
