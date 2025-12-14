"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Disclosure, Menu } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { SearchBar } from "@/widgets";
import { navigation } from "@/shared";

export default function Header({ locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState(locale);
  const [active, setActive] = useState("/");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const changeLanguage = (newLocale) => {
    setLang(newLocale);

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && ["en", "tr"].includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };

  return (
    <Disclosure as="nav" className="dark:bg-black bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">


              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-zinc-800">
                  {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </Disclosure.Button>
              </div>


              <div className="hidden sm:flex justify-center  text-black dark:text-gray-200 rounded-xl p-2">
                <div className="flex space-x-6">
                  {navigation.map((item) => {
                    const isActive = active === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={`/${lang}/${item.href}`}
                        onClick={() => setActive(item.href)}
                        className={`px-3 py-2 text-sm transition ${
                          isActive
                            ? "text-black dark:text-white font-semibold rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900"
                            : "text-gray-400 hover:text-black dark:hover:text-white rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900"
                        }`}
                      >
                        {item.name[lang]}
                      </Link>
                    );
                  })}
                </div>
              </div>

   
              <div className="flex items-center space-x-4">
                <SearchBar navigation={navigation} lang={lang}/>
                <Menu as="div" className="relative">
                  <Menu.Button         className=" outline-none  inline-flex items-center gap-1  rounded-md px-2 shadow-sm   cursor-pointer border border-white dark:border-zinc-700 text-gray-700 dark:text-gray-300  rounded-md">
                    {lang.toUpperCase()}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 rounded-md    dark:bg-zinc-800  dark:hover:bg-zinc-900 rounded-md text-black dark:text-gray-200 rounded-md shadow-lg w-28">
                    {["tr", "en"].map((lng) => (
                      <Menu.Item key={lng}>
                        {({ active }) => (
                          <button
                            onClick={() => changeLanguage(lng)}
                            className={`block w-full px-4 py-2 text-left ${
                              active ? "bg-gray-100 dark:bg-zinc-800" : ""
                            }`}
                          >
                            {lng.toUpperCase()}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
                <button
                  onClick={toggleTheme}
                  className="p-2  rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
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
  aria-label="GitHub profilini ziyaret et"
  className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 transition"
>
<svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4" > <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor" ></path> </svg>
</a>

          
              </div>
            </div>
          </div>


          <Disclosure.Panel className="sm:hidden px-3 pb-3 space-y-1 bg-white dark:bg-zinc-900">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${lang}/${item.href}`}
                onClick={() => setActive(item.href)}
                className="block rounded-md px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                {item.name[lang]}
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
