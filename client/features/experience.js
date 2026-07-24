import experiences from "@/shared/json/experience";

export default function ExperiencePage() {
  return (
    <div className="mx-auto  max-w-3xl px-4 py-10 min-h-screen">
      <div className="relative ml-4 border-l border-zinc-300 dark:border-zinc-700 ">
        {experiences.map((item, index) => (
          <div key={index} className="relative pb-16 flex-col pl-10 mb-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold dark:text-white">
                  {item.title}
                </h2>

                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  {item.company}
                </p>

                <p className="mt-2 text-sm text-zinc-500">📍 {item.location}</p>

                <p className="text-sm text-zinc-500">🗓 {item.date}</p>
              </div>

              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                {item.employmentType}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <ul className="mt-8 space-y-4">
                {item.responsibilities.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full " />

                    <span className="leading-7 text-zinc-600 dark:text-zinc-400">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
