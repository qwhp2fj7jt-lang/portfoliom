import Link from "next/link";

export default function List({ blog = [] }) {
  return (
    <div className="space-y-4">
      {blog.map((item, index) => (
        <div
          key={item._id}
          className="
            group
            relative
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-2
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-gray-300
            hover:shadow-xl
            dark:border-gray-800
            dark:bg-zinc-900
            dark:hover:border-gray-500/50
          "
        >


<span className="w-10 text-xl text-gray-600 dark:text-gray-100 flex justify-center"> {String(index + 1).padStart(2, "0")} </span>


     
          <div className="flex-1">

            <Link
              href={`/blog/${item.slug}`}
              aria-label={`Blog yazısını oku: ${item.title}`}
              className="
                line-clamp-2
                text-lg
                font-semibold
                text-gray-900
                transition-colors
                duration-200
                group-hover:text-gray-600
                dark:text-gray-100
                dark:group-hover:text-gray-400
              "
            >
              {item.title}
            </Link>



            <div
              className="
                mt-2
                flex
                items-center
                gap-2
                text-xs
                text-gray-500
                dark:text-gray-400
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />

              {item.createdAt
                ? new Date(item.createdAt).toLocaleDateString("tr-TR")
                : ""}
            </div>



            <p
              className="
                mt-3
                line-clamp-2
                text-sm
                leading-6
                text-gray-600
                dark:text-gray-300
              "
            >
              {item.subtitle}
            </p>



            <div
              className="
                mt-4
                flex
                items-center
                text-xs
                font-medium
                text-gray-600
                opacity-0
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:opacity-100
                dark:text-gray-400
              "
            >
              Yazıyı oku →
            </div>

          </div>

        </div>
      ))}
    </div>
  );
}
