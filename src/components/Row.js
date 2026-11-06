const Row = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr 100px",
        alignItems: "center",
        textAlign: "center",
        width: "min(500px, 90vw)",
      }}
    >
      {children}
    </div>
  );
};

export default Row;
