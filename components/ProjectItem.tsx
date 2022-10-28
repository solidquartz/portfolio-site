import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "./project-list";

export type ProjectItemProps = {
  project: Project;
};

type Props = {};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="flex flex-col max-w-[450px] p-5 m-5 border z-10">
      <div className="flex pb-2">
        <h4 className="text-3xl font-thin tracking-[2px]">{project.name}</h4>
      </div>
      <div className="flex justify-center pb-2">
        <Image
          src={project.image}
          width="400px"
          height="350px"
          alt="project image"
          className="object-cover"
        />
      </div>
      <div className="flex justify-center pb-2">
        <a href={project.github}>
          <button className="heroButton">Github</button>
        </a>
        <a href={project.liveSite}>
          <button className="heroButton">Live Site</button>
        </a>
      </div>
      <div className="flex justify-center pb-2 uppercase text-sm tracking-widest text-gray-400">
        <h5>{project.stack}</h5>
      </div>
      <div className="flex pb-2 justify-center text-center">
        <p>
          {project.description}
        </p>
      </div>
      <div className="flex justify-center">
        <Link href={project.story}>
          <button className="heroButton">Read Story</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
