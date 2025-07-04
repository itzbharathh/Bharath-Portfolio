import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const handleResumeView = () => {
    // In a real implementation, this would download the actual resume file
    window.open("/Bharath-S.pdf", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Bharath S
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
            Aspiring Software Engineer
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build reliable web applications and support systems using modern
            technologies, transforming real-world problems into simple,
            efficient digital solutions.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            onClick={handleResumeView}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
