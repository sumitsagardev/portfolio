import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Blog() {
  const blogs = [
    {
      title: "5 Common Mistakes to Avoid When Developing APIs",
      description:
        "Learn to avoid common pitfalls in API development and improve the reliability and usability of your applications.",
      image: "src/assets/images/api-development.jpg",
      link: "#",
    },
    {
      title: "How to Use ReactJS to Build a Modern Web Application",
      description:
        "Get a step-by-step guide on building a modern web application using ReactJS, a popular JavaScript library nowadays.",
      image: "src/assets/images/web-development.jpg",
      link: "#",
    },
    {
      title: "Hosting your Web Application with AWS & S3 Bucket",
      description:
        "Learn how hosting your web application on AWS with S3, enables seamless scalability and maintaining optimal performance.",
      image: "src/assets/images/aws.jpg",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the previous blog post
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  // Function to handle moving to the next blog post
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto max-w-[1200px] px-4 md:px-20">
      <h1 className="text-center text-3xl font-bold mb-6">Blog</h1>

      <div className="relative flex items-center justify-center">
        {/* Chevron Left */}
        <button
          onClick={handlePrev}
          className="absolute left-0 text-3xl p-2 bg-gray-200 rounded-full dark:bg-gray-800"
        >
          <FaChevronLeft />
        </button>

        {/* Blog Card */}
        <a
          href={blogs[currentIndex].link}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow w-full max-w-[700px] transition-transform duration-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full h-48 rounded-t-lg"
            src={blogs[currentIndex].image}
            alt={blogs[currentIndex].title}
          />
          <div className="p-4">
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              {blogs[currentIndex].title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {blogs[currentIndex].description}
            </p>
          </div>
        </a>

        {/* Chevron Right */}
        <button
          onClick={handleNext}
          className="absolute right-0 text-3xl p-2 bg-gray-200 rounded-full dark:bg-gray-800"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Pagination (Optional: display dots or numbers) */}
      <div className="flex justify-center mt-4">
        {blogs.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
