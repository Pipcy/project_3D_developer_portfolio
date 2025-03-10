import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  threejs,
  universal,
  microsoft,
  proj1_img1,
  cpp,
  onshape,
  opencv,
  python,
  tensorflow,
  clogo,
  blender,
  maya,
  linkedin,
  unity,
  unreal,
  chatgpt,
  azure,
  raspberryPi,
  arduino,
  pytorch,
  csp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
    tag: "language",
  },
  {
    name: "Unreal Engine",
    icon: unreal,
    tag: "software",
  },
  {
    name: "Unity",
    icon: unity,
    tag: "software",
  },
  {
    name: "Blender",
    icon: blender,
    tag: "software",
  },
  {
    name: "Maya",
    icon: maya,
    tag: "software",
  },
  {
    name: "C++",
    icon: cpp,
    tag: "language",
  },
  {
    name: "Onshape",
    icon: onshape,
    tag: "software",
  },
  {
    name: "OpenCV",
    icon: opencv,
    tag: "framework",
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
    tag: "framework",
  },
  {
    name: "C",
    icon: clogo,
    tag: "language",
  },
  {
    name: "ChatGPT API",
    icon: chatgpt,
    tag: "framework",
  },
  {
    name: "Azure API",
    icon: azure,
    tag: "framework",
  },
  {
    name: "Raspberry Pi",
    icon: raspberryPi,
    tag: "software",
  },
  {
    name: "Arduino",
    icon: arduino,
    tag: "software",
  },
  {
    name: "PyTorch",
    icon: pytorch,
    tag: "framework",
  },
  {
    name: "C#",
    icon: csp,
    tag: "language",
  },
  {
    name: "JavaScript",
    icon: javascript,
    tag: "language",
  },
  {
    name: "React JS",
    icon: reactjs,
    tag: "framework",
  },
  {
    name: "git",
    icon: git,
    tag: "software",
  },
  {
    name: "figma",
    icon: figma,
    tag: "software",
  }
];

const experiences = [
  {
    title: "R&D Software Engineering Intern",
    company_name: "Universal Creative",
    icon: universal,
    iconBg: "#ffffff",
    date: "January 2024 - August 2024",
    points: [
      "Worked in ATI R&D (Advanced Technology Interactive), researched new interactive technology, contributed to design, iteration, and testing for blue-sky project for Universal park attraction innovation."
    ],
  },
  {
    title: " (Incoming) Software Engineering Intern",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#ffffff",
    date: "May 2025 - August 2025",
    points: [
      "Incoming intern for Microsoft Gaming Business Group."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gesture Controlled Assistive Car",
    date: "March 2025",
    company: "Tech Corp",
    position: "Lead Developer",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Raspberry Pi",
        color: "green-text-gradient",
      },
      {
        name: "Arduino",
        color: "pink-text-gradient",
      },
    ],
    images: [
      proj1_img1,
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "22222Gesture Controlled Assistive Car",
    date: "March 2025",
    company: "Tech Corp",
    position: "Lead Developer",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Raspberry Pi",
        color: "green-text-gradient",
      },
      {
        name: "Arduino",
        color: "pink-text-gradient",
      },
    ],
    images: [
      proj1_img1,
    ],
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
