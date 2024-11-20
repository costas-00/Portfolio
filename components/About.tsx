import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles/About.module.css";

// Înregistrăm plugin-ul ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
const videoRef = useRef<HTMLVideoElement | null>(null); // Referință către elementul video
const [scrolled, setScrolled] = useState<boolean>(false); // State pentru a urmări scroll-ul
const [videoSource, setVideoSource] = useState<string>('/aboutVideo.mp4'); // Sursa video pentru desktop

// Funcția care actualizează sursa video în funcție de dimensiunea ferestrei
const updateVideoSource = () => {
const newSource = window.innerWidth <= 768 ? '/aboutMobile.mp4' : '/aboutVideo.mp4';
setVideoSource(newSource);
};

// Funcția care returnează clasa video corespunzătoare în funcție de sursa video
const getVideoClass = () => {
return videoSource === '/aboutVideo.mp4' ? styles.aboutVideo : styles.aboutMobile;
};

useEffect(() => {
window.addEventListener("scroll", handleScroll); // Adăugăm evenimentul de scroll

// Curățăm evenimentul la demontare
return () => {
window.removeEventListener("scroll", handleScroll);
};
}, []);

useEffect(() => {
const video = videoRef.current;

// Asigurăm că video este încărcat înainte de a aplica ScrollTrigger
if (video) {
// Creăm ScrollTrigger pentru a controla redarea videoclipului
const scrollTriggerInstance = ScrollTrigger.create({
trigger: video,
start: "top 80%", // Când ajunge la 80% din vizibilitatea ecranului
end: "bottom top", // Când iese complet din pagină
onEnter: () => video.play(), // Redă video-ul când ajunge în zona vizibilă
onLeave: () => video.pause(), // Pune pe pauză când iese din zona vizibilă
onEnterBack: () => video.play(), // Redă video-ul la revenire
onLeaveBack: () => video.pause(), // Pune pe pauză la ieșire
});

// Adăugăm evenimentul pentru oprirea video-ului la final
const handleVideoEnd = () => {
video.pause(); // Oprim redarea când videoclipul se termină
video.currentTime = video.duration; // Setăm video-ul la ultimul cadru
};

video.addEventListener("ended", handleVideoEnd);

// Curățăm ScrollTrigger și event listener la demontarea componentei
return () => {
scrollTriggerInstance.kill();
video.removeEventListener("ended", handleVideoEnd);
};
}
}, []);

useEffect(() => {
updateVideoSource(); // Actualizează sursa video la încărcarea paginii

// Ascultă pentru redimensionarea ferestrei
window.addEventListener('resize', updateVideoSource);

// Curăță ascultătorul la demontare
return () => {
window.removeEventListener('resize', updateVideoSource);
};
}, []); // Acest useEffect se va executa doar la montarea componentei

// Detectăm scroll-ul paginii
const handleScroll = () => {
if (window.scrollY > 50) {
setScrolled(true); // Activăm scroll-ul după 50px de scroll
} else {
setScrolled(false); // Dezactivăm scroll-ul dacă nu s-a făcut suficient scroll
}
};

return (
<section id="about" className={styles.aboutContainer}>
{/* Titlul About */}
<div className={styles.aboutTitle}>
<div className={styles.aboutText}>About</div>
</div>

{/* Linia de sub About */}
<div className={`${styles.aboutLine} ${scrolled ? styles.active : ""}`}></div>

{/* Videoclipul - să fie plasat după About */}
<div className={styles.aboutVideoContainer}>
<video
ref={videoRef}
className={getVideoClass()} // Alege clasa corespunzătoare pentru video
src={videoSource}
muted
playsInline
preload="auto"
loop={false}
autoPlay={false}
style={{
objectFit: 'contain', // Asigură că videoclipul își păstrează proporțiile și nu este tăiat
width: '100%',
height: '100%',
padding: "0",
margin: "0"
}}
>
Your browser does not support the video tag.
</video>
</div>

{/* Linia de dedesubt cu distanța de 5px față de marginea de jos */}
<div className={`${styles.aboutLineBottom} ${scrolled ? styles.active : ""}`}></div>
</section>
);
};

export default About;
