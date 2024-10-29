import React from "react";
import { useNavigate } from "react-router-dom";
import americanDoctor from "../../assets/american-doctor.png";
// import LinkBack from "../buttons/LinkBack";



const PasswordSuccess = () => {
  const navigate = useNavigate();

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
            {/* <LinkBack /> */}
          </button>
          <div className="mb-6 ">
            <div className="bg-gradient-to-r mx-auto from-blue-500 to-blue-300 rounded-full p-8 inline-block">
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Successful</h2>
          <p className="text-gray-500 mb-6">
            Congratulations! Your password has been changed. Click continue to
            log in.
          </p>

          <button
            onClick={() => navigate("/login")} // Adjust this to your actual login route
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccess;
