import Link from "next/link";

export default function List({ blog = [] }) {
  return (
    <div className="flex flex-col gap-4">
      {blog.map((item, index) => (
        <div
          key={item._id}
          className="flex items-start gap-4 rounded-lg transition group"
        >
          <span className="w-10 text-xl text-gray-600 dark:text-gray-100 flex justify-center">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex-1">
    <Link
  href={`/blog/${item.slug}`}
  className="text-lg font-medium group-hover:underline"
  aria-label={`Blog yazısını oku: ${item.title}`}
>
  {item.title}
</Link>

            <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
              {item.createdAt
                ? new Date(item.createdAt).toLocaleDateString("tr-TR")
                : ""}
            </p>

            <p className="text-sm text-gray-700 dark:text-gray-100 mt-1">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
