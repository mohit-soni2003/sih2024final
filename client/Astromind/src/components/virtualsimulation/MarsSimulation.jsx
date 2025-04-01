import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import InputPanel from "./InputPannel";

const MarsSimulation = () => {
  const mountRef = useRef(null);
  const [aiResult, setAiResult] = useState("");

  // AI Prediction Logic
  const getAISuggestion = async (data) => {
    const { gravity, oxygen, surface } = data;

    // Example AI logic for Safe/Danger prediction
    if (gravity <=42.5 && oxygen >= 19.5 && surface === "Solid") {
      setAiResult("Safe");
    } else {
      setAiResult("Danger");
    }
  };

  const handleInputSubmit = (inputData) => {
    console.log("Input Data:", inputData);
    getAISuggestion(inputData);
  };

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Set Mars-Like Background Color
    renderer.setClearColor(0xcc8e35);

    // Add Fog for Atmosphere
    scene.fog = new THREE.FogExp2(0xcc8e35, 0.015);

    // Add Lighting
    const ambientLight = new THREE.AmbientLight(0xffe0a6, 0.4); // Warm light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    // Add Sun
    const sunGeometry = new THREE.SphereGeometry(6, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700, emissive: 0xffa500 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0, 20, -80); // Above the horizon
    scene.add(sun);

    // Sunlight
    const sunLight = new THREE.PointLight(0xfff1a0, 5, 500, 2); // Bright light
    sunLight.position.copy(sun.position);
    scene.add(sunLight);

    // Glow Effect for Sun
    const glowGeometry = new THREE.SphereGeometry(6.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      transparent: true,
      opacity: 0.7,
    });
    const sunGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    sunGlow.position.copy(sun.position);
    scene.add(sunGlow);

    // Add Clouds (Lowered Position)
    const cloudTexture = new THREE.TextureLoader().load("/cloud_texture.png");
    const clouds = [];
    for (let i = 0; i < 10; i++) {
      const cloudGeometry = new THREE.PlaneGeometry(50, 30);
      const cloudMaterial = new THREE.MeshBasicMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.6,
      });
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloud.position.set(
        Math.random() * 200 - 100,
        Math.random() * 15 + 10, // Lowered height closer to terrain
        Math.random() * -100
      );
      cloud.rotation.y = Math.random() * Math.PI * 2;
      clouds.push(cloud);
      scene.add(cloud);
    }

    // Add Mars Terrain
    const marsTexture = new THREE.TextureLoader().load("/mars_texture.jpg");
    const marsHeightMap = new THREE.TextureLoader().load("/mars_heightmap.jpg");

    const terrainGeometry = new THREE.PlaneGeometry(200, 200, 256, 256);
    const terrainMaterial = new THREE.MeshStandardMaterial({
      map: marsTexture,
      displacementMap: marsHeightMap,
      displacementScale: 8,
    });

    const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrain.rotation.x = -Math.PI / 2; // Lay flat
    terrain.receiveShadow = true;
    scene.add(terrain);

    // Add Space Suit Model
    const loader = new GLTFLoader();
    let spaceSuit;
    loader.load("/space_suit_model.glb", (gltf) => {
      spaceSuit = gltf.scene;
      spaceSuit.scale.set(1, 1, 1);
      spaceSuit.position.set(0, 5, 0); // Start position
      spaceSuit.castShadow = true;
      scene.add(spaceSuit);
    });

    // Add Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 5, 0); // Focus on the space suit
    controls.update();

    // Camera Position
    camera.position.set(0, 20, 50);
    camera.lookAt(0, 0, 0);

    // Movement Controls for Space Suit
    const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

    window.addEventListener("keydown", (e) => {
      if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
    });

    window.addEventListener("keyup", (e) => {
      if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate Sun and Glow
      sun.rotation.y += 0.005;
      sunGlow.rotation.y += 0.005;

      // Move Clouds Slowly
      clouds.forEach((cloud) => {
        cloud.position.x -= 0.1;
        if (cloud.position.x < -100) {
          cloud.position.x = 100;
        }
      });

      // Move Space Suit
      if (spaceSuit) {
        if (keys.ArrowUp) spaceSuit.position.z -= 0.5;
        if (keys.ArrowDown) spaceSuit.position.z += 0.5;
        if (keys.ArrowLeft) spaceSuit.position.x -= 0.5;
        if (keys.ArrowRight) spaceSuit.position.x += 0.5;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", () => {});
      window.removeEventListener("keyup", () => {});
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <InputPanel onSubmit={handleInputSubmit} />
      <div
        style={{
          position: "absolute",
          left: "20px",
          bottom: "40%", // 40% height from bottom
          width: "300px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: "10px",
          borderRadius: "10px",
          border: "2px solid #ffffff",
          color: "#ffffff",
          zIndex: 10,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h3 style={{ textAlign: "center" }}>AI Result</h3>
        <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>{aiResult}</p>
      </div>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default MarsSimulation;