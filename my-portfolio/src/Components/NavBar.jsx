import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/95 backdrop-blur-md border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white cursor-pointer"
          >
            <span className="text-[#38BDF8]">&lt;</span>
            YourName
            <span className="text-[#38BDF8]">/&gt;</span>
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
                className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-300 cursor-pointer text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-5">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="/resume.pdf"
              className="border border-[#38BDF8] text-[#38BDF8] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#38BDF8] hover:text-[#0B1120] transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#38BDF8] text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#1E293B] py-5">

            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-5 pt-3 border-t border-[#1E293B]">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#94A3B8] hover:text-white"
                >
                  <FaGithub size={21} />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#94A3B8] hover:text-[#38BDF8]"
                >
                  <FaLinkedin size={21} />
                </a>

                <a
                  href="/resume.pdf"
                  className="border border-[#38BDF8] text-[#38BDF8] px-4 py-2 rounded-md text-sm hover:bg-[#38BDF8] hover:text-[#0B1120]"
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