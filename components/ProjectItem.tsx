import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import projectplaceholder from '../images/projectplaceholder.jpeg'

type Props = {}

function ProjectItem({}: Props) {
  return (
    <div className="flex flex-col max-w-[450px] p-5 m-5 border">
      <div className="flex pb-2">
        <h4 className="text-3xl font-thin tracking-[2px]">Wedding Site</h4>
      </div>
      <div className="flex justify-center pb-2">
        <Image src={projectplaceholder} alt="project image" />
      </div>
      <div className="flex justify-center pb-2">
        <a href="http://github.com/solidquartz">
          <button className="heroButton">Github</button>
        </a>
        <a href="http://akyandrew2022.com">
          <button className="heroButton">Live Site</button>
        </a>
      </div>
      <div className="flex pb-2">
        <p>
          This is a project I made it's so cool please hire me and you will have
          good luck for 500 days and become sexy
        </p>
      </div>
      <div className="flex justify-center">
        <Link href="#">
          <button className="heroButton">Read Story</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;