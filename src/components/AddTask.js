import { useState } from "react";
import { useTask } from "../hooks/useTask";

const AddTask = () => {
  const [name, setName] = useState("");
  const { dispatch } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }
    dispatch({ type: "ADD_TASK", payload: name });
    setName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: "start",
        margin: "16px",
      }}
    >
      <label htmlFor="task">Adicionar tarefa</label>
      <input
        id="task"
        value={name}
        placeholder="Nova tarefa"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit" className="btn">
        Adicionar
      </button>
    </form>
  );
};

export default AddTask;
