import { Hero, Projects, Blog } from "@/widgets";
import { Skills,Experience } from "@/components/molecules";
export default function HomeRoute({ articles }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Hero />
      <br/>
      <Experience/>
      <br/>
      <Skills />
      <br/>
     
      <Blog articles={articles} />

      <Projects />
    </div>
  );
}
