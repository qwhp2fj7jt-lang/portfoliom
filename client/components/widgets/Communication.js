"use client";



export default function Communication() {
  return (
    <>

<div className="rounded-xl dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900">

  <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-5 py-4">
    <h2 className="font-semibold tracking-wide">
      ⌘ İletişim
    </h2>

    <span className="text-xs text-green-500 flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      Benimle iletişime geçmek için
    </span>
  </div>

  <div className="p-3">

    <a
      href="mailto:baszynpp@gmail.com"
      className="group flex items-center justify-between rounded-xl px-4 py-4 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <span>&gt; Email gönder</span>
      <span className="opacity-0 transition group-hover:opacity-100">
        ↗
      </span>
    </a>

    <a
      href="https://github.com/zeynepbass"
      target="_blank"
      className="group flex items-center justify-between rounded-xl px-4 py-4 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <span>&gt; Github</span>
      <span className="opacity-0 transition group-hover:opacity-100">
        ↗
      </span>
    </a>

    <a
      href="https://linkedin.com/in/zeynepbasss"
      target="_blank"
      className="group flex items-center justify-between rounded-xl px-4 py-4 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <span>&gt; LinkedIn</span>
      <span className="opacity-0 transition group-hover:opacity-100">
        ↗
      </span>
    </a>



  </div>

</div>
  
   
    </>
  );
}
