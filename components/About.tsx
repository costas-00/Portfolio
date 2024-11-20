"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./styles/About.module.css";

// Importăm componenta AboutClient care va rula doar pe client
const AboutClient = dynamic(() => import("./AboutClient"), { ssr: false });

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.aboutTitle}>
        <div className={styles.aboutText}>About</div>
      </div>
      <div className={styles.divider}></div>
      {/* Secțiunea video va fi încărcată pe client */}
      <AboutClient />
      <div className={styles.divider1}></div>
    </section>
  );
};

export default About;
