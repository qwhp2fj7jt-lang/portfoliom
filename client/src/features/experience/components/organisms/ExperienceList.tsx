import { experience } from "../../data/experience";
import { ExperienceItem } from "../molecules/ExperienceItem";

export function ExperienceList() {
  return (
    <ol role="list" aria-label="Deneyimler, en yeniden eskiye">
      {experience.map((item, i) => (
        <li key={item.company}>
          <ExperienceItem item={item} index={i} />
        </li>
      ))}
    </ol>
  );
}
