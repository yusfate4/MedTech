import axios from "axios";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import americanDoctor from "../assets/american-doctor.png";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import LinkBack from "./buttons/LinkBack";


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
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/accounts/api/signup/user/", {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          phone: values.phone,
          gender: values.gender,
          date_of_birth: values.dateOfBirth,
          password: values.password,
        });
        
        console.log(response.data.message); // Check success message
        navigate("/onboarding"); // Navigate on success
      } catch (error) {
        console.error(error.response ? error.response.data : error.message); // Check error response
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
      <div className="px-2 pt-8 z-10 bg-gradient-to-r from-[#0099FA] to-[#a0b2bd86] w-full md:w-1/2">
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
      <div className="px-6 md:px-16 lg:px-32 py-14 bg-white flex items-center justify-center w-full ">
        <div className="w-full ">
          <LinkBack />
          <div className="flex flex-col items-center pb-8 md:flex-row md:justify-end gap-4 md:gap-10">
            <h2 className="text-2xl text-black font-bold mb-4 md:mb-6 text-center md:text-left">
              Create Account
            </h2>

            <button
              type="submit"
              className="w-full md:w-1/3 bg-[#064B75] text-white py-2 rounded-md hover:bg-blue-800 transition-colors duration-300"
              onClick={() => navigate("/signupdoc")} >
              Register as a doctor
            </button>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-white text-black px-4 py-2 border rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full px-4 text-black bg-white py-2 border rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>
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
                type="text"
                name="phone"
                placeholder="Phone number"
                className="w-full px-4 py-2 text-black bg-white border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <select
                  name="gender"
                  className="w-full px-4 py-2 text-gray-400 bg-white border rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                >
                  <option value="" label="Select gender" />
                  <option value="male" label="Male" />
                  <option value="female" label="Female" />
                  <option value="other" label="Other" />
                </select>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.gender}
                  </div>
                ) : null}
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="date"
                  name="dateOfBirth"
                  className="w-full px-4 py-2 text-gray-400 bg-white border rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.dateOfBirth}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Create password"
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
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 text-black bg-white border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full bg-[#064B75] text-white py-2 rounded-md hover:bg-blue-800"
            >
              Create Account
            </button>
          </form>
          <div className="mt-4">
            <p className="text-black">
              Already have an account?{" "}
              <a
                href="#"
                className="text-[#064b75] hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </p>
          </div>
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-4 text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>
          <div className="flex flex-col md:flex-row md:justify-around space-y-4 md:space-y-0">
            <button className="flex gap-4 w-full md:w-auto bg-[#064B75] text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <FaFacebook size={24} /> Sign up with Facebook
            </button>
            <button className="w-full flex gap-4 md:w-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              <FaGoogle size={24} /> Sign up with Google
            </button>
          </div>
          <p className="text-center mt-4 text-gray-500 text-sm">
            By signing up you agree to our{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Terms of use
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
