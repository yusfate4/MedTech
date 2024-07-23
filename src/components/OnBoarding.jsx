import React from "react";
import { FaArrowRight } from "react-icons/fa";
import americanDoctor from "../assets/american-doctor.png";

const OnBoarding = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      <div className="px-20 pt-8 z-10 bg-gradient-to-r from-[#0099FA] to-[#a0b2bd86] w-full md:w-1/2">
        <div className="text-center">
          <h1 className="text-sm text-left font-bold">Tell-A-Doc</h1>
          <p className="text-3xl font-bold">Get started......</p>
          <img
            src={americanDoctor}
            alt="American Doctor"
            className="mt-4 lg:ml-36 mx-auto w-3/4  md:w-auto rounded-md"
          />
        </div>
      </div>

      {/* 2nd part */}
      <div className="px-6 md:px-16 lg:px-32 bg-white flex items-center justify-center w-full ">
        <div className="w-full md:w-4/5 p-8 flex flex-col items-center justify-center">
          <div className="w-full text-center text-black">
            <div className="flex flex-col items-center ">
              <div className="w-24 h-24 bg-gray-300 rounded-full my-4"></div>
              <h2 className="text-2xl font-bold  ">Welcome On-Board!</h2>
              <h3 className="text-xl  mb-4">John</h3>
            </div>
            <div className="bg-[#0099FA80] p-6  rounded-md mb-6">
              <h4 className="text-lg font-semibold mb-2 ">
                Thank you for registering!
              </h4>
              <p className="text-sm mb-2">Happy to have you On-Board!</p>
              <p className="text-sm">
                Say goodbye to waiting rooms and commuting time
              </p>
            </div>
            <button className="bg-[#064B75] mx-auto text-white py-2 px-6 rounded-md hover:bg-blue-800 flex items-center justify-center">
              Next <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
