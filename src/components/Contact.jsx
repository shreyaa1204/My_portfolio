import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError("Failed to send message. Please try again.");
        return;
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Server not responding. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shreya12sharmaa@gmail.com",
      href: "mailto:shreya12sharmaa@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9109880559",
      href: "tel:+919109880559",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Indore, India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
          <p className="text-lg text-gray-600 mt-6">
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info) => {
            const IconComponent = info.icon;
            return (
              <a
                key={info.title}
                href={info.href}
                className="group bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-purple-600 font-semibold">
                  {info.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Send Me a Message
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Feel free to send me a message. I’ll get back to you soon!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none resize-none"
            ></textarea>

            {error && (
              <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {submitted && (
              <div className="p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm">
                Message sent successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
