import React, { useState } from "react";
import {
  MdDashboard,
  MdHome,
  MdHistory,
  MdCreditCard,
  MdSettings,
  MdSupport,
  MdAccountBalanceWallet,
} from "react-icons/md";
import All from "./All";
import TopUp from "./TopUp";
import Payment from "./Payment";
import Refund from "./Refund";
import Withdrawal from "./Withdrawal";


const PatientWallet = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Function to render the appropriate component based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return <All />;
      case "Topup":
        return <TopUp />;
      case "Payment":
        return <Payment />;
      case "Refund":
        return <Refund />;
      case "Withdrawal":
        return <Withdrawal />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-screen flex">
      {/* Sidebar */}
      <div className="w-28 bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col items-center py-6">
        <span className="text-white font-bold text-sm mb-8">Tell-A-Doc</span>
        <div className="flex flex-col space-y-6">
          <MdDashboard className="text-white w-6 h-6" title="Dashboard" />
          <MdHome className="text-white w-6 h-6" title="Homepage" />
          <MdHistory className="text-white w-6 h-6" title="History" />
          <MdCreditCard className="text-white w-6 h-6" title="Wallet" />
          <MdSettings className="text-white w-6 h-6" title="Settings" />
          <MdSupport className="text-white w-6 h-6" title="Support" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Wallet Balance Card */}
        <div className="flex justify-center items-center">
        <div className="bg-blue-100 w-64 p-6 rounded-lg text-center mb-6">
          <div className="flex justify-center items-center mb-2">
            <MdAccountBalanceWallet className="text-blue-600 w-8 h-8" />
          </div>
          <h2 className="text-lg font-bold text-gray-700">WALLET BALANCE</h2>
          <p className="text-2xl font-bold text-gray-700">₦0.00</p>
        </div>
        </div>
        {/* Fund Wallet Button */}
        <div className="text-center mb-6">
        <div className="flex justify-center items-center mb-2">
            <MdAccountBalanceWallet className="text-slate-700 w-8 h-8" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
            Fund wallet
          </button>
        </div>

        {/* Tabs for Navigation */}
        <div className="flex justify-around border-b border-gray-300 mb-4 text-gray-600 font-semibold">
          {["All", "Topup", "Payment", "Refund", "Withdrawal"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 ${activeTab === tab ? "text-white bg-blue-950 w-52 border-b-2 border-blue-600" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Rendered Content Based on Active Tab */}
        <div className="bg-white p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default PatientWallet;
