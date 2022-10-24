import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import projectplaceholder from '../images/projectplaceholder.jpeg'

type Props = {}

function ProjectItem({}: Props) {
  return (
    <div className="flex flex-col max-w-[500px] p-5">
      <div>
        <h4 className="text-3xl font-thin tracking-[2px]">Wedding Site</h4>
      </div>
      <div> 
        <Image src={projectplaceholder} alt="project image" />
      </div>
      <div>
        <a href="http://github.com/solidquartz">
          <button className="heroButton">Github</button>
        </a>
        <a href="http://akyandrew2022.com">
          <button className="heroButton">Live Site</button>
        </a>
      </div>
      <div>
        <p>
          This is a project I made it's so cool please hire me and you will have
          good luck for 500 days and become sexy
        </p>
      </div>
      <div>
        <Link href="#">
          <button className="heroButton">Read Story</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;