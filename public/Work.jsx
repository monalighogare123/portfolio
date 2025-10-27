import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const workData = [
    {
      role: "fullStack developer Intern",
      company: "Technogrowth softwere solutions pvt Ltd warje pune",
      duration: "2020 - Present",
      description:
        "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
      color: "purple",
    },
    {
      role: "Web Developer",
      company: "Digital Solutions LLC",
      duration: "2018 - 2020",
      description:
        "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
      color: "pink",
    },
    {
      role: "Junior Developer",
      company: "StartUp Ventures",
      duration: "2016 - 2018",
      description:
        "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
      color: "blue",
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
        <p
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          My Professional journey so far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <div
                key={index}
                className={`relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-${data.color} cursor-pointer hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-${data.color}`}
                ></div>

                {/* Box content */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-white">{data.role}</h3>
                  <p className={`text-${data.color} font-medium`}>{data.company}</p>
                  <p className="text-gray-300 text-sm mb-2">{data.duration}</p>
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
