import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Home, Wallet, Rocket, Users, BarChart
  } from "lucide-react";
  import { BrowserRouter as Router, Link } from "react-router-dom";
  
const Footer = () => {
  return (
       <>
        <div className="fixed bottom-0 w-full max-w-md bg-[#1C1A3A] p-4 flex justify-around border-t border-gray-700 mt-6 rounded-t-xl">
<Link to="/" className="flex flex-col items-center text-[#7D5FFF]">
  <img src="../assets/click20.svg" alt="Ref" className="w-6 h-6" />
  <p className="text-xs">Ref</p>
</Link>
<Link to="/wallet" className="flex flex-col items-center text-gray-300">
  <img src="../assets/klink21.svg" alt="Task" className="w-6 h-6" />
  <p className="text-xs">Airdrop</p>
</Link>
<Link to="/mining" className="flex flex-col items-center text-gray-300">
  <img src="../assets/klink24.svg" alt="Tap" className="w-6 h-6" />
  <p className="text-xs">Tap</p>
</Link>
<Link to="/quest" className="flex flex-col items-center text-gray-300">
  <img src="../assets/click23.svg" alt="Airdrop" className="w-6 h-6" />
  <p className="text-xs">Task</p>
</Link>
<Link to="/friends" className="flex flex-col items-center text-gray-300">
  <img src="../assets/klink22.svg" alt="Stats" className="w-6 h-6" />
  <p className="text-xs">Stats</p>
</Link>
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
