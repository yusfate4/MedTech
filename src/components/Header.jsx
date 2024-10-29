import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-transparent z-20 relative">
      <header className="text-black pt-6 md:pt-14 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>
            <Link
              to="/"
              className="text-xl hover:text-blue-500 font-bold"
              style={{ color: "#064B75" }}
            >
              Tell-A-Doc
            </Link>
          </h1>

          <nav className="hidden md:flex space-x-4 md:space-x-20">
            <HashLink smooth to="#hero" className="hover:text-blue-600">
              Main
            </HashLink>
            <HashLink smooth to="#about" className="hover:text-blue-600">
              About
            </HashLink>
            <HashLink smooth to="#services" className="hover:text-blue-600">
              Services
            </HashLink>
            <HashLink smooth to="#review" className="hover:text-blue-600">
              Reviews
            </HashLink>
            <HashLink smooth to="#consultation" className="hover:text-blue-600">
              Consultation
            </HashLink>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="font-bold hover:text-gray-300 bg-white px-5 py-2 rounded-3xl">
              Sign Up
            </Link>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-md mt-2 absolute top-0 left-0 right-0 z-30">
            <div className="flex flex-col items-center space-y-4 py-4">
              <HashLink
                smooth
                to="#hero"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Main
              </HashLink>
              <HashLink
                smooth
                to="#about"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </HashLink>
              <HashLink
                smooth
                to="#services"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </HashLink>
              <HashLink
                smooth
                to="#review"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </HashLink>
              <HashLink
                smooth
                to="#consultation"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consultation
              </HashLink>
              <Link
                to="/login"
                className="hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Header;
