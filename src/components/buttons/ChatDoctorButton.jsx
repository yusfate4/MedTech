import React from "react";
import { FaUserMd } from "react-icons/fa"; // Import the doctor icon from react-icons

const ChatDoctorButton = ({ text }) => {
  return (
    <button
      className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md transform rotate-3 shadow-md"
    >
      <FaUserMd className="mr-2 text-black" />
      {text}
    </button>
  );
};

export default ChatDoctorButton;
