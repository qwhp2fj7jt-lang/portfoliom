"use client";
import { useMemo, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { FileText } from "lucide-react";
export default function SearchBar({ navigation, posts }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredNavigation = useMemo(() => {
    if (!query.trim()) return navigation;

    return navigation.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [navigation, query]);

  return (
    <div className="relative ">
      <div
        className="px-2 py-1 border border-gray-100 inline-flex items-center gap-1 dark:bg-zinc-900  rounded-full  shadow-sm  dark:border-zinc-700  cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-700 dark:text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>

        <div className="flex items-center border border-white dark:border-gray-600 px-2 text-gray-700 dark:text-gray-300  rounded-md  text-[12px] ">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/40 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-center justify-center p-4 text-left sm:items-center sm:p-0 h-screen">
            <DialogPanel
              transition
              className="dark:bg-zinc-900 relative transform overflow-hidden rounded-xl bg-white text-left shadow-2xl ring-1 ring-black/5 transition-all
             data-closed:translate-y-4 data-closed:opacity-0
             data-enter:duration-300 data-enter:ease-out
             data-leave:duration-200 data-leave:ease-in
             sm:my-8 w-full sm:max-w-xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className=" dark:bg-zinc-900 border-b border-gray-50 px-4 py-4 flex items-center gap-2 bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:text-gray-300 w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Sayfa veya blog yazısı ara..."
                  className="dark:placeholder:text-white dark:text-gray-300 flex-1 bg-transparent border-none outline-none text-gray-700  placeholder:text-gray-400"
                />

                <button
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className="dark:text-gray-300 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="px-4 py-4 max-h-[300px] overflow-y-auto custom-scroll ">
                <h3 className="text-sm font-medium dark:text-gray-300  mb-2">
                  Sayfalar
                </h3>
                <ul role="list" className="space-y-1">
                  {filteredNavigation.length > 0 ? (
                    filteredNavigation.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center gap-2 text-gray-500 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-600 cursor-pointer transition"
                      >
                        <div
                          className="w-5 h-5"
                          dangerouslySetInnerHTML={{ __html: item.svg }}
                        />

                        <div className="flex-1 min-w-0 pb-2">
                          <Link
                            href={item.href}
                            onClick={() => {
                              setOpen(false);
                              setQuery("");
                            }}
                            className="dark:text-gray-300 text-sm text-gray-500 font-semibold"
                          >
                            {item.name}
                          </Link>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 text-center py-4">
                      Sonuç bulunamadı
                    </p>
                  )}
                </ul>

                <h3 className="text-sm font-medium  mb-2">Son Gönderi</h3>
                <div className="flex flex-col md:flex-row items-start gap-6 group  rounded-lg transition">
                  <div>
                    <Link
                      href={`/blog/${posts.slug}`}
                      className="dark:text-gray-300 flex gap-2 text-sm text-gray-500 font-semibold hover:underline cursor-context-menu"
                    >
                      <FileText size={15} /> {posts.title}
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
