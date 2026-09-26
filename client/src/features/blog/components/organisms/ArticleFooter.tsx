import { ButtonLink } from "@/components/atoms";
import { CopyLinkButton } from "../molecules/CopyLinkButton";

export function ArticleFooter() {
  return (
    <div className="rule-top mt-14 flex flex-wrap justify-between gap-4 pt-7 [--rule-color:var(--color-divider)]">
      <div className="flex flex-wrap gap-2">
        <CopyLinkButton />
      </div>
      <ButtonLink href="/blog" variant="secondary">
        Diğer yazılar <span aria-hidden="true">→</span>
      </ButtonLink>
    </div>
  );
}
