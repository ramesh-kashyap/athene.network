import  React,{ useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Mining from "./pages/Mining";
import Quest from "./pages/Quest";
import Friends from "./pages/Friends";
import WithdrawPage from "./pages/Withdraw";
import HistoryPage from "./pages/History";
import ReferralList from "./pages/ReferralList";
import Leaderboard from "./pages/LeaderBoard";
import Send from "./pages/Send";
import Deposit from "./pages/wallet/deposit";
import TapAirdrop from "./pages/TapAirdrop";
import DailyBoost from "./pages/DailyBoost";
import SignupPage from "./pages/Signup";
import ActivityDashboard from "./pages/Activity";
import Loader from "./components/Loader"; // Create a loader component

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [telegram_id, setTelegramId] = useState(localStorage.getItem("telegram_id"));
  const [username, setUsername] = useState("Guest");
  const requestSent = useRef(false);

  // Check if the Telegram WebApp SDK is available
  const tg = window.Telegram;
  console.log(tg);  
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
      localStorage.setItem("telegram_id", initDataUnsafe.user.id); // Store telegram_id locally
    }
    setLoading(false); // Ensure loading is stopped after initialization
  }, []);


  
  // Fetch user info if the user is logged in
  const fetchUserInfo = async (telegramId) => {
    if (!telegramId) return;

    try {
      const response = await fetch(`/api/user-info?telegram_id=${telegramId}`);
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
      } else {
        console.error("Failed to fetch user info:", data.message);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    if (telegram_id) {
      fetchUserInfo(telegram_id);
    }
  }, [telegram_id]);

  // Protected route component to ensure users are authenticated
  const ProtectedRoute = ({ element }) => {
    if (loading) {
      return <Loader />; // Show loader while loading
    }
    return token ? element : <Navigate to="/signup" />;
  };

  return (


    <Router>
      {loading ? (
        <Loader /> // Show loader while the app is initializing
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<ProtectedRoute element={<Wallet />} />} />
          <Route path="/mining" element={<ProtectedRoute element={<Mining />} />} />
          <Route path="/quest" element={<ProtectedRoute element={<Quest />} />} />
          <Route path="/friends" element={<ProtectedRoute element={<Friends />} />} />
          <Route path="/withdraw" element={<ProtectedRoute element={<WithdrawPage />} />} />
          <Route path="/history" element={<ProtectedRoute element={<HistoryPage />} />} />
          <Route path="/send" element={<ProtectedRoute element={<Send />} />} />
          <Route path="/referral-list" element={<ProtectedRoute element={<ReferralList />} />} />
          <Route path="/leaderboard" element={<ProtectedRoute element={<Leaderboard />} />} />
          <Route path="/deposit" element={<ProtectedRoute element={<Deposit />} />} />
          <Route path="/tapairdrop" element={<ProtectedRoute element={<TapAirdrop />} />} />
          <Route path="/dailyboost" element={<ProtectedRoute element={<DailyBoost />} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/activity" element={<ProtectedRoute element={<ActivityDashboard />} />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
