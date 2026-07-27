export default function InfoSection  ({ title, items, icon }) {
  return (
    <div className="mb-6">
      <h3 className="dark:text-white text-xl md:text-2xl mb-5 text-gray-700 flex items-center gap-2">
        {icon} {title}
      </h3>

      <ul className="dark:text-gray-400 list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
