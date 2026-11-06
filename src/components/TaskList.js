import { useTask } from "../hooks/useTask";
import RenderTask from "./RenderTask";

const TaskList = () => {
  const { dispatch, state } = useTask();

  const task = state.task.filter((task) => {
    if (state.filter === "COMPLETAS") return task.completed;
    if (state.filter === "AFAZER") return !task.completed;

    return true;
  });

  const handleToggle = (id) => {
    dispatch({ type: "CHANGE_TASK", payload: id });
  };

  return (
    <>
      {task.map((task) => (
        <RenderTask key={task.id} task={task} handleToggle={handleToggle} />
      ))}
    </>
  );
};

export default TaskList;
