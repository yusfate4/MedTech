import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import americanDoctor from "../../assets/american-doctor.png";
import LinkBack from "../buttons/LinkBack";

// Validation schema using Yup
const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Confirm password is required")
});

const SetNewPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate password update logic here
    console.log("Passwords match. Proceed with updating password.");
    console.log(values);

    // Navigate to password-success component
    navigate("/password-success");

    // After the navigation, you can set submitting to false
    setSubmitting(false);
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

          <h1 className="text-2xl text-black font-semibold mb-2">Set a new password</h1>
          <p className="text-gray-500 mb-6">
            Create a new password ensure it differs from the previous one for
            security purpose
          </p>

          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="w-full mt-1 p-2 border bg-gray-50 text-black rounded-md"
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute right-2 top-2"
                    >
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                        {showPassword ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      className="w-full mt-1 p-2 border bg-gray-50 text-black rounded-md"
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute right-2 top-2"
                    >
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                        {showPassword ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#064B75] text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  {isSubmitting ? "Updating..." : "Update password"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
