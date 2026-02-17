export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "HTML/CSS",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Database Design",
      ],
    },
    {
      category: "Databases",
      skills: [
        "MongoDB",
        "SQL",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git/GitHub",
        "Odoo Framework",
        "Microsoft Office Suite",
        "VS Code",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"></div>
                    <span className="text-gray-700 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Currently Learning
          </h3>

          <p className="text-lg mb-4">
            Advanced React patterns, system design, cloud technologies,
            and emerging web frameworks to stay at the forefront of
            web development.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Next.js", "TypeScript Advanced", "AWS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/20 rounded-lg font-semibold"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
