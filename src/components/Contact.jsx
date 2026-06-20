import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import image2 from "../assets/JDAX-1.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // Replace with your actual API endpoint
      await axios.post(
        "https://jdax-server.onrender.com/api/contacts/form",
        payload,
      );

      toast.success("Enquiry form submitted! We will call you.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      formRef.current.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const iconMotion = {
    whileHover: {
      scale: 1.25,
      y: -6,
      boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
    },
    whileTap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <ToastContainer />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0d1117] to-[#431aa0] text-yellow-400 py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: "#facc15" }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
        >
          We’d love to hear from you! Reach out with your questions, feedback,
          or inquiries.
        </motion.p>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-20 grid lg:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-md z-10"
        >
          <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
            <div>
              <label className="block text-gray-700 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="+91 98765 43210"
                pattern="[0-9+\s\-()]+"
                required
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Decorative Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center py-10 md:py-20 overflow-visible"
        >
          {/* Outer Dotted Circle */}
          <div className="hidden md:block absolute w-[520px] h-[520px] rounded-full border-2 border-dotted border-gray-300" />

          {/* Circle Background */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full  bg-[#d3d3ff] flex items-center justify-center overflow-visible border">
            {/* Person Image */}
            <img
              src={image2}
              alt="girl"
              className="relative z-10 
             w-96 h-96 
             sm:w-[400px] sm:h-[420px] 
             md:w-[460px] md:h-[520px] 
             lg:w-[520px] lg:h-[600px] 
             object-contain"
            />

            {/* Social Icons */}
            <div className="block overflow-visible">
              {/* Facebook */}
              <motion.a
                href="https://t.me/jdaxtnpsc"
                target="_blank"
                rel="noopener noreferrer"
                {...iconMotion}
                whileHover={{ scale: 1.2 }}
                className="absolute bottom-[-10px] right-[30%] bg-white p-3 rounded-full shadow-lg cursor-pointer"
              >
                <FaTelegramPlane
                  className="text-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #a855f7, #ec4899, #facc15)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/JD.Academy.of.eXcellence/"
                target="_blank"
                rel="noopener noreferrer"
                {...iconMotion}
                whileHover={{ scale: 1.2 }}
                className="absolute top-[35%] -left-10 sm:-left-12 bg-white p-2 sm:p-3 rounded-full shadow-lg cursor-pointer"
              >
                <FaFacebookF className="text-blue-600 text-2xl sm:text-3xl" />
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/jdax_upsc/"
                target="_blank"
                rel="noopener noreferrer"
                {...iconMotion}
                whileHover={{ scale: 1.2 }}
                className="absolute -top-6 right-[30%] sm:right-[35%] bg-white p-2 sm:p-3 rounded-full shadow-lg cursor-pointer"
              >
                <FaInstagram className="text-pink-500 text-2xl sm:text-3xl" />
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://youtube.com/@jdacademyofexcellence?si=QQV7ufkMUzGsDP3l"
                target="_blank"
                rel="noopener noreferrer"
                {...iconMotion}
                whileHover={{ scale: 1.2 }}
                className="absolute bottom-[35%] -left-12 sm:-left-14 bg-white p-2 sm:p-3 rounded-full shadow-lg cursor-pointer"
              >
                <FaYoutube className="text-red-600 text-2xl sm:text-3xl" />
              </motion.a>

              {/* Twitter / X */}
              <motion.a
                href="https://whatsapp.com/channel/0029VbCEWVx4yltHLtMFk71l"
                target="_blank"
                rel="noopener noreferrer"
                {...iconMotion}
                whileHover={{ scale: 1.2 }}
                className="absolute top-[50%] right-[-12px] bg-white p-3 rounded-full shadow-lg"
              >
                <FaWhatsapp className="text-green-500 text-3xl" />
              </motion.a>

              <motion.a
                href="https://t.me/jdax_upsc"
                target="_blank"
                {...iconMotion}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="absolute top-[1%] left-[30%] bg-white p-3 rounded-full shadow-lg cursor-pointer"
              >
                <FaTelegramPlane
                  className="text-3xl"
                  style={{
                    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="relative w-full h-72 sm:h-80 md:h-96">
        <iframe
          title="JDAX Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5973122759843!2d80.27513757479338!3d13.032897513271735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d7ea83ec43%3A0x9caab01edcac2bae!2sJD%20Academy%20of%20Excellence%20(JDAX)!5e0!3m2!1sen!2sin!4v1696944113825!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 w-full h-full"
        ></iframe>
      </section>
    </div>
  );
}
