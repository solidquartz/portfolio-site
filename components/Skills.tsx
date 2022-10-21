import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      // viewport={{ once: true }}
      className="h-screen relative flex overflow-hidden flex-col text-center md:text-left justify-evenly mx-auto items-center px-10 z-10 max-w-[550px] md:max-w-[700px] lg:max-w-[1500px] xl:flex-row"
    >
      <div className="px-5 flex flex-col lg:content-start">
        <div>
          <h3 className="text-4xl font-thin py-10">my skills</h3>
        </div>
        <div className="lg:max-w-[600px]">
          <p>
            Thanks to my experience in Lighthouse Labs' intensive web
            development course, I'm able to quickly pivot to using new
            technologies and adopt existing codebases on the fly. While my
            skillset is Full Stack, my passion lies in Front End and design.
            Writing code to create something from nothing on the page feels
            magical and has long been a creative outlet.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
      </div>
    </motion.div>
  );
}

export default Skills;
