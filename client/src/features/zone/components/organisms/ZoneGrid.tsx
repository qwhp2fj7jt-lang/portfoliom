import { getZonePosts } from "../../api/zone";
import { ZoneCard } from "./ZoneCard";

export async function ZoneGrid() {
  const posts = await getZonePosts();

  if (posts.length === 0) {
    return <p className="text-neutral-400">Paylaşım bulunamadı</p>;
  }

  return (
    <ul role="list" className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] items-start gap-5">
      {posts.map((post, i) => (
        <li key={post.id}>
          <ZoneCard post={post} eager={i === 0} />
        </li>
      ))}
    </ul>
  );
}
