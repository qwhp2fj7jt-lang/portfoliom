"use client";

export default function AboutHeader({baslik,paragraf}) {

  return (
    <>
          <h2 className="text-xl dark:text-white md:text-2xl font-semibold mb-5 text-gray-800 flex items-center">
      {baslik}
      </h2>
      <p className="text-gray-700 dark:text-white text-sm md:text-base mb-2 leading-relaxed">
{paragraf}
      </p>
    </>
  );
}
