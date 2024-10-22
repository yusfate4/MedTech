import React from 'react';
import { CiBellOn } from 'react-icons/ci';
import { IoIosArrowRoundBack, IoMdSearch } from 'react-icons/io';
import { MdCallMissedOutgoing, MdHome } from 'react-icons/md';

const PatientAppointment = () => {
  return (
    <div className="min-h-screen w-screen flex">

      {/* Sidebar */}
      <div className="w-20 bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col items-center py-6">
        <span className="text-white font-bold text-sm mb-8">Tell-A-Doc</span>
        <div className="flex flex-col space-y-6">
          <MdHome className="text-white w-6 h-6" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col p-6 bg-white"> {/* Main content bg is white */}

        {/* Header with icons */}
        <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-semibold flex items-center">
            <IoIosArrowRoundBack className="text-black w-6 h-6 mr-8 text-lg font-extrabold" /> {/* Back arrow */}
            Appointment
          </p>
          <div className="flex items-center space-x-4">
          <IoMdSearch className="text-black w-6 h-6 text-2xl font-bold" />
            <CiBellOn className="text-black w-6 h-6 text-2xl font-bold" />
          </div>
        </div>

        {/* Grid Container with gray background */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md"> {/* Only grid container has bg-gray */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Upcoming Section */}
            <div className="p-4  border-gray-400 border-r-2">
              <h2 className="text-lg font-semibold mb-4 p-2 border-gray-400 border-b-2 text-center">Upcoming</h2>
              <div className="mb-4 flex items-center border-gray-400 border-b-2 pb-4">
                <img
                  src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1729418206/Frame_170_vmtrsj.png"
                  alt="Doctor"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-sm font-semibold">Amos Luke</h3>
                  <p className="text-xs text-gray-500">General Medicine</p>
                  <p className="text-xs text-gray-500">23rd July 2024</p>
                  <p className="text-xs text-gray-500">11:30am - 12:30pm</p>
                </div>
              </div>
              <div className="mb-4 flex items-center border-gray-400 border-b-2 pb-4">
                <img
                  src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1729418097/Frame_96_1_hmscuv.png"
                  alt="Doctor"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-sm font-semibold">John Wilson</h3>
                  <p className="text-xs text-gray-500">23rd July 2024</p>
                  <p className="text-xs text-gray-500">11:30am - 12:30pm</p>
                </div>
              </div>
              <div className="mb-4 flex items-center border-gray-400 border-b-2 pb-4">
                <img
                  src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1729417916/adeaa_wqsqgq.png"
                  alt="Doctor"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-sm font-semibold">Calister Adebayo</h3>
                  <p className="text-xs text-gray-500">Dentist</p>
                  <p className="text-xs text-gray-500">23rd July 2024</p>
                  <p className="text-xs text-gray-500">11:30am - 12:30pm</p>
                </div>
              </div>
            </div>

            {/* Missed Section */}
            <div className="p-4 border-gray-400 border-r-2">
              <h2 className="text-lg font-semibold mb-4 p-2 border-gray-400 border-b-2 text-center">Missed</h2>
              <div className="mb-4 flex items-center border-gray-400 border-b-2 pb-4">
                <img
                  src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1729418264/Frame_96_2_wqnmfl.png"
                  alt="Doctor"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                <p className='flex justify-between gap-4'>
                  <h3 className="text-sm font-semibold">Gabby Jones</h3>
                  <p>
                  <MdCallMissedOutgoing className='text-red-600' />
                  </p>
                  </p>
                  <p className="text-xs text-gray-500">Gastroenterologist</p>
                  <p className="text-xs text-gray-500">23rd June 2024</p>
                  <p className="text-xs text-gray-500">11:30am - 12:30pm</p>
                </div>
              </div>
              <div className="mb-4 flex items-center border-gray-400 border-b-2 pb-4">
                <img
                  src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1729417784/Ellipse_19_bbugud.png"
                  alt="Doctor"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                <p className='flex justify-between gap-4'>
                  <h3 className="text-sm font-semibold">Aminah Umah</h3>
                  <p>
                  <MdCallMissedOutgoing className='text-red-600' />
                  </p>
                  </p>
                <p className="text-xs text-gray-500">Cardiologist</p>
                <p className="text-xs text-gray-500">23rd July 2024</p>
                <p className="text-xs text-gray-500">11:30am - 12:30pm</p>
                </div>
              </div>
              <div className="mb-4 flex items-center border-gray-400 border-b-2 pb-4">
                <img
                  src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1729417916/adeaa_wqsqgq.png"
                  alt="Doctor"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                <p className='flex justify-between gap-4'>
                  <h3 className="text-sm font-semibold">Calister Adebayo</h3>
                  <p>
                  <MdCallMissedOutgoing className='text-red-600' />
                  </p>
                  </p>
                <p className="text-xs text-gray-500">Dentist</p>
                <p className="text-xs text-gray-500">23rd July 2024</p>
                <p className="text-xs text-gray-500">11:30am - 12:30pm</p>
                </div>
              </div>
            </div>

            {/* Completed Section */}
            <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 p-2 border-gray-400 border-b-2 text-center">Completed</h2>
              <div className="mb-4 flex items-center">
                <img
                  src="https://res.cloudinary.com/dh60kpxg5/image/upload/v1729417678/Frame_96_bukfdd.png"
                  alt="Doctor"
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-sm font-semibold">Emeka Anozie</h3>
                  <p className="text-xs text-gray-500">General Medicine</p>
                  <p className="text-xs text-gray-500">26th Feb 2024</p>
                  <p className="text-xs text-gray-500">11:30am - 12:30pm</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PatientAppointment;
