import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-10 snap-center"
    >
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        src={"http://placekitten.com/500/600"}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500] xl:h-[600]"
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
