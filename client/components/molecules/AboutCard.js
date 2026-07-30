"use client";
export default function AboutCard({baslik,paragraf,paragrafOne,paragrafTwo}) {


  return (
    <>
 <h2 className="text-xl dark:text-gray-300 md:text-2xl text-gray-700 mb-2 text-center">
      {baslik}
      </h2>
      <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mb-2 leading-relaxed">
      
      {paragraf}
      </p>
      <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mb-2 leading-relaxed">

      {paragrafOne}
      </p>
      <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed">
      {paragrafTwo}
      </p>
    </>
  );
}
