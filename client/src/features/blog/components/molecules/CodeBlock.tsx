interface CodeBlockProps {
  file: string;
  language: string;
  code: string;
}

export function CodeBlock({ file, language, code }: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-md border border-neutral-800 bg-[color-mix(in_srgb,black_25%,var(--color-surface))]">
      <figcaption className="flex justify-between gap-3 border-b border-neutral-800 px-3.5 py-2 text-xs [overflow-wrap:anywhere] text-neutral-400">
        <span>{file}</span>
        <span className="shrink-0 text-accent-400">{language}</span>
      </figcaption>
      <pre
        tabIndex={0}
        aria-label={`${file} kod örneği`}
        className="overflow-x-auto p-4 font-mono text-[13.5px] leading-[22px] whitespace-pre text-accent-200 focus-visible:-outline-offset-2"
      >
        <code>{code}</code>
      </pre>
    </figure>
  );
}
