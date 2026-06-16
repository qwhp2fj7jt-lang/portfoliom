export default function Button({ text, onClick ,disabled}) {
    return (
      <div className="mt-1 text-left">
        <button
     className="text-gray-500 dark:text-gray-300 hover:text-yellow-400 text-sm text-left mt-2 hover:underline"
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      </div>
    );
  }