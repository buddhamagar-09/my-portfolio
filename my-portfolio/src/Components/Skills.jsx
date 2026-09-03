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
  const frontendSkills = [
    { name: "HTML", icon: FaHtml5, level: "Advanced" },
    { name: "CSS", icon: FaCss3Alt, level: "Advanced" },
    { name: "JavaScript", icon: FaJs, level: "Intermediate" },
    { name: "React JS", icon: FaReact, level: "Intermediate" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "PHP", icon: FaPhp, level: "Intermediate" },
    { name: "Laravel", icon: FaLaravel, level: "Intermediate" },
    { name: "MySQL", icon: SiMysql, level: "Intermediate" },
  ];

  const programmingSkills = [
    { name: "Java", icon: FaJava, level: "Learning" },
    { name: "Python", icon: FaPython, level: "Currently Learning" },
  ];

  const SkillItem = ({ skill }) => {
    const Icon = skill.icon;

    return (
      <div className="group">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Icon className="text-[#38BDF8] text-xl" />

            <span className="text-white font-medium">
              {skill.name}
            </span>
          </div>

          <span className="text-[#64748B] text-sm">
            {skill.level}
          </span>
        </div>

        <div className="h-1 bg-[#1E293B] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width:
                skill.level === "Advanced"
                  ? "90%"
                  : skill.level === "Intermediate"
                  ? "70%"
                  : "45%",
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-[#38BDF8]"
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="bg-[#0B1120] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#38BDF8] font-medium mb-2">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I work with
          </h2>

          <div className="w-16 h-1 bg-[#38BDF8] mt-5" />

          <p className="text-[#94A3B8] max-w-2xl mt-6 text-lg leading-7">
            These are the technologies and tools I have been working with
            while developing my projects and improving my skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-7 text-white">
              Frontend Development
            </h3>

            <div className="space-y-7">
              {frontendSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  skill={skill}
                />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-7 text-white">
              Backend Development
            </h3>

            <div className="space-y-7">
              {backendSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  skill={skill}
                />
              ))}
            </div>
          </motion.div>

          {/* Programming */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 md:max-w-xl"
          >
            <h3 className="text-xl font-semibold mb-7 text-white">
              Programming Languages
            </h3>

            <div className="space-y-7">
              {programmingSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  skill={skill}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Skills;