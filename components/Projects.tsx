import React from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="relative flex flex-col text-left align-center mx-auto px-10 z-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
    >
      <div className="flex flex-col max-w-[600px]">
        <h3 className="text-4xl font-thin py-10">what i've created</h3>
        <p>
          I'm always working on something to learn new skills and polish older
          ones. Take a look at what I've written into existence so far,
          including collaborations, solo projects, and freelance commissions. Be
          sure to click through to learn more!
        </p>
      </div>

      <div className="flex flex-row flex-wrap">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </motion.div>
  );
}

export default Projects;
