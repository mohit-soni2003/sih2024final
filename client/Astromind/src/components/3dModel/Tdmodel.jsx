import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"


import "./Tdmodel.css"
export default function Tdmodel() {
  return (
    <div className="model-page">
      {/* --------------------------------- */}
      <section className="model-section1">
        <div className="model-tagline">
          Immerse yourself in space with stunning 3D visualizations...!
          <br />
          <Button style={{ fontSize: "1.7rem", padding: "5px 15px" }} variant="outline-info">Explore Models</Button>

        </div>

        <div className="model-tag-video">
          <video autoPlay muted loop >
            <source src="/video/video3d.mp4" type="video/mp4" />
            <source src="path_to_video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* ------------------------------------- */}

      <section className="modal-section2">
        <div className="sec2-modal-heading">
          Various Categeories
        </div>

        <div className="model-cat-container">
          <Link to="/3dmodel/solar">
            <div className="card">
              <img
                src="/tdmodel/solarsystem.png"
                alt="Card"
                className="card-image"
              />
              <div className="card-overlay">
                <p className="card-text">Solar system</p>
              </div>
            </div>
          </Link>
          <Link to="/tdmodel/rover">
            <div className="card">
              <img
                src="/tdmodel/astm.webp"
                alt="Card"
                className="card-image"
              />
              <div className="card-overlay">
                <p className="card-text">Asteroids and Meteor</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="card">
              <img
                src="/tdmodel/io.png"
                alt="Card"
                className="card-image"
              />
              <div className="card-overlay">
                <p className="card-text">Celestial Event</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className="card">
              <img
                src="/tdmodel/sse.webp"
                alt="Card"
                className="card-image"
              />
              <div className="card-overlay">
                <p className="card-text">Space Suits and Equipment</p>
              </div>
            </div>
          </Link>
          <Link>
          <div className="card">
            <img
              src="/tdmodel/celestialevent.webp"
              alt="Card"
              className="card-image"
              />
            <div className="card-overlay">
              <p className="card-text">Interstial Object</p>
            </div>
          </div>
              </Link>

        </div>
      </section>
    </div>
  )
}
