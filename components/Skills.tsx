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
      className="h-screen flex relative flex-col text-center max-w-[400px] min-h-screen justify-center mx-auto items-center"
    >
      <div className="space-y-10 px-0">
        <h3 className="text-4xl font-thin">my tech stack</h3>
        <p>Thanks to my experience in an intensive web development bootcamp, I'm able to quickly pivot to using new technologies and adopting existing codebases on the fly.</p>

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
      </div>
    </motion.div>
  );
}

export default Skills;
