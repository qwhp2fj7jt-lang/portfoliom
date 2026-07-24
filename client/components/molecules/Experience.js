"use client"
import { useRouter } from "next/navigation";
import { CustomButton } from "../atoms";
export default function Experience() {
  const router=useRouter()
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 ">
      <div >
        <p className="text-xs lowercase tracking-[0.25em] text-gray-500 font-semibold">
          Kariyer
        </p>

        <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
          Deneyimler
        </h2>


      </div>

      <div className="mb-0 flex justify-between items-center">
      <p className="mt-2 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
          Kariyer yolculuğum boyunca edindiğim deneyimler, çalıştığım
          teknolojiler ve geliştirdiğim projeler.
        </p>
        <CustomButton
          text="→"
          onClick={() => router.push("/experience")}
        />
      </div>
    </div>
  );
}
