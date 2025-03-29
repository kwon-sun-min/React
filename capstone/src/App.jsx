import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { useState } from "react";
import "./App.css";
import { cameraPosition } from "three/tsl";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return <primitive object={gltf.scene} scale={0.1} />;
};

function App() {
  const zoomLevel = 100; // 모델의 크기에 맞게, 줌 해줘야 보기좋음.
  const cameraPosition = [2 * zoomLevel, 2 * zoomLevel, 3 * zoomLevel];
  const fov = 120; // 시야각 개념으로, 모델을 볼 수 있는 각도

  return (
    <>
      <div className="App">
        <h1>Hello?</h1>

        <Canvas camera={{ position: cameraPosition, fov }}>
          <Model></Model>
          <OrbitControls />
          <Environment preset="park" background></Environment>
        </Canvas>
      </div>
    </>
  );
}

export default App;
