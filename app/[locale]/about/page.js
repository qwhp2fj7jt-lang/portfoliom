"use client";

import {
  AboutCard,
  Skills,
  OpenSource,
  Communication,
  MyGoal,
  MyServices,
  Fields,
  AboutHeader
} from "@/widgets";


export default function About() {
  return (
    <div className="container mx-auto px-5 lg:px-10 py-10">

        <AboutHeader />
        <Fields />


        <AboutCard />

      <Skills />
      <OpenSource />
      <Communication />
      <div className="flex flex-col gap-1 md:flex-row">



      <MyGoal />

      <MyServices />   
      </div>
      </div>
  );
}
