import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

const FloatingBlocks = () => {
  const ref = useRef();
  const numBlocks = 50;
  
  // Generate random positions and colors for blocks
  const [blocks] = useState(() =>
    new Array(numBlocks).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 4,
      ],
      color: new THREE.Color(Math.random(), Math.random(), Math.random()),
      speed: Math.random() * 0.5 + 0.5, // Different float speeds
    }))
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.children.forEach((child, i) => {
      child.position.y = blocks[i].position[1] + Math.sin(t * blocks[i].speed) * 0.2;
      child.rotation.x += 0.005;
      child.rotation.y += 0.005;
    });
  });

  return (
    <group ref={ref}>
      {blocks.map((block, i) => (
        <mesh key={i} position={block.position}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color={block.color} />
        </mesh>
      ))}
    </group>
  );
};

const FloatingBlocksCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
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
