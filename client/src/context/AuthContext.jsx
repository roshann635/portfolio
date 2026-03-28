/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import API from "../services/api";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("portfolio_token");
    if (token) {
      API.get("/auth/me")
        .then((res) => setUser(res.data.data))
        .catch(() => localStorage.removeItem("portfolio_token"))
        .finally(() => setLoading(false));
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("portfolio_token", res.data.data.token);
    setUser(res.data.data.user);
    return res.data;
  };

  const register = async (name, email, password) => {
    const res = await API.post("/auth/register", { name, email, password });
    localStorage.setItem("portfolio_token", res.data.data.token);
    setUser(res.data.data.user);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("portfolio_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
