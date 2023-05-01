import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the API
  }, []);

  const getTasks = async () => {
    // Fetch tasks and update the state
  };

  const createTask = async (task) => {
    // Create a new task and update the state
  };

  const updateTask = async (id, updatedTask) => {
    // Update an existing task and update the state
  };

  const deleteTask = async (id) => {
    // Delete a task and update the state
  };

  return (
    <TaskContext.Provider
      value={{ tasks, getTasks, createTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
