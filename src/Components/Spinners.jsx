import React from "react";
import { ScaleLoader } from "react-spinners";

const Spinners = () => {
  return (
    <ScaleLoader
      color="#f87b15"
      cssOverride={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        borderColor: "#f87b15",
        textAlign: "center",
      }}
      size={150}
      aria-label="Loading..."
      data-testid="loader"
    />
  );
};

export default Spinners;
