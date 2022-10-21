import Image from 'next/image';
import React from 'react'
import tailwindicon from "../images/tailwindcss-icon.svg";

type Props = {}

function SkillItem({}: Props) {
  return (
    <div className="group relative flex flex-col items-center">
      <div>
        <Image
          src={tailwindicon}
          alt="tailwind css"
          className="rounded-full border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:-w-32 xl:h-32 filter hover:grayscale transition duration-1000 ease-in-out"
        />
      </div>
      <div className="flex">
        <h4>Tailwind</h4>
      </div>
    </div>
  );
}

export default SkillItem