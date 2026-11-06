import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTask = () => {
  const task = useContext(TaskContext);
  if (!task) {
    throw new Error("useTask precisa do provider");
  }
  return task;
};
