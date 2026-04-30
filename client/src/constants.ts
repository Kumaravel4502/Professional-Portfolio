import { Experience, Education, Certification, SkillGroup, Project } from './types';

export const summary = "Junior MERN Stack Developer with experience building scalable applications, REST APIs, JWT authentication, and improving performance by 25%.";

export const experiences: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "ZustPe Technologies",
    duration: "Jan 2026 – Apr 2026",
    points: [
      "Developed and deployed scalable full-stack MERN features for production applications using React.js, Node.js, Express.js,and MongoDB, enhancing performance and reliability",
      "Designed responsive, reusable UI components with React.js and Tailwind CSS, reducing UI defects by 30%",
      "Built and integrated REST APIs using Node.js and Express.js, improving backend efficiency and enabling seamless data flow",
      "Implemented JWT-based authentication and secure session management for enhanced application security"
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Revamp Academy",
    duration: "Apr 2025 – Jun 2025",
    points: [
      "Built 3+ MERN applications including dashboards, forms, and review systems",
      "Developed REST APIs enabling real-time data communication",
      "Improved application performance by 25% through optimized API handling",
      "Debugged and resolved 15+ frontend and backend issues, improving system stability"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "BCA",
    institution: "Alpha Arts & Science College",
    year: "2025",
    score: "CGPA 7.9"
  },
  {
    degree: "HSC",
    institution: "State Board",
    year: "2022",
    score: "75%"
  },
  {
    degree: "SSLC",
    institution: "State Board",
    year: "2020",
    score: "77%"
  }
];

export const certifications: Certification[] = [
  {
    name: "MERN Full Stack",
    issuer: "Revamp Academy",
    year: "2025"
  },
  {
    name: "Java Training",
    issuer: "QSpiders",
    year: "2026"
  },
   {
    name: "Python",
    issuer: "GUVI",
    year: "2023"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Material UI"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Java"]
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"]
  },
  {
    category: "Tools",
    items: ["Git", "Postman", "JWT"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "UnStyle – E-Commerce Platform",
    desc: "A full-stack MERN application with product listing, authentication, cart, and checkout system.",
    tech: ["MERN", "Paypal", "Cloudinary"],
    category: "Web App",
    image: "/images/UnStyleHomePage.png",
    live: "https://un-style-ecomm.onrender.com/",
    github: "https://github.com/Kumaravel4502/UN-STYLE",
    impact: "Smooth, responsive shopping experience",
  },
  {
    id: 2,
    title: "CiniFlix – Movie Streaming Site",
    desc: "Responsive movie streaming UI built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "Tailwind", "JavaScript"],
    category: "Static Website",
    image: "/images/MovieWebsite.png",
    live: "https://kumaravel4502.github.io/Movie-Website/",
    github: "https://github.com/Kumaravel4502/Movie-Website",
    impact: "Fully responsive design",
  },
  {
    id: 3,
    title: "Edugen – Online Tutoring Platform",
    desc: "Modern learning platform with structured courses and responsive UI.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    category: "Education",
    image: "/images/Edugen.png",
    live: "https://eguden04.netlify.app/",
    github: "https://github.com/Kumaravel4502/EDUGEN",
    impact: "Bridging traditional & digital learning",
  },
  {
    id: 4,
    title: "Edutics - Landing Page",
    desc: "Clean educational landing page with scalable backend integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    category: "Landing Page",
    image: "/images/Edutics.png",
    live: "https://edutics.netlify.app/",
    github: "https://github.com/Kumaravel4502/Edutics",
    impact: "Engaging educational showcase",
  },
  {
    id: 5,
    title: "Food Munch – Food Delivery UI",
    desc: "Responsive landing page for a fictional food delivery platform.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
    category: "Landing Page",
    image: "/images/Food Munch.png",
    live: "http://kumaravel4502.github.io/Food-Munch/",
    github: "https://github.com/Kumaravel4502/Food-Munch",
    impact: "Clean UI and responsive design",
  },
  {
    id: 6,
    title: "PasteBin - Tool Clone",
    desc: "Full-stack pastebin clone to create and manage text snippets.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Web App",
    image: "/images/Pastebin-lite.png",
    live: "https://pastebin-lite-4.onrender.com/",
    github: "https://github.com/Kumaravel4502/Pastebin-Lite",
    impact: "Efficient paste management",
  },
];