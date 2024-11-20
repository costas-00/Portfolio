"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles/About.module.css";

gsap.registerPlugin(ScrollTrigger);

const AboutClient: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSource, setVideoSource] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0); // Dimensiunea ferestrei

  // Folosim `useEffect` pentru a seta sursa video și dimensiunea ferestrei
  useEffect(() => {
    const updateVideoSource = () => {
      const newSource = window.innerWidth <= 768 ? "/aboutMobile.mp4" : "/aboutVideo.mp4";
      setVideoSource(newSource);
      setWindowWidth(window.innerWidth); // Setăm dimensiunea ferestrei
    };

    updateVideoSource(); // Setăm sursa video la încărcare
    window.addEventListener("resize", updateVideoSource); // Ascultăm pentru redimensionare

    return () => {
      window.removeEventListener("resize", updateVideoSource); // Curățăm evenimentul
    };
  }, []);

  // Configurăm ScrollTrigger pentru redarea video-ului
  useEffect(() => {
    if (videoRef.current && videoSource) {
      const video = videoRef.current;

      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: video,
        start: "top 80%",
        end: "bottom top",
        onEnter: () => video.play(),
        onLeave: () => video.pause(),
        onEnterBack: () => video.play(),
        onLeaveBack: () => video.pause(),
      });

      return () => {
        scrollTriggerInstance.kill(); // Curățăm ScrollTrigger la demontare
      };
    }
  }, [videoSource]);

  if (!videoSource) {
    return null; // Nu returnăm nimic până când sursa video nu este setată
  }

  return (
    <div className={styles.aboutVideoContainer}>
      <video
        ref={videoRef}
        className={styles.aboutVideo}
        src={videoSource}
        muted
        playsInline
        preload="auto"
        loop={false}
        autoPlay={false}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutClient;
