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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A1120]/95 backdrop-blur-lg border-b border-[#22304A]">
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
            <div className="relative w-10 h-10 flex items-center justify-center bg-[#22D3EE] rounded-xl shadow-md shadow-cyan-400/25 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#67E8F9]">
              <span className="text-[#06111F] font-bold text-lg">&lt;/&gt;</span>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-[#F1F5F9]">
                Buddha
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#22D3EE] uppercase mt-1">
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
                className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors duration-300 cursor-pointer text-sm font-medium"
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
              className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/buddha-magar-061115442/"
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="/BuddhaResume.pdf"
              download
              className="border border-[#22D3EE] text-[#22D3EE] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#22D3EE] hover:text-[#06111F] transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#22D3EE] text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#22304A] py-5">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-5 pt-3 border-t border-[#22304A]">
                <a
                  href="https://github.com/buddhamagar-09"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#94A3B8] hover:text-[#F1F5F9]"
                >
                  <FaGithub size={21} />
                </a>

                <a
                  href="https://www.linkedin.com/in/buddha-magar-061115442/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#94A3B8] hover:text-[#22D3EE]"
                >
                  <FaLinkedin size={21} />
                </a>

                <a
                  href="/BuddhaResume.pdf"
                  download
                  className="border border-[#22D3EE] text-[#22D3EE] px-4 py-2 rounded-md text-sm hover:bg-[#22D3EE] hover:text-[#06111F]"
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
