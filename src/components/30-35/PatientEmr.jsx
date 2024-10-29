import React from 'react';
import { CiBellOn, CiSearch } from 'react-icons/ci';
import { IoMdArrowBack } from 'react-icons/io';

const PatientEmr = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Flex container for sidebar and main content */}
      <div className="flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="w-full min-h-screen md:w-20 bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col items-center py-6">
          <span className="text-white text-lg font-bold">Tell a Doc</span>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          {/* Top bar with back icon, title, and notifications */}
          <div className="flex items-center mb-6">
            <IoMdArrowBack className="text-gray-600 w-6 h-6" />
            <h1 className="text-2xl font-semibold ml-4">History</h1>
            <div className="ml-auto flex items-center space-x-4">
              <CiSearch className="text-gray-600 w-6 h-6" />
              <CiBellOn className="text-gray-600 w-6 h-6" />
            </div>
          </div>

          {/* Documentation section */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-3">Doc's Documentation</h2>

            {/* Documentation card 1 */}
            <div className="bg-gray-200 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-700">11:23 &nbsp; 2/2/24 &nbsp; DR. Amos Luke</p>
              <p className="mt-2 text-gray-900">
                Mr. John, a 58yr old Engineer who is married and lives in Ifako, Lagos. Presented on 2/2/24 with complaint of 
                pain in the right shoulder which started 3 days ago after he returned from work. Pain progressed to the 
                shoulder and became intense. It's worse at night and when carrying anything heavy. Running temperature. 
                Known hypertensive and diabetic, takes Bisoprolol 25mg. No history of recreational drug use, doesn’t smoke, 
                but drinks alcohol often. Allergic to Milk and Penicillin.
              </p>
              <button className="mt-2 text-blue-500 hover:underline">See more</button>
            </div>

            {/* Documentation card 2 */}
            <div className="bg-gray-200 p-4 rounded-lg">
              <p className="text-sm text-gray-700">1:30 &nbsp; 2/2/24 &nbsp; DR. Amos Luke</p>
              <p className="mt-2 text-gray-900">
                Mr. John, a 58yr old Engineer who is married and lives in Ifako, Lagos. Presented on 2/2/24 with complaint of 
                pain in the right shoulder. Pain started 3 days ago after returning from work. Mild at first, but progressed to 
                intense pain. Worse at night and when carrying anything heavy. Patient reports fever. Hypertensive and diabetic. 
                On medication, allergic to milk and penicillin.
              </p>
              <p className="mt-2 text-gray-900">
                O/E (Virtual): Right shoulder and arm are red and swollen, painful on touch.
              </p>
              <p className="text-sm mt-2 text-gray-900">P.S: Shoulder Tendonitis (X-Ray Review)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientEmr;
