import { MdHome } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const PaymentConfirmation = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center">
      {/* Sidebar */}
      <div className="w-20 bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col items-center py-6">
        <span>tell a doc</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center mt-2">
        {/* Header with icons */}
        <div className="flex justify-between w-full max-w-6xl mb-6">
          <span className="text-lg">
            <MdHome className="w-8 h-8" />
          </span>
          <div className="flex space-x-4">
            <CiBellOn className="text-gray-600 w-6 h-6" />
            <FaShoppingCart className="text-gray-600 w-6 h-6" />
          </div>
        </div>
        <div className="relative my-10">
    {/* Payment Successful Section */}
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-8 rounded-xl shadow-lg w-[200px] h-[200px]">
      {/* Icon Section */}
      <div className="flex justify-center">
  <div>
    {/* Icon Section */}
    <div className="flex justify-center mb-4">
      <img
        src="https://res-console.cloudinary.com/dh60kpxg5/thumbnails/v1/image/upload/v1729330544/bmVhX2xucnNiZA==/template_primary/ZV9pbXByb3ZlLGVfc2hhcnBlbg==" // Replace with your image path
        alt="Payment Successful"
        className="w-24 h-24"
      />
    </div>

    {/* Text Section */}
    <h2 className="flex justify-center gap-1 font-semibold text-lg">
      <span>Payment</span> <span>Successful</span>
    </h2>
  </div>
</div>

    </div>

    {/* Amount Paid Section */}
    <div className="bg-gradient-to-b from-blue-600 to-blue-400 w-[350px] h-[360px] rounded-xl">
    <div className="p-6 mt-16">
      <p className="text-base pt-14 mt-2 flex justify-center text-gray-400">Amount Paid</p>
      <p className="text-lg font-bold mt-1 flex justify-center text-black">N11,500.00</p>
      <p className="text-sm mt-1 flex justify-center text-gray-400">7 Aug 2024 <span className="ml-4">Bill ID: #BILL00123</span></p>
    </div>

    {/* Fee Breakdown */}
    <div className=" rounded-lg p-6 ">
      <div className="flex justify-between">
        <span className="text-gray-400">Appointment Fee</span>
        <span className="text-black font-semibold">N10,000.00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Tax (5%)</span>
        <span className="text-black font-semibold">N500.00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Platform Fee</span>
        <span className="text-black font-semibold">N1,000.00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Discount</span>
        <span className="text-black font-semibold">N0.00</span>
      </div>
    </div>
  </div>
    <div className="bg-blue-50 rounded-xl w-[350px] h-[100px] px-4 py-6">
    <div className="flex justify-between mb-2">
      <span className="text-gray-400">Change money</span>
      <span className="font-semibold text-black">N0.00</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-400">Payment method</span>
      <span className="font-semibold text-black">Debit card</span>
    </div>
  </div>
  </div>
  {/* Footer */}
</div>
</div>
  );
};

export default PaymentConfirmation;
