import React from "react";
import { useNavigate } from "react-router-dom";
import americanDoctor from "../../assets/american-doctor.png";
import LinkBack from "../buttons/LinkBack";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    // Navigate to the set-password component
    navigate("/set-password");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      <div className="px-20 pt-8 z-10 bg-gradient-to-r from-[#0099FA] to-[#a0b2bd86] w-full md:w-1/2">
        <div className="text-center">
          <h1 className="text-sm text-left font-bold">Tell-A-Doc</h1>
          <p className="text-3xl font-bold">Get started...</p>
          <img
            src={americanDoctor}
            alt="American Doctor"
            className="mt-4 lg:ml-36 mx-auto w-3/4 md:w-auto rounded-md"
          />
        </div>
      </div>
      <div className="px-6 md:px-16 lg:px-32 bg-white flex items-center justify-center w-full">
        <div className="w-full">
          <button
            className="flex items-center mb-6"
            onClick={() => navigate(-1)}
          >
            <LinkBack />
          </button>
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Password reset
          </h2>
          <p className="mt-2 text-center text-gray-500">
            Your password has been successfully reset. Click confirm to set a
            new password.
          </p>

          <button
            onClick={handleConfirmClick}
            className="w-full mt-8 mb-6 bg-[#8BA1B0] text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
