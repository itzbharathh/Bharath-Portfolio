import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "NewsMania",
      description:
        "NewsMania is a responsive web application that fetches and displays real-time news headlines from multiple categories (e.g., World, Technology, Sports, Business). It aggregates data using public news APIs and presents it in a clean, categorized UI for seamless browsing.",
      technologies: ["React", "Node.js", "Tailwand.css", "NewsAPI"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Real Estate Management",
      description:
        "A responsive and modern real estate website built with React and Vite. This project includes a clean homepage, about section, testimonials, project showcases, and contact form — ideal for showcasing real estate properties or agencies.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl:
        "https://real-estate-lmlqmag2t-bharath-ss-projects-cbd4682a.vercel.app/",
      githubUrl: "https://github.com/itzbharathh/Real-Estate",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Real Time Tracking",
      description:
        "Built a platform where multiple users can share and view real-time location updates and Used EJS for rendering views and WebSockets to broadcast location data to all connected users.",
      technologies: ["React", "Node.js", "Socket.io", "Express.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/itzbharathh/Real-Time-Tracker",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group"
            >
              <div
                className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-3 h-3 bg-white/60 rounded-full mr-2 inline-block"></div>
                  <div className="w-3 h-3 bg-white/40 rounded-full mr-2 inline-block"></div>
                  <div className="w-3 h-3 bg-white/20 rounded-full inline-block"></div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-white/30 text-white hover:bg-white/10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-white/30 text-white hover:bg-white/10"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
