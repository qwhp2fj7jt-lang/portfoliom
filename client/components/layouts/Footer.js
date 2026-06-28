export default function Footer() {
  const nowYear = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t text-center border-gray-200/50 dark:border-zinc-700/50 dark:bg-zinc-900/80 backdrop-blur">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-700 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between  gap-8">
        
 
        <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-300  items-start">
          <p className="text-left">
Core Web Vitals ve feature-based mimari yaklaşımıyla ölçeklenebilir şekilde tasarlanmıştır.
          </p>

          <p className="font-medium text-gray-600 dark:text-gray-300 underline">
            Next, React ve Tailwind CSS ile geliştirildi.
          </p>

          <p className="flex items-center gap-2">
            Keyifle kodlanmıştır
            <img
              src="/images/footer/latte.png"
              width="18"
              height="18"
              className="animate-bounce"
              alt="latte"
            />
          </p>
        </div>

  
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300">
          <a
            href="https://github.com/zeynepbass"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.603-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.55 11.55 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.288-1.552 3.294-1.23 3.294-1.23.654 1.654.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.48 5.921.43.372.813 1.104.813 2.226v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <p>© {nowYear} | Zeynep Baş</p>
        </div>
      </div>
    </footer>
  )
}
