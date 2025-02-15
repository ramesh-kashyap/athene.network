import axios from "axios";

const Api = axios.create({
    baseURL: 'https://2d66-2405-201-5802-909b-4cac-1e0-1e00-4bb3.ngrok-free.app/api/', // Ensure this is your API's base URL
    headers: {
        'Content-Type': 'application/json', // Fixed 'Content-type' to 'Content-Type'
    },
});

// Interceptors for requests
// Api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error); // Handle request errors
//     }
// );

// Interceptors for responses
Api.interceptors.response.use(
    (response) => response, // Pass through successful responses
    (error) => {
        // Check if the response status is 401 (Unauthorized)
        if (error.response && error.response.status === 401) {
            window.location.href = '/signup'; // Redirect to login page
        }   
        return Promise.reject(error); // Handle other response errors
    }
);
const Api2 = axios.create({
    baseURL: 'https://836b-2405-201-5802-909b-4cac-1e0-1e00-4bb3.ngrok-free.app', // Make sure this is the correct backend port
  });
export const googleAuth = (code) => Api2.get(`api/google?code=${code}`);
export default Api;
