import React from "react";
import aboutImage from "../assets/about.png";
import AnimatedSection from "./AnimatedSection";
import americanDoctor from "../assets/american-doctor.png";


function About() {
  return (
    <div className="bg-white px-6 md:px-20 py-6">
      {/* max-w-4xl */}
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:text-left lg:w-full md:w-1/2 md:pr-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl text-black font-bold mb-4">
                Who is <span className="text-[#064B75]">Tell-A-Doc?</span>
              </h2>
              <p className="text-black mb-4">
                Tell-A-Doc is a MedTech company that’s here to solve the problem
                of frequent hospital visits, providing effective, efficient, and
                affordable online medical services regardless of location.
                <br />
                We connect users to medical professionals of different
                specializations.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src={americanDoctor }
                  alt="Doctor"
                  className="w-24 h-24 md:w-64 md:h-auto mr-4"
                />
                <div className="flex flex-col ">
                  <div className="lg:w-2/5 lg:ml-32">
                    <h3 className="text-lg md:text-xl  text-black font-bold mb-2">
                      Our <span className="text-[#064B75]">Mission:</span>
                    </h3>
                    <p className="text-black mb-4 ">
                      To bring healthcare to everyone's doorstep, enabling
                      access from the comfort of home.
                    </p>
                  </div>
                  <div className="ml-auto lg:w-2/5">
                    <h3 className="text-lg md:text-xl text-black font-bold mb-2">
                      Our <span className="text-[#064B75]">Vision:</span>
                    </h3>
                    <p className="text-black">
                      To create the most efficient and reliable online hospital
                      where patients and practitioners collaborate to sustain
                      lives.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
