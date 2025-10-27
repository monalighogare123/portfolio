import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const workData = [
    {
      role: "fullStack developer Intern",
      company: "Technogrowth softwere solutions pvt Ltd warje pune",
      duration: "Dec 2024 - Jan 2025",
      description:
        "Leading frontend and BackEnd development for enterprise clients, implementing modern frameworks.",
      color: "purple",
    },
    {
      role: "Web Developer",
      company: "Coding RajaTechnology",
      duration: "mar 2024 - may 2024",
      description:
        "Developed and maintained web applications, focusing on responsive design and performance optimization.",
      color: "pink",
    },
   
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Experience"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work
          <span className="text-purple">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My Professional journey so far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <div
                key={index}
                className={`relative pl-12 before:content-[''] before:absolute 
                  before:left-0 before:top-0 before:w-[2px] before:h-full 
                  before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-${data.color}`}
                ></div>

                {/* Box content */}
                <div className="bg-dark-300 p-6 rounded-2xl">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {data.role}
                    </h3>
                    <span className="px-3 py-1 bg-purple/20
                    text-purple rounded-full text-xs md:text-sm ">{data.duration}</span>
                  </div>
                  <p className={`text-${data.color} font-medium`}>
                    {data.company}
                  </p>
                  <p className="text-gray-400">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
