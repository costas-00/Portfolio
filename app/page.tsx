"use client";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Header from "@/components/Header";
import About from "@/components/About";
import React from "react";
import style from "./styles.module.css";
import Tools from "@/components/Tools";
import VideoBackground from "@/components/VideoBackground";
import Hero from "@/components/Hero";
import useMediaQuery from "@/hooks/useMediaQuery";

const Home = () => {
  // Detectăm dacă ecranul este mai mic de 768px
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <main className="relative bg-black border-transparent flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="border-transparent">
        <Header />

        {/* Afișăm VideoBackground sau Hero în funcție de dimensiunea ecranului */}
        {isMobile ? <Hero /> : <VideoBackground />}

        <About />

        {/* Tools se afișează doar pe desktop și tabletă */}
        {!isMobile && <Tools />}

        <section className={style.pos}>
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
