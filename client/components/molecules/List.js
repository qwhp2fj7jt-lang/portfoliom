import Link from "next/link";
export default function List({ blog }) {
  return (
    < >
      {blog.map((item, index) => (
        <div
          key={item._id}
          className="flex flex-row items-start gap-6 group  p-4 rounded-lg transition"
        >
          <span className="text-gray-400 text-xl w-10 h-10 flex items-center justify-center dark:text-gray-100">
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <div>
            <Link
              href={`/blog/${item.slug}`}
              className="text-lg font-medium group-hover:underline cursor-pointer"
            >
              {item.title}
            </Link>
            <p className="text-gray-500 text-sm mb-1 dark:text-gray-100">
              {" "}
              {new Date(item.createdAt).toLocaleDateString("tr-TR")}
            </p>
            <p className="text-gray-700 text-sm dark:text-gray-100">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}{" "}
    </>
  );
}
