import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-[#F8FAFC] text-[#0F172A] py-14"
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
          <p className="text-[#7C3AED] font-medium mb-2">
            Education & Background
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My journey so far
          </h2>

          <div className="w-16 h-1 bg-[#7C3AED] mt-5" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Timeline Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-[#E2E8F0] md:-translate-x-1/2" />

          {/* BCA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-start mb-16"
          >
            {/* Timeline Icon */}
            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border-2 border-[#7C3AED] rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
              <FaGraduationCap className="text-[#7C3AED]" />
            </div>

            {/* Content */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-14">
              <p className="text-[#7C3AED] text-sm font-medium mb-2">
                Currently Pursuing
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A]">
                Bachelor of Computer Applications
              </h3>

              <p className="text-[#334155] mt-2">
                BCA
              </p>

              <p className="text-[#64748B] mt-4 leading-7">
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
            <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border-2 border-[#7C3AED] rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
              <FaSchool className="text-[#7C3AED]" />
            </div>

            {/* Content */}
            <div className="ml-16 md:ml-auto md:w-1/2 md:pl-14">
              <p className="text-[#7C3AED] text-sm font-medium mb-2">
                Higher Secondary Education
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A]">
                +2 Education
              </h3>

              <p className="text-[#334155] mt-2">
                Namuna College
              </p>

              <p className="text-[#64748B] mt-4 leading-7">
                Completed my higher secondary education at Namuna College,
                where I developed a strong academic foundation and a growing
                interest in technology and computer science, which inspired me
                to pursue higher education in the field.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Education;