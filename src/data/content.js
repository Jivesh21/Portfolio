import internshala from "../assets/certificate/internshala-web-development.png";
import javascriptEssentials from "../assets/certificate/javascript-essentials.png";
import deloitte from "../assets/certificate/deloitte.png";
import reactUnstop from "../assets/certificate/reactjs-unstop.png";

import jobTracker from "../assets/project/HireFlow.png";
import devPulse from "../assets/project/feed.png";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Jivesh21",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jivesh-sharma-9aa2b1268/",
    icon: "Linkedin",
  },
  {
    label: "Email",
    href: "mailto:jivesh2110@outlook.com",
    icon: "Mail",
  },
];

// ====================================
// Skills
// ====================================

export const SKILLS = [
  // Frontend
  {
    name: "HTML5",
    level: 90,
    icon: "Code2",
    comingSoon: false,
  },
  {
    name: "CSS3",
    level: 85,
    icon: "Palette",
    comingSoon: false,
  },
  {
    name: "JavaScript",
    level: 80,
    icon: "FileJson2",
    comingSoon: false,
  },
  {
    name: "React.js",
    level: 80,
    icon: "Atom",
    comingSoon: false,
  },
  {
    name: "Tailwind CSS",
    level: 75,
    icon: "Wind",
    comingSoon: false,
  },

  // Backend
  {
    name: "Node.js",
    level: 70,
    icon: "Server",
    comingSoon: false,
  },
  {
    name: "Express.js",
    level: 70,
    icon: "Route",
    comingSoon: false,
  },
  {
    name: "MongoDB",
    level: 65,
    icon: "Database",
    comingSoon: false,
  },

  // Tools & Technologies
  {
    name: "Git",
    level: 75,
    icon: "GitBranch",
    comingSoon: false,
  },
  {
    name: "GitHub",
    level: 80,
    icon: "Github",
    comingSoon: false,
  },
  {
    name: "Socket.IO",
    level: 65,
    icon: "Radio",
    comingSoon: false,
  },
  {
    name: "JWT",
    level: 65,
    icon: "ShieldCheck",
    comingSoon: false,
  },
  {
    name: "Cloudinary",
    level: 60,
    icon: "Cloud",
    comingSoon: false,
  },

  // Other
  {
    name: "Java",
    level: 65,
    icon: "Coffee",
    comingSoon: false,
  },
  {
    name: "Python",
    level: 55,
    icon: "FileCode2",
    comingSoon: false,
  },
];

// ====================================
// Projects
// ====================================

export const PROJECTS = [
  {
    title: "DevPulse",
    description:
      "A full-stack developer social platform for connecting, sharing, and communicating with other developers, featuring real-time messaging, notifications, cloud media, and an AI-powered developer assistant.",
    image: devPulse,
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "AI",
      "Cloudinary",
    ],
    github: "https://github.com/Jivesh21/Devpulse",
    demo: "https://studentcommunity.codroidhub.com/",
  },

  {
    title: "HireFlow: Job Application Tracker",
    description:
      "A React application to track job applications, monitor application status, and organize the job search process.",
    image: jobTracker,
    tech: [
      "React",
      "JavaScript",
      "CSS",
    ],
    github:
      "https://github.com/Jivesh21/job-application-tracker",
    demo:
      "https://hire-flow-one-weld.vercel.app/",
  },

  {
    title: "Bike Sharing Rental Prediction",
    description:
      "A machine learning project that predicts bike rental demand using Python, Pandas, and Scikit-learn.",
    image:
      "https://placehold.co/600x400?text=Bike+Sharing",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
    github:
      "https://github.com/Jivesh21/bike-sharing-rental-prediction",
    demo: "",
  },

  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio built with React and Tailwind CSS to showcase projects, skills, certificates, and experience.",
    image:
      "https://placehold.co/600x400?text=Portfolio",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "",
    demo: "",
  },
];

// ====================================
// Experience & Learning
// ====================================

export const EXPERIENCE = [
  {
    type: "Training",
    title: "MERN Stack Training",
    org: "CodroidHub",
    period: "2026",
    description:
      "Completed hands-on MERN stack training covering frontend development, backend APIs, database integration, authentication, and project-based development.",
  },

  {
    type: "Project",
    title: "Full-Stack Development — DevPulse",
    org: "Personal Project",
    period: "2026",
    description:
      "Built and deployed a full-stack developer social platform using React, Node.js, Express.js, MongoDB, and Socket.IO, with authentication, real-time messaging, notifications, cloud media uploads, and an AI-powered developer assistant.",
  },

  {
    type: "Learning",
    title: "Frontend Development",
    org: "Self Learning",
    period: "2025 - Present",
    description:
      "Building responsive web applications and strengthening problem-solving skills through hands-on projects using HTML, CSS, JavaScript, and React.",
  },
];

// ====================================
// Certificates
// ====================================

export const CERTIFICATES = [
  {
    title: "Web Development Training",
    issuer: "Internshala Trainings",
    image: internshala,
  },

  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    image: javascriptEssentials,
  },

  {
    title: "Technology Job Simulation",
    issuer: "Deloitte (Forage)",
    image: deloitte,
  },

  {
    title: "ReactJS Course",
    issuer: "Unstop",
    image: reactUnstop,
  },
];

// ====================================
// Achievements
// ====================================

export const ACHIEVEMENTS = [
  {
    label: "Projects Built",
    value: "4+",
  },
  {
    label: "Certificates",
    value: 4,
  },
  {
    label: "GitHub Repositories",
    value: "10+",
  },
  {
    label: "Technologies",
    value: "12+",
  },
];

// ====================================
// Education
// ====================================

export const EDUCATION = [
  {
    year: "2023 - Present",
    title:
      "Bachelor of Technology (Computer Science & Engineering)",
    org:
      "Ambala College of Engineering and Applied Research",
  },

  {
    year: "2021 - 2023",
    title:
      "Senior Secondary Education (12th)",
    org:
      "D.C Model Sr. Sec. School",
  },
];
