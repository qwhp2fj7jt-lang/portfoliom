export default function CustomButton({ text, onClick ,disabled}) {
  return (
    <div className="mt-10 text-left">
      <button
className={`
  border dark:text-white border-gray-300 
  px-6 py-2 rounded-lg text-sm 
  transition-transform duration-200
  ${disabled 
    ? "bg-gray-200 dark:bg-zinc-800 text-gray-400 cursor-not-allowed" 
    : "hover:bg-gray-100 dark:hover:bg-zinc-900 hover:scale-105"}
`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}