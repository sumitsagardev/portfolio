import React from "react";
import { MdWebAsset } from "react-icons/md";
import { FaPlug } from "react-icons/fa6";
import { MdOutlineDeveloperMode } from "react-icons/md";

function Services() {
  const services = [
    {
      icon: <MdWebAsset />,
      name: "WEB DEVELOPMENT",
      description:
        "As a backend developer, I specialize in building web applications using the Laravel and CodeIgniter frameworks. With these frameworks, I can create robust and scalable web solutions that meet the needs of businesses of all sizes. From custom web development to e-commerce platforms, I have the skills to build web applications like CRMs, admin panels, and many other types of applications.",
    },
    {
      icon: <FaPlug />,
      name: "API DEVELOPMENT",
      description:
        "I also specialize in API development using Laravel and CodeIgniter. APIs are the backbone of modern web applications, and I can create custom APIs that meet the needs of any business. From RESTful APIs to SOAP APIs, I can create APIs that provide a seamless and intuitive experience for end-users.",
    },
    {
      icon: <MdOutlineDeveloperMode />,
      name: "DEPLOYMENT",
      description:
        "When it comes to server deployment and management, I have extensive experience working with AWS and other cPanel services. From server setup to configuration and maintenance, I can deploy and manage servers that meet the needs of any business.",
    },
  ];

  return (
    <div className="container max-w-[1200px] mx-auto py-10 px-4 md:px-20">
      <h2 className="text-3xl text-secondary flex items-center justify-center font-bold mb-4">
        Services
      </h2>
      <p className="flex justify-center items-center mb-6 text-center">
        Specializing in comprehensive backend development, API creation, and
        seamless server deployment, I bring robust solutions to the forefront of
        web development. Expertise in backend architecture, API integrations,
        and deployment strategies. Let's collaborate to transform your ideas
        into efficient, high-performing realities.
      </p>
      {/* Changed to flexbox layout */}
      <div className="flex flex-wrap justify-between gap-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex-1 min-w-[250px] text-center p-4 border rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-[1.05] hover:shadow-xl  bg-gray-800 hover:bg-gray-700" // Scale adjusted to 1.05
          >
            {/* Centering the icon in the div */}
            <div className="h-16 mb-2 flex items-center justify-center">
              <span className="text-6xl flex items-center justify-center">
                {service.icon}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-secondary">
              {service.name}
            </h3>
            <p className="mt-2 text-primary">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
