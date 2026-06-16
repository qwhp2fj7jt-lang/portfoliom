import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
export default function CardList({ article }) {
  const blog = article?.article;
  const imageUrl = blog?.image?.url;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft size={16} />
        Bloga Dön
      </Link>
      <div className="mb-4 flex justify-end flex-wrap gap-2">
        {article?.tableOfContents?.map((item, index) => {
          const colors = [
            "bg-blue-100 text-blue-600",
            "bg-green-100 text-green-600",
            "bg-purple-100 text-purple-600",
            "bg-pink-100 text-pink-600",
            "bg-yellow-100 text-yellow-700",
            "bg-indigo-100 text-indigo-600",
          ];

          const color = colors[index % colors.length];

          return (
            <span
              key={item._id}
              className={`inline-flex rounded-full px-3 py-1 text-sm ${color}`}
            >
              {item.heading}
            </span>
          );
        })}
      </div>

      <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
        {blog.title}
      </h1>

      <p className="mt-2 text-xl text-muted-foreground">{blog.subtitle}</p>

      <div className="flex items-center gap-2 text-muted-foreground mt-3 text-gray-500">
        <Calendar size={16} />
        <span>
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString("tr-TR")
            : "-"}
        </span>
      </div>

      <div className="relative mt-120overflow-hidden rounded-3xl mt-4">
        {imageUrl && (
          <img src={blog.image?.url} alt="image" width={1200} height={700} />
        )}
      </div>

      {blog.image?.caption && (
        <p className="text-center text-sm text-muted-foreground mt-3">
          {blog.image.caption}
        </p>
      )}

      <div className="mt-8">
        <p className="text-xl leading-9 text-muted-foreground">
          {blog.summary}
        </p>
      </div>

      <div className="mt-8 space-y-16">
        {blog.sections?.map((section) => (
          <section key={section._id}>
            <h2 className="text-3xl font-bold">{section.heading}</h2>

            {section.subtitle && (
              <p className="text-muted-foreground mt-2">{section.subtitle}</p>
            )}

            <div className="mt-2 space-y-8">
              {section.items.map((item) => (
                <div key={item._id}>
                  <p className="text-lg leading-8">{item.text}</p>

                  {item.subItems?.length > 0 && (
                    <ul className="mt-3 space-y-2 list-disc pl-6 text-muted-foreground">
                      {item.subItems.map((subItem, index) => (
                        <li key={index}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
