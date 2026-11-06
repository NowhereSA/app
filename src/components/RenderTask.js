import Row from "./Row";

const RenderTask = ({ task: { id, name, completed }, handleToggle }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Row>
        <p>{id}</p>
        <p style={{ textDecoration: completed ? "line-through" : "none" }}>
          {name}
        </p>
        <input
          type="checkbox"
          id={id}
          name={name}
          value="excluir"
          checked={completed}
          onChange={() => {
            handleToggle(id);
          }}
        />
      </Row>
    </div>
  );
};

export default RenderTask;
