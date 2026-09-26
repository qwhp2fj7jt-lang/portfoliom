import type { ComponentProps, ReactNode } from "react";
import { Container } from "@/components/atoms/Container";
import { PageHeader } from "@/components/molecules/PageHeader";

type PageTemplateProps = ComponentProps<typeof PageHeader> & { children: ReactNode };

export function PageTemplate({ children, ...header }: PageTemplateProps) {
  return (
    <Container>
      <div className="pt-[clamp(48px,8vw,84px)] pb-21">
        <PageHeader {...header} />
        {children}
      </div>
    </Container>
  );
}
