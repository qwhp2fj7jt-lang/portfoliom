import { slugify } from "@/lib/format";
import { Text } from "@/components/atoms/Text";
import type { ContentBlock } from "../../types";
import { Callout } from "../molecules/Callout";
import { CodeBlock } from "../molecules/CodeBlock";
import { TableOfContents, type TocItem } from "../molecules/TableOfContents";

type NumberedBlock = ContentBlock & { id?: string; num?: string };

function numberHeadings(blocks: ContentBlock[]): NumberedBlock[] {
  let n = 0;
  return blocks.map((b) =>
    b.type === "heading" ? { ...b, id: slugify(b.text), num: String(++n).padStart(2, "0") } : b,
  );
}

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  const numbered = numberHeadings(blocks);
  const toc: TocItem[] = numbered.flatMap((b) =>
    b.type === "heading" && b.id && b.num ? [{ id: b.id, num: b.num, text: b.text }] : [],
  );

  return (
    <>
      {toc.length > 0 && <TableOfContents items={toc} />}
      <div className="flex flex-col gap-5">
        {numbered.map((block, i) => {
          switch (block.type) {
            case "heading":
              return (
                <h2
                  key={i}
                  id={block.id}
                  className="mt-6 flex items-baseline gap-3.5 text-[clamp(22px,2.6vw,28px)] leading-[1.25] tracking-[-0.01em]"
                >
                  <span className="text-[15px] text-accent tabular-nums" aria-hidden="true">
                    {block.num}
                  </span>
                  {block.text}
                </h2>
              );
            case "paragraph":
              return (
                <Text key={i} variant="article">
                  {block.text}
                </Text>
              );
            case "list":
              return (
                <ul key={i} className="flex list-disc flex-col gap-2 pl-6 marker:text-accent">
                  {block.items.map((item, j) => (
                    <li key={j}>
                      <Text variant="article">{item}</Text>
                    </li>
                  ))}
                </ul>
              );
            case "code":
              return <CodeBlock key={i} file={block.file} language={block.language} code={block.code} />;
            case "note":
              return <Callout key={i}>{block.text}</Callout>;
          }
        })}
      </div>
    </>
  );
}
