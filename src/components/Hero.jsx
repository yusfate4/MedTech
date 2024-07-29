import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.png";
import ChatDoctorButton from "./buttons/ChatDoctorButton";
const Hero = () => {
  return (
    <section className="bg-cover bg-center text-black pt-10 ">
      <div className="">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-24 py-10">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className=" text-3xl md:text-5xl font-bold mb-3">
              Bringing <span className="text-[#064B75]">healthcare</span> to you
              through <span className="text-[#064B75]">technology</span>
            </h1>
            <p className="text-sm md:text-base mb-6">
              Innovation and humanity: Utilizing Technology and medical
              expertise to bring you seamless healthcare solutions at your
              convenience
            </p>
            <div className="text-center flex items-center justify-center mx-auto md:text-left py-10">
              <motion.button
                className="bg-[#064B75] text-white px-8 md:px-12 py-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Start
              </motion.button>
            </div>
            {/* Chat buttons */}
            <div className="flex justify-start items-start gap-2 ">
              <div className="flex gap-2 space-y-0 transform -rotate-12">
                <ChatDoctorButton text="Chat a Doctor" />
              </div>
              <div className="mt-10  transform rotate-12">
                <ChatDoctorButton text="Book Appointment" />
              </div>
              <div className=" transform -rotate-12">
                <ChatDoctorButton text="Consultation" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Uncomment and update with your desired image */}
            {/* <img
              src={doctorImage}
              alt="Doctor"
              className="w-3/4 md:w-1/2 h-auto rounded-md shadow-md"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
