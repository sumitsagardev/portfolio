import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="container max-w-[1200px] mx-auto py-10 px-4 md:px-20">
      <div className="container mx-auto max-w-[1200px] px-4 py-8 mt-12 bg-gray-800 text-white rounded-lg shadow-md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Get in Touch Section */}
          <div className="p-6 md:pl-8">
            <h2 className="text-5xl font-bold mb-4 text-secondary">
              Get in Touch
            </h2>
            <p className="text-gray-400 items-center mb-4">
              Feel free to reach out via email or phone for any inquiries or
              collaborations.
            </p>
            <ul className="text-gray-400 mb-8">
              <li className="mb-3">
                <strong className="text-secondary">Email:</strong>{" "}
                <a
                  href="mailto:pandeyshekhar47@gmail.com"
                  className="hover:text-white"
                >
                  pandeyshekhar47@gmail.com
                </a>
              </li>
              <li className="mb-3">
                <strong className="text-secondary">Phone:</strong>{" "}
                <a href="tel:+918392947045" className="hover:text-white">
                  +91 8392947045
                </a>
              </li>
              <li>
                <strong className="text-secondary">Address:</strong> Noida,
                Uttar Pradesh (India)
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="p-6 md:pr-8">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Contact Us
            </h2>
            <form>
              <div className="mb-6">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 leading-tight bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 leading-tight bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 leading-tight bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transform transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
