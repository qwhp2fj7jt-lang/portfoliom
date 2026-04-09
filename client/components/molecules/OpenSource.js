"use client";
import MyGoal from "@/molecules/MyGoal";
export default function OpenSource({baslik,paragraf,paragrafOne}) {
  return (
    <>
<MyGoal baslik={baslik} paragraf={paragraf} paragrafOne={paragrafOne}/>

<img
  src="/images/openSource.png"
  alt="Open Source"
  className="w-full md:w-4/5 mx-auto dark:hidden m-3"
/>

<img
  src="/images/openSource-dark.png"
  alt="Open Source Dark"
  className="hidden w-full md:w-4/5 mx-auto dark:block m-3"
/>
    </>
  );
}
