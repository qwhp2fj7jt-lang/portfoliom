import { Papers } from "@/widgets";
export default function Blog({ articles }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 h-[100vh]">
      <Papers articles={articles} />
    </div>
  );
}
