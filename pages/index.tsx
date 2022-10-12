import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory">
      <Head>
        <title>Aky Mac Donald | Full-Stack Developer</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  );
};

export default Home;
