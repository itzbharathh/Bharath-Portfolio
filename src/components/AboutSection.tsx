import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Passionate Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a recent Computer Science graduate with hands-on experience
                in building web applications and support tools using the MERN
                stack. During my internship, I worked on real-time dashboards,
                authentication systems, and device management features.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I enjoy solving practical problems with clean, efficient code
                and am always eager to learn and grow as a developer.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="text-lg font-medium text-white mb-2">
                  Location
                </h4>
                <p className="text-gray-400">Bengalore,KA</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="text-lg font-medium text-white mb-2">
                  Experience
                </h4>
                <p className="text-gray-400">1+ Years</p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="text-lg font-medium text-white mb-2">Focus</h4>
                <p className="text-gray-400">Full Stack Development</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
