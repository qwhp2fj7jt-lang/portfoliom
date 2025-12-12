"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Link from "next/link";
export default function SearchBar({lang, navigation }) {
  const [open, setOpen] = useState(false);
  const t=useTranslations("Blog")
  return (
    <div className="relative ">
      <div
        className="p-2 inline-flex items-center gap-1 dark:bg-zinc-800 bg-[#F7F7F7] rounded-full px-1 py-1 shadow-sm   cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-500 dark:text-white"
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

        <div className="flex items-center dark:text-white  rounded-md text-gray-400 text-[15px] ">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-[50vh] items-end justify-center p-4 text-left sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="dark:bg-zinc-800 relative transform overflow-hidden rounded-xl bg-white text-left shadow-2xl ring-1 ring-black/5 transition-all
             data-closed:translate-y-4 data-closed:opacity-0
             data-enter:duration-300 data-enter:ease-out
             data-leave:duration-200 data-leave:ease-in
             sm:my-8 sm:w-full sm:max-w-xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className=" dark:bg-zinc-800 border-b border-gray-50 px-4 py-3 flex items-center gap-2 bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:text-white w-5 h-5 text-gray-400"
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
                  placeholder= {t("search")} 
                  className=" dark:placeholder:text-white flex-1 bg-transparent  border-none outline-none text-gray-700 placeholder:text-gray-400"
                />

                <button
                  onClick={() => setOpen(false)}
                  className="dark:text-white text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="px-4 py-4 max-h-[300px] overflow-y-auto custom-scroll ">
                <h3 className="text-sm font-medium dark:text-white text-gray-500 mb-2">
                 {t("pages")} 
                </h3>

                <ul role="list" className="space-y-1 ">
                  {navigation.map((item) => (
                <li
                key={item.name}
                className=" flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-600 cursor-pointer transition"
              >
                <div
                  className="w-5 h-5"
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                />
              
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/${lang}/${item.href}`}
                    className=" dark:text-white text-sm font-semibold text-gray-900"
                  >
                 {item.name[lang]}
                  </Link>
                </div>
              </li>
              
                  ))}
                </ul>

                <h3 className="text-sm font-medium text-gray-500 mb-2">
                 {t("post")}
                </h3>

                <p className="text-center text-gray-400">{t("loading")}</p>
              </div>
          
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
