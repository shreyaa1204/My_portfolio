import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";

import profileImage from "../assets/profile.jpeg";


export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-purple-600 font-semibold text-lg">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Shreya
                <br />
                Sharma
              </h1>
            </div>

            <p className="text-2xl text-gray-700 font-medium">
              Full-Stack Web Developer & Computer Science Engineer
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Goal-oriented CS student specializing in web development.
              Building modern web applications with React, Node.js, and MongoDB.
              Passionate about solving complex problems through innovative code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>

              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-6 pt-6">
              <a
                href="https://github.com/shreyaa1204"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors p-2 hover:bg-purple-50 rounded-lg"
              >
                <Github size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/shreya-sharma-eng?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors p-2 hover:bg-purple-50 rounded-lg"
              >
                <Linkedin size={28} />
              </a>

              <a
                href="mailto:shreya12sharmaa@gmail.com"
                className="text-gray-600 hover:text-purple-600 transition-colors p-2 hover:bg-purple-50 rounded-lg"
              >
                <Mail size={28} />
              </a>

              <a
                href="/Shreya_Resume.pdf"
                className="text-gray-600 hover:text-purple-600 transition-colors p-2 hover:bg-purple-50 rounded-lg"
              >
                <Download size={28} />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-purple-100">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <img
  src={profileImage}
  alt="Shreya Sharma"
  className="w-full h-full object-cover rounded-xl"
/>

                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
