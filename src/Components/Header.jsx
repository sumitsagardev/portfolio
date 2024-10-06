import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai"; // Menu icon
import { IoCloseSharp } from "react-icons/io5"; // Close icon

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Blogs", link: "#blogs" },
    { name: "Contact", link: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.classList.toggle("dark-mode", selectedTheme === "dark");
  };

  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (theme === "system") {
      document.body.classList.toggle("dark-mode", userPrefersDark);
    }
  }, [theme]);

  return (
    <>
      <nav className="max-w-screen-2xl fixed bg-[#121212] z-10 w-full mx-auto px-4 md:px-20 flex justify-between shadow-md items-center navbar shadow-g">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-20 flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="../../public/logo.png"
              alt="Shekhar Panday"
              className="h-full w-16 hover:overflow-hidden"
            />
            <div className="ml-2">
              <h1 className="text-lg font-semibold">
                Shekhar <span className="text-secondary">Panday</span>
              </h1>
              <h3 className="text-xs ">Full Stack Web Developer</h3>
            </div>
          </div>

          {/* Desktop navigation */}
          <div>
            <ul className="hidden md:flex justify-start items-center space-x-6 ml-auto">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="hover:scale-125 hover:border-b-2 hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile icons */}
          <div className="md:hidden flex items-center">
            {/* Menu Icon */}
            <div className="cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoCloseSharp className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 flex flex-col bg-gray-800 z-20">
            <div
              className="bg-black bg-opacity-50 absolute inset-0"
              onClick={toggleMenu}
            />
            <div className="flex justify-end p-4 z-30">
              <IoCloseSharp
                className="text-2xl cursor-pointer text-white"
                onClick={toggleMenu}
              />
            </div>
            <div className="flex flex-col p-4 space-y-2 relative z-30">
              <ul className="flex flex-col items-start text-white">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="block text-lg hover:text-blue-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
