import "./Solar.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Link } from "react-router-dom";

// GLB Model component
function GLBModel({ glbPath }) {
  const { scene } = useGLTF(glbPath);
  return <primitive object={scene} scale={1} />;
}

// TDRenderer component
function TDRenderer({ glbPath, onBack }) {
  return (
    <div>
      {/* <div className="td-model-desc">Model Name</div> */}
      <div style={{ width: "80%", height: "80vh", margin:"50px auto", border: "1px solid #ccc", borderRadius:"20px" }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <GLBModel glbPath={glbPath} />
        </Canvas>
      </div>
      <button onClick={onBack} style={{ margin: "10px", padding: "5px 10px" }}>
        Back to Models
      </button>
    </div>
  );
}

export default function Solar() {
  const [currentModel, setCurrentModel] = useState(null); // State for selected model
  const [viewRenderer, setViewRenderer] = useState(false); // State to toggle between components

  return (
    <>
      {viewRenderer ? (
        // Render TDRenderer when viewRenderer is true
        <TDRenderer
          glbPath={currentModel}
          onBack={() => setViewRenderer(false)} // Go back to model selection
        />
      ) : (
        <>
        <div id="solar-modal-f">
          <iframe 
              src="https://eyes.nasa.gov/apps/solar-system/#/sc_jwst?embed=true" 
              title="NASA Solar System Interactive" 
              class="smd-iframe" 
              allowfullscreen>
          </iframe>
        </div>


          {/* Cards for Models */}
          <div className="solar-card-container">
            <div className="solar-model-card">
              <img src="/solarModel/atlas.jpg" alt="" />
              <div className="model-name">Atlas</div>
              <div className="model-desc">
                Rocket launching pad with smoke effects and realistic fire plumes.
              </div>
              <div
                className="visit-model"
                onClick={() => {
                  setCurrentModel("/models/Atlas6.glb");
                  setViewRenderer(true); // Switch to TDRenderer
                }}
              >
                Visit Model
              </div>
            </div>

            {/* Add other cards similarly */}
            <div className="solar-model-card">
              <img src="/solarModel/black hole.webp" alt="" />
              <div className="model-name">Black Hole</div>
              <div className="model-desc">
                A realistic 3D model of the Sun with dynamic flares.
              </div>
              <div
                className="visit-model"
                onClick={() => {
                  setCurrentModel("/models/black_hole.glb");
                  setViewRenderer(true); // Switch to TDRenderer
                }}
              >
                Visit Model
              </div>
            </div>
            <div className="solar-model-card">
              <img src="/solarModel/saturn.webp" alt="" />
              <div className="model-name">Saturn</div>
              <div className="model-desc">
                A realistic 3D model of the Sun with dynamic flares.
              </div>
              <div
                className="visit-model"
                onClick={() => {
                  setCurrentModel("/models/saturn_planet.glb");
                  setViewRenderer(true); // Switch to TDRenderer
                }}
              >
                Visit Model
              </div>
            </div>
            <div className="solar-model-card">
              <img src="/solarModel/earth.webp" alt="" />
              <div className="model-name">Black Hole</div>
              <div className="model-desc">
                A realistic 3D model of the Sun with dynamic flares.
              </div>
              <div
                className="visit-model"
                onClick={() => {
                  setCurrentModel("/models/earth.glb");
                  setViewRenderer(true); // Switch to TDRenderer
                }}
              >
                Visit Model
              </div>
            </div>
            <div className="solar-model-card">
              <img src="/solarModel/solar system.webp" alt="" />
              <div className="model-name">Space Shuttle</div>
              <div className="model-desc">
                A realistic 3D model of the Sun with dynamic flares.
              </div>
              <div
                className="visit-model"
                onClick={() => {
                  setCurrentModel("/models/space_shuttle_002.glb");
                  setViewRenderer(true); // Switch to TDRenderer
                }}
              >
                Visit Model
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
