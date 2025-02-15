import React, { useState, useEffect } from "react";
import { Settings, Bell, Gift, Star, Zap, Network, Flame, Trophy,BarChart,Users,Globe ,Crown,Diamond,Banknote} from "lucide-react";
import Footer from '../components/Footer';
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import Api from '../Api/botService';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const user = window.Telegram.WebApp.initDataUnsafe?.user;
      if (user) {
        console.log("User detected:", user);
        handleAuthentication(user);
      } else {
        alert("This app must be opened from the Telegram mobile app.");
      }
    } else {
      alert("Not running in Telegram mobile app environment.");
    }
  }, []);

  const handleAuthentication = async (user) => {
    try {
      const response = await Api.post("/register", {
        id: user.id,
        // first_name: user.first_name,
        first_name: "sach",
        username: user.username,
      });

      if (response.data.success) {
        setUserData(user);
        setIsLoggedIn(true);
      } else {
        alert("Authentication failed.");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      setUserData("sachin");
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


  return (
    <div className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center">
      {/* User Profile */}

       {/* Background Blinking Dots */}
       {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-white opacity-50 animate-blink"
          style={{ left: dot.left, top: dot.top, animationDelay: dot.animationDelay }}
        ></div>
      ))}


      <div className="flex items-center justify-between w-full max-w-md p-4">
        <div className="flex items-center gap-3">
          <div className="bg-teal-400 w-12 h-12 rounded-full flex items-center justify-center text-black text-lg font-bold">R</div>
          <div>
            <h2 className="text-xl font-bold text-white">Ankit</h2>
            <p className="text-sm text-teal-300">Level 29</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/settings.png" alt="setting" style={{height:'30px', width: 'auto'}}/>
          <img className="text-gray-300 cursor-pointer" src="../assets/img/bells.gif" alt="setting" style={{height:'40px', width: 'auto', marginTop:'-5px'}}/>
          <img className="text-gray-300 cursor-pointer" src="../assets/img/Airdrop.png" alt="setting" style={{height:'35px', width: 'auto', marginTop:'-5px'}}/>
          {/* <Settings className="text-gray-300 cursor-pointer" /> */}
          {/* <Bell className="text-gray-300 cursor-pointer" />
          <Gift className="text-teal-300 cursor-pointer" /> */}
        </div>
      </div>
      
      {/* Giveaway Banner */}
      <div className="w-full max-w-md  from-red-700 to-black p-4 rounded-xl text-center my-4 border border-teal-400" style={{ background: "#000" }}>
        <h2 className="text-lg font-bold text-gray-100"><span style={{color:"	#FFD700"}}>10,000</span> ATH GIVEAWAY</h2>
        <p className="text-sm text-gray-300">Follow us on <span className="text-red-400">YouTube</span></p>
      </div>
      
      {/* Streak and Reward */}
      <div className="w-full max-w-md p-4 rounded-xl flex justify-between items-center my-4 border border-teal-400"style={{background: "#000"}}>
        <div className="flex items-center gap-2">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/wstar.gif" alt="setting" style={{height:'40px', width: 'auto', marginTop:'-5px'}} onClick={handleAuthentication}/>
          {/* <Star className="text-teal-300" /> */}
          <div>
            <p className="text-sm text-gray-300">Streak</p>
            <p className="text-lg font-bold text-white">0</p>
          </div>
        </div>
        <button className="bg-teal-500 px-6 py-2 rounded-lg text-black font-bold">Receive <span style={{color:"	#FFD700"}}>100</span></button>
      </div>
      
      {/* Quests Section */}
      <div className="w-full max-w-md p-4 rounded-xl flex justify-between items-center my-4 border border-teal-400" style={{background: "#000"}}>
      <img className="text-gray-300 cursor-pointer" src="../assets/img/wtresure.gif" alt="setting" style={{height:'40px', width: 'auto', marginTop:'-5px'}}/>
        <p className="text-sm text-gray-300">Complete quests to earn more gems</p>
        <button className="bg-teal-500 px-6 py-2 rounded-lg text-black font-bold">Quest</button>
      </div>
      
      {/* Mining Section */}
      <div className="w-full max-w-md bg-gray-900 p-4 rounded-xl mt-4 border border-teal-400" style={{background: "#000"}}>
        <h3 className="text-lg font-bold text-teal-300">MINING</h3>
        <div className="grid grid-cols-4 gap-4 mt-4 text-center">
          <div className="flex flex-col items-center">
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center"> */}
            <img className="text-gray-300 cursor-pointer" src="../assets/img/wtap.png" alt="setting" style={{height:'40px', width: 'auto', marginTop:'-5px'}}/>
            {/* </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">TAP</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Network className="text-white w-8 h-8" /> */}
              <img className="text-gray-300 cursor-pointer" src="../assets/img/nodes.png" alt="setting" style={{height:'40px', width: 'auto', marginTop:'-5px'}}/>
            {/* </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">Node</p>
          </div>
          <div className="flex flex-col items-center">
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center"> */}
            <img className="text-gray-300 cursor-pointer" src="../assets/img/boosts.png" alt="setting" style={{height:'40px', width: 'auto', marginTop:'-5px'}}/>
            {/* </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">Boost</p>
          </div>
          <div className="flex flex-col items-center">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/Leaderboards.png" alt="setting" style={{height:'40px', width: 'auto', marginTop:'-5px'}}/>

            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Trophy className="text-white w-8 h-8" />
            </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300" onClick={()=>navigate("/leaderboard")}>Leaderboard</p>
          </div>
        </div>
      </div>
      {/* Community Section */}
      <div className="w-full max-w-md bg-gray-900 p-4 rounded-xl mt-4 border border-teal-400" style={{background: "#000"}}>
        <h3 className="text-lg font-bold text-teal-300">COMMUNITY</h3>
        <div className="grid grid-cols-4 gap-4 mt-4 text-center">
          <div className="flex flex-col items-center">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/Statistics.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <BarChart className="text-white w-8 h-8" />
            </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">Statistic</p>
          </div>
          <div className="flex flex-col items-center">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/friend.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Users className="text-white w-8 h-8" />
            </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">Friend</p>
          </div>
          <div className="flex flex-col items-center">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/votes.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Star className="text-white w-8 h-8" />
            </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">Vote</p>
          </div>
          <div className="flex flex-col items-center">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/telegrams.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Globe className="text-white w-8 h-8" />
            </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">Telegram</p>
          </div>
        </div>
      </div>

       
      {/* Premium Privileges Section */}
      <div className="w-full max-w-md bg-gray-900 p-4 rounded-xl mt-4 border border-teal-400" style={{background: "#000"}}>
        <h3 className="text-lg font-bold text-teal-300">PREMIUM PRIVILEGES</h3>
        <div className="grid grid-cols-4 gap-4 mt-4 text-center">
          <div className="flex flex-col items-center">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/premiums.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Crown className="text-white w-8 h-8" />
            </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">Premium</p>
          </div>
          <div className="flex flex-col items-center">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/gem.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Diamond className="text-white w-8 h-8" />
            </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">PPick</p>
          </div>
          <div className="flex flex-col items-center">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/referrals.png" alt="setting" style={{height:'40px', width: 'auto',}}/>

            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Users className="text-white w-8 h-8" />
            </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">Referral</p>
          </div>
          <div className="flex flex-col items-center">
          <img className="text-gray-300 cursor-pointer" src="../assets/img/revenues.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
            {/* <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Banknote className="text-white w-8 h-8" />
            </div> */}
            <p className="text-sm mt-1 font-semibold text-gray-300">Revenue</p>
          </div>
        </div>
      </div>
      
       <br></br>
       <br></br>
         {/* Footer Navigation */}
         <Footer />

        
    </div>
  );
};

export default Home;
