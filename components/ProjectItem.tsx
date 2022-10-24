import React from 'react'
import Image from 'next/image';
import projectplaceholder from '../images/projectplaceholder.jpeg'

type Props = {}

function ProjectItem({}: Props) {
  return (
    <div className="flex flex-col max-w-[450px]">
      <div>
        <h4>Title</h4>
      </div>
      <div>
        <Image src={projectplaceholder} alt="project image" />
      </div>
      <div>
        <p>Github / Live Site</p>
      </div>
      <div>
        <p>
          This is a project I made it's so cool please hire me and you will have
          good luck for 500 days and become sexy
        </p>
      </div>
      <div>
        <p>Read Story button</p>
      </div>
    </div>
  );
}

export default ProjectItem;