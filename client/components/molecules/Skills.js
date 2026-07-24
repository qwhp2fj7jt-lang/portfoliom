"use client";

import skills from "@/shared/json/skills";

export default function Skills() {

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
    <div className="mb-10 text-center">
    <h2 className="text-xl dark:text-gray-300 md:text-2xl font-semibold mb-5 text-center">
    Tech Stack
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-2 leading-relaxed">
      Günlük geliştirme süreçlerimde kullandığım teknolojiler.
      </p>


      </div>

      <div className="grid grid-cols-2 gap-7 mt-4 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6">
        {skills.map((skill, index) => (
       <div
       className="group flex h-33 w-auto items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
     >
       <img
         src={skill.icon}
         alt={skill.name}
         className="animate-float object-contain transition-transform duration-300 group-hover:scale-110"
         style={{
           width: skill.width,
           height: skill.height,
           opacity: skill.opacity,
           borderRadius: skill.borderRadius ?? 0,
           animationDelay: `${index * 120}ms`,
         }}
       />
     </div>
        ))}
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
               
          }

          50% {
            transform: translateY(-8px);

          }
        }
      `}</style>
    </section>
  );
}
