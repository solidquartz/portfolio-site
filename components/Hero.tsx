import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import akyprofile from "../images/akyprofile.jpg";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello!", "Salut !", "こんにちは！", "Halò!", "你好！"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        priority
        src={akyprofile}
        alt="Image of Aky Mac Donald"
        className="relative rounded-full h-32 w-32 mx-auo object-cover"
      />

      <div>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#B985ED" />
        </h1>
        <h1>Aky Mac Donald</h1>

        <h2>Full-Stack Web Developer</h2>
      </div>
    </div>
  );
}

export default Hero;
