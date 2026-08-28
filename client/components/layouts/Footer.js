export default function Footer() {
  const nowYear = new Date().getFullYear();

  return (
    <footer className="relative border-t text-center border-gray-200/50 dark:border-zinc-700/50 dark:bg-zinc-900/80 backdrop-blur pb-5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-700 to-transparent" />

      <div className="mx-auto max-w-4xl px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between  gap-8">
        
 
        <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-300  items-start">
          <p className="text-left">
Core Web Vitals ve Feature Based Architecture yaklaşımıyla ölçeklenebilir şekilde tasarlanmıştır.
          </p>

          <p className="font-medium text-gray-600 dark:text-gray-300 underline">
            Next, React ve Tailwind CSS ile geliştirildi.
          </p>

          <p className="flex items-center gap-2">
            Keyifle kodlanmıştır.
   
          </p>
        </div>

  
        <div className="flex items-center gap-2 text-sm font-bold text-purple-500">


          <p>© {nowYear} | Zeynep Baş</p>
        </div>
      </div>
    </footer>
  )
}
