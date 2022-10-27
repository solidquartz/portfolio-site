import Image from "next/image";
import React from "react";
import type { Skill } from "./skill-list";

export type SkillItemProps = {
  skill: Skill;
};

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="flex relative">
        <Image
          src={skill.image}
          alt={skill.alt}
          layout="fill"
          className="rounded-full border-gray-500 object-scale-down filter hover:grayscale transition duration-1000 ease-in-out"
        />
        <h4 className="relative top-10">{skill.name}</h4>
    </div>
  );
};

export default SkillItem;
