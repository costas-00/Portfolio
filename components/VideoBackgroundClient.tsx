"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/VideoBackground.module.css"; // Import CSS module

const VideoBackgroundClient: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSource, setVideoSource] = useState<string>(
    "/background-video.mp4"
  );
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Funcția care actualizează sursa video în funcție de dimensiunea ferestrei
  const updateVideoSource = () => {
    const newSource =
      window.innerWidth <= 768
        ? "/background-video-mobile.mp4"
        : "/background-video.mp4";
    setVideoSource(newSource);

    // Reset video pentru a preveni cache-ul și a forța reîncărcarea
    if (videoRef.current) {
      videoRef.current.load(); // Forțează reîncărcarea sursei
    }
  };

  // 1. Updatează sursa video și dimensiunea ferestrei
  useEffect(() => {
    updateVideoSource(); // Setăm sursa video la încărcare
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateVideoSource();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Curățăm ascultătorul
    };
  }, []);

  // 2. Sincronizarea video-ului cu scroll-ul
  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight * 3; // Înălțimea secțiunii de 3 ori înălțimea ecranului

      if (video) {
        const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
        video.currentTime = scrollPercentage * video.duration;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Curățăm ascultătorul
    };
  }, [videoSource]);

  return (
    <section
      className={styles.videoSection}
      style={{
        position: "relative",
        height: "300vh", // Înălțime de 3 ori ecranul pentru secțiunea video
      }}
    >
      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        muted
        preload="metadata" // Setează preload la "metadata"
        style={{
          position: "fixed", // Videoclipul rămâne fixat în poziția sa
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw", // Pentru a ocupa lățimea ecranului
          height: "100vh",
        }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoBackgroundClient;
