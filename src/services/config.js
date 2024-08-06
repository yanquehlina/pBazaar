import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseUrl,
});

export const getToken = () => localStorage.getItem("accessToken");

export const clearToken = () => localStorage.removeItem("accessToken");

//Interceptor to add token to authorization header for every request
apiClient.interceptors.request.use(
  (config) => {
    // Check if there's a token in localStorage
    const token = getToken();
    if (token) {
      // Set the token in the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // If request error (e.g., network failure), handle it here
    return Promise.reject(error);
  }
);

// Another interceptor to handle response errors
apiClient.interceptors.response.use(
  (response) => {
    // If a response is received, just return it unchanged
    return response;
  },
  (error) => {
    // If there's an error in the response (like a 401), handle it here
    if (error.response.status === 401) {
      // remove accessToken from local storage
      clearToken();
      // Handle 401 error (e.g., logout user and redirect to login page)
      window.location.replace("/login");
    }
    if (error.response.status === 404) {
      toast.error("Not found");
    }
    // Return the error so the promise is rejected
    return Promise.reject(error);
  }
);