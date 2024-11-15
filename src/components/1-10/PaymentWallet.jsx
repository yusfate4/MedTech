import React from "react";
import {
  MdHome,
  MdDashboard,
  MdHistory,
  MdSettings,
  MdSupport,
  MdCreditCard,
} from "react-icons/md";

const PaymentWallet = () => {
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
      <div className="flex-1 p-8">
        <span className="text-xl font-semibold text-gray-400 mb-4">
            &larr;  Add Address
        </span>

        <div className="flex space-x-8">
          {/* Stepper */}
          <div className="relative flex flex-col items-start border-l-2 border-gray-300 pl-6 mt-16 text-6xl ml-10">
            {[
              "Upload Prescription",
              "Add Medication/Items",
              "Add Address",
              "Delivery",
              "Payment Method",
              "Confirm Order",
            ].map((step, index) => (
              <div key={index} className="relative flex space-x-4 pb-12">
                {/* Circle Indicator */}
                <div className="absolute -left-9 flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-500 bg-white">
                  {/* Filled circle for active step */}
                  {index === 2 && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  )}
                </div>

                {/* Line connecting the steps */}
                <span
                  className={`absolute ${
                    index === 5 ? "border-transparent" : "border-blue-500"
                  }`}
                ></span>

                {/* Step Text */}
                <span
                  className={`${
                    index === 2 ? "text-black font-bold" : "text-black"
                  } text-2xl`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Order Confirmation */}
          <div className="w-[600px] h-[600px] bg-blue-50 p-4 border border-blue-600">
            <div className="flex items-center mb-4">
              <button className="text-gray-600 font-semibold text-lg mr-2">
                &larr;
              </button>
              <h3 className="font-semibold text-xl">Order Confirmation</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6 h-[180px]">
              <h4 className="text-blue-500 font-semibold text-xl mb-2">
                Pickup Details
              </h4>
              <p className="text-xl text-gray-700 mb-4">
                Order No: <span className="font-semibold">00456</span>
              </p>
              <p className="text-xl text-gray-700 mb-4">
                Customer Name: <span className="font-semibold">John Doe</span>
              </p>
              <p className="text-xl text-gray-700 mb-2">
                Address:{" "}
                <span className="font-semibold">
                  2 Vowels Consonant Street, VI, Lagos
                </span>
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="h-[200px]">
                <h4 className="font-semibold text-gray-600 mb-4">
                  Payment Method
                </h4>
                <div className="flex justify-between text-xl mb-8">
                  <span className="text-gray-400">Subtotal</span>
                  <span>N10,000.00</span>
                </div>
                <div className="flex justify-between text-xl mb-8">
                  <span className="text-gray-400">Delivery</span>
                  <span>N0.00</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900 mt-2">
                  <span className="text-gray-400">TOTAL</span>
                  <span>N10,000.00</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-10 py-2 shadow-md bg-blue-950 text-white rounded-lg font-semibold hover:bg-blue-700">
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentWallet;
