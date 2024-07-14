import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Review from "./components/Review";
import Consultation from "./components/Consultation";
// import FAQ from "./components/FAQ";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
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
        {/* <section id="faq">
          <FAQ />
        </section>
        <section id="login">
          <Login />
        </section>
        <section id="signup">
          <Signup />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
