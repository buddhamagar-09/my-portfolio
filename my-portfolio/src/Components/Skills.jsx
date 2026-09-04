import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

function Skills() {
  const mainSkills = [
    { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
    { name: "React JS", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "PHP", icon: FaPhp, color: "text-[#777BB4]" },
    { name: "Laravel", icon: FaLaravel, color: "text-[#FF2D20]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
  ];

  const learningSkills = [
    { name: "Advanced Java", icon: FaJava, color: "text-[#ED8B00]" },
    { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
  ];

  return (
    <section
      id="skills"
      className="bg-[#F8FAFC] text-[#0F172A] py-14"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[#7C3AED] font-medium mb-3">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I use
          </h2>

          <div className="w-16 h-1 bg-[#7C3AED] mt-5" />

          <p className="text-[#64748B] max-w-2xl mt-6 text-lg leading-7">
            Technologies and tools I use to build my projects and bring ideas
            into working applications.
          </p>
        </motion.div>

        {/* Main Toolkit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">

              {/* Outer Circle */}
              <div className="absolute inset-0 border border-[#E2E8F0] rounded-full" />

              {/* Inner Circle */}
              <div className="absolute inset-10 border border-[#CBD5E1] rounded-full" />

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 border-2 border-[#7C3AED] rounded-full bg-white flex flex-col items-center justify-center">

                  <span className="text-[#7C3AED] text-sm tracking-widest">
                    MY
                  </span>

                  <h3 className="text-3xl font-bold text-[#0F172A]">
                    TOOLKIT
                  </h3>

                  <span className="text-[#64748B] text-xs mt-2">
                    BUILD • CREATE
                  </span>

                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-5 left-1/2 w-2 h-2 bg-[#7C3AED] rounded-full" />
              <div className="absolute bottom-5 left-1/2 w-2 h-2 bg-[#7C3AED] rounded-full" />
              <div className="absolute left-5 top-1/2 w-2 h-2 bg-[#7C3AED] rounded-full" />
              <div className="absolute right-5 top-1/2 w-2 h-2 bg-[#7C3AED] rounded-full" />

            </div>
          </motion.div>

          {/* Right - Technologies */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold mb-8 text-[#0F172A]"
            >
              My Main Toolkit
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {mainSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -6 }}
                    className="group border border-[#E2E8F0] bg-white p-6 flex flex-col items-center justify-center gap-4 rounded-xl hover:border-[#7C3AED] transition-colors duration-300"
                  >
                    <Icon
                      className={`${skill.color} text-4xl group-hover:scale-110 transition-transform duration-300`}
                    />

                    <span className="text-[#334155] text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 pt-12 border-t border-[#E2E8F0]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

            <div>
              <p className="text-[#7C3AED] text-sm font-medium mb-2">
                Currently Exploring
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                Always learning something new.
              </h3>

              <p className="text-[#64748B] mt-3 max-w-xl">
                I'm currently expanding my programming knowledge with Advanced
                Java and Python.
              </p>
            </div>

            {/* Learning Technologies */}
            <div className="flex gap-5">
              {learningSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    className="border border-[#E2E8F0] px-6 py-5 bg-white flex items-center gap-3 rounded-xl hover:border-[#7C3AED] transition-colors duration-300"
                  >
                    <Icon className={`${skill.color} text-2xl`} />

                    <span className="text-[#334155] font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;