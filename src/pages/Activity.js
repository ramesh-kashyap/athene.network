import React, { useState } from "react";
import Footer from '../components/Footer';
import {useNavigate} from "react-router-dom";
const ActivityDashboard = () => {
  const [activeTab, setActiveTab] = useState("myActivity");
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center relative"
      style={{
        background:
          "linear-gradient(180deg, rgba(38, 28, 66, 1) 0%, rgba(14, 10, 32, 1) 100%)",
        backgroundSize: "cover",
      }}
    >

      <div className="w-full max-w-md flex justify-between bg-gray-900 rounded-full p-2 text-lg font-semibold" style={{fontSize:15}}>
        <button
          className={`w-1/2 text-center py-2 rounded-full ${
            activeTab === "myActivity" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"
          }`}
          onClick={() => setActiveTab("myActivity")}
        >
          MY ACTIVITY
        </button>
        <button
          className={`w-1/2 text-center py-2 rounded-full ${
            activeTab === "community" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"
          }`}
          onClick={() => setActiveTab("community")}
        >
          COMMUNITY
        </button>
      </div>
      {activeTab === "myActivity" &&(
        <>
        <div className="w-full max-w-md bg-red-700 rounded-lg p-1 mt-4 flex items-center gap-3 shadow-lg">
        <span className="text-lg font-semibold"style={{fontSize:15}}>❌ Klink account is not connected</span>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-gray-300"style={{fontSize:15}}>$KLINK Airdrop Points</p>
        <h1 className="text-5xl font-bold flex items-center justify-center gap-2">
          <img src="../assets/klink30.svg" alt="klink" className="w-10 h-10" />
          11,621
        </h1>
      </div>

      <div className="w-full max-w-md border-t border-gray-600 mt-8 py-6 flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="text-gray-300 text-sm">Friends Referred</p>
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <img src="../assets/click20.svg" alt="referrals" className="w-8 h-8" />
            0
          </h2>
        </div>
        <div className="text-center">
          <p className="text-gray-300 text-sm">Points earned from sharing with friends</p>
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <img src="../assets/klink30.svg" alt="points" className="w-8 h-8" />
            0
          </h2>
        </div>
      </div>
      </>
      )}
      

      {/*  */}
      {activeTab ==="community" &&(
        <>
        <div className="text-center mt-8">
        <p className="text-lg text-gray-300"style={{fontSize:15}}>Community $KLINK Points</p>
        <h1 className="text-5xl font-bold flex items-center justify-center gap-2">
          <img src="../assets/klink30.svg" alt="klink" className="w-10 h-10" />
          11,621,863,873
        </h1>
      </div>

      <div className="w-full max-w-md border-t border-gray-600 mt-8 py-6 flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="text-gray-300 text-sm">Total Klinkers</p>
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <img src="../assets/click20.svg" alt="referrals" className="w-8 h-8" />
            0
          </h2>
        </div>
        <div className="text-center">
          <p className="text-gray-300 text-sm">Daily Klinkers</p>
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <img src="../assets/klink30.svg" alt="points" className="w-8 h-8" />
            0
          </h2>
        </div>
      </div>
      </>
      )}
      
      {/*  */}
      <button className="w-full max-w-md bg-purple-600 text-white text-lg font-bold py-3 rounded-lg mt-6 shadow-xl">
        Connect Klink account
      </button>
      <Footer/>
    </div>
  );
};

export default ActivityDashboard;