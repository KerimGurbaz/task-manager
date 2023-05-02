import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext";
import { UserContext, UserContextProvider } from "./context/UserContext";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <UserContextProvider>
        <TaskContextProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <PrivateRoute exact path="/tasks" component={TaskList} />
            <PrivateRoute path="/tasks/:id" component={TaskDetail} />
          </Routes>
        </TaskContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
