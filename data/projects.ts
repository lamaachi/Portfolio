import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Video Project",
    description: "A project with a video demo.",
    image: "/images/projects/livemeet.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/lamaachi/Portfolio",
    live: "https://hzhqqukxzktdzqgvkgct.supabase.co/storage/v1/object/public/projectresources/MyFirstProjectEver.mp4",
    featured: true
  },
  {
    id: 2,
    title: "LiveMeet - Real-time Chat Application",
    description: "A modern, real-time chat application built with React, TypeScript, Socket.IO, and Tailwind CSS. Features include real-time messaging, typing indicators, user presence, room-based chats, and a modern responsive UI.",
    image: "/images/projects/livemeet.png", // 👉 replace with your real image path
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
    live: "https://v2.tailwindcss.com/docs/background-opacity", // 👉 replace with your live demo
    featured: true
  },
  {
  id: 3,
  title: "FsGuid - University Campus Navigation App",
  description: "A mobile application designed to facilitate access to information and navigation within university campuses. Users can view ongoing events, locate departments and rooms, add and delete comments, and enjoy a user-friendly responsive interface.",
  image: "/images/projects/fsguid.png", // 👉 replace with your real image path
  tags: [
    "React Native",
    "Firebase Firestore",
    "Google Maps API",
    "Expo",
    "Mobile Development"
  ],
  github: "https://github.com/yourusername/fsguid", // 👉 replace with your repo
  live: "/video/fsguid.mp4", // 👉 if you have an APK/demo link, place it here
  featured: true
}

];
