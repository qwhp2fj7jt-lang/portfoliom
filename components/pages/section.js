"use client"; 

import { Hero, Skills, ProjectsAndExperience, Blog } from "@/widgets";
import { useParams } from "next/navigation";

export default function HomeRoute() {
  const params = useParams();
  const locale = params?.locale || "tr";

  return (
    <div className="container mx-auto px-6 md:px-20 py-10">
      <Hero locale={locale}/>
      <Skills />
      <Blog locale={locale}/>
      <ProjectsAndExperience locale={locale}/>
    </div>
  );
}
