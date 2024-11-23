"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles/About.module.css";

gsap.registerPlugin(ScrollTrigger);

const AboutClient: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Stare pentru a verifica încărcarea video
  const [videoSource, setVideoSource] = useState<string | undefined>(undefined); // Sursa video

  // Setăm sursa videoclipului în funcție de dimensiunea ferestrei
  useEffect(() => {
    const updateVideoSource = () => {
      const newSource =
        window.innerWidth <= 768 ? "/aboutMobileVideo.mp4" : "/aboutVideo.mp4";
      setVideoSource(newSource);
    };

    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);

    return () => {
      window.removeEventListener("resize", updateVideoSource);
    };
  }, []);

  // Așteptăm ca videoclipul să fie complet încărcat
  useEffect(() => {
    const video = videoRef.current;

    if (video && videoSource) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true); // Marcăm videoclipul ca fiind încărcat
      };

      video.addEventListener("loadeddata", handleLoadedData);

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [videoSource]);

  // Configurăm ScrollTrigger pentru redarea videoclipului
  useEffect(() => {
    if (isVideoLoaded && videoRef.current) {
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
        scrollTriggerInstance.kill();
      };
    }
  }, [isVideoLoaded]);

  return (
    <div className={styles.aboutVideoContainer}>
      {/* Loader afișat până când videoclipul este gata */}
      {!isVideoLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin w-12 h-12 border-4 border-t-blue-500 border-gray-300 rounded-full"></div>
        </div>
      )}
      {videoSource && (
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
            display: isVideoLoaded ? "block" : "none",
          }}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default AboutClient;
