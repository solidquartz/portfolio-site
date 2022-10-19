import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory">
      <Head>
        <title>Aky Mac Donald | Full-Stack Developer</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  );
};

export default Home;
