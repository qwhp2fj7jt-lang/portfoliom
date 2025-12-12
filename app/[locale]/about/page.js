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
import { fields } from "@/shared";

export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-20 py-10">
      <div className="mx-auto px-6 md:px-20 py-5">
        <AboutHeader />
        <Fields fields={fields} />
      </div>
      <div className=" px-6 md:px-20 py-5">
        <AboutCard />
      </div>

      <Skills />
      <OpenSource />
      <Communication />
      <div className="mx-auto px-6 md:px-20 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-6">
      <MyGoal />
      <MyServices />      </div>
      </div>
    </div>
  );
}
