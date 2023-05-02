import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/tasks");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const signup = async (email, password, username) => {
    try {
      const response = await authService.signup(email, password, username);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/tasks");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};
