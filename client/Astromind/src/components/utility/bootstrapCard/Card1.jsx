import React from "react";

const Card1 = () => {
  return (
    <div style={styles.card}>
      <img
        src="/game/game1.png" // Replace with your image URL
        alt="Game Cover"
        style={styles.image}
      />
      <div style={styles.content}>
        <h2 style={styles.title}>{props.title}</h2>
        <p style={styles.text}>
          {props.desc}
        </p>
        <button style={styles.button}>Play Game</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    margin: "auto",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "16px",
  },
  title: {
    fontSize: "1.5rem",
    margin: "8px 0",
  },
  text: {
    fontSize: "1rem",
    margin: "8px 0",
    color: "#d3d3d3",
  },
  button: {
    backgroundColor: "#e63946",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 16px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default Card1;
