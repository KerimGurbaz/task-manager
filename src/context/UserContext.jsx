import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/authService";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const login = async (email, password) => {
    // Log the user in, update the state and navigate
  };

  const logout = () => {
    // Log the user out, update the state and navigate
  };

  const signup = async (email, password, username) => {
    // Sign the user up, update the state and navigate
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};
