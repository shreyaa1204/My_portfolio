import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Meta Mind – AI-Powered Career Simulation Platform",
      description:
        "A comprehensive platform bridging the gap between academics and industry with real-time corporate simulations and AI-powered career guidance.",
      features: [
        "Built with React, Node.js, and MongoDB",
        "Simulates real-world workflows",
        "AI-powered recommendation system",
      ],
      tags: ["React", "Node.js", "MongoDB", "AI"],
      github: "https://github.com/Yashh-25/QUASAR_meta-mind",
    },
    {
      title: "Pragati – Autism Risk Screening Platform",
      description:
        "A specialized web application designed for preliminary autism risk screening based on behavioral and demographic information.",
      features: [
        "AI-based screening system",
        "User-friendly interface",
        "Secure data handling",
      ],
      tags: ["React", "Express.js", "SQL", "ML"],
      liveLink:
        "https://autism-prediction-dhdueor8zazs2dvljlisgm.streamlit.app/",
      github: "https://github.com/Shivani1158/Autism-Prediction.git",
    },
    {
      title: "Turf Booking – Sports Community Platform",
      description:
        "A comprehensive platform built with Odoo framework for sports community members to manage reservations, invoicing, and client records.",
      features: [
        "Reservation and booking system",
        "Invoice management",
        "Client relationship management",
      ],
      tags: ["Odoo", "Python", "PostgreSQL"],
      github: "https://github.com/Yashh-25/community_odoo",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Modern, responsive portfolio showcasing projects, skills, and experience with smooth animations and interactive elements.",
      features: [
        "Responsive design",
        "Smooth animations",
        "Contact form with MongoDB integration",
      ],
      tags: ["React", "Tailwind CSS", "MongoDB"],
      liveLink: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-100 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-20"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 flex gap-2"
                      >
                        <span className="text-purple-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  {/* Only show View Project if liveLink exists */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-semibold"
                  >
                    <Github size={18} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
