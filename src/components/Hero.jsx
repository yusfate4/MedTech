import React from "react";
import { motion } from "framer-motion";
import doctorImage from "../assets/doctor.png";

const Hero = () => {
  return (
    <section className="bg-white text-black pt-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-24">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Bringing health care to you through technology
          </h1>
          <p className="text-sm md:text-base mb-6">
            Innovation and humanity: Utilizing Technology and medical expertise
            to bring you seamless healthcare solutions at your convenience
          </p>
          <div className="text-center md:text-left">
            <motion.button
              className="bg-[#064B75] text-white px-8 md:px-12 py-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Start
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-3/4 md:w-1/2 h-auto rounded-md shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
