import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Review from "./components/Review";
import Consultation from "./components/Consultation";
// import FAQ from "./components/FAQ";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import OnBoarding from "./components/OnBoarding";
import "./index.css";

function MainPage() {
  return (
    <div>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
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
      </main>
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
