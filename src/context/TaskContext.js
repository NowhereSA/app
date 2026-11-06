import { createContext, useReducer } from "react";

export const TaskContext = createContext();

const initialTask = [
  { id: 1, name: "lavar a louça", completed: false },
  { id: 2, name: "levar o lixo pra fora", completed: false },
  { id: 3, name: "olhar o óleo do carro", completed: true },
];

const initialState = {
  task: initialTask,
  filter: "TODAS",
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "TODAS":
      return { ...state, filter: "TODAS" };

    case "COMPLETAS":
      return { ...state, filter: "COMPLETAS" };

    case "AFAZER":
      return { ...state, filter: "AFAZER" };
    case "ADD_TASK": {
      const newTask = {
        id: Date.now(),
        name: action.payload,
        completed: false,
      };
      const newTasks = [...state.task, newTask];
      return { ...state, task: newTasks };
    }

    case "CHANGE_TASK": {
      const updatedTasks = state.task.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );

      return {
        ...state,
        task: updatedTasks,
      };
    }
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
