import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const handleScrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetPosition = section.offsetTop;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full font-courier flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/bgHero.png')", // Calea corectă la fișierul din public
        backgroundSize: "cover", // Asigură că imaginea acoperă întreaga secțiune
        backgroundPosition: "center", // Centrarea imaginii
        zIndex: 10, // Asigură că secțiunea `Hero` este deasupra celorlalte secțiuni
      }}
    >
      {/**
       * Spotlights pentru efecte vizuale de fundal
       */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-[80vh] w-[80vw]"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-28 left-32" fill="blue" />
      </div>

      {/**
       * Fundal de tip grid pentru efect vizual
       */}
      <div className="absolute inset-0 h-full w-full bg-grid-black-100/[0.2] dark:bg-grid-white/[0.03]">
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/**
       * Conținut principal Hero
       */}
      <div className="relative z-10 w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center px-4">
        {/* Text descriptiv */}
        <p className="uppercase tracking-widest text-xs text-blue-100">
          Crafting Dynamic Visions with Me
        </p>

        {/* Text animat */}
        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-[30px] md:text-5xl lg:text-6xl my-4"
        />

        {/* Subtitlu */}
        <p className="md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m Costas, a multidisciplinary specialist
        </p>

        {/* Buton către următoarea secțiune */}
        <a
          onClick={() => handleScrollToSection("about")}
          style={{ cursor: "pointer" }}
        >
          <MagicButton
            title="More"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
