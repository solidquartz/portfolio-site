import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-around max-w-7x1 mx-auto xl:items-center z-20 bg-white">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="http://linkedin.com/in/akymacdonald"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="http://github.com/solidquartz"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          flex flex-row items-center
          text-gray-700 cursor-pointer"
      >
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
        </Link>
        <p
          className=" 
            hidden md:inline-flex
            text-sm text-gray-700"
        >
          <Link href="#contact">Get in Touch</Link>
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
