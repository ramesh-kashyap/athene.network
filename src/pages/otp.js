import React, { useState } from "react";
import Footer from '../components/Footer';
import {useNavigate} from "react-router-dom";
import Api from '../Api/botService';
const otp = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post("auth/connect", { email });
      if (response.data.success) {
        navigate("/otp-verification"); // Redirect to OTP page
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  

  return (
    <div
      className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center relative"
      style={{
        background:
          "linear-gradient(180deg, rgba(38, 28, 66, 1) 0%, rgba(14, 10, 32, 1) 100%)",
        backgroundSize: "cover",
      }}
    >
        <>
        <div className="text-center mt-8 px-4">
          <h1 className="text-2xl font-bold">Use the Email Linked to Your AiCoinX Account</h1>
        </div>
  
        <div className="mt-8">
          <img src="../assets/klink31.svg" alt="Email Connect" className="w-40 h-40" />
        </div>
  
        <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-xl flex items-center px-4 py-3 mt-8 shadow-lg">
          <span className="text-purple-400 text-lg">📧</span>
          <input
            type="email"
            placeholder="Enter Your AiCoinX E-mail Here"
            className="w-full bg-transparent text-white text-lg px-3 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
  
        <button
          className="w-full max-w-md bg-purple-600 text-white text-lg font-bold py-4 rounded-lg mt-8 shadow-xl"
          onClick={handleSubmit}
          // onClick={() => setIsModalOpen(true)}
        >
          Log In
        </button>
        </>
       {activeTab ==="signup" &&(
       <div      className="min-h-screen flex flex-col items-center px-6 py-8 text-white relative font-sans"
       style={{
         background:
           "linear-gradient(180deg, rgba(38, 28, 66, 1) 0%, rgba(14, 10, 32, 1) 100%)",
         backgroundSize: "cover",
       }}
     >
       
       <div className="text-center mt-8 px-4">
         <h1 className="text-2xl font-bold">Register and Connect your AiCoinX account to this bot</h1>
       </div>
 
       <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl p-6 mt-8 shadow-lg">
         <div className="flex gap-3 items-start border-b border-gray-700 pb-4 mb-4">
           <img src="../assets/klink32.svg" alt="download" className="w-10 h-10" />
           <div>
             <p className="text-white font-bold">Download AiCoinX:</p>
             <p className="text-gray-300 text-sm">from the app store (click “Download AiCoinX” below to be re-directed.)</p>
           </div>
         </div>
         <div className="flex gap-3 items-start border-b border-gray-700 pb-4 mb-4">
           <img src="../assets/klink33.svg" alt="signup" className="w-10 h-10" />
           <div>
             <p className="text-white font-bold">Complete Sign Up:</p>
             <p className="text-gray-300 text-sm">Create your account in minutes.</p>
           </div>
         </div>
         <div className="flex gap-3 items-start">
           <img src="../assets/klink34.svg" alt="connect" className="w-10 h-10" />
           <div>
             <p className="text-white font-bold">Connect Email:</p>
             <p className="text-gray-300 text-sm">Come back to this page and connect your Klink email to finish task.</p>
           </div>
         </div>
       </div>
 
       <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl p-6 mt-8 flex justify-between items-center shadow-lg">
         <div className="flex gap-3 items-center">
           <img src="../assets/klink35.svg" alt="reward" className="w-10 h-10" />
           <div>
             <p className="text-white font-bold">Sign up Reward</p>
             <p className="text-yellow-500 font-bold">500,000</p>
           </div>
         </div>
       </div>
 
       <button className="w-full max-w-md bg-purple-600 text-white text-lg font-bold py-4 rounded-lg mt-8 shadow-xl">
         Download AiCoinX Wallet
       </button>
     </div>
       )}


      <Footer/>
    </div>



  );
};

export default otp;
