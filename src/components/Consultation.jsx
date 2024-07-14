import React from "react";
// import male-doctor from './path-to-doctor-image'; // Replace with actual path to doctor image
// import healthJourneyImage from './path-to-health-journey-image'; // Replace with actual path to health journey image
import maleDoctor from "../assets/male-doctor.png";
import maleDoctor1 from "../assets/male-doctor1.png";

const Consultation = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white gap-3">
      {/* First Section */}
      <div
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center w-full md:w-1/2"
        style={{ backgroundImage: `url(${maleDoctor})` }}
      >
        <div className="absolute inset-0 bg-white opacity-20"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl md:text-5xl text-black font-bold mb-4">
            Are you a qualified doctor?
          </h2>
          <p className="text-black text-lg md:text-2xl mb-4">
            Join our community: Calling all qualified doctors! Elevate your
            practice on our platform and connect with patients seamlessly.
          </p>
          <button className="bg-[#064B75] text-white px-6 md:px-8 py-2 md:py-3 rounded-full">
            Apply Now
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center w-full md:w-1/2"
        style={{ backgroundImage: `url(${maleDoctor1})` }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative z-10 text-center px-6 mt-64">
          <h2 className="text-3xl md:text-5xl text-black font-bold mb-4">
            Start your health journey here
          </h2>
          <button className="bg-[#064B75] text-white px-6 md:px-8 py-2 md:py-3 rounded-full">
            Book consultation Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
