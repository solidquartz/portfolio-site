import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="h-screen relative flex overflow-hidden flex-col text-left lg:flex-row justify-evenly mx-auto items-center px-10 z-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
    >
      <div>
        <h3 className="text-4xl font-thin py-10">contact me</h3>
        <p>
       say hi!
        </p>
      </div>


    </motion.div>
  );
}

export default Contact