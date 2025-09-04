import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 2,
    title: "LiveMeet - Real-time Chat Application",
    description: "A modern, real-time chat application built with React, TypeScript, Socket.IO, and Tailwind CSS. Features include real-time messaging, typing indicators, user presence, room-based chats, and a modern responsive UI.",
    image: "/images/livemeet.png", // 👉 replace with your real image path
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "Node.js",
      "Express.js",
      "Winston",
      "Helmet",
      "CORS"
    ],
    github: "https://github.com/lamaachi/LiveMeet", // 👉 replace with your repo
    live: "https://your-livemeet-demo.com", // 👉 replace with your live demo
    featured: true
  },
  {
    id: 1,
    title: "LiveMeet - Real-time Chat Application",
    description: "A modern, real-time chat application built with React, TypeScript, Socket.IO, and Tailwind CSS. Features include real-time messaging, typing indicators, user presence, room-based chats, and a modern responsive UI.",
    image: "/images/livemeet.png", // 👉 replace with your real image path
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Socket.IO",
      "Node.js",
      "Express.js",
      "Winston",
      "Helmet",
      "CORS"
    ],
    github: "https://github.com/yourusername/livemeet", // 👉 replace with your repo
    live: "https://your-livemeet-demo.com", // 👉 replace with your live demo
    featured: true
  }
];
