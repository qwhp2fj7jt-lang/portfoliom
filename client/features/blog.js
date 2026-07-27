import { Papers } from "@/widgets";
export default function Blog({ articles }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Papers articles={articles} />
    </div>
  );
}
