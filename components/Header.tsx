import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/Header.module.css'; // Import the CSS module

const Header = () => {
const [showHeader, setShowHeader] = useState(true);
const [scrollY, setScrollY] = useState(0);
const [isMouseAtTop, setIsMouseAtTop] = useState(false);
const [mouseInsideHeader, setMouseInsideHeader] = useState(false);
const [emailCopied, setEmailCopied] = useState(false);
const [buttonClicked, setButtonClicked] = useState(false);

// Adăugăm ref pentru header
const headerRef = useRef<HTMLElement | null>(null);

// Handler pentru scroll
const handleScroll = () => {
const currentScrollY = window.scrollY;
setScrollY(currentScrollY);

if (currentScrollY === 0) {
setShowHeader(true);
}
};

// Handler pentru mișcarea mouse-ului
const handleMouseMove = (e: MouseEvent) => {
if (headerRef.current) {
const header = headerRef.current;
const rect = header.getBoundingClientRect();
setMouseInsideHeader(e.clientY >= rect.top && e.clientY <= rect.bottom && e.clientX >= rect.left && e.clientX <= rect.right);
setIsMouseAtTop(e.clientY <= rect.top && e.clientY >= 0);
}
};

// Scroll cu compensare pentru header
const handleScrollToSection = (sectionId: string) => {
const section = document.getElementById(sectionId);
if (section) {
const headerHeight = 25; // Înălțimea header-ului
const offsetPosition = section.offsetTop - headerHeight + 20; // Adaugă 20px la offset pentru a merge puțin mai jos

window.scrollTo({
top: offsetPosition,
behavior: 'smooth',
});
}
};

useEffect(() => {
window.addEventListener('scroll', handleScroll);
window.addEventListener('mousemove', handleMouseMove);

return () => {
window.removeEventListener('scroll', handleScroll);
window.removeEventListener('mousemove', handleMouseMove);
};
}, []);

// Handle click pe logo
const handleLogoClick = () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Handle copiere email
const handleCopyEmail = async () => {
try {
setButtonClicked(true);
await navigator.clipboard.writeText('costas.carollina@gmail.com');
setEmailCopied(true);

setTimeout(() => setEmailCopied(false), 500);
setTimeout(() => setButtonClicked(false), 200);
} catch (error) {
console.error("Failed to copy email: ", error);
}
};

// Actualizarea stării header-ului la scroll
useEffect(() => {
if (scrollY === 0) {
setShowHeader(true);
} else {
setShowHeader(isMouseAtTop || mouseInsideHeader);
}
}, [scrollY, isMouseAtTop, mouseInsideHeader]);

return (
<header ref={headerRef} className={`${styles.header} ${showHeader ? '' : styles.hideHeader}`}>
<div className={styles.leftSide}>
<div className={styles.logoText}>Costas. C</div>
<div className={styles.spatiu}></div>
<div className={styles.verticalLine}></div>
<button 
className={`${styles.copyButton} ${buttonClicked ? styles.clicked : ''}`}
onClick={handleCopyEmail}
>
Copy Email
</button >
{emailCopied && <span className={`${styles.copiedMessage} ${styles.show}`}>✓Copied</span>}
</div>

<div className={styles.headerCenter}>
<a
onClick={() => handleScrollToSection("about")}
className={styles.navLink}
style={{ cursor: "pointer" }}
>
About
</a>

<div className={styles.rotatingLogo} onClick={handleLogoClick}>
<img src="/logo1.svg" alt="Logo" />
</div>
<a
onClick={() => handleScrollToSection("WorkSection")}
className={styles.navLink}
style={{ cursor: "pointer" }}
>
Work
</a>
</div>
</header>
);
};

export default Header;