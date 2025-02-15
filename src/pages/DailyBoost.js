import React, { useState } from "react";
import Footer from '../components/Footer';
import {useNavigate} from "react-router-dom";
const dailyRewards = [
  { day: 1, amount: 4000 , multiplier: "x" },
  { day: 2, amount: 8000 , multiplier: "" },
  { day: 3, amount: 12000 , multiplier: "" },
  { day: 4, amount: 15000 , multiplier: "" },
  { day: 5, amount: 20000 , multiplier: "" },
  { day: 6, amount: 25000 , multiplier: "" },
  { day: 7, amount: 30000, multiplier: "" },
  { day: 8, amount: 40000 , multiplier: "" },
  { day: 9, amount: 50000 , multiplier: "" },
  { day: 10, amount: 60000 , multiplier: "" },
  { day: 11, amount: 70000 , multiplier: "" },
  { day: 12, amount: 80000 , multiplier: "" },
  { day: 13, amount: 90000 , multiplier: "" },
  { day: 14, amount: 100000, multiplier: "x3" },
  { day: 15, amount: 120000 },
  { day: 16, amount: 140000 , multiplier: "" }
];

const DailyBoost = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dailyBoost");
  const [faqOpen, setFaqOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { question: "What are $KLINK Points?", answer: "$KLINK Points are earned through mining and completing tasks. They can be converted into $KLINK tokens at the TGE." },
    { question: "What Are Tap Points?", answer: "Tap Points are earned by engaging with the platform and can be used to boost your earnings." },
    { question: "When Will Klink Airdrop Happen?", answer: "The Klink airdrop will take place at the Token Generation Event (TGE)." },
    { question: "Are There Other Ways I Can Earn?", answer: "Yes! You can earn through referrals, completing tasks, and participating in promotions." },
    { question: "What is $KLINK Mining?", answer: "$KLINK Mining allows users to earn $KLINK Points over time by engaging with the ecosystem." },
    { question: "How Can I Start Mining Points?", answer: "Simply connect your Klink account and start participating in mining activities." },
    { question: "What Are Daily Multipliers?", answer: "Daily multipliers help boost your earnings based on your engagement level." },
    { question: "Will Airdrop Rewards Have Vesting?", answer: "Yes, some airdrop rewards may be subject to a vesting schedule." },
    { question: "How Will I Claim Airdrop Rewards?", answer: "Airdrop rewards can be claimed through the Klink wallet once the TGE occurs." },
    { question: "Is Klink Available in All Countries?", answer: "Klink is available in most countries, but some regions may have restrictions." }
  ];

  return (
    <>
      <div
        className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center relative"
        style={{
          background: "linear-gradient(180deg, rgba(27, 20, 55, 1) 0%, rgba(14, 10, 32, 1) 100%)",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full max-w-md flex justify-between bg-gray-900 rounded-full p-2 text-lg font-semibold">
          <button
            className={`w-1/2 text-center py-2 rounded-full ${
              activeTab === "mining" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => setActiveTab("mining")}
          >
            Mining
          </button>
          <button
            className={`w-1/2 text-center py-2 rounded-full ${
              activeTab === "dailyBoost" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => setActiveTab("dailyBoost")}
          >
            Daily Boost
          </button>
        </div>

        {/* Daily Boost Section */}
        {activeTab === "dailyBoost" && (
          <>
            <div className="text-center mt-6 font-semibold">
              <p className="text-gray-300 mt-2">Check in daily to claim points and boost your mining rewards!</p>
            </div>

            <div className="w-full max-w-md bg-gray-800 rounded-lg p-3 flex justify-between items-center mt-6 border border-yellow-500 shadow-lg">
              <div className="flex items-center gap-2">
                <img src="../assets/klink2.svg" alt="klink" className="w-10 h-10" />
                <span className="text-gray-300 mt-2">Connect your Klink Account</span>
              </div>
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg shadow-md" onClick={()=>navigate('/signup')}>CONNECT</button>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8">
              {dailyRewards.map(({ day, amount, multiplier }) => (
                <div
                  key={day}
                  className={`bg-gray-900 p-4 rounded-lg text-center border relative flex flex-col items-center justify-center shadow-md ${
                    multiplier ? "border-yellow-500" : "border-gray-700"
                  }`} style={{backgroundColor:"rgb(0 0 0 / 22%)"}}
                >
                  <p className="text-sm text-gray-300 font-semibold">Day {day}</p>
                  <img src="../assets/klink30.svg" alt="klink" className="w-6 h-6 my-2" />
                  <p className="text-yellow-500 font-semibold text-lg">{amount.toLocaleString()}</p>
                  {multiplier && (
                    <span className="absolute -top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                      {multiplier}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Mining Section */}
        {activeTab === "mining" && (
          <div
            className="min-h-screen flex flex-col items-center p-6 text-white"
            style={{
              background: "radial-gradient(circle at center, rgba(124, 77, 255, 0.6), rgba(17, 10, 29, 1))",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-md bg-gray-800 rounded-lg mt-4 flex justify-between">
            <img src="../assets/click23.svg" alt="tasks" className="w-5 h-5 m-2" />
              <span className="text-gray-300 m-2" style={{fontSize:'10px'}}>1/25 Tasks Complete</span>
              <span><span className="bg-yellow-500 px-2 py-2 rounded text-black"  style={{fontSize:'10px'}}>X1.00</span> <span style={{fontSize:'10px'}}>Multiplier</span></span>
              <img src="../assets/klink4.svg" alt="tasks" className="w-5 h-5 m-2" />
              <span  className="text-gray-300 m-2" style={{fontSize:'10px'}}>Disconnected</span>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg"style={{fontSize:'15px'}}>Total $KLINK Airdrop Points</p>
              <h1 className="text-5xl font-bold flex items-center justify-center gap-2" style={{fontSize:'20px'}}>
                <img src="../assets/klink3.svg" alt="klink" className="w-8 h-8" />
                11,621
              </h1>
            </div>

            <div className="w-full max-w-md bg-gray-800 rounded-lg p-3 flex justify-between items-center mt-6 border border-yellow-500">
              <div className="flex items-center gap-2">
                <img src="../assets/klink3.svg" alt="klink" className="w-8 h-8" />
                <span className="text-lg">Connect your Klink Account</span>
              </div>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold">Connect</button>
            </div>

            <div className="w-full max-w-md bg-gray-900 rounded-lg p-3 mt-6 flex justify-between items-center border border-yellow-500">
              <span className="bg-yellow-500 px-2 py-1 rounded text-black">X1.00</span>
              <span className="flex items-center gap-1">
                <img src="../assets/klink2.svg" alt="klink" className="w-6 h-6" />
                +3,600 points/hour
              </span>
            </div>

            <div className="w-full max-w-md mt-8">
              <h2 className="text-xl font-bold">FAQ</h2>
              <div
                className="bg-gray-800 p-4 rounded-lg mt-2 cursor-pointer"
                onClick={() => setFaqOpen(!faqOpen)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">What is Klink Finance?</span>
                  {faqOpen ? "−" : "+"}
                </div>
                {faqOpen && (
                  <p className="text-gray-300 mt-2">
                    Klink is a multi-service quest and investment platform designed to help you grow your crypto wealth. Connect this Mini App to your main Klink wallet to convert points into $KLINK tokens at TGE.
                  </p>
                )}
              </div>

              <div className="mt-2">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 p-4 rounded-lg mt-2 cursor-pointer text-white"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">{item.question}</span>
                      {openIndex === index ? "−" : "+"}
                    </div>
                    {openIndex === index && (
                      <p className="text-gray-300 mt-2">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default DailyBoost;
