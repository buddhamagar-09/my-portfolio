import React from "react";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1120] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-[#38BDF8] font-medium mb-2">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            A little about me
          </h2>

          <div className="w-16 h-1 bg-[#38BDF8] mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main About Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <p className="text-[#CBD5E1] text-lg leading-8 mb-6">
              I'm currently pursuing my Bachelor of Computer Applications
              (BCA) and developing my skills in full-stack web development.
              I enjoy turning ideas into functional and user-friendly web
              applications.
            </p>

            <p className="text-[#94A3B8] text-lg leading-8 mb-6">
              My main interests are frontend and backend development,
              particularly working with React, Laravel, PHP, MySQL, and
              JavaScript. I also enjoy learning new technologies and
              improving my problem-solving skills through real-world
              projects.
            </p>

            <p className="text-[#94A3B8] text-lg leading-8">
              Currently, I'm expanding my knowledge of Advanced Java while
              continuing to explore modern web development technologies.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-7"
          >

            {/* Highlight 1 */}
            <div className="flex items-start gap-5 border-l-2 border-[#38BDF8] pl-5">
              <FaCode className="text-[#38BDF8] text-2xl mt-1" />

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Web Development
                </h3>

                <p className="text-[#94A3B8] mt-1">
                  Building modern and practical web applications.
                </p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex items-start gap-5 border-l-2 border-[#38BDF8] pl-5">
              <FaLaptopCode className="text-[#38BDF8] text-2xl mt-1" />

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Continuous Learning
                </h3>

                <p className="text-[#94A3B8] mt-1">
                  Exploring new technologies and improving my skills.
                </p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex items-start gap-5 border-l-2 border-[#38BDF8] pl-5">
              <FaRocket className="text-[#38BDF8] text-2xl mt-1" />

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Real-World Projects
                </h3>

                <p className="text-[#94A3B8] mt-1">
                  Learning by creating practical applications.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;