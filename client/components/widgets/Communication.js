"use client";

const linkClass =
  "group flex items-center gap-1 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800";

export default function Communication() {
  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-900">

      <div className="flex flex-col gap-4 border-b border-zinc-100 px-5 py-5 md:flex-row md:items-center md:justify-between dark:border-zinc-800">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
          ⌘ İletişim
        </h2>

        <span className="flex items-center gap-2 text-sm text-green-500">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          İletişime geçebilirsin.
        </span>
      </div>


      <div className="flex flex-wrap items-center gap-2 p-3 text-sm text-zinc-600 dark:text-zinc-400">
        <a href="mailto:baszynpp@gmail.com" className={linkClass}>
          <span>Email</span>
          <span className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
            ↗
          </span>
        </a>

        <span className="text-zinc-300 dark:text-zinc-600">•</span>

        <a
          href="https://github.com/zeynepbass"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <span>GitHub</span>
          <span className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
            ↗
          </span>
        </a>

        <span className="text-zinc-300 dark:text-zinc-600">•</span>

        <a
          href="https://linkedin.com/in/zeynepbasss"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <span>LinkedIn</span>
          <span className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}