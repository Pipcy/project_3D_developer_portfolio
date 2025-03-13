// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Instances, Instance, Preload } from "@react-three/drei";
// import * as THREE from "three";

// const NUM_BLOCKS = 50;
// const COLOR_PALETTE = [
//   new THREE.Color("#DB5A42"),
//   // new THREE.Color("#B3EDD7"),
//   // new THREE.Color("#B0DAEB"),
//   // new THREE.Color("#A467FF"),
//   // new THREE.Color("#ECF19E"),
// ];

// const FloatingBlocks = () => {
//   const ref = useRef();
  
//   // Generate random positions, speeds, and colors for each block
//   const positions = new Array(NUM_BLOCKS).fill().map(() => [
//     (Math.random() - 0.5) * 4,
//     (Math.random() - 0.5) * 2,
//     (Math.random() - 0.5) * 4,
//   ]);
//   const speeds = new Array(NUM_BLOCKS).fill().map(() => Math.random() * 0.3 + 0); // random speed between 0 and 0.5
//   const colors = new Array(NUM_BLOCKS).fill().map(() => COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)]);

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     ref.current.children.forEach((child, i) => {
//       child.position.y = positions[i][1] + 5 * Math.sin(t * speeds[i]) * 0.2; // 5 is the amplitude
//       child.rotation.x += 0.005;
//       child.rotation.y += 0.005;
//     });
//   });

//   return (
//     <Instances limit={NUM_BLOCKS} ref={ref}>
//         <boxGeometry args={[0.3, 0.3, 0.3]} />
//       <meshStandardMaterial vertexColors={false} />
//       {positions.map((pos, i) => (
//         <Instance key={i} position={pos} color={colors[i]} />
//       ))}
//     </Instances>
//   );
// };

// const FloatingBlocksCanvas = () => {
//   return (
//     <div className="w-full h-auto absolute inset-0 z-[-1]">
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[5, 5, 5]} />
//         <FloatingBlocks />
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default FloatingBlocksCanvas;
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei"; // Removed unused imports
import { COLOR_PALETTE } from "../../constants";
import * as THREE from "three";

const NUM_BLOCKS = 20;
const SHAPES = ["box", "sphere", "cone", "torus"];

const FloatingBlocks = () => {
  const ref = useRef();
  
  // Generate random positions, speeds, directions, and colors for each block
  const positions = new Array(NUM_BLOCKS).fill().map(() => [
    (Math.random() - 0.5) * 4,
    (Math.random() - 0.5) * 2,
    (Math.random() - 0.5) * 4,
  ]);
  const speeds = new Array(NUM_BLOCKS).fill().map(() => Math.random() * 0.3 + 0); // random speed between 0 and 0.3
  const rotationDirections = new Array(NUM_BLOCKS).fill().map(() => [
    Math.random() < 0.5 ? 1 : -1, // randomize clockwise or counterclockwise for x-axis
    Math.random() < 0.5 ? 1 : -1, // randomize for y-axis
    Math.random() < 0.5 ? 1 : -1, // randomize for z-axis
  ]);
  
  // Directly use the hex color string from COLOR_PALETTE
  const colors = new Array(NUM_BLOCKS).fill().map(() => COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)]);
  const shapeTypes = new Array(NUM_BLOCKS).fill().map(() => SHAPES[Math.floor(Math.random() * SHAPES.length)]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.children.forEach((child, i) => {
      child.position.y = positions[i][1] + 8 * Math.sin(t * speeds[i]) * 0.2; // 5 is the amplitude
      // Random rotation on each axis for each block
      child.rotation.x += rotationDirections[i][0] * 0.005 * speeds[i];
      child.rotation.y += rotationDirections[i][1] * 0.005 * speeds[i];
      child.rotation.z += rotationDirections[i][2] * 0.005 * speeds[i];
    });
  });

  return (
    <group ref={ref}>
      {shapeTypes.map((shape, i) => (
        <mesh key={i} position={positions[i]}>
          {shape === "box" && <boxGeometry args={[0.3, 0.3, 0.3]} />}
          {shape === "sphere" && <sphereGeometry args={[0.3, 16, 16]} />}
          {shape === "cone" && <coneGeometry args={[0.2, 0.5, 16]} />}
          {shape === "torus" && <torusGeometry args={[0.2, 0.08, 16, 32]} />}
          {/* Directly pass the hex color string to the material */}
          <meshStandardMaterial color={colors[i]} />
        </mesh>
      ))}
    </group>
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