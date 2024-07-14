import React from "react";

function Review() {
  return (
    // <div className="flex flex-col items-center px-24 py-10 bg-white">
    //   <h4 className="text-3xl text-black font-bold mb-4">
    //     What our customers saying
    //   </h4>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    //     {/* 1st column */}
    //     <div className="bg-[#0099FAA6] p-4 rounded shadow-md text-center">
    //       <p>
    //         I got some advice and prescription on how to care for my ear until i
    //         was healed
    //       </p>
    //       <div className=" text-[#064B75]  mt-10">
    //         <h2 className="font-bold"> Amarachi Gabriel</h2>
    //         <p>Patient</p>
    //       </div>
    //     </div>

    //     {/* 2nd column */}
    //     <div className="bg-[#0099FAA6] p-4 rounded shadow-md text-center">
    //       <p>
    //         The service provided was exceptional. I received my medication on
    //         time and the customer was helpful
    //       </p>
    //       <div className=" text-[#064B75]  mt-10">
    //         <h2 className="font-bold"> Amarachi Gabriel</h2>
    //         <p>Patient</p>
    //       </div>
    //     </div>

    //     {/* 3rd column */}
    //     <div className="bg-[#0099FAA6] p-4 rounded shadow-md text-center">
    //       <p>
    //         The whole process was seamless. I like that i receive reminders
    //         before my appointments and before my medication
    //       </p>
    //       <div className=" text-[#064B75]  mt-10">
    //         <h2 className="font-bold"> Amarachi Gabriel</h2>
    //         <p>Patient</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="my-10">
    //     <button className="bg-[#064B75] text-white px-8 md:px-12 py-2 rounded-full">
    //       View More
    //     </button>
    //   </div>
    // </div>
    <div className="flex flex-col items-center px-6 py-10 md:px-24 bg-white">
      <h4 className="text-2xl lg:text-center text-center md:text-3xl text-black font-bold mb-4">
        What our customers are saying
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* 1st column */}
        <div className="bg-[#0099FAA6] p-4 rounded shadow-md text-center">
          <p>
            I got some advice and prescription on how to care for my ear until I
            was healed.
          </p>
          <div className="text-[#064B75] mt-10">
            <h2 className="font-bold">Amarachi Gabriel</h2>
            <p>Patient</p>
          </div>
        </div>

        {/* 2nd column */}
        <div className="bg-[#0099FAA6] p-4 rounded shadow-md text-center">
          <p>
            The service provided was exceptional. I received my medication on
            time and the customer service was helpful.
          </p>
          <div className="text-[#064B75] mt-10">
            <h2 className="font-bold">Jane Smith</h2>
            <p>Patient</p>
          </div>
        </div>

        {/* 3rd column */}
        <div className="bg-[#0099FAA6] p-4 rounded shadow-md text-center">
          <p>
            The whole process was seamless. I like that I receive reminders
            before my appointments and before my medication.
          </p>
          <div className="text-[#064B75] mt-10">
            <h2 className="font-bold">John Doe</h2>
            <p>Patient</p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <button className="bg-[#064B75] text-white px-8 md:px-12 py-2 rounded-full">
          View More
        </button>
      </div>
    </div>
  );
}

export default Review;
