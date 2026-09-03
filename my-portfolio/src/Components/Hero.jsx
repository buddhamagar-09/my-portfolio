import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0B1120] text-white flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <p className="text-[#38BDF8] text-lg font-medium mb-4">Hi, I'm</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Buddha <span className="text-[#38BDF8]">Saru Magar</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#CBD5E1] mt-4">
              BCA Student &amp;
              <span className="text-[#38BDF8]">
                Full Stack Web Development Enthusiast
              </span>
            </h2>

            <p className="text-[#94A3B8] text-lg leading-8 max-w-xl mt-6">
              I am passionate about building modern and practical web
              applications. I enjoy working with React, Laravel, PHP, MySQL, and
              JavaScript while continuously learning new technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="projects"
                smooth={true}
                duration={600}
                offset={-80}
                className="flex items-center gap-2 bg-[#38BDF8] text-[#0B1120] px-6 py-3 rounded-md font-semibold cursor-pointer hover:bg-[#0EA5E9] transition-colors duration-300"
              >
                View My Projects
                <FaArrowRight size={14} />
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="border border-[#334155] text-white px-6 py-3 rounded-md font-semibold cursor-pointer hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-10">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
          </motion.div>
          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Image Border */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-2 border-cyan-400/40 rounded-xl p-3">
                <img
                  src="/buddha.jpeg"
                  alt="Your Name"
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Small Accent */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-cyan-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
