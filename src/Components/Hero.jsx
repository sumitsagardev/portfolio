import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <>
      <div className="container mx-auto min-h-screen max-w-[1200px] flex flex-col md:flex-row justify-between items-center py-24  md:px-24">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-between order-1 md:order-2 mt-12 md:mt-0">
          <img
            src="/logo.png"
            alt="Profile Logo"
            className="sm:w-auto w-80 sm:mb-0 mb-10 flex justify-between object-cover lg:mx-24 rounded-full border border-secondary animation-borderMove shadow-lg transition-transform duration-300 ease-in-out"
            style={{
              animation: "borderMove 2s infinite ease-in-out",
            }} /* Apply the animation */
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 order-2 md:order-1">
          <h2 className="text-xl text-secondary my-6 md:text-xl font-semibold hero-title">
            Welcome to my Profile
          </h2>
          <h1 className="light:text-black text-xl md:text-5xl font-bold text-white">
            I am a{" "}
            <span className="text-secondary">Full Stack Web Developer</span>
          </h1>
          <p className="text-white my-6 leading-relaxed">
            A seasoned web developer, dedicated to crafting immersive online
            experiences. With a passion for innovation and a relentless pursuit
            of excellence, I bring creativity, precision, and a unique
            perspective to every project.
          </p>

          {/* Buttons Section */}
          <div className="flex my-8 space-x-6 sm:flex sm:items-center sm:justify-start justify-center">
            <a
              href="/Shekhar_MERN_Laravel_CodeIgniter_Developer_Resume.pdf"
              target="_blank"
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-secondary rounded-full hover:bg-secondary-dark shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
            >
              Download CV
            </a>
            <a
              href="#connect"
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
            >
              Get Connect
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-8">
            <a
              href="https://www.instagram.com/pandeyshekhart/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition duration-300 ease-in-out"
            >
              <FaInstagram className="text-3xl text-pink-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/webdevshekhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition duration-300 ease-in-out"
            >
              <FaLinkedinIn className="text-3xl text-blue-700" />
            </a>
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2Fpandeyshekhar47"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition duration-300 ease-in-out"
            >
              <FaSquareXTwitter className="text-3xl text-blue-400" />
            </a>
            <a
              href="https://github.com/webdevshekhar"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition duration-300 ease-in-out"
            >
              <FaGithub className="text-3xl text-gray-400" />
            </a>
            <a
              href="https://wa.me/+918392947045"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition duration-300 ease-in-out"
            >
              <FaWhatsapp className="text-3xl text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
