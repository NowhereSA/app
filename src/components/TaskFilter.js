import { useTask } from "../hooks/useTask";

export const TaskFilter = () => {
  const { state, dispatch } = useTask();

  return (
    <select
      value={state.filter}
      onChange={(e) => dispatch({ type: e.target.value })}
    >
      <option value="TODAS">Todos</option>
      <option value="COMPLETAS">Completos</option>
      <option value="AFAZER">A fazer</option>
    </select>
  );
};
