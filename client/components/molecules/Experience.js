"use client"
import { useRouter } from "next/navigation";
import { CustomButton } from "../atoms";
export default function Experience() {
  const router=useRouter()
  return (
    <section className="mt-12 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
      <div>
        <p className="text-xs lowercase tracking-[0.25em] text-gray-500 font-semibold">
          Kariyer
        </p>

        <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
          Deneyimler
        </h2>

        <p className="mt-2 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
          Kariyer yolculuğum boyunca edindiğim deneyimler, çalıştığım
          teknolojiler ve geliştirdiğim projeler.
        </p>
      </div>

      <div className="mb-0">
        <CustomButton
          text="→"
          onClick={() => router.push("/experience")}
        />
      </div>
    </section>
  );
}
