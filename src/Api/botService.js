import axios from 'axios';
import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://24aa-2405-201-5802-909b-303c-4e44-8967-d49b.ngrok-free.app/api/', // Ensure backend is running
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach token (if available)
Api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    // console.log("Token in localStorage (telegram_id):", localStorage.getItem('telegram_id'));
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
// Response interceptor to log responses and handle errors
// Api.interceptors.response.use(
//   response => {
//     console.log("API Response:", response);
//     return response;
//   },
//   error => {
//     console.error("🛑 API Error:", error);
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("token");
//       window.location.href = '/register';
//     }
//     return Promise.reject(error);
//   }
// );

export default Api;
