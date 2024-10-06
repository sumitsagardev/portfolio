import React from "react";
import {
  FaAws,
  FaCss3,
  FaJs,
  FaLaravel,
  FaNode,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { SiJquery, SiExpress, SiMysql } from "react-icons/si";

function Exprience() {
  const skills = [
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaNode />,
      name: "Node.js",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <DiCodeigniter />,
      name: "CodeIgniter",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <FaDatabase />,
      name: "Database",
    },
    {
      icon: <SiJquery />,
      name: "jQuery",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
  ];

  return (
    <div className="container max-w-[1200px] mx-auto py-10 px-4 md:px-20">
      <h2 className="text-3xl text-secondary font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {skills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg cursor-pointer shadow-lg transition-transform duration-300 transform hover:scale-105  hover:bg-gray-700 bg-gray-800 hover:shadow-xl"
          >
            <div className="w-16 h-16 mb-2 flex items-center justify-center">
              <span className="text-6xl transition-transform duration-300 transform hover:scale-125  hover:text-black cursor-pointer">
                {item.icon}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-secondary transition-transform duration-300 transform hover:scale-110  cursor-pointer">
              {item.name}
            </h3>
            <p className="mt-2 text-primary transition-transform duration-300 transform hover:scale-105 hover:text-black cursor-pointer">
              10 Projects
            </p>
          </div>
        ))}
      </div>

      {/* Parent hover effect */}
      <style jsx>{`
        .grid:hover .grid > div {
          transform: scale(1.1) translateX(0.5rem); /* Scale and translate on hover */
          transition: transform 0.3s ease-in-out; /* Transition effect */
        }

        @keyframes fadeIn {
          from {
            opacity: 0; /* Start invisible */
            transform: translateY(10px); /* Move down */
          }
          to {
            opacity: 1; /* End fully visible */
            transform: translateY(0); /* End in original position */
          }
        }
      `}</style>
    </div>
  );
}

export default Exprience;
