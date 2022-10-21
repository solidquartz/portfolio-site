import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
// import BackgroundCircles from "./BackgroundCircles";
// import akyprofile from "../images/akyprofile2.jpg";
// import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello!", "Salut !", "こんにちは！", "Halò!", "你好！"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-start">
      {/* <BackgroundCircles /> */}
      {/* <Image
        priority
        src={akyprofile}
        alt="Image of Aky Mac Donald"
        className="relative rounded-full h-32 w-32 mx-auto object-scale-down"
      /> */}

      <div className="z-10">
        <h1 className="text-5xl lg:text-6xl px-10">
          <span>{text}</span>
          <Cursor cursorColor="#B985ED" />
        </h1>
        <h1 className="text-xl uppercase text-gray-500 pb-2 tracking-[12px]">
          Aky Mac Donald
        </h1>

        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px]">
          Full-Stack Web Developer
        </h2>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">about</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">contact</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Hero;
