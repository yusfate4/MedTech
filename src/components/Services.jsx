import React from "react";
import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";
import doc3 from "../assets/doc3.png";
import doc4 from "../assets/doc4.png";
import AnimatedSection from "./AnimatedSection";

const Services = () => {
  return (
    <div className="px-4 py-8 md:px-24 bg-white">
      <h2 className="text-3xl md:text-5xl text-black font-bold mb-4 lg:text-center text-center md:text-left">
        Why choose <span className="text-[#064B75]">Us?</span>
      </h2>
      <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Cards */}
          <AnimatedSection>
            <div className="bg-[#064B75] p-4 rounded shadow-md text-center">
              <div className="flex items-center justify-center mb-2">
                <img
                  src={doc1}
                  alt="Doctor"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4"
                />
                <div className="text-lg font-bold">Choose a doctor</div>
              </div>
              <p className="text-sm md:text-base">
                Choose your doctor based on experience, ratings, and
                specialization.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[#064B75] p-4 rounded shadow-md text-center">
              <div className="flex items-center justify-center mb-2">
                <img
                  src={doc2}
                  alt="Doctor"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4"
                />
                <div className="text-lg font-bold">In App Chat</div>
              </div>
              <p className="text-sm md:text-base">
                Chat with doctors online, see their availability, and get
                instant responses.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[#064B75] p-4 rounded shadow-md text-center">
              <div className="flex items-center justify-center mb-2">
                <img
                  src={doc3}
                  alt="Doctor"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4"
                />
                <div className="text-lg font-bold">
                  Drug prescription & refill
                </div>
              </div>
              <p className="text-sm md:text-base">
                Get prescriptions and refills conveniently from medical
                professionals.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-[#064B75] p-4 rounded shadow-md text-center">
              <div className="flex items-center justify-center mb-2">
                <img
                  src={doc4}
                  alt="Doctor"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4"
                />
                <div className="text-lg font-bold">Data security</div>
              </div>
              <p className="text-sm md:text-base">
                Your medical records and information are secure and private.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection>
        <div className="mt-10 lg:mx-auto bg-[#F1F1E6] lg:w-3/5 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl text-black font-bold mb-4">Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#064B75] p-4 rounded shadow-md">
              Medication tracker
            </div>
            <div className="bg-[#064B75] p-4 rounded shadow-md">
              Access to Electronic Health Records (EHR)
            </div>
            <div className="bg-[#064B75] p-4 rounded shadow-md">
              Home delivery for medications
            </div>
            <div className="bg-[#064B75] p-4 rounded shadow-md">
              Virtual Consultation
            </div>
            <div className="bg-[#064B75] p-4 rounded shadow-md">
              Educational Opportunities
            </div>
            <div className="bg-[#064B75] p-4 rounded shadow-md">
              Time Efficiency
            </div>
            <div className="bg-[#064B75] p-4 rounded shadow-md">
              Laboratory investigation review
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;
