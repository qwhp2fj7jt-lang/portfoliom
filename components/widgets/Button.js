export default function CustomButton({ text, onClick }) {
  return (
    <div className="mt-10 text-left">
      <button
        className="border dark:text-white border-gray-300 px-6 py-2 rounded-lg text-sm hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}