"use client";
export default function AboutCard({baslik,paragraf,paragrafOne,paragrafTwo}) {


  return (
    <>
      <h3 className="text-xl dark:text-white md:text-2xl font-semibold mb-5 text-gray-800 flex items-center">
      {baslik}
      </h3>
      <p className="text-gray-700 dark:text-white text-sm md:text-base mb-4 leading-relaxed">
      
      {paragraf}
      </p>
      <p className="text-gray-700 dark:text-white text-sm md:text-base mb-4 leading-relaxed">

      {paragrafOne}
      </p>
      <p className="text-gray-700 dark:text-white text-sm md:text-base leading-relaxed">
      {paragrafTwo}
      </p>
    </>
  );
}
