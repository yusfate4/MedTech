import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Review from "./components/Review";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import heroImage from "./assets/hero-image.png";

function MainPage() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-opacity-30 bg-white"></div>
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

export default MainPage;
