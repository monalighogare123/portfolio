import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav
        className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-md py-4 px-8 shadow-lg"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-3xl font-bold text-white flex items-center">
              Monali
              <span className="text-purple">Ghogare</span>
              <div className="w-4 h-4 bg-purple rounded-full ml-1"></div>
            </a>
          </div>

          <div className="hidden md:flex space-x-10">
            <a
              href="#Home"
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>Home</span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            <a
              href="#About"
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>About</span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            <a
              href="#Skills"
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>Skills</span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            <a
              href="#Projects"
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>Projects</span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            <a
              href="#Experience"
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>Experience</span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"
              ></span>
            </a>

            <a
              href="#Contact"
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>Contact</span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          </div>

          <div className="md:hidden">
            {showMenu ? (
              <FaXmark
                onClick={() => setShowMenu(!showMenu)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setShowMenu(!showMenu)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-dark-100/90 backdrop-blur-md py-4 px-8 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a o
                href="#Home"
                className="text-white/80 transition duration-300 hover:text-purple py-2"
                onClick={() => setShowMenu(false)}
              >
                Home
              </a>

              <a
                href="#About"
                className="text-white/80 transition duration-300 hover:text-purple py-2"
                onClick={() => setShowMenu(false)}
              >
                About
              </a>

              <a
                href="#Skills"
                className="text-white/80 transition duration-300 hover:text-purple py-2"
                onClick={() => setShowMenu(false)}
              >
                Skills
              </a>

              <a
                href="#Projects"
                className="text-white/80 transition duration-300 hover:text-purple py-2"
                onClick={() => setShowMenu(false)}
              >
                Projects
              </a>

              <a
                href="#Experience"
                className="text-white/80 transition duration-300 hover:text-purple py-2"
                onClick={() => setShowMenu(false)}
              >
                Experience
              </a>

              <a
                href="#Contact"
                className="text-white/80 transition duration-300 hover:text-purple py-2"
                onClick={() => setShowMenu(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
