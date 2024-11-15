import React from "react";
import {
  MdDashboard,
  MdHome,
  MdHistory,
  MdCreditCard,
  MdSettings,
  MdSupport,
} from "react-icons/md";

const LiveTracking = () => {
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
      <div className="flex-1 p-8 bg-gray-100">
        <h2 className="text-gray-700 font-semibold text-xl mb-6">
          Live Tracking
        </h2>

        {/* Location and Tracking */}
        <div className="grid grid-cols-2 gap-8 h-full">
          {/* Left Column */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1731538087/Ellipse_1_weqidi.png"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="font-semibold text-gray-800">
                  Victoria Island, Lagos.
                </p>
              </div>
            </div>

            {/* Parcel Tracking Section */}
            <div className="bg-blue-600 p-8 rounded-lg mb-8">
              <h3 className="text-white font-semibold mb-2">
                Track your parcel now.
              </h3>
              <p className="text-white text-sm mb-4">
                Please enter your tracking number below to continue
              </p>
              <div className="flex items-center bg-white p-2 rounded-full">
                <input
                  type="text"
                  placeholder="Tracking number"
                  className="flex-1 p-2 outline-none"
                />
                <button className="bg-black rounded-full">
                  <img
                    src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1731537815/gg_track_k1cka7.png"
                    alt=""
                  />
                </button>
              </div>
            </div>

            {/* Current Delivery Details */}
            <div>
              <div className="flex justify-between">
                <h4 className="font-semibold text-2xl text-gray-700 mb-4">
                  Current Delivery
                </h4>
                <h6 className="text-gray-300 pr-1">See All</h6>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <div className="flex items-center mb-10">
                  <img
                    src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1731538255/Frame_1076_ghqd1i.png"
                    alt="Parcel"
                    className="w-8 h-8 rounded mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Anti-hypertensive drugs
                    </p>
                    <p className="text-sm text-gray-500">
                      Tracking ID: H0123456789
                    </p>
                  </div>
                </div>

                {/* Delivery Route */}
                <div className="pl-5 border-l border-gray-300">
                  <p className="text-sm text-gray-700 mb-10">
                    <span className="font-semibold">From:</span> Health Store,
                    Victoria Island, Lagos.
                  </p>
                  <p className="text-sm text-gray-700 mb-10">
                    <span className="font-semibold">To:</span> 2 Vowel
                    Consonant, Victoria Island, Lagos.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-black text-xl font-semibold">
                  Status:{" "}
                  <span className="text-sm text-blue-600">
                    Your parcel is in transit
                  </span>
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Call Rider
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Live Map */}
          <div className="rounded-lg shadow-md border flex flex-col h-[650px] bg-white">
            <div className="flex items-center justify-between px-4 py-2">
              <button className="text-gray-600 font-semibold text-lg">
                &larr;
              </button>
              <h2 className="text-xl font-bold text-gray-700">Live Tracking</h2>
              <span></span> {/* Empty span to align the title in the center */}
            </div>
            <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1731538371/Basemap_image_bryvpr.png"
                alt="Map"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-gray-500 text-center py-2 bg-white border-t">
              Estimated delivery time:{" "}
              <span className="font-semibold">13:30pm</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
