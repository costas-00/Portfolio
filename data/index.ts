export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Video Animations",
    description:
      "Explainer videos, character animations, text-based visuals, and Lottie animations for mobile and web.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end ",
    videoSrc: "/videoAnim1.mp4",
    spareImg: "",
  },
  {
    id: 2,
    title: "Collaboration with clients from all over the globe",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start font-courier",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Branding & Logo Design",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Intro & Outro Videos",
    description: "Designed to enhance video branding",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Promotional & Ad Campaigns",
    description: "Fast and professional",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    videoSrc: "/ad.mp4",
    spareImg: "",
  },
  {
    id: 6,
    title: "Stop Motion & Regular Motion Videos",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fully Branded YouTube Podcast",
    des: "Darkly sarcastic K-drama reviews from a lazy, bed-loving bunny.",
    img: "/coverBunny.png",
    iconLists: ["/l2.png", "/l3.png", "/l4.png", "/l1.png", "/l6.png"],
    link: "https://app.milanote.com/1TcSeO1G5eCv0z?p=4SsXNi1SWut",
  },
  {
    id: 2,
    title: "Motion graphic animation",
    des: "Combining design and movement, this project delivers visually engaging content that simplifies ideas and captivates audiences.",
    img: "/coverDiets.png",
    iconLists: ["/l2.png", "/l3.png", "/l6.png"],
    link: "https://app.milanote.com/1TdlLt1awBoUeH?p=PrapE8x5k5O",
  },
  {
    id: 3,
    title: "Caricatured Animation",
    des: "Simple movements, enhanced by clean lines and a focus on the artwork, creating a dynamic yet minimalistic animation style.",
    img: "/endo.png",
    iconLists: ["/l2.png", "/l3.png", "/l1.png", "/l6.png"],
    link: "https://app.milanote.com/1Tdm6R1awBoUeK?p=Dl6aTneBtvt",
  },
  {
    id: 4,
    title: "Text animation",
    des: "A dynamic animation project where vibrant text comes to life, capturing attention through bold movements and energetic transitions.",
    img: "/sonata.png",
    iconLists: ["/l3.png", "/l6.png"],
    link: "https://app.milanote.com/1TdkMQ1awBoUeE?p=HSkfskEElgD",
  },
];

export const testimonials = [
  {
    quote:
      "Carolina's expertise in motion design has truly elevated our projects. She has an incredible knack for translating abstract ideas into compelling visuals, capturing the attention of audiences worldwide. Her creativity and attention to detail make her an invaluable part of our team.",
    name: "Sophia Lee",
    title: "Creative Director, PixelWave Studios",
  },
  {
    quote:
      "Working with Costas has been a seamless experience. Her innovative motion graphics and storytelling have enabled us to connect with our international clients in a meaningful way. We’re eager to work together on future projects",
    name: "David Tan",
    title: "Marketing Manager, Nexus",
  },
  {
    quote:
      "Costas’ work on our motion graphics has been exceptional. Her ability to bring our vision to life with stunning animations has helped us deliver powerful messages to a global audience. We’ve received incredible feedback from clients around the world and look forward to collaborating again.",
    name: "Olivia Martinez",
    title: "Brand Strategist, Visionary Creatives",
  },
  {
    quote:
      "Carolina’s motion design expertise took our marketing campaigns to the next level. Her work is always innovative and speaks to audiences worldwide. Her dedication and passion for her craft make her a standout in the industry.",
    name: "Lucas Fischer",
    title: "Head of Digital Marketing, SkyRocket Agency",
  },
  {
    quote:
      "She knows what she’s doing) It was great to work with this specialist. The animations delivered were exactly what we needed and added a nice touch to our project. The process was smooth and straightforward.",
    name: "Mark Evans",
    title: "Co-Founder, NextStep Media",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Creativity and Innovation",
    desc: "My solution-focused thinking ensures unique projects tailored to your needs. I combine original ideas with current trends to deliver memorable results.",
    className: "md:col-span-2",
    thumbnail: "/po1.svg",
  },
  {
    id: 2,
    title: "Multidisciplinary Expertise",
    desc: "From graphic design and animation to web development and video production, I can handle it all in one place. The result? A complete and well-executed project.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/po2.svg",
  },
  {
    id: 3,
    title: "Quick Work and Great Organization",
    desc: "I respect deadlines and ensure every step of the project runs smoothly. My workflow is transparent, and clear communication is always a priority.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/po3.svg",
  },
  {
    id: 4,
    title: "Your Vision, My Focus",
    desc: "I take the time to understand your ideas and turn them into results that truly represent your vision. Together, we’ll create something meaningful.",
    className: "md:col-span-2",
    thumbnail: "/po4.svg",
  },
];

export const socialMedia = [
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/carolina-costas-a2a505339/", // URL-ul pentru LinkedIn
  },
];
