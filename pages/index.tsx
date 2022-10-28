import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
// import ArrowSmallUpIcon from "@heroicons/react/20/solid"

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory">
      <Head>
        <title>Aky Mac Donald | Full-Stack Developer</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <footer className="sticky bottom-1 cursor-pointer z-0">
        <div className="flex items-center justify-end p-10">
          {/* <ArrowSmallUpIcon className="h-5 w-5 animate-pulse hover:animate-bounce" /> */}
          <Link href="#hero">
            <button className="tracking-wider font-thin text-md hover:animate-ping">
              TOP
            </button>
          </Link>
        </div>
      </footer>

      {/* Note to self: when I'm done, look through framer motion and tailwind to find things I like to add! also use rough notation */}
    </div>
  );
};

export default Home;
