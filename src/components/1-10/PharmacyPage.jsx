import React from 'react'

const PharmacyPage = () => {
  return (
    <div className="min-h-screen w-screen flex">
      {/* Sidebar */}
      <div className="w-20 bg-gradient-to-b from-blue-600 to-blue-400 flex flex-col items-center py-6">
        <span>tell a doc</span>
      </div>
      <div className='flex justify-center items-center ml-96'>
        <h1 className='font-bold text-xl'>Linked Customer to the pharmacy  <br /> e-commerce page to complete payment,<br /> purchase and logistics/delivery</h1>
        <button className='mt-96 bg-blue-950 text-white w-60 h-10'>Track Order</button>
      </div>
    </div>
  )
}

export default PharmacyPage;
