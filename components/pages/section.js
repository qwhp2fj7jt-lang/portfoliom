"use client"; 

import { Hero, Skills, ProjectsAndExperience, Blog } from "@/widgets";
import { useParams } from "next/navigation";

export default function HomeRoute() {
  const params = useParams();
  const locale = params?.locale || "tr";

  return (
    <div className="container mx-auto px-5 lg:px-10 py-10">
      <Hero locale={locale}/>
      <Skills />
      <Blog locale={locale}/>
      <ProjectsAndExperience locale={locale}/>
    </div>
  );
}
