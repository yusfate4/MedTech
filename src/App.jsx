import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Review from "./components/Review";
import Consultation from "./components/Consultation";
import Signup from "./components/Signup";
import Login from "./components/Login";
import OnBoarding from "./components/OnBoarding";
import Footer from "./components/Footer";
import heroImage from "./assets/hero-image.png";

import "./index.css";

function MainPage() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-opacity-30 bg-white"></div>{" "}
        {/* Add overlay */}
        <Header />
        <main className="relative z-10">
          <section id="hero">
            <Hero />
          </section>
        </main>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="consultation">
        <Consultation />
      </section>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
