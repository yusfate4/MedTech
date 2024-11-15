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
import PaymentConfirmation from "./components/30-35/PaymentConfirmation";
import PatientEmr from "./components/30-35/PatientEmr";
import PatientAppointment from "./components/30-35/PatientAppointment";
import DocCall from "./components/30-35/DocCall";
import DocVideoCall from "./components/30-35/DocVideoCall";
import LiveTracking from "./components/1-10/LiveTracking";
import TrackPercel from "./components/1-10/TrackPercel";
import PaymentWallet from "./components/1-10/PaymentWallet";
import PatientWallet from "./components/1-10/PatientWallet";
import PharmacyPage from "./components/1-10/PharmacyPage";

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
        <Route path="/paymentconfirmation" element={<PaymentConfirmation />} />
        <Route path="/patientemr" element={<PatientEmr />} />
        <Route path="/patientappointment" element={<PatientAppointment />} />
        <Route path="/doccall" element={<DocCall />} />
        <Route path="/docvideocall" element={<DocVideoCall />} />
        <Route path="/payment" element={<PaymentWallet />} />
        <Route path="/livetracking" element={<LiveTracking />} />
        <Route path="/trackpercel" element={<TrackPercel />} />
        <Route path="/patientwallet" element={<PatientWallet />} />
        <Route path="/pharmacypage" element={<PharmacyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
