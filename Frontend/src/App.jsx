import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Review from "./components/Review";
import FAQ from "./components/FAQ";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="bg-white ">
      <header className="text-black pt-14 pr-14 pl-14 m-auto">
        <div className="container mx-auto flex justify-between items-center">
          <h1>
            <a
              href="#"
              className="text-xl hover:text-blue-500 font-bold style={{ color: '#064B75' }}"
            >
              Tell-A-Doc
            </a>
          </h1>

          <nav className="flex space-x-20">
            <a href="#main" className="hover:text-blue-600">
              Main
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#services" className="hover:text-blue-600">
              Service
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
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Review />
        <FAQ />
        <Login />
        <Signup />
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 MedTech. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
