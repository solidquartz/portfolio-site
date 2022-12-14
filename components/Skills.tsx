import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";
import { skills } from './skill-list';

type Props = {};

const Skills: React.FC<Props> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      // viewport={{ once: true }}
      className="h-screen relative flex overflow-hidden flex-col text-center md:text-left justify-evenly mx-auto items-center px-10 max-w-[550px] md:max-w-[600px] lg:max-w-[1500px] xl:flex-row"
    >
      <div className="px-5 flex flex-col">
        <div>
          <h3 className="title">my skills</h3>
        </div>
        <div className="lg:max-w-[600px]">
          <p>
            Thanks to my experience in Lighthouse Labs&apos; intensive web
            development course, I&apos;m able to quickly pivot to using new
            technologies and adopt existing codebases on the fly. While my
            skillset is Full Stack, I&apos;m at my best working in the Front End.
            Writing code to create something from nothing on the page feels
            magical and has long been a creative outlet.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
