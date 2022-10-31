import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import akyprofile from "../images/akyprofile2.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-[1100px] px-10 justify-evenly mx-auto items-center snap-center"
    >
      <Image
        src={akyprofile}
        alt="an image of aky"
        className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-56 md:h-56 min-w-[300px]"
      />

      <div className="space-y-10 px-0 md:px-10 max-w-[700px]">
        <h3 className="text-4xl font-thin">
          nice to meet you, i&apos;m{" "}
          <span className="underline decoration-purple-300/60">aky</span>
        </h3>
        <p className="text-base">
          I&apos;m a full stack web developer with a passion for front end and
          design. I first fell in love with the creative possibilities of the
          web in the early &apos;00s when I learned HTML from Neopets and saved
          up for a copy of Photoshop. I took a detour achieving a degree in
          Linguistics and working as an English as a Second Language Teacher,
          but now I&apos;ve returned to my roots. Deciding to change my life to
          pursue a career where I can learn and grow every day, I&apos;m excited
          to find out where Web Development can take me. I love problem solving,
          asking questions, and making something from seemingly nothing.
          <p>
            Outside of coding, I&apos;m a lifelong lover of video games
            (especially JRPGs!), and I can usually be found crocheting or
            studying languages (both the human and computer kinds).
          </p>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
