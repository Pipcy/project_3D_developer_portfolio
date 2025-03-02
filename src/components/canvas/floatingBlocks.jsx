import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Instances, Instance, Preload } from "@react-three/drei";
import * as THREE from "three";

const NUM_BLOCKS = 50;
const COLOR_PALETTE = [
  new THREE.Color("#FFAB98"),
  new THREE.Color("#B3EDD7"),
  new THREE.Color("#B0DAEB"),
  new THREE.Color("#A467FF"),
  new THREE.Color("#ECF19E"),
];

const FloatingBlocks = () => {
  const ref = useRef();
  
  // Generate random positions, speeds, and colors for each block
  const positions = new Array(NUM_BLOCKS).fill().map(() => [
    (Math.random() - 0.5) * 4,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 4,
  ]);
  const speeds = new Array(NUM_BLOCKS).fill().map(() => Math.random() * 0.3 + 0); // random speed between 0 and 0.5
  const colors = new Array(NUM_BLOCKS).fill().map(() => COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.children.forEach((child, i) => {
      child.position.y = positions[i][1] + 5 * Math.sin(t * speeds[i]) * 0.2; // 5 is the amplitude
      child.rotation.x += 0.005;
      child.rotation.y += 0.005;
    });
  });

  return (
    <Instances limit={NUM_BLOCKS} ref={ref}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial vertexColors={false} />
      {positions.map((pos, i) => (
        <Instance key={i} position={pos} color={colors[i]} />
      ))}
    </Instances>
  );
};

const FloatingBlocksCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <FloatingBlocks />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default FloatingBlocksCanvas;