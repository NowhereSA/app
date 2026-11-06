import React from "react";

const Center = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        minHeight: "90vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default Center;
