import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="text-black pt-6 md:pt-14 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>
            <a
              href="#"
              className="text-xl hover:text-blue-500 font-bold"
              style={{ color: "#064B75" }}
            >
              Tell-A-Doc
            </a>
          </h1>

          <nav className="hidden md:flex space-x-4 md:space-x-20">
            <a href="#hero" className="hover:text-blue-600">
              Main
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#review" className="hover:text-blue-600">
              Reviews
            </a>
            <a href="#faq" className="hover:text-blue-600">
              FAQ
            </a>
            <a href="#login" className="hover:text-gray-300">
              Login
            </a>
            <a href="#signup" className="hover:text-gray-300">
              Sign Up
            </a>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-md mt-2">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a
                href="#hero"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Main
              </a>
              <a
                href="#about"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#review"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#login"
                className="hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="#signup"
                className="hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Header;
