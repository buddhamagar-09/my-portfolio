import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";


function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "busa_bca2080@lict.edu.np",
      link: "mailto:busa_bca2080@lict.edu.np",
    },
    {
      icon: FaLocationDot,
      label: "Location",
      value: "Nepal",
      link: null,
    },
  ];

  const socials = [
    {
      icon: FaGithub,
      link: "https://github.com/buddhamagar-09",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      link: "#",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/buddhamagar09/",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-[#F8FAFC] text-[#0F172A] py-14 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-100/50 rounded-full blur-3xl -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#7C3AED]" />
            <p className="text-[#7C3AED] font-semibold uppercase tracking-widest text-sm">
              Contact
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Let's build something
            <span className="block text-[#7C3AED]">great together.</span>
          </h2>

          <p className="text-[#64748B] text-lg leading-8 mt-6 max-w-2xl">
            Have a project idea, collaboration opportunity, or just want to
            connect? Feel free to reach out anytime.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-[#475569] leading-8 mb-10">
              I'm always interested in discussing new ideas, web development
              projects, collaborations, and opportunities to learn and grow.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center shrink-0">
                      <Icon className="text-lg" />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-[#94A3B8] mb-1">
                        {item.label}
                      </p>
                      <p className="font-medium text-[#1E293B]">
                        {item.value}
                      </p>
                    </div>

                    {item.link && (
                      <FaArrowUpRightFromSquare className="text-[#94A3B8] text-sm group-hover:text-[#7C3AED] transition-colors" />
                    )}
                  </>
                );

                return item.link ? (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center gap-4 p-5 bg-white border border-[#E2E8F0] rounded-2xl hover:border-[#C4B5FD] hover:shadow-lg hover:shadow-purple-100/50 transition-all"
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-5 bg-white border border-[#E2E8F0] rounded-2xl hover:border-[#C4B5FD] hover:shadow-lg hover:shadow-purple-100/50 transition-all"
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-sm font-medium text-[#475569] mb-4">
                Find me online
              </p>

              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl border border-[#E2E8F0] bg-white flex items-center justify-center text-[#64748B] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] transition-colors shadow-sm"
                      aria-label={social.label}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 md:p-10 shadow-xl shadow-slate-200/40">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Send me a message
                </h3>
                <p className="text-[#64748B] mt-2">
                  Fill out the form and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      // placeholder="John Doe"
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[#0F172A] placeholder:text-[#94A3B8] outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-purple-100 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      // placeholder="john@email.com"
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[#0F172A] placeholder:text-[#94A3B8] outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-purple-100 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-5">
                  <label className="block text-sm font-medium text-[#334155] mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[#0F172A] placeholder:text-[#94A3B8] outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="block text-sm font-medium text-[#334155] mb-2">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell me about your project or idea..."
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-[#0F172A] placeholder:text-[#94A3B8] outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-purple-100 transition-all resize-none"
                  />
                </div>

                {/* Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-7 inline-flex items-center justify-center gap-3 bg-[#7C3AED] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#6D28D9] shadow-lg shadow-purple-200 transition-colors"
                >
                  Send Message
                  <FaPaperPlane className="text-sm" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;