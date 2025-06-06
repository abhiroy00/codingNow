import React from 'react'

export default function Referearn() {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Refer & Earn</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="w-full md:w-1/2 md:p-4">
            <img src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/earn-money-by-referring-personal-loan-717x404.jpg" alt="Refer" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 md:p-4 my-3">
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <ul className="list-disc pl-4">
              <li className="mb-2 ml-0">Invite your friends to join AlmaBetter.</li>
              <li className="mb-2 ml-0">Your friends sign up using your referral link.</li>
              <li className="mb-2 ml-0">Earn rewards when your friends complete their first course.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Why Refer?</h2>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="w-full md:w-1/3 p-4 text-center">
            <img src="https://parade.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjA1Mjk3MjY0NTY5MDk5Nzc0/how-to-make-friends-as-an-adult.jpg" alt="Benefit 1" className="w-full lg:h-[200px] rounded-lg shadow-lg mb-4" />
            <p className="text-lg">Help your friends learn new skills.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <img src="https://il-app.s3.ap-south-1.amazonaws.com/images/Refer-and-Earn-2-d210cd79c39d4fbf93163ed9ee8763b9.jpg" alt="Benefit 2" className="w-full lg:h-[200px]  rounded-lg shadow-lg mb-4" />
            <p className="text-lg">Earn rewards for each successful referral.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <img src="https://t4.ftcdn.net/jpg/03/38/27/39/360_F_338273910_DdhPcVCxz7K6IOKSrxJEfJ7RnQ1n23f5.jpg" alt="Benefit 3" className="w-full lg:h-[200px] rounded-lg shadow-lg mb-4" />
            <p className="text-lg">Be a part of a growing community.</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-lg">Share your referral link and start earning today!</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Get Your Referral Link
        </button>
      </div>
    </div>
  )
}
