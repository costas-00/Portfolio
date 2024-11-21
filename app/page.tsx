"use client";
import { useState, useEffect } from "react";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Header from "@/components/Header";
import About from "@/components/About";
import Tools from "@/components/Tools";
import VideoBackground from "@/components/VideoBackground";
import Hero from "@/components/Hero";
import style from "./styles.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";

const Home = () => {
  // Detectăm dacă ecranul este mai mic de 768px (pentru mobile)
  const isMobile = useMediaQuery("(max-width: 768px)");

  // State pentru a verifica dacă suntem pe client
  const [isMounted, setIsMounted] = useState(false);

  // Folosim useEffect pentru a seta client-side rendering
  useEffect(() => {
    // Setează că suntem pe client după montarea paginii
    setIsMounted(true);
  }, []);

  // Nu afișăm conținutul până când pagina nu este complet montată
  if (!isMounted) {
    return null; // Sau poți adăuga un loading spinner aici
  }

  return (
    <main className="relative bg-black border-transparent flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="border-transparent">
        <Header />

        {/* Afișăm VideoBackground sau Hero în funcție de dimensiunea ecranului */}
        {isMobile ? <Hero /> : <VideoBackground />}

        <About />

        {/* Afișăm Tools doar pe client și pe desktop/tablete */}
        {isMounted && !isMobile && (
          <div className="transition-opacity duration-500 opacity-100">
            <Tools />
          </div>
        )}

        <section className={style.pos} id="WorkSection">
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
