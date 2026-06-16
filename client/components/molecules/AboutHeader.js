"use client";

export default function AboutHeader({baslik,paragraf}) {

  return (
    <>
          <h2 className="text-xl dark:text-gray-300 md:text-2xl font-semibold mb-5  flex items-center">
      {baslik}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-2 leading-relaxed">
{paragraf}
      </p>
    </>
  );
}
