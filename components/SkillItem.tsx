import Image from "next/image";
import React from "react";
import type { Skill } from "./skill-list";

export type SkillItemProps = {
  skill: Skill;
};

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div>
      <div>
        <Image
          src={skill.image}
          alt={skill.alt}
          layout="fill"
          className="rounded-full border-gray-500 object-scale-down filter hover:grayscale transition duration-1000 ease-in-out"
        />
      </div>
      <div>
        <h4>{skill.name}</h4>
      </div>
    </div>
  );
};

export default SkillItem;
