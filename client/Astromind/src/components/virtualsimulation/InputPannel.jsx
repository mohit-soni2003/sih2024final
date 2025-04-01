import React, { useState } from "react";

const InputPanel = ({ onSubmit }) => {
  const [gravity, setGravity] = useState(1); // Default value in terms of g
  const [oxygen, setOxygen] = useState(21); // Default percentage
  const [surface, setSurface] = useState("Solid"); // Default surface type

  const handleSubmit = () => {
    const inputData = {
      gravity,
      oxygen,
      surface,
    };
    onSubmit(inputData);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        width: "300px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: "15px",
        borderRadius: "10px",
        border: "2px solid #ffffff",
        color: "#ffffff",
        zIndex: 10,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3 style={{ marginBottom: "10px", textAlign: "center" }}>Planet Parameters</h3>
      <label>
        <span>Gravity (g):</span>
        <input
          type="number"
          value={gravity}
          onChange={(e) => setGravity(parseFloat(e.target.value))}
          style={{
            margin: "5px 0",
            padding: "5px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <label>
        <span>Oxygen %:</span>
        <input
          type="number"
          value={oxygen}
          onChange={(e) => setOxygen(parseFloat(e.target.value))}
          style={{
            margin: "5px 0",
            padding: "5px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <label>
        <span>Surface Type:</span>
        <select
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
          style={{
            margin: "5px 0",
            padding: "5px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="Solid">Solid</option>
          <option value="Liquid">Liquid</option>
          <option value="Gaseous">Gaseous</option>
        </select>
      </label>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          backgroundColor: "#007BFF",
          border: "none",
          color: "#fff",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Get AI Suggestion
      </button>
    </div>
  );
};

export default InputPanel;