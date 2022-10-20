import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">

      <h3 className="text-4xl font-thin">my tech stack</h3>

      <div className="grid grid-cols-4 gap-5">
        <SkillItem />
      </div>

    </motion.div>
  );
}

export default Skills;
