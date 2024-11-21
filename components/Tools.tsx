"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./styles/Tools.module.css";

// Definirea tipurilor pentru obiectele din toolsData
interface Tool {
  name: string;
  logo: string; // Folosim doar string pentru logo
  projects: number;
  description: string;
}

const toolsData: Tool[] = [
  { name: "", logo: "", projects: 0, description: "" },
  {
    name: "Photoshop",
    logo: "/l1.png",
    projects: 110,
    description: "Graphic design software",
  },
  {
    name: "Illustrator",
    logo: "/l2.png",
    projects: 194,
    description: "Vector graphics editor",
  },
  {
    name: "After Effects",
    logo: "/l3.png",
    projects: 145,
    description: "Visual effects and motion graphics",
  },
  {
    name: "Character Animator",
    logo: "/l4.png",
    projects: 43,
    description: "2D character animation software using puppetry",
  },
  {
    name: "Premiere Pro",
    logo: "/l5.png",
    projects: 66,
    description: "Video editing software",
  },
  {
    name: "Adobe Audition",
    logo: "/l6.png",
    projects: 89,
    description: "Audio editing software for mixing and mastering",
  },
  {
    name: "Blender",
    logo: "/l7.png",
    projects: 36,
    description: "3D design and animation",
  },
  {
    name: "Trello",
    logo: "/l8.png",
    projects: 58,
    description: "Tool for task management and collaboration",
  },
  {
    name: "Figma",
    logo: "/l9.png",
    projects: 26,
    description: "Collaborative interface design",
  },
  {
    name: "ClO3D",
    logo: "/l10.png",
    projects: 7,
    description: "3D fashion design software for garment visualization",
  },
  {
    name: "Notion",
    logo: "/l11.png",
    projects: 73,
    description: "All-in-one workspace for notes, tasks, and collaboration",
  },
  {
    name: "ChatGPT",
    logo: "/l12.png",
    projects: 198,
    description: "AI-powered conversational assistant for various tasks",
  },
  {
    name: "Eleven Labs",
    logo: "/l13.png",
    projects: 63,
    description: "AI-powered voice synthesis and speech generation tool",
  },
  {
    name: "Adobe XD",
    logo: "/l14.png",
    projects: 28,
    description: "UI/UX design tool",
  },
  {
    name: "Monday",
    logo: "/l15.png",
    projects: 17,
    description: "Project management and team collaboration tool",
  },
  {
    name: "CorelDRAW",
    logo: "/l16.png",
    projects: 49,
    description: "Vector illustration tool",
  },
  {
    name: "GarageBand",
    logo: "/l17.png",
    projects: 56,
    description: "Music creation and editing software",
  },
  {
    name: "CapCut",
    logo: "/l18.png",
    projects: 70,
    description: "Video editing tool",
  },
  {
    name: "WPS Office",
    logo: "/l19.png",
    projects: 177,
    description: "Office suite for documents and presentations",
  },
  { name: "", logo: "", projects: 0, description: "" },
];

const Tools: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);
  const projectCountRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [carouselClass, setCarouselClass] = useState(styles.carouselContainer);
  const [scrollAmount, setScrollAmount] = useState(900); // Valoarea default pentru desktop

  // Funcția care actualizează clasa pe baza lățimii ferestrei
  const updateCarouselClass = () => {
    if (window.innerWidth <= 768) {
      setCarouselClass(styles.carouselContainerMobile); // Setează clasa pentru mobil
      setScrollAmount(300); // Scroll mai mic pentru mobil
    } else {
      setCarouselClass(styles.carouselContainer); // Setează clasa pentru desktop
      setScrollAmount(900); // Scroll mai mare pentru desktop
    }
  };

  useEffect(() => {
    updateCarouselClass(); // Setează corect clasa și scroll-ul la încărcarea paginii

    // Adaugă event listener pentru redimensionarea ferestrei
    const handleResize = () => {
      updateCarouselClass();
    };

    window.addEventListener("resize", handleResize);

    // Curăță event listener-ul la demontarea componentului
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const bar = barRefs.current[index];
      const circle = circleRefs.current[index];
      const projects = toolsData[index].projects;
      const projectCount = projectCountRefs.current[index];

      if (toolsData[index].name === "") return; // Evităm cartonașele goale pentru animație

      gsap.set(bar, { width: "0%" });
      gsap.set(circle, { strokeDashoffset: 360 });

      card?.addEventListener("mouseenter", () => {
        gsap.to(bar, {
          width: `${(projects / 20) * 10}%`,
          duration: 0.6,
          ease: "power3.out",
        });
        gsap.to(circle, {
          strokeDashoffset: 360 - (projects / 200) * 360,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.fromTo(
          projectCount,
          { innerText: 0 },
          {
            innerText: projects,
            duration: 0.6,
            ease: "power3.out",
            snap: { innerText: 1 },
            onUpdate: () => {
              if (projectCount)
                projectCount.innerText = Math.ceil(
                  Number(projectCount.innerText)
                ).toString();
            },
          }
        );
      });

      card?.addEventListener("mouseleave", () => {
        gsap.to(bar, { width: "0%", duration: 0.6, ease: "power3.in" });
        gsap.to(circle, {
          strokeDashoffset: 360,
          duration: 0.6,
          ease: "power3.in",
        });

        gsap.to(projectCount, {
          innerText: 0,
          duration: 0.6,
          ease: "power3.in",
          snap: { innerText: 1 },
        });
      });
    });
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        scrollLeft: `-=${scrollAmount}`,
        duration: 1.5,
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        scrollLeft: `+=${scrollAmount}`,
        duration: 1.5,
      });
    }
  };

  return (
    <div>
      <section className={styles.aboutContainer}>
        <div className={styles.aboutText}>The Tools Behind the Work</div>
      </section>
      <div className={carouselClass}>
        {" "}
        {/* Aplică clasa dinamică */}
        <button
          className={`${styles.scrollButton} ${styles.left}`}
          onMouseOver={scrollLeft}
        >
          &lt;
        </button>
        <div className={styles.carousel} ref={carouselRef}>
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                tool.name === "" ? styles.emptyCard : ""
              }`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              {tool.name === "" ? (
                <div className={styles.emptyCardContent}></div>
              ) : (
                <>
                  <div className={styles.cardHeader}>
                    <img
                      src={tool.logo} // Folosim direct calea din toolsData
                      alt={`${tool.name} logo`}
                      className={styles.logo}
                    />
                    <h3 className={styles.title}>{tool.name}</h3>
                  </div>
                  <p className={styles.description}>{tool.description}</p>
                  <div className={styles.bar}>
                    <div className={styles.emptyBar}></div>
                    <div
                      className={styles.filledBar}
                      ref={(el) => {
                        barRefs.current[index] = el;
                      }}
                    ></div>
                  </div>
                  <div className={styles.circle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 120"
                    >
                      <circle
                        ref={(el) => {
                          circleRefs.current[index] = el;
                        }}
                        className={styles.stroke}
                        cx="60"
                        cy="60"
                        r="50"
                      />
                    </svg>
                    <span
                      ref={(el) => {
                        projectCountRefs.current[index] = el;
                      }}
                      className={styles.projectCount}
                    >
                      0
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <button
          className={`${styles.scrollButton} ${styles.right}`}
          onMouseOver={scrollRight}
        >
          &gt;
        </button>
      </div>
      <section className={styles.lineContainer}>
        <div className={styles.divider}></div>
      </section>
      <div id="WorkSection" className="spa"></div>
    </div>
  );
};

export default Tools;
