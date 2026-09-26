import type { ReactNode } from "react";
import { Container } from "@/components/atoms/Container";

interface ArticleTemplateProps {
  header: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export function ArticleTemplate({ header, children, footer }: ArticleTemplateProps) {
  return (
    <Container>
      <article className="max-w-article pt-[clamp(40px,7vw,72px)] pb-14">
        {header}
        {children}
        {footer}
      </article>
    </Container>
  );
}
