import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useFrame } from "@react-three/fiber";

// 3D 화분 컴포넌트
function Pot({ isRotating }) {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += isRotating ? 0.01 : 0;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.1}
      position={[0, -3, 0]}
    />
  );
}

const App = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isCurtainOpen, setIsCurtainOpen] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  const handleRotation = () => {
    setIsRotating(!isRotating);
    console.log(`블루투스 신호: 회전 ${!isRotating ? "시작" : "정지"}`);
  };

  const handleCurtain = () => {
    setIsCurtainOpen(!isCurtainOpen);
    console.log(`블루투스 신호: 가림막 ${!isCurtainOpen ? "열기" : "닫기"}`);
  };

  const handleConnect = () => {
    setIsConnected(!isConnected);
    console.log(`블루투스 ${!isConnected ? "연결" : "연결 해제"}`);
  };

  return (
    <Container>
      <Title>스마트팜 제어 시스템</Title>

      <CanvasContainer>
        <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Pot isRotating={isRotating} />
          <OrbitControls />
        </Canvas>

        {!isCurtainOpen && <Curtain />}
      </CanvasContainer>

      <ControlPanel>
        <Button onClick={handleConnect}>
          {isConnected ? "블루투스 연결 해제" : "블루투스 연결"}
        </Button>
        <Button onClick={handleRotation}>
          {isRotating ? "회전 정지" : "회전 시작"}
        </Button>
        <Button onClick={handleCurtain}>
          {isCurtainOpen ? "가림막 내리기" : "가림막 올리기"}
        </Button>
      </ControlPanel>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const CanvasContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export default App;
