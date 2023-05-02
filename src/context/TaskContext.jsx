import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import api from "../services/api";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    // Fetch tasks from the API
  }, []);

  const getTasks = async () => {
    try {
      const response = await api.get("/tasks", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await api.post("/tasks", task, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await api.put(`/tasks/${id}`, updatedTask, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, getTasks, createTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
