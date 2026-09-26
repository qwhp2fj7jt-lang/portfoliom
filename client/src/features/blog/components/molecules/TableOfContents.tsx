export interface TocItem {
  id: string;
  num: string;
  text: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav aria-labelledby="toc-title" className="my-10 flex flex-col gap-2.5 rounded-md bg-surface p-[16.8px]">
      <h2 id="toc-title" className="text-[10px] tracking-widest text-accent uppercase">
        İçindekiler
      </h2>
      <ol role="list" className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="inline-flex gap-3 text-[15px] text-neutral-200 hover:text-accent-100">
              <span className="text-accent tabular-nums" aria-hidden="true">
                {item.num}
              </span>
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
