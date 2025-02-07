import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Button from "./components/ui/button"; // ✅ Correct for default exports
import Home from './pages/Home';
import Wallet from './pages/Wallet'; // Assuming you have a Wallet page
import Mining from './pages/Mining'; // Assuming you have a Wallet page
import Quest from './pages/Quest'; // Assuming you have a Wallet page
import Friends from "./pages/Friends";
import WithdrawPage from "./pages/Withdraw";
import HistoryPage from "./pages/History";
import ReferralList from "./pages/ReferralList";


const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/referral-list" element={<ReferralList />} />
      </Routes>
   
  </Router>
  );
};

export default App;
