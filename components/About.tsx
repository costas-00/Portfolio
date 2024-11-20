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

      {/* Secțiunea video va fi încărcată pe client */}
      <AboutClient />
    </section>
  );
};

export default About;
