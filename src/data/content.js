import internshala from "../assets/certificate/internshala-web-development.png";
import javascriptEssentials from "../assets/certificate/javascript-essentials.png";
import deloitte from "../assets/certificate/deloitte.png";
import reactUnstop from "../assets/certificate/reactjs-unstop.png";
import jobTracker from "../assets/project/HireFlow.png";
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
  { label: "GitHub", href: "https://github.com/Jivesh21", icon: "Github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jivesh-sharma-9aa2b1268/", icon: "Linkedin" },
  { label: "Email", href: "mailto:jivesh2110@outlook.com", icon: "Mail" },
];

export const SKILLS = [
  { name: "HTML5", level: 90, icon: "Code2", comingSoon: false },
  { name: "CSS3", level: 85, icon: "Palette", comingSoon: false },
  { name: "JavaScript", level: 80, icon: "FileJson2", comingSoon: false },
  { name: "React.js", level: 75, icon: "Atom", comingSoon: false },
  { name: "Tailwind CSS", level: 75, icon: "Wind", comingSoon: false },
  { name: "Git", level: 70, icon: "GitBranch", comingSoon: false },
  { name: "GitHub", level: 75, icon: "Github", comingSoon: false },
  { name: "Java", level: 65, icon: "Coffee", comingSoon: false },
  { name: "Python", level: 55, icon: "FileCode2", comingSoon: false },
  { name: "Node.js", level: 30, icon: "Server", comingSoon: true },
  { name: "Express.js", level: 25, icon: "Route", comingSoon: true },
  { name: "MongoDB", level: 20, icon: "Database", comingSoon: true },
];

export const PROJECTS = [
  {
    title: "Personal Portfolio",
    description: "My personal portfolio built with React and Tailwind CSS.",
    image: "https://placehold.co/600x400?text=Portfolio",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "YOUR_GITHUB_LINK",
    demo: "",
  },
{
  title: "HireFlow: Job Application Tracker",
  description:
    "A React application to track job applications, monitor application status, and organize the job search process.",
  image: jobTracker,
  tech: ["React", "JavaScript", "CSS"],
  github: "https://github.com/Jivesh21/job-application-tracker",
  demo: "https://hire-flow-one-weld.vercel.app/",
},
  {
    title: "Bike Sharing Rental Prediction",
    description: "Machine learning project for predicting bike rentals.",
    image: "https://placehold.co/600x400?text=Bike+Sharing",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/Jivesh21/bike-sharing-rental-prediction",
    demo: "",
  },
];

export const EXPERIENCE = [
  {
    type: "Training",
    title: "MERN Stack Training",
    org: "CodroidHub",
    period: "2026 - Present",
    description:
      "Learning modern frontend development using HTML, CSS, JavaScript, React, Git, and GitHub through hands-on projects.",
  },
  {
    type: "Learning",
    title: "Frontend Development",
    org: "Self Learning",
    period: "2025 - Present",
    description:
      "Building responsive web applications and improving problem-solving skills by creating real-world projects.",
  },
  {
    type: "Learning",
    title: "Backend Development",
    org: "Currently Learning",
    period: "2026",
    description:
      "Started learning Node.js, Express.js, and MongoDB to become a MERN Stack Developer.",
  },
];

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

export const ACHIEVEMENTS = [
  { label: "Projects Built", value: 4 },
  { label: "Certificates", value: 5 },
  { label: "GitHub Repositories", value: 10 },
  { label: "Technologies Learned", value: 8 },
];
export const EDUCATION = [
  {
    year: "2023 - Present",
    title: "Bachelor of Technology (Computer Science & Engineering)",
    org: "Ambala College of Engineering and Applied Research",
  },
  {
    year: "2021 - 2023",
    title: "Senior Secondary Education (12th)",
    org: "D.C Model Sr. Sec. Scool",
  },
];
