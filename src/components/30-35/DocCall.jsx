import React from "react";
import { MdHome } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { BsMicMute, BsFillTelephoneFill } from "react-icons/bs";
import { FaVolumeUp } from "react-icons/fa";

const DocCall = () => {
  return (
    <div className="min-h-screen w-screen flex">
      {/* Sidebar */}
      <div className="w-20 bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col items-center py-6">
        <span className="text-white font-bold text-sm mb-8">Tell-A-Doc</span>
        <div className="flex flex-col space-y-6">
          <MdHome className="text-white w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-white relative">
        {/* Header */}
        <div className="flex justify-between items-center w-full px-6 absolute top-6">
          <IoIosArrowRoundBack className="text-gray-600 w-8 h-8" />
          <CiBellOn className="text-gray-600 w-6 h-6" />
        </div>

        {/* Circle Container */}
        <div className="relative w-[600px] h-[600px] bg-gradient-to-b from-blue-300 to-blue-500 rounded-full flex flex-col items-center justify-between">
          {/* Doctor Name and Call Status */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">Dr. Amos Luke</h1>
            <p className="text-sm text-gray-500">calling...</p>
            <p className="text-sm text-gray-500">00:54</p>
          </div>

          {/* Doctor Image */}
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1729420158/Front_view_smiley_man_wearing_lab_coat_1_j6docw.png"
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          
          <div className="flex justify-between items-center space-x-8">
            {/* Mute Button */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <BsMicMute className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs mt-2 text-black">mute</p>
            </div>

            {/* Hang-up Button */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center">
                <BsFillTelephoneFill className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs mt-2 text-black">hang up</p>
            </div>

            {/* Speaker Button */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <FaVolumeUp className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xs mt-2 text-black">speaker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocCall;
