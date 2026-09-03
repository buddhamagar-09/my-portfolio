import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="group flex items-center gap-2 cursor-pointer"
          >
            {/* Logo Icon */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-[#7C3AED] rounded-xl shadow-md shadow-purple-200 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#6D28D9]">
              <span className="text-white font-bold text-lg">&lt;/&gt;</span>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-[#0F172A]">
                Buddha
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#7C3AED] uppercase mt-1">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-[#64748B] hover:text-[#7C3AED] transition-colors duration-300 cursor-pointer text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://github.com/buddhamagar-09"
              target="_blank"
              rel="noreferrer"
              className="text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#64748B] hover:text-[#7C3AED] transition-colors"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="/buddhacv.pdf"
              className="border border-[#7C3AED] text-[#7C3AED] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#7C3AED] hover:text-white transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#7C3AED] text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#E2E8F0] py-5">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-[#64748B] hover:text-[#7C3AED] transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-5 pt-3 border-t border-[#E2E8F0]">
                <a
                  href="https://github.com/buddhamagar-09"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#64748B] hover:text-[#0F172A]"
                >
                  <FaGithub size={21} />
                </a>

                <a
                  href="https://linkedin.com/in/buddhamagar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#64748B] hover:text-[#7C3AED]"
                >
                  <FaLinkedin size={21} />
                </a>

                <a
                  href="/resume.pdf"
                  className="border border-[#7C3AED] text-[#7C3AED] px-4 py-2 rounded-md text-sm hover:bg-[#7C3AED] hover:text-white"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
