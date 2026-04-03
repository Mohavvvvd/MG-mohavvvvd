import {
  Smartphone, MessageCircle, Code2, Shield, Layout, Brain, 
  Coffee, Database, Server, Zap, Wifi, Lock, Award, FileText
} from 'lucide-react';

export const personal = {
  name: "Mohamed Ghoul",
  title: "Fullstack JavaScript Developer",
  location: "Tunisia",
  about: "I am a passionate fullstack developer specializing in modern web technologies. I build scalable, performant, and user-friendly applications. I enjoy solving complex problems and designing clean architectures.",
  email: "mohavvvvd.2021@gmail.com",
  github: "https://github.com/Mohavvvvd",
  linkedin: "https://www.linkedin.com/in/mohamed-ghoul-224982287"
};

export const education = [
  {
    degree: "Bachelor's Degree in Computer Science (in progress)",
    school: "Higher School of Sciences and Technologies of Hammam Sousse",
    specialization: "Software Engineering & Information Systems",
    period: "2023 – Present"
  }
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "B2" }
];

export const experience = [
  {
    role: "Fullstack Developer Intern",
    company: "VFX Visionage",
    period: "June 2025 – September 2025",
    tasks: [
      "Built interactive web apps using React & Node.js",
      "Integrated REST APIs and PostgreSQL databases",
      "Collaborated with UI/UX team to deliver responsive designs"
    ]
  },
  {
    role: "Freelance / Personal Projects",
    period: "2024 – Present",
    tasks: [
      "Built fullstack apps using React, NestJS, Node.js",
      "Implemented authentication systems (JWT, OAuth)",
      "Created real‑time messaging apps with WebSockets",
      "Designed scalable system architectures"
    ]
  }
];

export const skills = {
  frontend: ["React", "React Native", "Tailwind CSS", "Framer Motion", "Electron.js","HTML/CSS/SASS"],
  backend: ["Node.js", "NestJS", "Express", "Flask", "FastAPI", "PHP"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "SQLite","Neo4j","Firebase"],
  tools: ["Docker", "Git", "Postman", "VS Code", "Figma"]
};

export const projects = [
  {
    id: 1,
    title: "Dhikir | ذكر",
    description: "Mobile app to help users strengthen spiritual habits and mindfulness.",
    highlight: "Daily tracking | Reminders | Progress monitoring",
    techTags: ["React Native", "Mobile UX/UI", "API Ready"],
    githubLink: "https://github.com/Mohavvvvd/dhiker-",
    demoLink: "https://expo.dev/artifacts/eas/6VPcWZxqGXNME4UKBmirQG.apk",
    whyItMatters: "Helps users integrate mindfulness and personal growth into daily routines.",
    keyChallenge: "Designing offline-first data sync strategy for seamless mobile experience.",
    screenshotIcon: Smartphone,
    fullDescription: "Dhikir provides a simple way to track daily dhikr, set reminders, and monitor progress through visual statistics. The app architecture supports push notifications and cloud sync, ready for native implementation.",
    screenShots: ["/screenShots/D1.jpeg" , "/screenShots/D2.jpeg"]
},
  {
    id: 2,
    title: "Code Snippet Platform",
    description: "Platform to store, share, and manage code snippets with syntax highlighting and categories.",
    highlight: "Developer tools mindset | Clean architecture | Data structuring",
    techTags: ["React", "Node.js", "MongoDB", "Express","firebase"],
    githubLink: "https://github.com/Mohavvvvd/CodeSnippet",
    demoLink: "https://mindvault.mohavvvvd-2021.workers.dev/",
    whyItMatters: "Builds a practical tool for developers, showcasing full-stack CRUD and search capabilities.",
    keyChallenge: "Implementing performant syntax highlighting for 20+ languages and a flexible tagging system.",
    screenshotIcon: Code2,
    fullDescription: "Users can create, edit, delete snippets, and organize them with tags. The editor uses Monaco or CodeMirror, and the backend provides a REST API with MongoDB aggregation for fast filtering."
    ,screenShots: ["/screenShots/CS1.png" , "/screenShots/CS2.png"]  
},
  {
    id: 3,
    title: "Brain-Game",
    description: "Fun and interactive brain training game built for web and mobile.",
    highlight: "Gamified logic | Responsive UI | Mental exercise",
    techTags: ["JavaScript", "React Native", "Game Design", "Performance Optimization","Tailwind CSS"],
    githubLink: "https://github.com/Mohavvvvd/Brain-Game",
    demoLink: "#",
    whyItMatters: "Engages users with mental exercises, showcasing front-end design and game logic skills.",
    keyChallenge: "Optimizing performance and user experience across devices.",
    screenshotIcon: Brain,
    fullDescription: "Brain-Game challenges users with puzzles and cognitive exercises to improve memory, attention, and problem-solving skills."
    ,screenShots: ["/screenShots/b1.jpeg" , "/screenShots/b2.jpeg"]    
},
  {
    id: 4,
    title: "InstaM v2.0",
    description: "Modern real-time chat application with private rooms and smooth UI.",
    highlight: "Real-time messaging | Socket.IO integration | React frontend",
    techTags: ["React", "Node.js", "WebSockets", "NestJS"],
    githubLink: "https://github.com/Mohavvvvd/InstaM-V2.0",
    demoLink: "https://insta-m-v2-0.vercel.app/",
    whyItMatters: "Demonstrates expertise in real-time systems, low-latency communication, and full-stack integration.",
    keyChallenge: "Handling concurrent connections and message ordering without performance degradation.",
    screenshotIcon: MessageCircle,
    fullDescription: "Users can create private chat rooms and communicate instantly. Features include typing indicators, read receipts, and push notifications."
    ,screenShots: ["/screenShots/insta.png"]  
},
  {
    id: 5,
    title: "Folder Organizer Pro",
    description: "Desktop app that automatically organizes files into folders based on type and date.",
    highlight: "One-click automation | Smart file recognition | Cross-platform",
    techTags: ["Electron", "Node.js", "File Management"],
    githubLink: "https://github.com/Mohavvvvd/folder-organizer-pro",
    demoLink: "https://oragdownload.netlify.app/",
    whyItMatters: "Saves time and improves productivity by reducing manual file organization.",
    keyChallenge: "Building a privacy-first, local file processing engine.",
    screenshotIcon: FileText,
    fullDescription: "Folder Organizer Pro automatically sorts files into categories, supporting documents, images, videos, and more. Works on Windows and Linux with all processing done locally."
  
    ,screenShots: ["/screenShots/O1.png" , "/screenShots/O2.png"]  },
  {
    id: 6,
    title: "Scrabble Puzzle",
    description: "Challenging word game combining Scrabble mechanics with interactive UI.",
    highlight: "Word formation | Scoring system | Strategy game",
    techTags: ["React Native", "JavaScript", "Tailwind CSS"],
    githubLink: "https://github.com/Mohavvvvd/Scrabble-Puzzle-app",
    demoLink: "https://scrabblepuzzle.netlify.app/",
    whyItMatters: "Enhances cognitive skills and vocabulary while showcasing front-end skills.",
    keyChallenge: "Designing interactive and responsive gameplay mechanics.",
    screenshotIcon: Brain,
    fullDescription: "Players form words from letters to earn points, competing for the highest score. Includes sleek interface and classic Scrabble-style rules."
  
    ,screenShots: ["/screenShots/SC1.jpeg" , "/screenShots/SC2.jpeg"]},
  {
    id: 7,
    title: "Serveur TCP Ultra-Sécurisé",
    description: "Système client-serveur TCP en Java avec chiffrement TLS 1.3 et protections avancées contre MITM, Replay et DoS.",
    highlight: "Sécurité réseau | TLS 1.3 | HMAC-SHA256 | Thread Pool | Protection Anti-DoS",
    techTags: ["Java", "Sockets", "TLS 1.3", "HMAC-SHA256", "Multithreading"],
    githubLink: "https://github.com/Mohavvvvd/Socket",
    demoLink: "#",
    whyItMatters: "Projet pédagogique démontrant la maîtrise des concepts de sécurité réseau et des connexions TCP sécurisées.",
    keyChallenge: "Implémenter un serveur sécurisé avec chiffrement, protection contre MITM, Replay, DoS et Slow Clients, tout en gérant la concurrence.",
    screenshotIcon: Shield,
    securityFeatures: [
        "Chiffrement TLS 1.3 end-to-end",
        "Authentification HMAC-SHA256 pour intégrité des messages",
        "Protection Anti-Replay (nonce + timestamp + cache)",
        "Limitation des connexions simultanées et Thread Pool",
        "Timeouts pour Slow Clients et taille de message limitée"
    ],
    fullDescription: "Ce projet met en œuvre un serveur TCP sécurisé en Java. Il inclut un client sécurisé, un testeur d'attaques pour MITM, Replay, DoS et Slow Client, et un suivi des statistiques du serveur en temps réel. Le projet est pédagogique et démontre les bonnes pratiques de sécurité réseau."
},
{
  id: 8,
  title: "Safra Challenge",
  description: "Web app interactive de défis et quizz pour apprendre de manière ludique.",
  highlight: "Gamification | Scores | Classements",
  techTags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  githubLink: "https://github.com/Mohavvvvd/safra-challenge",
  demoLink: "#",
  whyItMatters: "Encourage l’apprentissage et la participation en ligne grâce à des challenges interactifs.",
  keyChallenge: "Implémenter un système de scores en temps réel et des classements dynamiques pour les utilisateurs.",
  screenshotIcon: Zap, // tu peux choisir n’importe quelle icône lucide, ici j’ai pris Zap pour représenter le challenge/énergie
  fullDescription: "Safra Challenge propose aux utilisateurs des défis quotidiens et des quizz interactifs. L’application calcule les scores en temps réel et affiche un classement des meilleurs participants, tout en offrant une interface ludique et responsive."
  ,screenShots: ["/screenShots/S1.jpeg" , "/screenShots/S2.jpeg"]
}
];
