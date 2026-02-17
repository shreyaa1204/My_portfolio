import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Medi-Caps University, Indore",
      duration: "Expected Graduation: 2026",
      cgpa: "8.52",
      details: [
        {
          label: "12th Grade (Science)",
          value: "Percentage: 91.4%",
          year: "2022",
        },
        {
          label: "10th Grade",
          value: "Percentage: 91.6%",
          year: "2020",
        },
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Top Section */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-purple-600 font-semibold">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-purple-200">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">
                    Duration
                  </p>
                  <p className="text-lg text-gray-900 font-bold">
                    {edu.duration}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">
                    Current CGPA
                  </p>
                  <p className="text-lg text-gray-900 font-bold">
                    {edu.cgpa}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">
                    Status
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold">
                    <Award size={18} />
                    Active
                  </div>
                </div>
              </div>

              {/* School Details */}
              <div className="grid md:grid-cols-2 gap-6">
                {edu.details.map((detail, i) => (
                  <div key={i} className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      {detail.label}
                    </p>
                    <p className="text-lg text-gray-900 font-bold">
                      {detail.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Year: {detail.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* High School Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 border border-purple-300">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            High School Details
          </h3>
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-700">
              <span className="font-semibold">
                Army Public School, Indore
              </span>
              <br />
              Completed 12th and 10th grade with strong academic performance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
