import React from "react";
import { motion } from "framer-motion";
import { DevicePhoneMobileIcon, AtSymbolIcon } from "@heroicons/react/20/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="flex flex-col h-screen relative text-center justify-center mx-auto items-center"
    >
      <div>
        <h3 className="title">let's get in touch</h3>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-center">
          <DevicePhoneMobileIcon className="h-5 w-5 text-purple-300 animate-pulse hover:animate-bounce" />
          <p> +1 514 553 3676</p>
        </div>
        <div className="flex items-center justify-center">
          <AtSymbolIcon className="h-5 w-5 text-purple-300 animate-pulse hover:animate-bounce" />
          <p> akymacd@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
