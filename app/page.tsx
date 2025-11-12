"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "portfolio", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(`project-${projectId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      id: "nikahsanding",
      title: "Nikahsanding.com",
      description:
        "A full-stack e-commerce solution with payment integration and real-time inventory management.",
      tags: ["PHP", "Tailwind", "SQL"],
      link: "#",
    },
    {
      id: "mytasbih",
      title: "Digital Tasbih",
      description:
        "Collaborative task management tool with real-time updates and team productivity analytics.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#",
    },
    // {
    //   id: "weather",
    //   title: "Weather Dashboard",
    //   description:
    //     "Real-time weather monitoring dashboard with interactive maps and forecasting.",
    //   tags: ["React", "API Integration", "Charts"],
    //   link: "#",
    // },
    // {
    //   id: "blogcms",
    //   title: "Blog CMS",
    //   description:
    //     "Custom content management system with markdown support and SEO optimization.",
    //   tags: ["Next.js", "Tailwind", "Vercel"],
    //   link: "#",
    // },
  ];

  const portfolioItems = [
    {
      title: "Brand Identity Design",
      category: "Design",
      description: "Complete brand identity package for tech startup",
    },
    {
      title: "Mobile App Development",
      category: "Development",
      description: "iOS and Android app for fitness tracking",
    },
    {
      title: "Web Application",
      category: "Full Stack",
      description: "SaaS platform for project management",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold tracking-tight hover:text-blue-600 transition-colors"
            >
              syahiranazizan
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "portfolio", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === section
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 bg-white rounded-lg shadow-lg">
              {["home", "portfolio", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  {section}
                </button>
              ))}

              {/* Project List in Mobile Menu */}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Projects
                </div>
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => scrollToProject(project.id)}
                    className="block w-full text-left py-2 px-4 hover:bg-blue-50 rounded-lg transition-colors text-sm text-gray-700 hover:text-blue-600"
                  >
                    → {project.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto animate-pulse"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Syahiran Azizan
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Full-stack developer @ CHUBB IT | 25 years old
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 sm:px-8 py-3 border-2 border-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <User className="text-blue-600" size={28} />
            <h2 className="text-3xl sm:text-4xl font-bold">Portfolio</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"></div>
                <span className="text-sm text-blue-600 font-medium">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Briefcase
                    className="text-blue-600 group-hover:scale-110 transition-transform"
                    size={24}
                  />
                  <a
                    href={project.link}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
          <p className="text-xl text-gray-600 mb-12">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>

          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://github.com/syahiranazizan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/syahiranazizan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@syahiranazizan.com"
              className="p-4 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="mailto:hello@syahiranazizan.com"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2025 Syahiran Azizan. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
