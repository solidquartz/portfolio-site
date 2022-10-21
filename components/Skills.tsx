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
            Thanks to my experience in an intensive web development bootcamp,
            I'm able to quickly pivot to using new technologies and adopting
            existing codebases on the fly. My passions lie in the Front End and
            design. Writing code to change the look of a site is magical.
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
