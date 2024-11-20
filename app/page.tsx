"use client";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Header from "@/components/Header";

import About from "@/components/About";

import React, { useEffect } from "react";
import style from "./styles.module.css";
import { useState } from "react";
// useEffect(() => {
// Resetează scroll-ul la poziția 0 (sus)
//window.scrollTo(0, 0);
// }, []);

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  return (
    <main className="relative bg-black border-transparent flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="border-transparent">
        <Header />

        <About />

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
