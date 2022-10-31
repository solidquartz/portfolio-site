import React from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import { projects } from "./project-list";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="relative flex flex-col text-left items-center mx-auto px-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
    >
      <div className="flex flex-col max-w-[600px] justify-center">
        <h3 className="title">projects i&apos;ve created</h3>
        <p className="pb-10">
          I&apos;m always working on something to learn new skills and polish
          older ones. Take a look at what I&apos;ve written into existence so
          far, including collaborations, solo projects, and freelance
          commissions. Be sure to click through to learn more!
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {projects.map((project) => (
          <ProjectItem key="{project.name" project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
