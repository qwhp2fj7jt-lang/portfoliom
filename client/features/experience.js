import experiences from "@/shared/json/experience";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-12">
        <div className="flex justify-between">


        <p className="text-xs font-semibold tracking-[0.25em] lowercase text-zinc-500">
          Kariyer
        </p>
        <span className="text-xs text-green-500 flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      Yeni Fırsatlara Açığım
    </span>        </div>
        <h1 className="mt-2 text-3xl font-bold dark:text-white">Deneyimler</h1>

        <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Kariyer yolculuğum boyunca edindiğim deneyimler, kullandığım
          teknolojiler ve geliştirdiğim projeler.
        </p>
      </header>

      <div className="relative border-l mt-10 border-zinc-300 dark:border-zinc-700">
        {experiences.map((item) => (
          <article className="relative mb-12 pl-10 mt-20">

            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-white bg-blue-500 dark:border-zinc-950" />


            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold dark:text-white">
                  {item.title}
                </h2>

                <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                  {item.company}
                </p>

                <p className="mt-2 text-sm text-zinc-500">📍 {item.location}</p>

                <p className="text-sm text-zinc-500">🗓 {item.date}</p>
              </div>

              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                {item.employmentType}
              </span>
            </div>


            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white px-3 py-1 text-xs shadow-sm dark:bg-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-4">
              {item.responsibilities.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <p className="text-sm leading-5 italic text-zinc-600 dark:text-zinc-400">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
