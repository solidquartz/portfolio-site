import Image from "next/image";
import React from "react";
import type { Skill } from "./skill-list";

export type SkillItemProps = {
  skill: Skill;
};

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="flex relative p-3 m-3 justify-center">
        <Image
          src={skill.image}
          alt={skill.alt}
          layout="fill"
          className="h-4 w-4 hover:grayscale hover:filter transition duration-1000 ease-in-out"
        />
        <h4 className="relative top-10 pt-2">{skill.name}</h4>
    </div>
  );
};

export default SkillItem;
