"use client"
import { skills } from "@/shared";


export default function Skills() {
  const chunkedSkills = [];
  for (let i = 0; i < skills.length; i += 4) {
    chunkedSkills.push(skills.slice(i, i + 4));
  }

  return (
    <>

      <div className="flex flex-wrap justify-center gap-5 py-10 ">
        {chunkedSkills.map((group, groupIndex) => (
          <div key={groupIndex} className="flex gap-5 mb-5">
            {group.map((skill, index) => (
              <img
                key={index}
                src={skill.icon}
                alt=""
                style={{
                  width: skill.width,
                  height: skill.height,
                  opacity: skill.opacity,
                  borderRadius: skill.borderRadius || 0,
                }}
                className="animate-bounce-custom"
              />
            ))}
          </div>
        ))}

        <style jsx>{`
          .animate-bounce-custom {
            animation: bounceY 2s ease-in-out infinite;
          }
          @keyframes bounceY {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>


  
    </>
  );
}
