"use client";

export default function AboutHeader({
  baslik,
  paragraf,
  className = "",
}) {
  return (
    <div className={`mb-3 ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {baslik}
      </h2>

      {paragraf && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
          {paragraf}
        </p>
      )}
    </div>
  );
}