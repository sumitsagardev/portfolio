import React from "react";

function About() {
  return (
    <section className="container max-w-[1200px] mx-auto py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative overflow-hidden rounded-lg shadow-md h-80 w-full">
            <img
              src="/public/s.jpg"
              alt="profile"
              className="h-full w-full object-cover object-top transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl text-secondary md:text-4xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-primary text-md text-justify">
            As a seasoned Backend Developer with over 2 years of experience, I
            specialize in Laravel and CodeIgniter frameworks, leveraging my
            expertise to craft robust and scalable web applications that drive
            business success. My passion for backend development stems from a
            relentless pursuit of excellence and a deep understanding of
            industry best practices.
            <br />
            <br />
            My name is{" "}
            <strong className="text-secondary">Shekhar Pandey</strong>, and I am
            committed to delivering exceptional results. With a proven track
            record of delivering high-quality software solutions, I bring a
            wealth of technical knowledge and problem-solving skills to every
            project. I thrive in dynamic environments, where I can collaborate
            with cross-functional teams to overcome challenges and achieve
            project objectives.
            <br />
          </p>
        </div>
      </div>

      <br />
      <div>
        <span className="block">
          You can contact me at{" "}
          <a
            href="mailto:pandeyshekhar47@gmail.com"
            className="text-secondary hover:underline"
          >
            pandeyshekhar47@gmail.com
          </a>{" "}
          or via phone at{" "}
          <a
            href="tel:+918392947045"
            className="text-secondary hover:underline"
          >
            +918392947045
          </a>
          . I am passionate about building long-lasting relationships with
          clients and stakeholders, and I am dedicated to providing unparalleled
          customer service and support throughout the development process.
          <br />
          <br />
          If you are seeking a dedicated and results-driven Backend Developer
          who is committed to exceeding expectations, I would love to hear from
          you. Let's collaborate to turn your vision into reality and create
          impactful digital solutions that propel your business forward.
        </span>
      </div>
    </section>
  );
}

export default About;
