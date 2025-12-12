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
    <Disclosure as="nav" className="dark:border-gray-800 bg-white dark:bg-zinc-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">


              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-zinc-800">
                  {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </Disclosure.Button>
              </div>


              <div className="hidden sm:flex justify-center bg-zinc-50 dark:bg-zinc-900 text-black dark:text-gray-200 rounded-xl p-2">
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
                            ? "text-black dark:text-white font-semibold"
                            : "text-gray-400 hover:text-black dark:hover:text-white"
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

                <button
                  onClick={toggleTheme}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition"
                >
                  {theme === "light" ? (
                    <MoonIcon className="h-5 w-5 text-gray-800" />
                  ) : (
                    <SunIcon className="h-5 w-5 text-yellow-300" />
                  )}
                </button>

                <Menu as="div" className="relative">
                  <Menu.Button className="px-3 py-1 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-zinc-800 rounded-md text-sm">
                    {lang.toUpperCase()}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-gray-200 rounded-md shadow-lg w-28">
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
