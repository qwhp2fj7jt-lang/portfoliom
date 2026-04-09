"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-xl font-semibold text-yellow-500">
        Server hatası oluştu
      </h2>
      <p className="text-gray-500 mt-2">
        Lütfen daha sonra tekrar deneyin.
      </p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
      >
        Tekrar dene
      </button>
    </div>
  );
}