import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import americanDoctor from "../assets/american-doctor.png";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      gender: Yup.string().required("Gender is required"),
      dateOfBirth: Yup.date().required("Date of birth is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/onboarding");
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
          <div className="flex flex-col items-center ">
            <div className="w-24 h-24 bg-gray-300 rounded-full my-4"></div>
            <h2 className="text-2xl text-black font-bold  ">
              Welcome Back John!
            </h2>
          </div>
          <p className=" text-black my-6 text-center">Log in to continue</p>

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

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-black bg-white border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full bg-[#064B75] text-white py-2 rounded-md hover:bg-blue-800"
              onClick={() => navigate("/onboarding")}
            >
              Continue
            </button>
          </form>
          <div className="mt-3 text-right">
          <a
                href="#"
                className="text-black text-right hover:underline"
                onClick={() => navigate("/forgetpassword ")}
              >
               Forgot Password
              </a>
            {/* <p className="text-black text-right">Forgot Password</p> */}
          </div>
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-4 text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>
          <div className="flex flex-col md:flex-row md:justify-around space-y-4 md:space-y-0">
            <button className="flex  gap-4 w-full md:w-auto bg-[#064B75] text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <FaFacebook size={24} /> Login with Facebook
            </button>
            <button className="w-full  flex gap-4 md:w-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              <FaGoogle size={24} /> Login with Google
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
          {/* <p className="text-center mt-4 text-gray-500 text-sm">
            By signing up you agree to our{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Terms of use
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
