import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1],
        opacity: [0.1, 0.2, 0.5, 0.8, 1],
        borderRadius: ["20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5
      }}
      className="relative flex justify-center items-center">
      <div className="absolute border border-gray-200 rounded-full h-[300px] w-[300px] mt-52 animate-pulse" />
      <div className="absolute border border-[#B985ED]  opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />

      <div />
    </motion.div>
  );
}

export default BackgroundCircles