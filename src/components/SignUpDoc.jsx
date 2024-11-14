import axios from "axios";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import americanDoctor from "../assets/american-doctor.png";

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
      currentAddress: "",
      qualification: "",
      specialization: "",
      resume: null,
      license: null,
      user_type: "doctor", // Add user_type field

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
      currentAddress: Yup.string().required("Current Address is required"),
      qualification: Yup.string().required("Qualification is required"),
      specialization: Yup.string().required("Specialization is required"),
      resume: Yup.mixed().required("Resume is required"),
      license: Yup.mixed().required("License is required"),
    }),

    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('first_name', values.firstName);
      formData.append('last_name', values.lastName);
      // ...
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('gender', values.gender);
      formData.append('date_of_birth', values.dateOfBirth);
      formData.append('password', values.password);
      formData.append('current_address', values.currentAddress);
      formData.append('qualification', values.qualification);
      formData.append('specialization', values.specialization);
      formData.append('resume', values.resume);
      formData.append('license', values.license);
      formData.append('user_type', values.user_type); // Add user_type to form data

      try {
        const response = await axios.post("http://127.0.0.1:8000/accounts/api/signup/", formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        
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
          <div className="flex flex-col items-center  md:flex-row md:justify-center gap-4 md:gap-10">
            <h2 className="text-2xl text-black font-bold mb-4 md:mb-6 text-center md:text-center">
              Registration
            </h2>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4" encType="multipart/form-data" >
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
              <div className="w-full md:w-1/2">
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
            <div>
              <input
                type="text"
                name="currentAddress"
                placeholder="Current Address"
                className="w-full px-4 py-2 text-black bg-white border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currentAddress}
              />
              {formik.touched.currentAddress && formik.errors.currentAddress ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.currentAddress}
                </div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                className="w-full px-4 py-2 text-black bg-white border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.qualification}
              />
              {formik.touched.qualification && formik.errors.qualification ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.qualification}
                </div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                className="w-full px-4 py-2 text-black bg-white border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.specialization}
              />
              {formik.touched.specialization && formik.errors.specialization ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.specialization}
                </div>
              ) : null}
            </div>
            {/* <div>
              <input
                type="text"
                name="consultation"
                placeholder="Consultation Fee"
                className="w-full px-4 py-2 text-black bg-white border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.consultation}
              />
              {formik.touched.consultation && formik.errors.consultation ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.consultation}
                </div>
              ) : null}
            </div> */}
            {/* <div>
              <input
                type="text"
                name="affiliated "
                placeholder="Affiliated Hospital"
                className="w-full px-4 py-2 text-black bg-white border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.affiliated}
              />
              {formik.touched.affiliated && formik.errors.affiliated ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.affiliated}
                </div>
              ) : null}
            </div> */}
            {/* <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <input
                  type="file"
                  name="resume"
                 
                  className="w-full px-4 py-2 text-gray-400 bg-white border rounded-md"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "resume",
                      event.currentTarget.files[0]
                    );
                  }}
                />
                {formik.touched.resume && formik.errors.resume ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.resume}
                  </div>
                ) : null}
              </div>

              <div className="w-full md:w-1/2">
                <input
                  type="file"
                  name="license"
                  className="w-full px-4 py-2 text-gray-400 bg-white border rounded-md"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "license",
                      event.currentTarget.files[0]
                    );
                  }}
                />
                {formik.touched.license && formik.errors.license ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.license}
                  </div>
                ) : null}
              </div>
            </div> */}

            {/* File Upload Fields */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  className="w-full px-4 py-2 text-gray-400 bg-white border rounded-md"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "resume",
                      event.currentTarget.files[0]
                    );
                  }}
                />
                {formik.touched.resume && formik.errors.resume ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.resume}
                  </div>
                ) : null}
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Doctor's License
                </label>
                <input
                  type="file"
                  name="license"
                  className="w-full px-4 py-2 text-gray-400 bg-white border rounded-md"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "license",
                      event.currentTarget.files[0]
                    );
                  }}
                />
                {formik.touched.license && formik.errors.license ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.license}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center mx-auto w-1/2 bg-[#064B75] text-white py-2 rounded-md hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;