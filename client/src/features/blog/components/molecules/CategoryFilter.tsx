interface CategoryFilterProps<T extends string> {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  legend?: string;
}

export function CategoryFilter<T extends string>({
  options,
  value,
  onChange,
  legend = "Kategori",
}: CategoryFilterProps<T>) {
  return (
    <fieldset className="inline-flex max-w-full flex-wrap overflow-hidden rounded-md border border-divider">
      <legend className="sr-only">{legend}</legend>
      {options.map((option) => (
        <label
          key={option}
          className="relative inline-flex cursor-pointer items-center gap-1.5 px-3 py-[7px] text-[13px] [&+&]:border-l [&+&]:border-divider has-checked:text-accent has-checked:shadow-[inset_0_0_0_1px_var(--color-accent)] not-has-checked:hover:bg-foreground/7 has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-accent"
        >
          <input
            type="radio"
            name="blog-category"
            value={option}
            checked={option === value}
            onChange={() => onChange(option)}
            className="pointer-events-none absolute size-0 opacity-0"
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
