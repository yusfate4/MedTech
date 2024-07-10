import React from "react";
import doctorImage from "../assets/doctor.png";

const Hero = () => {
  return (
    <section className="bg-white text-black pt-20">
      <div className="flex px-24">
        <div className="ml-3">
          <h1 className="text-5xl w-3/4 font-bold mb-4">
            Bringing health care to you through technology
          </h1>
          <p className="text-xm w-11/12 text-center mb-6">
            Innovation and humanity: Utilizing Technology and medical expertise
            to bring you seamless healthcare solutions at your convenience
          </p>
          <div className="text-center">
            <button className="bg-[#064B75]  text-white px-12 py-2 rounded-full">
              Start
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={doctorImage}
            alt="Doctor"
            className="h-auto w-1/2 mr-24 rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
