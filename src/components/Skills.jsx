import React from "react";
import { motion } from "framer-motion";
// Assuming icons are from react-icons (e.g., FaReact). Import the specific icons you need.
// Replace these with your actual skills and icons.
import { FaReact, FaServer, FaPython, FaTools } from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si"; // Added imports for MySQL and MongoDB icons

const Skills = () => {
  // Define the skills array with icon components, titles, descriptions, and tags.
  const skills = [
    {
      icon: FaReact,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with modern frameworks.",
      tags: ["React", "JavaScript", "UI"],
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description:
        "A JavaScript runtime built on Chrome's V8 engine for server-side development.",
      tags: ["JavaScript", "node.js", "Server"],
    },
    {
      icon: FaPython,
      title: "Python",
      description:
        "A versatile programming language used for web development, data science, and automation.",
      tags: ["Programming", "Data Science", "Automation"],
    },
    {
      icon: SiMysql,
      title: "MySQL",
      description:
        "A relational database management system for storing and managing structured data.",
      tags: ["Database", "SQL", "RDBMS"],
    },
    {
      icon: SiMongodb,
      title: "MongoDB",
      description:
        "A NoSQL document database for flexible, scalable data storage.",
      tags: ["Database", "NoSQL", "Document"],
    },
    {
      title: "Tools & Technologies",
      icon: FaTools,
      description:
        "Essential tools and technologies I use in my development workflow.",
      tags: ["Git", "Github"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-purple mr-6" />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
