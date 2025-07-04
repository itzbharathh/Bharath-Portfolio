import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Accenture Software Engineering Job Simulation",
      company: "Forage",
      location: "Remote",
      period: "July 2025",
      description: `Completed real-world simulation tasks across software development lifecycle
stages including Architecture, Security, Programming, Testing, and Agile
practices`,
      technologies: [
        "Architecture",
        "Security",
        "Programming",
        "Testing",
        "Agile",
      ],
    },
    {
      title: "Full Stack Developer - Intern",
      company: "eSSL Software Solution",
      location: "Bangalore",
      period: "April 2025 - May 2025",
      description:
        "Built a dynamic vehicle dashboard to categorize and display registered and nonregistered vehicles based on license plate data, improving monitoring efficiency by 40%",
      technologies: ["React", "Express.js", "MongoDb", "Node.js"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 md:ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hidden md:block"></div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg text-purple-300 font-medium mb-2">
                      {experience.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end space-y-2">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
