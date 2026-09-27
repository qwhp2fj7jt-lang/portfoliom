import { PageTemplate } from "@/components/templates";
import { ButtonLink } from "@/components/atoms";

export default function PostNotFound() {
  return (
    <PageTemplate eyebrow="Blog" title="Yazı bulunamadı" lead="Aradığın yazı kaldırılmış ya da hiç var olmamış olabilir.">
      <ButtonLink href="/blog">Tüm yazılara dön</ButtonLink>
    </PageTemplate>
  );
}
