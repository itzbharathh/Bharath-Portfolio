import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "React", category: "Frontend", color: "from-blue-400 to-blue-600" },
    { name: "Java", category: "Language", color: "from-blue-500 to-blue-700" },
    {
      name: "Node.js",
      category: "Backend",
      color: "from-green-400 to-green-600",
    },
    {
      name: "MongoDb",
      category: "Database",
      color: "from-blue-600 to-indigo-600",
    },
    { name: "Docker", category: "DevOps", color: "from-cyan-400 to-cyan-600" },
    {
      name: "Tailwind CSS",
      category: "Styling",
      color: "from-teal-400 to-teal-600",
    },
    {
      name: "Git",
      category: "Tools & Platform",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Postman",
      category: "Tools & Platform",
      color: "from-blue-600 to-indigo-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-6 h-6 bg-white rounded opacity-80"></div>
              </div>
              <h3 className="text-white font-medium mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
