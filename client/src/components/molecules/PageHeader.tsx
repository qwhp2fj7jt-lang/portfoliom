import type { ReactNode } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  badge?: ReactNode;
}

export function PageHeader({ eyebrow, title, lead, badge }: PageHeaderProps) {
  return (
    <header className="mb-9 flex flex-col gap-3.5">
      {badge ? (
        <div className="flex flex-wrap items-center gap-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          {badge}
        </div>
      ) : (
        <Eyebrow>{eyebrow}</Eyebrow>
      )}
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      {lead && <Text variant="lead">{lead}</Text>}
    </header>
  );
}
