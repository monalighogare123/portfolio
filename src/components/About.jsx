import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const About = () => {
  // Define aboutInfo with sample data (replace with actual data as needed)
  const aboutInfo = [
    {
      icon: () => <span>💻</span>, // Replace with actual icon component (e.g., from a library like react-icons)
      title: "Full-Stack Development",
      description: "Experienced in building end-to-end web applications using modern technologies."
    },
    {
      icon: () => <span>🚀</span>, // Replace with actual icon component
      title: "Continuous Learning",
      description: "Always exploring new tools and frameworks to stay ahead in tech."
    },
    
    {
      icon: () => <span>🌐</span>, // Replace with actual icon component
      title: "Web Technologies",
      description: "Proficient in HTML, CSS, JavaScript, React, and backend frameworks."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="About"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          About
          <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
              alt="Profile"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I am a passionate full-stack developer. I am currently in my
                last year of B.E. Information Technology. My journey started with
                basic HTML/CSS websites and evolved into building complex web
                applications with modern frameworks.
              </p>
              <p className="text-gray-300 mb-12">
                I like to explore new technologies. I believe in continuous
                learning and pushing the boundaries of what's possible on the
                web
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300
                     rounded-2xl p-6 transition-transform 
                     duration-300 hover:-translate-y-2 
                     cursor-pointer"
                  >
                    <div className="text-purple text-2xl mb-2">
                      <data.icon />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {data.title}
                    </h4>
                    <p className="text-gray-300">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
