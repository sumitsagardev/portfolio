import React from "react";

function Projects() {
  const projects = [
    {
      image: "../../public/tawid-banner.jpg", // Replace with your actual image paths
      name: "Tawid",
      type: "Mobile Application",
      description:
        "This application facilitates the process of claiming refunds from flight companies for flight delays, cancellations and overbookings.",
      link: "https://example.com/project1",
    },
    {
      image: "../../public/uncruise-banner.jpg",
      name: "Uncruise",
      type: "Mobile Application",
      description:
        "This application enables users to book cruises and share reviews and community posts about their experiences.",
      link: "https://example.com/project2",
    },
    {
      image: "../../public/metaval-banner.jpg",
      name: "Metaval",
      type: "E-commerce Website",
      description:
        "This application serves as an e-commerce platform specializing in the procurement of industrial supplies.",
      link: "https://example.com/project3",
    },
    {
      image: "../../public/transport-coyoacan.jpg",
      name: "Coyoacan Transport",
      type: "Mobile Application",
      description:
        "This application facilitates the booking of car rides from leading platforms such as booking.com and transferz.com.",
      link: "https://example.com/project4",
    },
    {
      image: "../../public/hoofboot-banner.jpg",
      name: "Hoof-Boot Academy",
      type: "Mobile Application",
      description:
        "This application is an e-commerce platform tailored for purchasing horse food, equipment, and accessories..",
      link: "https://example.com/project5",
    },
    {
      image: "../../public/coyoacan-driver.jpg",
      name: "Coyoacan Driver",
      type: "Mobile Application",
      description:
        "This application serves as a comprehensive platform designed to efficiently manage car ride bookings specifically for drivers.",
      link: "https://example.com/project6",
    },
  ];

  return (
    <>
      <div className="container max-w-[1200px] mx-auto py-10 px-4 md:px-20">
        <h1 className="text-3xl font-bold text-center  text-secondary mb-6">
          Projects
        </h1>
        <p className=" mb-10 text-primary items-center text-center">
          Explore a showcase of my work, highlighting diverse projects and
          accomplishments across various domains. From web applications to
          backend systems, each project reflects meticulous attention to detail
          and innovative problem-solving skills. Dive into these case studies to
          witness the synergy of technology, creativity, and functionality.
        </p>

        {/* Grid layout with 3 columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2  text-center lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4  object-cover w-full h-48 transform transition-transform duration-300 hover:scale-105"
              />

              <h2 className="text-xl font-semibold text-primary">
                {project.name}
              </h2>
              <p className="text-sm text-gray-500">{project.type}</p>
              <p className="mt-2 text-primary">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 text-blue-500 hover:text-blue-700 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
