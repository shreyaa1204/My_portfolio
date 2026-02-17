import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Sky Technosoft, Indore",
      duration: "May 2025 – Jul 2025",
      description: [
        "Managed client requirements and implemented web projects using MERN stack, ensuring structured documentation and progress tracking.",
        "Streamlined workflows and coordinated with teams to resolve issues, reconcile queries, and deliver accurate reports.",
        "Strengthened skills in front-end and back-end while gaining exposure to modern web technologies."
      ]
    },
    {
      title: "Web Development Intern",
      company: "CSIR-CBRI, Roorkee",
      duration: "Jun 2024 – Aug 2024",
      description: [
        "Developed API requirement specifications using Node.js, Express.js, and SQL for request handling, tracking, and approvals.",
        "Implemented and managed SQL databases for secure data storage, retrieval, and reporting, ensuring accuracy and reliability.",
        "Built and tested REST APIs with proper error handling and validation."
      ]
    },
    {
      title: "Video Editing Executive",
      company: "Google Developer Group (GDG), Medi-caps University",
      duration: "Aug 2024 – Aug 2025",
      description: [
        "Created event materials and promotional designs using Canva & Filmora, managing video presentations with Microsoft Office Suite.",
        "Ensured professional branding and smooth event execution through meticulous planning and design.",
        "Collaborated with team members to deliver high-quality event content and marketing materials."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 pb-10 border-l-2 border-purple-300 last:border-l-transparent last:pb-0"
            >
              <div className="absolute -left-4 top-0 w-6 h-6 bg-white border-4 border-purple-500 rounded-full"></div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <Briefcase className="text-purple-500" size={24} />
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  {exp.duration}
                </p>

                <ul className="space-y-3">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-gray-700 flex gap-3">
                      <span className="text-purple-500 font-bold flex-shrink-0 mt-1">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
