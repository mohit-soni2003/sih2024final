import React from 'react';
import './GameHome.css';
import Button from 'react-bootstrap/Button';
import Card1 from "../../components/utility/bootstrapCard/Card1"
import { Link } from 'react-router-dom';

export default function GameHome() {
  return (
    <div className="game-home-pg">
      <section className="game-section1">
        <div className="game-tag-line">
          Explore Space, Play Together, and <br /> reach for the Stars!...
        </div>
        <div className="explore-game-btn" >Explore Games</div>
      </section>

      <section className="game-section2">
        <div className="game-grid-container">
          <img src="/game/game1.png" alt="Image 1" className="game-grid-item" style={{ gridArea: '3/ 1' }} />
          <img src="/game/game2.png" alt="Image 2" className="game-grid-item" style={{ gridArea: '1 / 3' }} />
          <img src="/game/game3.png" alt="Image 3" className="game-grid-item" style={{ gridArea: '3 / 5' }} />
          <img src="/game/game4.png" alt="Image 4" className="game-grid-item" style={{ gridArea: '5/ 3' }} />
        </div>
      </section>

      <section className="game-section3">
        <div className="game-container">
          {/* //game1 */}
          <div className="game-row">
            <div className="game-content">
              <div className="game-name">In Cosmic Defender</div>
              <div className="game-description">In Cosmic Defender, players control a satellite navigating through space, using powerful weapons to destroy incoming meteors. The goal is to protect planets from destruction by eliminating threats before they hit.</div>
              <div className="play-game-btn"><Link to="https://present-chain.surge.sh/">Play now</Link></div>
            </div>
            <div className="game-image">
              <img src="/game/game10.png" alt="" />
            </div>
          </div>
          {/* //game1 */}
          <div className="game-row">
            <div className="game-image">
              <img src="/game/game1.jpg" alt="" />
            </div>
            <div className="game-content">
              <div className="game-name">Orbiting Weights</div>
              <div className="game-description">In Orbiting Weights, players input their Earth weight and explore how it changes on different planets, moons, and celestial bodies, learning about gravity’s effect in a fun, space-themed challenge.</div>
              <div className="play-game-btn">Play Now</div>
            </div>

          </div>
        </div>
      </section>
      <section className="game-section4">
        <div className="game-sec4-heading">Games Catalog</div>
        <div className="game-s4-contaier">
          <div style={styles.card}>
            <img
              src="/game/game1.png" // Replace with your image URL
              alt="Game Cover"
              style={styles.image}
            />
            <div style={styles.content}>
              <h2 style={styles.title}>In Cosmic Defender</h2>
              <p style={styles.text}>
              In Cosmic Defender, players control a satellite navigating through space, using powerful weapons to destroy incoming meteors. The goal is to protect planets from destruction by eliminating threats before they hit.
              </p>
              <button style={styles.button}>Play Game</button>
            </div>
          </div>
          <div style={styles.card}>
            <img
              src="/game/game2.png" // Replace with your image URL
              alt="Game Cover"
              style={styles.image}
            />
            <div style={styles.content}>
              <h2 style={styles.title}>Orbiting Weights</h2>
              <p style={styles.text}>
              In Orbiting Weights, players input their Earth weight and explore how it changes on different planets, moons, and celestial bodies, learning about gravity’s effect in a fun, space-themed challenge..
              </p>
              <button style={styles.button}>Play Game</button>
            </div>
          </div>
          <div style={styles.card}>
            <img
              src="/game/game3.png" // Replace with your image URL
              alt="Game Cover"
              style={styles.image}
            />
            <div style={styles.content}>
              <h2 style={styles.title}>In Cosmic Defender</h2>
              <p style={styles.text}>
              In Cosmic Defender, players control a satellite navigating through space, using powerful weapons to destroy incoming meteors. The goal is to protect planets from destruction by eliminating threats before they hit.
              </p>
              <button style={styles.button}>Play Game</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
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