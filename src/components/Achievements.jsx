import { Trophy, Star } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Quasar 2.0 National Hackathon",
      achievement: "Runner-up",
      detail: "Top 2 out of 200+ teams",
      icon: Trophy,
      color: "from-yellow-400 to-orange-400",
    },
    {
      title: "TOI-Talrop Ideathon",
      achievement: "Finalist",
      detail: "Recognized for innovative solution approach",
      icon: Star,
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Odoo Hackathon 2025",
      achievement: "Top 25 Finalist",
      detail:
        "Top 25 teams out of 19,000+ worldwide participants",
      icon: Trophy,
      color: "from-green-400 to-blue-400",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achievements & Awards
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <div
                key={idx}
                className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden relative"
              >
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full -mr-20 -mt-20 opacity-10 group-hover:scale-110 transition-transform duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br ${item.color}`}
                    >
                      <IconComponent className="text-white" size={24} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold text-purple-600 mb-2">
                    {item.achievement}
                  </p>

                  <p className="text-gray-600">
                    {item.detail}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                      <Star size={14} />
                      Notable Achievement
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights Section */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Key Highlights
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">
                3
              </p>
              <p className="text-gray-700">
                Major Hackathon Participations
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">
                2
              </p>
              <p className="text-gray-700">
                Top Finishes (Runner-up & Top 25)
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">
                1
              </p>
              <p className="text-gray-700">
                National Level Recognition
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
