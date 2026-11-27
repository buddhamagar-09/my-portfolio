import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  const imagePath = (name) => `${import.meta.env.BASE_URL}${name}`;
  return (
    <section
      id="home"
      className="min-h-screen bg-transparent text-[#F1F5F9] flex items-center pt-14"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hi, I'm */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#22D3EE] text-lg font-medium mb-4"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="gradient-text text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Buddha
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-2xl md:text-3xl font-semibold text-[#CBD5E1] mt-4"
            >
              BCA Student &{" "}
              <span className="text-[#22D3EE]">Software Developer</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[#94A3B8] text-lg leading-8 max-w-xl mt-6"
            >
              I am passionate about developing practical software solutions and
              solving problems through code. I enjoy working with technologies
              such as Java, JavaScript, React, Laravel, PHP, and MySQL while
              continuously expanding my programming and software development
              skills.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link
                to="projects"
                smooth={true}
                duration={600}
                offset={-80}
                className="flex items-center gap-2 bg-[#22D3EE] text-[#06111F] px-6 py-3 rounded-md font-semibold cursor-pointer hover:bg-[#67E8F9] shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40 transition-all duration-300"
              >
                View My Projects
                <FaArrowRight size={14} />
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="border border-[#33445F] text-[#F1F5F9] px-6 py-3 rounded-md font-semibold cursor-pointer hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors duration-300"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 mt-10"
            >
              {/* GitHub */}
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors"
              >
                <FaGithub size={25} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/buddha-magar-061115442/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
              >
                <FaLinkedin size={25} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT - Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Top Accent */}
              <div className="absolute -top-4 rotate-180 -right-4 w-16 h-16 border-l-2 border-b-2 border-[#22D3EE]" />

              {/* Image */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl p-3 bg-[#111C2E] border border-[#22304A] shadow-2xl shadow-cyan-400/10">
                <img
                  src={imagePath("buddha.jpeg")}
                  alt="Buddha"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Accent */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-[#22D3EE]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
