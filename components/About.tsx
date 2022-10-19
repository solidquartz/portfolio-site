import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-10">
      <h3 className="absolute top-24 tracking-[15px] text-gray-500 text-2xl uppercase">
        about
      </h3>

      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.3,
        }}
        src={"http://placekitten.com/500/600"}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500] xl:h-[600]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-thin">nice to meet you, i'm <span className="underline decoration-purple-300/60">aky</span>{" "}</h4>
      </div>
    </div>
  );
}

export default About;
