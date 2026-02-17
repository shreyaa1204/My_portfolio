export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Computer Science student specializing in 
              Full-Stack Web Development. I enjoy building scalable web 
              applications using modern technologies like React, Node.js, 
              Express, and MongoDB.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I love solving complex problems, learning new technologies, 
              and continuously improving my development skills. My goal is 
              to create impactful digital experiences that make a difference.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p className="text-gray-600">India</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Availability</h4>
                <p className="text-gray-600">Open to Opportunities</p>
              </div>
            </div>
          </div>

          {/* Right Side - Highlight Box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Quick Highlights
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>✔ Strong foundation in Data Structures & Algorithms</li>
                <li>✔ Experience with MERN Stack Development</li>
                <li>✔ Passionate about clean and scalable code</li>
                <li>✔ Fast learner & team collaborator</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
