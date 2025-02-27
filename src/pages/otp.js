import React, { useState, useRef } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Api from "../Api/botService";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  // Handle OTP input change
  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow numbers
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if current is filled
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Submit OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join(""); // Combine OTP digits
    if (enteredOtp.length !== 6) {
      alert("Please enter a 6-digit OTP.");
      return;
    }
    const userEmail = localStorage.getItem("userEmail");
    const telegram_id = localStorage.getItem("telegram_id");
    if (!userEmail){
      alert("Email not found.Please try logging in again.");
      return;
    }
    if(!telegram_id){
      alert("Telegram not found.Please try loggin in again.");
      return;
    }
    try {
      const response = await Api.post("auth/verify-otp", { email: userEmail, otp: enteredOtp, telegram_id: telegram_id, });
      if (response.data.success) {
        alert("OTP Verified Successfully!");
        localStorage.removeItem("userEmail");
        setIsModalOpen(true);
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div
      className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center relative"
      style={{
        background: "linear-gradient(180deg, rgba(38, 28, 66, 1) 0%, rgba(14, 10, 32, 1) 100%)",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center mt-8 px-4">
        <h1 className="text-2xl font-bold">Enter the 6-digit OTP</h1>
      </div>

      <div className="flex space-x-3 mt-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl font-bold bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md text-center relative">
            <button className="absolute top-4 right-4 text-gray-400 text-xl" onClick={() => navigate('/')}>
              ✕
            </button>
            <div className="flex justify-center mb-4">
              <img src="../assets/img/oksharp.png" alt="Account Connected" className="w-24 h-24" />
            </div>
            <h2 className="text-2xl font-bold">Account Connected</h2>
            <p className="text-gray-400 mt-2">Click below to be redirected to your AiCoinX app</p>
            <button
              className="w-full bg-purple-600 text-white text-lg font-bold py-3 rounded-lg mt-6 shadow-lg"
              onClick={() => navigate('/')}
            >
              Done
            </button>
          </div>
        </div>
      )}

      <button
        className="w-full max-w-md bg-green-600 text-white text-lg font-bold py-4 rounded-lg mt-8 shadow-xl"
        onClick={handleVerifyOtp}
      >
        Verify OTP
      </button>

      <Footer />
    </div>
  );
};

export default Otp;
