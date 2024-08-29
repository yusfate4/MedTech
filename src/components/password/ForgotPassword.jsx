import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import americanDoctor from "../../assets/american-doctor.png";
import LinkBack from "../buttons/LinkBack";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Implement your password reset logic here
      navigate("/emailverify");
    },
  });

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
      <div className="px-6 md:px-16 lg:px-32 bg-white flex items-center justify-center w-full ">
        <div className="w-full">
          <LinkBack />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Forgot password
          </h2>
          <p className="text-gray-600 mb-6">
            Please enter your email to reset password
          </p>

          <form onSubmit={formik.handleSubmit} className="space-y-8">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-black bg-white border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full bg-[#064B75] text-white py-2 rounded-md hover:bg-blue-800"
            >
              Continue
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-4 text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <div className="flex flex-col md:flex-row md:justify-around space-y-4 md:space-y-0">
            <button className="flex  gap-4 w-full md:w-auto bg-[#064B75] text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <FaFacebook size={24} /> Log in with Facebook
            </button>
            <button className="w-full flex gap-4 md:w-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              <FaGoogle size={24} /> Log in with Google
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-black">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-[#064b75] hover:underline"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
