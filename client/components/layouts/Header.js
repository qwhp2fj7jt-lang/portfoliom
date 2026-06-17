"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { SearchBar } from "@/molecules";
import navigation from "@/shared/json/navigation";
import { usePathname } from "next/navigation";
export default function Header({ posts }) {
  const [theme, setTheme] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <nav className="dark:bg-black bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="mx-auto max-w-6xl ">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={() => setMobileOpen(true)}
              className="sm:hidden rounded-md p-2 hover:bg-gray-100 dark:hover:bg-zinc-900"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>

            <div className="hidden sm:flex space-x-6">
              <div className="flex items-center justify-center gap-6">
                {navigation.map((item) => {
                  const isActive = (href) => pathname === href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3 py-2 text-sm transition ${
                        isActive(item.href)
                          ? "text-black dark:text-gray-300 font-semibold"
                          : "text-gray-400 hover:text-black dark:hover:text-white dark:text-gray-300"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center pr-3">

<div className="flex items-center space-x-4">

  <SearchBar
    navigation={navigation}
    posts={posts[posts.length - 1]}
  />


  <span className="w-px h-5 bg-gray-200 dark:bg-zinc-700" />

  <a
    href="https://linktr.ee/zeynepbas"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1 border border-gray-100 inline-flex items-center gap-1 dark:bg-zinc-900 rounded-md shadow-sm dark:border-zinc-700 cursor-pointer"
  >
    <svg
      viewBox="0 0 28 28"
      className="w-5 h-5 text-gray-700 dark:text-gray-200"
      fill="currentColor"
    >
      <path d="m15.76 6.83 4.67-4.8 2.71 2.77-4.9 4.67h6.89v3.86h-6.93l4.93 4.79-2.71 2.72-6.7-6.73-6.7 6.73-2.71-2.71 4.93-4.79H3.34v-3.87h6.89L5.34 4.8 8.05 2.02l4.67 4.81V0h4.05zm-4.05 12.02h4.05V28h-4.05z" />
    </svg>
  </a>


  <span className="w-px h-5 bg-gray-200 dark:bg-zinc-700" />

  <button
    onClick={toggleTheme}
    className="p-2 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900"
  >
    {theme === "light" ? (
      <MoonIcon className="h-5 w-5 text-gray-800" />
    ) : (
      <SunIcon className="h-5 w-5 text-yellow-300" />
    )}
  </button>

</div>
</div>
          </div>
        </div>
      </nav>

      <Dialog open={mobileOpen} onClose={setMobileOpen} className="sm:hidden">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />

        <Dialog.Panel className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 rounded-t-3xl shadow-2xl p-3 space-y-2 z-50 animate-[slideUp_.3s_ease]">
          <div className="flex justify-between">
            <div className="flex items-center p-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                {theme === "light" ? (
                  <MoonIcon className="h-5 w-5 text-gray-800" />
                ) : (
                  <SunIcon className="h-5 w-5 text-yellow-300" />
                )}
              </button>
              <a
                href="https://github.com/zeynepbass"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white dark:text-gray-300 transition-colors"
              >
                <svg
                  className="w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.603-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.55 11.55 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.288-1.552 3.294-1.23 3.294-1.23.654 1.654.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.48 5.921.43.372.813 1.104.813 2.226v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
            <button onClick={() => setMobileOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <p className="text-center font-semibold">Menü</p>
          <div className="w-4 h-1 bg-gray-300 rounded-full mx-auto"></div>

          {navigation?.map((item) => {
            const isActive = (href) => pathname === href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 text-sm transition  flex items-center ${
                  isActive(item.href)
                    ? "text-black dark:text-gray-300 font-semibold "
                    : "text-gray-400 hover:text-black dark:hover:text-white dark:text-gray-300"
                }`}
              >
                <span
                  className="mr-2 w-5 h-5"
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                />
                {item.name}
              </Link>
            );
          })}
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
