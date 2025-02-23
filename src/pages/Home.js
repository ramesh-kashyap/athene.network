import React, { useState, useEffect } from "react";
import { Settings, Bell, Gift, Star, Zap, Network, Flame, Trophy,BarChart,Users,Globe ,Crown,Diamond,Banknote} from "lucide-react";
import Footer from '../components/Footer';
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import Api from '../Api/botService';
import Loader from "../components/Loader"; 
const Home = () => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); 
    // const [token, setToken] = useState(localStorage.setItem("token"));
    const [telegram_id, setTelegramId] = useState(localStorage.getItem("telegram_id"));
    const [username, setUsername] = useState("Guest");
    const [name, setName] = useState("ABC");
    const [lname, setLast] = useState("XYZ");
    const [user, setUser] = useState(null);
    // Check if the Telegram WebApp SDK is available
    const tg = window.Telegram;
    console.log(tg);  
    // console.log("Token from localStorage:", localStorage.getItem("token"));

    useEffect(() => {
      if (!window.Telegram || !window.Telegram.WebApp) {
        console.error("❌ Telegram WebApp SDK is missing.");
        setLoading(false); // Stop loading if the SDK is missing
        return;
      }
      const tg = window.Telegram.WebApp;
      tg.expand(); // Expand the WebApp interface 
      const initDataUnsafe = tg.initDataUnsafe;
      if (initDataUnsafe && initDataUnsafe.user) {
        setUser(initDataUnsafe.user);
        setTelegramId(initDataUnsafe.user.id);
        setUsername(initDataUnsafe.user.username);
        setName(initDataUnsafe.user.first_name);
        setLast(initDataUnsafe.user.last_name);
        localStorage.setItem("telegram_id", initDataUnsafe.user.id); // Store telegram_id locally
        if (telegram_id) {
                handleAuthentication(telegram_id);
              }
      }
      setLoading(false); // Ensure loading is stopped after initialization
    }, []);
  
  //   useEffect(() => {
  //     if (telegram_id) {
  //       handleAuthentication(telegram_id);
  //     }
  //   }, [telegram_id]);
  // console.log(user);  
  // const handleAuthentication = async (user) => {
  //   try {
  //     const response = await Api.post("/register", {
  //       id: user.id,
  //       first_name: user.first_name,
  //       username: user.username,
  //     });
  //     console.log(response);
  //     if (response.data.success) {
  //       setUserData(user);
  //       setIsLoggedIn(true);
  //     } else {
  //       alert("Authentication failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error during authentication:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
    
  const handleAuthentication = async (user) => {
    try{
    const response = await Api.post("auth/telegram-login", {
      telegram_id: telegram_id,
      tname: name,
      tusername: username,
      tlastname: lname,
    });
    console.log("Response:", response);
  }
  catch(error){
    console.error("Error during authentication:", error);
  }
  };
  
  useEffect(() => {    
    if (loading) {
      setUserData("ABC");
      setLoading(false); // Avoid infinite loop
    }
  }, [loading]);
const navigate = useNavigate();
const [dots, setDots] = useState([]);

// useEffect(() => {
//   const generateDots = () => {
//     const newDots = Array.from({ length: 10 }).map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       animationDelay: `${Math.random() * 5}s`,
//     }));
//     setDots(newDots);
//   };
//   generateDots();
//   const interval = setInterval(generateDots, 5000);
//   return () => clearInterval(interval);
// }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("community");
const tasks = [
  { id: 1, name: "Register AiCoinX Account", reward: "500,000", icon: "../assets/img/ok3d.png" },
  { id: 2, name: "Learn More About AiCoinX", reward: "10,000", icon: "../assets/klink7.svg" },
];

const communityTasks = [
  { id: 3, name: "Join TG Community", reward: "10,000", icon: "../assets/klink6.svg" },
  { id: 4, name: "Join AiCoinX TG Chat", reward: "10,000", icon: "../assets/klink8.svg" },
  { id: 5, name: "Join AiCoinX on X", reward: "10,000", icon: "../assets/klink9.svg" },
  { id: 6, name: "Complete AiCoinX tasks on Zealy", reward: "10,000", icon: "../assets/klink10.svg" },
  { id: 7, name: "Join AiCoinX on Discord", reward: "10,000", icon: "../assets/klink7.svg" },
  { id: 8, name: "Join AiCoinX on Insta", reward: "10,000", icon: "../assets/klink11.svg" },
];

  return (
    <div 
    className="bg-[#0d0d0d] text-gray-200 min-h-screen p-2 font-sans flex flex-col items-center relative" >
    
    <div className="w-full max-w-md flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-white">Register AiCoinX Account</h1>
      <div className="relative" onClick={() => setIsModalOpen(true)}>
      <img src="../assets/klink4.svg" alt="Invite Friend" className="text-white w-6 h-6" />
        <span className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></span>
      </div>
    </div>
    
    <div className="w-full max-w-md space-y-4">
      {tasks.map(task => (
        <div key={task.id} className="bg-[#1C1A3A] p-2 rounded-xl flex items-center justify-between border border-gray-700">
          <div className="flex items-center gap-3">
            <img src={task.icon} alt={task.name} className="w-11 h-12" />
            <div>
              <p className="text-white font-bold">{task.name}</p>
              <p className="text-gray-400 text-sm">{task.reward}</p>
            </div>
          </div>
          <button className="bg-[#3A2F50] text-gray-300 px-4 py-2 rounded-lg">Start</button>
        </div>
      ))}
    </div>
    
    <div className="w-full max-w-md flex justify-between mt-6 border-b border-gray-700 pb-2 text-gray-400">
      <button className={`relative text-white font-bold pb-2 ${activeTab === "community" ? "border-b-2 border-purple-400" : ""}`} onClick={() => setActiveTab("community")}>Join Community <span className="ml-2 bg-gray-700 px-2 py-1 rounded-full text-sm">9</span></button>
      <button className={`relative text-white font-bold pb-2 ${activeTab === "socialtask" ? "border-b-2 border-purple-400" : ""}`} onClick={() => setActiveTab("socialtask")}>Social Task<span className="ml-2 bg-gray-700 px-2 py-1 rounded-full text-sm">12</span></button>
      <button className={`relative text-white font-bold pb-2 ${activeTab === "partners" ? "border-b-2 border-purple-400" : ""}`} onClick={() => setActiveTab("partners")}>Partners<span className="ml-2 bg-gray-700 px-2 py-1 rounded-full text-sm">2</span></button>

      {/* <button className="text-gray-500">Partners <span className="ml-2 bg-gray-700 px-2 py-1 rounded-full text-sm">2</span></button> */}
    </div>
    
    {activeTab === "community" && (
      <div className="w-full max-w-md space-y-4 mt-4">
        {communityTasks.map(task => (
          <div key={task.id} className="bg-[#1C1A3A] p-2 rounded-xl flex items-center justify-between border border-gray-700">
            <div className="flex items-center gap-3">
              <img src={task.icon} alt={task.name} className="w-11 h-12" />
              <div>
                <p className="text-white font-bold">{task.name}</p>
                <p className="text-gray-400 text-sm">{task.reward}</p>
              </div>
            </div>
            <button className="bg-[#3A2F50] text-gray-300 px-4 py-2 rounded-lg">Start</button>
          </div>
        ))}
      </div>
    )}
    {isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md text-center relative">
          <button className="absolute top-4 right-4 text-gray-400 text-xl" onClick={() => setIsModalOpen(false)}>
            ✕
          </button>
          <div className="flex justify-center mb-4">
            <img src="../assets/img/oksharp.png" alt="Account Connected" className="w-24 h-24" />
          </div>
          <h2 className="text-2xl font-bold">Connected AiCoinX Wallet</h2>
          <p className="text-gray-400 mt-2">Signup and connect your AiCoinX Wallet to start redeeming rewards directly to your account.</p>
          <button
            className="w-full bg-purple-600 text-white text-lg font-bold py-3 rounded-lg mt-6 shadow-lg"
            onClick={() => navigate('/signup')}
          >
            Signup to AiCoinX
          </button>
        </div>
      </div>
    )}
    <Footer/>
  </div>
  );
};

export default Home;
