import axios from "axios";

const rawUrl = import.meta.env.VITE_API_URL || "";
const apiBaseURL = rawUrl.endsWith("/api")
  ? rawUrl
  : `${rawUrl.replace(/\/$/, "")}/api`;

const API = axios.create({
  baseURL: apiBaseURL,
  headers: { "Content-Type": "application/json" },
});

// Attach token to requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("portfolio_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Handle responses
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("portfolio_token");
    }
    return Promise.reject(error);
  },
);

export default API;
