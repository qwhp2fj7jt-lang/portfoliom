"use client";
import { useRouter } from "next/navigation";
import { CustomButton } from "../atoms";
export default function Experience() {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
    
      <div className="flex justify-between items-center">
      <p >
       <span className="text-xs lowercase tracking-[0.25em] text-gray-500 font-semibold"></span> Kariyer
       <h2 className="text-2xl  text-gray-700 dark:text-white">
          Deneyimler
        </h2>   </p>
     

        <CustomButton text="→" onClick={() => router.push("/experience")} />
      </div>

      <div className="mb-0 flex justify-between items-center">
        <p className="mt-2 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
          Kariyer yolculuğum boyunca edindiğim deneyimler, çalıştığım
          teknolojiler ve geliştirdiğim projeler.
        </p>
      </div>
    </div>
  );
}
