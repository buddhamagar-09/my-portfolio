import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiJavascript } from "react-icons/si";

function Projects() {
  const imagePath = (name) => `${import.meta.env.BASE_URL}${name}`;
  const projects = [
    {
      title: "TravelMate",
      category: "Full Stack Web Application",
      description:
        "A travel platform that allows users to explore travel packages, make bookings, leave reviews, and manage their travel experiences. It also includes an admin dashboard for managing the platform.",
      technologies: [
        { name: "React JS", icon: FaReact },
        { name: "Laravel", icon: FaLaravel },
        { name: "MySQL", icon: SiMysql },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      github: "https://github.com/buddhamagar-09/TravelMate",
      live: null,
      icon: FaReact,
      image: "travelmate1.png",
    },
    {
      title: "MotoMods Nepal",
      category: "E-Commerce Website",
      description:
        "An e-commerce website for motorcycle spare parts where users can browse products and manage their purchases through a simple shopping experience.",
      technologies: [
        { name: "PHP", icon: FaPhp },
        { name: "MySQL", icon: SiMysql },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      github: "https://github.com/buddhamagar-09/MotoMods_Nepal",
      live: null,
      icon: FaPhp,
      image: "motomods1.png",
    },
    {
      title: "FashionHub",
      category: "E-Commerce Website",
      description:
        "An e-commerce website for clothes and accessories where users can browse products and manage their purchases through a simple shopping experience.",
      technologies: [
        { name: "PHP", icon: FaPhp },
        { name: "MySQL", icon: SiMysql },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      github: "https://github.com/buddhamagar-09/EcommerceDemo",
      live: null,
      icon: FaPhp,
      image: "FashionHub.png",
    },
    {
      title: "FutBook",
      category: "E-Commerce Website",
      description:
        "An e-commerce website for Sports cleats and accessories where users can browse products and manage their purchases through a simple shopping experience.",
      technologies: [
        { name: "Laravel", icon: FaLaravel },
        { name: "MySQL", icon: SiMysql },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      github: "https://github.com/buddhamagar-09/futbook",
      live: null,
      icon: FaLaravel,
      image: "FutBook.png",
    },
  ];

  return (
    <section id="projects" className="bg-transparent text-[#F1F5F9] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#22D3EE] font-medium mb-3">Projects</p>

          <h2 className="text-4xl md:text-5xl font-bold">Things I've built</h2>

          <div className="w-16 h-1 bg-[#22D3EE] mt-5" />

          <p className="text-[#94A3B8] max-w-2xl mt-6 text-lg leading-7">
            A selection of projects I've worked on while learning,
            experimenting, and building real-world applications.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -6 }}
                className="group border border-[#22304A] bg-[#111C2E] overflow-hidden"
              >
                {/* Project Preview */}
                <div className="relative h-64 bg-[#0A1120] flex items-center justify-center overflow-hidden">
                  {/* Project Image */}
                  <div className="w-full h-full overflow-hidden flex items-center justify-center">
                    <img
                      src={imagePath(project.image)}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-7">
                  <p className="text-[#22D3EE] text-sm font-medium mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-4 text-[#F1F5F9]">
                    {project.title}
                  </h3>

                  <p className="text-[#94A3B8] leading-7 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((technology) => {
                      const Icon = technology.icon;

                      return (
                        <span
                          key={technology.name}
                          className="flex items-center gap-2 border border-[#22304A] px-3 py-2 text-xs text-[#B8C5D6]"
                        >
                          <Icon className="text-[#22D3EE] text-sm" />
                          {technology.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 mt-7 pt-5 border-t border-[#22304A]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-[#B8C5D6] hover:text-[#22D3EE] transition-colors"
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-[#B8C5D6] hover:text-[#22D3EE] transition-colors"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 border border-dashed border-[#33445F] px-3 py-2 text-xs text-[#94A3B8] cursor-default">
                        <FaExternalLinkAlt className="text-sm" />
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
