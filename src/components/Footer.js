import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Home, Wallet, Rocket, Users, BarChart
  } from "lucide-react";
  import { BrowserRouter as Router, Link } from "react-router-dom";
  
const Footer = () => {
  return (
       <>
        <div className="fixed bottom-0 w-full max-w-md bg-[#121212] p-4 flex justify-around border-t border-gray-700 footer">
        <div className="flex flex-col items-center">
        <Link to="/" className="flex flex-col items-center ">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/home.png" alt="setting" style={{height:'25px', width: 'auto',}}/>
          {/* <Home className="w-6 h-6" /> */}
          <p className="text-xs">Home</p>
        </Link>
        </div>
       
        <div className="flex flex-col items-center text-gray-300">
        <Link to="/wallet" className="flex flex-col items-center ">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/wallet.png" alt="setting" style={{height:'25px', width: 'auto',}}/>
          {/* <Wallet className="w-6 h-6" /> */}
          <p className="text-xs">Wallet</p>
          </Link>
        </div>
        <div className="flex flex-col items-center text-gray-300">
        <Link to="/mining" className="flex flex-col items-center ">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/mining.png" alt="setting" style={{height:'25px', width: 'auto',}}/>

          {/* <Rocket className="w-6 h-6" /> */}
          <p className="text-xs">Mining</p>
          </Link>
        </div>
        <div className="flex flex-col items-center text-gray-300">
        <Link to="/quest" className="flex flex-col items-center ">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/diamonds.png" alt="setting" style={{height:'25px', width: 'auto',}}/>

          {/* <BarChart className="w-6 h-6" /> */}
          <p className="text-xs">Quest</p>
          </Link>
        </div>
        <div className="flex flex-col items-center text-gray-300">
        <Link to="/friends" className="flex flex-col items-center ">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/users.png" alt="setting" style={{height:'25px', width: 'auto',}}/>

          {/* <Users className="w-6 h-6" /> */}
          <p className="text-xs">Friend</p>
          </Link>
        </div>
      </div>
      <style>{`
        @keyframes blink {
          0% { opacity: 0.1; }
          50% { opacity: 1; }
          100% { opacity: 0.1; }
        }
        .animate-blink {
          animation: blink 1.5s infinite alternate;
        }
      `}</style>
      
       </>
  );
};

export default Footer;
