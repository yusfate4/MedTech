import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Signup from "./components/Signup";
import SignUpDoc from "./components/SignUpDoc";
import ForgotPassword from "./components/password/ForgotPassword";
import ResetPassword from "./components/password/ResetPassword";
import SetNewPassword from "./components/password/SetNewPassword";
import PasswordSuccess from "./components/password/PasswordSuccess";
import Login from "./components/Login";
import OnBoarding from "./components/OnBoarding";
import EmailVerification from "./components/password/EmailVerification";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/emailverify" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/set-password" element={<SetNewPassword />} />
        <Route path="/password-success" element={<PasswordSuccess />} />
        <Route path="/signupdoc" element={<SignUpDoc />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </Router>
  );
}

export default App;
