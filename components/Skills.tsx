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
      className="h-screen flex relative flex-col lg:flex-row text-center max-w-[400px] md:max-w-[700px] lg:max-w-[1100px] lg:text-left min-h-screen justify-center mx-auto items-center space-y-10 lg:space-y-2 px-10"
    >
      <div className="px-5 flex flex-col lg:content-start">
        <div>
          <h3 className="text-4xl font-thin py-10">my tech stack</h3>
        </div>
        <div>
          <p>
            Thanks to my experience in an intensive web development bootcamp,
            I'm able to quickly pivot to using new technologies and adopting
            existing codebases on the fly.
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
