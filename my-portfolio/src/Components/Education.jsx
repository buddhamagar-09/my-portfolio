import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-[#0B1120] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#38BDF8] font-medium mb-2">
            Education & Background
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My journey so far
          </h2>

          <div className="w-16 h-1 bg-[#38BDF8] mt-5" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Timeline Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-[#1E293B] md:-translate-x-1/2" />

          {/* BCA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-start mb-16"
          >
            {/* Timeline Icon */}
            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-[#0B1120] border-2 border-[#38BDF8] rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
              <FaGraduationCap className="text-[#38BDF8]" />
            </div>

            {/* Content */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-14">
              <p className="text-[#38BDF8] text-sm font-medium mb-2">
                Currently Pursuing
              </p>

              <h3 className="text-2xl font-bold text-white">
                Bachelor of Computer Applications
              </h3>

              <p className="text-[#CBD5E1] mt-2">
                BCA
              </p>

              <p className="text-[#94A3B8] mt-4 leading-7">
                Currently pursuing my BCA and developing my knowledge in
                software development, web technologies, programming, and
                computer applications.
              </p>
            </div>
          </motion.div>

          {/* +2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex items-start"
          >
            {/* Timeline Icon */}
            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-[#0B1120] border-2 border-[#38BDF8] rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
              <FaSchool className="text-[#38BDF8]" />
            </div>

            {/* Content */}
            <div className="ml-16 md:ml-auto md:w-1/2 md:pl-14">
              <p className="text-[#38BDF8] text-sm font-medium mb-2">
                Higher Secondary Education
              </p>

              <h3 className="text-2xl font-bold text-white">
                +2 Education
              </h3>

              <p className="text-[#CBD5E1] mt-2">
                Namuna College
              </p>

              <p className="text-[#94A3B8] mt-4 leading-7">
                Completed my higher secondary education at Namuna College,
                where I developed my academic foundation and growing
                interest in technology and computer applications.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Education;