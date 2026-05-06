import { Experience, Education, Certification, SkillGroup, Project } from './types';

export const summary = "Full Stack MERN Developer focused on building scalable, performance-driven web applications. Experienced in designing REST APIs, implementing secure authentication, and optimizing backend performance by up to 25%.";


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
    institution: "Grace Matriculation Higher Secondary School",
    year: "2022",
    score: "75%"
  },
  {
    degree: "SSLC",
    institution: "Grace Matriculation Higher Secondary School",
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

// export const projects: Project[] = [
//   {
//     id: 1,
//     title: "UnStyle – E-Commerce Platform",
//     desc: "A full-stack MERN application with product listing, authentication, cart, and checkout system.",
//     tech: ["MERN", "Paypal", "Cloudinary"],
//     category: "Web App",
//     image: "/images/UnStyleHomePage.png",
//     live: "https://un-style-ecomm.onrender.com/",
//     github: "https://github.com/Kumaravel4502/UN-STYLE",
//     impact: "Smooth, responsive shopping experience",
//   },
//   {
//     id: 2,
//     title: "CiniFlix – Movie Streaming Site",
//     desc: "Responsive movie streaming UI built using HTML, CSS, and JavaScript.",
//     tech: ["HTML", "Tailwind", "JavaScript"],
//     category: "Static Website",
//     image: "/images/MovieWebsite.png",
//     live: "https://kumaravel4502.github.io/Movie-Website/",
//     github: "https://github.com/Kumaravel4502/Movie-Website",
//     impact: "Fully responsive design",
//   },
//   {
//     id: 3,
//     title: "Edugen – Online Tutoring Platform",
//     desc: "Modern learning platform with structured courses and responsive UI.",
//     tech: ["React", "Express", "Node.js", "MongoDB"],
//     category: "Education",
//     image: "/images/Edugen.png",
//     live: "https://eguden04.netlify.app/",
//     github: "https://github.com/Kumaravel4502/EDUGEN",
//     impact: "Bridging traditional & digital learning",
//   },
//   {
//     id: 4,
//     title: "Edutics - Landing Page",
//     desc: "Clean educational landing page with scalable backend integration.",
//     tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
//     category: "Landing Page",
//     image: "/images/Edutics.png",
//     live: "https://edutics.netlify.app/",
//     github: "https://github.com/Kumaravel4502/Edutics",
//     impact: "Engaging educational showcase",
//   },
//   {
//     id: 5,
//     title: "Food Munch – Food Delivery UI",
//     desc: "Responsive landing page for a fictional food delivery platform.",
//     tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
//     category: "Landing Page",
//     image: "/images/Food Munch.png",
//     live: "http://kumaravel4502.github.io/Food-Munch/",
//     github: "https://github.com/Kumaravel4502/Food-Munch",
//     impact: "Clean UI and responsive design",
//   },
//   {
//     id: 6,
//     title: "PasteBin - Tool Clone",
//     desc: "Full-stack pastebin clone to create and manage text snippets.",
//     tech: ["React", "Node.js", "MongoDB"],
//     category: "Web App",
//     image: "/images/Pastebin-lite.png",
//     live: "https://pastebin-lite-4.onrender.com/",
//     github: "https://github.com/Kumaravel4502/Pastebin-Lite",
//     impact: "Efficient paste management",
//   },
// ];




export const projects: Project[] = [
  {
    id: 1,
    title: "UnStyle – E-Commerce Platform",
    desc: "Built a full-stack e-commerce platform with JWT authentication, product management, cart system, and PayPal integration.",
    tech: ["MERN", "PayPal", "Cloudinary"],
    category: "Web App",
    image: "/images/UnStyleHomePage.png",
    live: "https://un-style-ecomm.onrender.com/",
    github: "https://github.com/Kumaravel4502/UN-STYLE",
    impact: "Improved user experience and reduced API response time by ~25%",
  },
  {
    id: 2,
    title: "Inventory Management System",
    desc: "Built a full-stack inventory management system with JWT authentication, product management, and cart system.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "React-Router-Dom", "Multer", "SKU", "Cloudinary"],
    category: "Web App",
    image: "/images/Inventory Management.png",
    live: "https://inventory-mangement-mwde.onrender.com/",
    github: "https://github.com/Kumaravel4502/Inventory-Mangement",
    impact: "Successfully launched inventory management system with user-friendly interface",
  },
  {
    id: 3,
    title: "CiniFlix – Movie Streaming UI",
    desc: "Developed a responsive movie streaming interface with modern UI/UX and optimized layout for multiple screen sizes.",
    tech: ["HTML", "Tailwind", "JavaScript"],
    category: "Static Website",
    image: "/images/MovieWebsite.png",
    live: "https://kumaravel4502.github.io/Movie-Website/",
    github: "https://github.com/Kumaravel4502/Movie-Website",
    impact: "Delivered smooth responsive experience across mobile and desktop",
  },
  {
    id: 4,
    title: "Cozastore - E-Commerce Website",
    desc: "Developed a fully responsive e-commerce website with modern UI/UX and optimized layout for multiple screen sizes.",
    tech: ["HTML", "Tailwind", "JavaScript"],
    category: "E-Commerce Website",
    image: "/images/cozastore.png",
    live: "https://cozastore45.netlify.app/",
    github: "https://github.com/Kumaravel4502/cozastore-master",
    impact: "Successfully launched e-commerce website with user-friendly interface",
  },
  {
    id: 5,
    title: "Edugen – Online Learning Platform",
    desc: "Built a full-stack learning platform with structured course modules, user interaction, and scalable backend APIs.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "Education",
    image: "/images/Edugen.png",
    live: "https://edugens.netlify.app/",
    github: "https://github.com/Kumaravel4502/EDUGEN",
    impact: "Enabled structured digital learning with optimized backend performance",
  },
  {
    id: 6,
    title: "Edutics – Educational Landing Platform",
    desc: "Created a clean and scalable educational landing page with responsive UI and backend-ready architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    category: "Landing Page",
    image: "/images/Edutics.png",
    live: "https://edutics.netlify.app/",
    github: "https://github.com/Kumaravel4502/Edutics",
    impact: "Improved user engagement with clean UI and responsive design",
  },
  {
    id: 7,
    title: "Food Munch – Food Delivery UI",
    desc: "Designed a responsive food delivery landing page focusing on layout, usability, and mobile-first design.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
    category: "Landing Page",
    image: "/images/Food Munch.png",
    live: "http://kumaravel4502.github.io/Food-Munch/",
    github: "https://github.com/Kumaravel4502/Food-Munch",
    impact: "Enhanced UI responsiveness and visual consistency",
  },

  {
    id: 8,
    title: "ZustPe - Company Website",
    desc: "Built a company website with modern UI/UX and optimized layout for multiple screen sizes.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
    category: "Website",
    image: "/images/Zustpe.png",
    live: "https://zustpe.com/",
    impact: "Delivered smooth responsive experience across mobile and desktop",
  },
  {
    id: 9,
    title: "PasteBin Lite – Text Sharing Tool",
    desc: "Developed a full-stack pastebin clone to create, store, and manage text snippets efficiently.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Web App",
    image: "/images/Pastebin-lite.png",
    live: "https://pastebin-lite-4.onrender.com/",
    github: "https://github.com/Kumaravel4502/Pastebin-Lite",
    impact: "Improved data handling and CRUD performance",
  },
  {
    id: 10,
    title: "AI-Chatbot",
    desc: "Developed a AI-Chatbot.",
    tech: ["React", "API Key", "Tailwind"],
    category: "Web App",
    image: "/images/AI chatbot.png",
    live: "https://ai-chat-bot-cj69.onrender.com/",
    github: "https://github.com/Kumaravel4502/AI-Chat-Bot",
    impact: "Successfully launched AI-Chatbot ",
  },
];