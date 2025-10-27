import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// Import images (adjust paths to your actual image files, e.g., in src/assets/)
import projectImg1 from "../assets/project1.avif"; // E.g., e-commerce image
//import projectImg2 from "../assets/project2.avif"; // E.g., task app image
//import projectImg3 from "../assets/project3.avif"; // E.g., fitness tracker image
import projectImg4 from "../assets/project4.avif"; // E.g., portfolio image
import projectImg5 from "../assets/project5.avif"; // E.g., chat app image
//import projectImg6 from "../assets/project6.avif"; // E.g., AI image generator image

const Projects = () => {
  // Define the projects array with sample data. Adjust properties based on what ProjectCard expects.
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
      image: projectImg1,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/yourusername/ecommerce-platform" // Added example link
    },
    //{
    //  title: "Task Management App",
    //  description: "A productivity application with drag-and-drop functionality and real-time updates.",
     // image: projectImg2,
     // tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
     // link: "https://github.com/yourusername/task-app" // Added example link
   // },
   // {
     // title: "Fitness Tracker",
      //description: "A mobile app for tracking workouts, nutrition, and health metrics.",
      //image: projectImg3,
      //tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
      //link: "https://github.com/yourusername/fitness-tracker" // Added example link
    //},
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
      image: projectImg4,
      tech: ["react.js", "Tailwind CSS", "Framer Motion", "Markdown"],
      link: "https://yourportfolio.com" // Added example link
    },
    {
      title: "Chat App",
      description: "A real-time chat application with group messaging, emojis, and file sharing.",
      image: projectImg5,
      tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/chat-app" // Added example link
    },
    //{
      //title: "AI Image Generator",
     // description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
      //image: projectImg6,
      //tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
      //link: "https://github.com/yourusername/ai-image-generator" // Added example link
    //}
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My 
          <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">A selection of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project cards */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
