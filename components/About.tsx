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
      // viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-10 snap-center"
    >
      <Image
        src={akyprofile}
        alt="an image of aky"
        className="-mb-20 lg:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover mg:rounded-lg md:w-56 md:h-56 xl:w-[400] xl:h-[500]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h3 className="text-4xl font-thin">
          nice to meet you, i'm{" "}
          <span className="underline decoration-purple-300/60">aky</span>
        </h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut
          porttitor leo a diam sollicitudin tempor id eu. Ipsum consequat nisl
          vel pretium lectus. Orci nulla pellentesque dignissim enim sit amet
          venenatis urna cursus. Curabitur vitae nunc sed velit. Nec nam aliquam
          sem et tortor consequat id porta nibh. Pharetra magna ac placerat
          vestibulum lectus mauris. Id velit ut tortor pretium viverra
          suspendisse potenti nullam. Dui ut ornare lectus sit amet est
          placerat. Aliquet nec ullamcorper sit amet risus.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
