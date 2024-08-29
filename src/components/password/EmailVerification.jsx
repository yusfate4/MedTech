import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation schema
import americanDoctor from "../../assets/american-doctor.png";
import LinkBack from "../buttons/LinkBack";

// Validation schema using Yup
const validationSchema = Yup.object({
  code: Yup.array()
    .of(
      Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a single digit")
    )
    .min(5, "Please enter a 5-digit code")
    .max(5, "Please enter a 5-digit code"),
});

const EmailVerification = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleInputChange = (e, index, setFieldValue) => {
    const value = e.target.value;

    if (value.length === 1 && index < 4) {
      inputRefs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setFieldValue(`code[${index}]`, value);
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
            Check your email
          </h2>
          <p className="mt-2 text-center text-gray-500">
            We sent a reset link to{" "}
            <span className="text-black">contact@medtech.com</span>. Enter the
            5-digit code that was sent.
          </p>

          <Formik
            initialValues={{ code: ["", "", "", "", ""] }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              navigate("/reset-password");
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="flex justify-center space-x-2 mt-8 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <div key={index}>
                      <Field
                        name={`code[${index}]`}
                        type="text"
                        maxLength="1"
                        innerRef={(el) => (inputRefs.current[index] = el)}
                        className="w-12 h-12 text-2xl text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-[#064B75] focus:border-transparent"
                        onChange={(e) =>
                          handleInputChange(e, index, setFieldValue)
                        }
                      />
                      <ErrorMessage
                        name={`code[${index}]`}
                        component="div"
                        className="text-red-500 text-sm text-center"
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8BA1B0] text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Verify code
                </button>
              </Form>
            )}
          </Formik>

          <div className="text-center mt-4">
            <p className="text-gray-500">
              Haven’t gotten the email yet?{" "}
              <a href="#" className="text-[#064B75] hover:underline">
                Resend email
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
