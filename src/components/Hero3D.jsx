

// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import Spline from '@splinetool/react-spline';

// const Hero3D = () => {
//   return (
    
//     <section className="relative w-full h-screen flex flex-col justify-center items-center text-center mx-auto px-4">
      
//       <div className="max-w-7xl">
        
//         {/* Name & Title Section */}
//         <h2 className="text-purple-400 text-lg font-semibold uppercase tracking-wide">
//           Prototyper,
//         </h2>
//         <h1 className="text-5xl font-extrabold uppercase mt-2">
//           Computer Engineer
//         </h1>
//         <p className="text-gray-400 text-sm mt-1">// Robotics & Machine Learning</p>

//         <h1 className="text-[145px] font-bold ">
//           PIPPI PI
//         </h1>

//         <h3 className="mt-4 text-xl">
//           <span className="text-green-400 font-bold uppercase">Artist</span>,
//           <span className="text-pink-400 font-bold uppercase"> Designer</span>,
//           <span className="text-yellow-400 font-bold uppercase"> & Developer.</span>
//         </h3>
//         <p className="text-gray-400 text-sm mt-1">// Game Design</p>

//         {/* Location */}
//         <p className="mt-4">
//           United States <span className="text-red-500">📍</span>
//         </p>

//         {/* Buttons */}
//         <div className="mt-6 flex gap-4 justify-center">
//           <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full shadow-md">
//             Connect w/ me
//           </button>
//           <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full shadow-md">
//             Download Resume
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero3D;

// import { OrbitControls  } from "@react-three/drei";
// import { BallCollider, CuboidCollider, RigidBody } from "@react-three/rapier";
// import { Box,  Sphere, Torus } from "@react-three/drei";
// import { useRef, useState } from "react";

// export const Hero3D = () => {

//     const [hover, setHover] = useState(false);
//     const cube = useRef(null);
//     const jump = () => {
//         cube.current.applyImpulse({ x: 0, y: 10, z: 0 }, true);
//     }

//     return (
//        <>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <OrbitControls />

//         {/* blue ball */}
//         <RigidBody position={[1, 5, 0]}  colliders={false}>
//             <BallCollider args={[1]} position={[0, 1, 0]} />
//             <Sphere position-y={1}>
//                 <meshStandardMaterial color="blue"/>
//             </Sphere>
        
//             <Torus>
//                 <meshStandardMaterial color="yellow" />
//             </Torus>
//         </RigidBody>
        
//         {/* pink cube */}
//         <RigidBody position={[0, 3, 0]} ref={cube} colliders="cuboid">
//             <Box onPointerEnter={() => setHover(true)}
//                 onPointerLeave={() => setHover(false)}
//                 onClick={jump}
//             >
//                 <meshStandardMaterial color={hover? "hotpink":"royalblue"} />
//             </Box>
//         </RigidBody>

//         {/* green plane */}
//         <RigidBody type="fixed">
//             <Box position={[0, 0, 0]} args={[10,1,10]}>
//                 <meshStandardMaterial attach="material" color="springgreen" />
//             </Box>
//         </RigidBody>

//         {/* yellow torus */}
//         <RigidBody position={[0, 7, 0]} colliders="trimesh"> 
            
//         </RigidBody>

//        </>
//     );
//  };

//  export default Hero3D;

// ========================================================


// import { OrbitControls } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import { Box, Sphere, Torus, Text3D } from "@react-three/drei";
// import { useRef, useState, useEffect } from "react";

// export const Hero3D = () => {
//   const [hover, setHover] = useState(false);
//   const cube = useRef(null);

//   useEffect(() => {
//     console.log("Cube ref:", cube.current); // Debugging to check if ref is assigned
//   }, []);

//   const jump = () => {
//     if (cube.current) {
//       console.log("Jump triggered!"); // Debugging
//       cube.current.applyImpulse({ x: 0, y: 10, z: 0 });
//     }
//   };

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <OrbitControls 
//         enableZoom={true} enableRotate={true} enablePan={true} target={[0, 0, 0]}
//       />

//       {/* words */}
//         <RigidBody type="dynamic" restitution={0.5} friction={1} position={[-2, 3, 0]} rotation={[-Math.PI / 2, 0, 0]}>       
//             <Text3D font="/fonts/helvetiker_regular.typeface.json" size={0.3} height={0.2}>
//                 PROTOTYPER,
//             <meshStandardMaterial color={hover ? "hotpink" : "white"} />
//             </Text3D> 
//         </RigidBody>
       
//         <RigidBody type="dynamic" restitution={0.5} friction={1} position={[-2, 3, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>       
//             <Text3D font="/fonts/helvetiker_regular.typeface.json" size={0.3} height={0.2}>
//                 COMPUTER ENGINEER
//             <meshStandardMaterial color={hover ? "hotpink" : "white"} />
//             </Text3D> 
//         </RigidBody>

//         <RigidBody type="dynamic" restitution={0.5} friction={1} position={[-2, 3, 2]} rotation={[-Math.PI / 2, 0, 0]} >       
//             <Text3D font="/fonts/helvetiker_regular.typeface.json" size={1} height={0.5}>
//                 EVONI EL
//                 <meshPhysicalMaterial
//                   color={hover ? "hotpink" : "white"} 
//                   opacity={0.7} // Set transparency level (higher opacity = more matte)
//                   transparent={true} // Make it transparent
//                   roughness={0.7} // High roughness for a matte effect
//                   metalness={0.2} // No metallic properties
//                   clearcoat={1} // Clearcoat layer for a subtle glossy top layer (glass look)
//                   clearcoatRoughness={0.4} // Slightly rough clearcoat to avoid high gloss
//                 />
//             </Text3D> 
//         </RigidBody>

//         <RigidBody type="dynamic" restitution={0.5} friction={1} position={[-2, 3, 2.5]} rotation={[-Math.PI / 2, 0, 0]} >       
//             <Text3D font="/fonts/helvetiker_regular.typeface.json" size={.4} height={0.2}>
//                 DESIGNER
//             <meshStandardMaterial color={hover ? "hotpink" : "white"} />
//             </Text3D> 
//         </RigidBody>

//         <RigidBody type="dynamic" restitution={0.5} friction={1} position={[-2, 3, 3.2]} rotation={[-Math.PI / 2, 0, 0]} >       
//             <Text3D font="/fonts/helvetiker_regular.typeface.json" size={.5} height={0.2}>
//                 DEVELOPER
//             <meshStandardMaterial color={hover ? "hotpink" : "white"} />
//             </Text3D> 
//         </RigidBody>

//         <RigidBody type="dynamic" restitution={0.5} friction={1} position={[-2, 3, 3.5]} rotation={[-Math.PI / 2, 0, 0]} >       
//             <Text3D font="/fonts/helvetiker_regular.typeface.json" size={.2} height={0.2}  onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
//                 ARTIST
//             <meshStandardMaterial color={hover ? "hotpink" : "white"} />
//             </Text3D> 
//         </RigidBody>


        


//       {/* Blue Ball */}
//       {/* <RigidBody position={[1, 5, 0]} colliders="ball">
//         <Sphere position-y={1}>
//           <meshStandardMaterial color="blue" />
//         </Sphere>
//         <Torus>
//           <meshStandardMaterial color="yellow" />
//         </Torus>
//       </RigidBody> */}

//       {/* Pink Cube with Click Interaction */}
//       <RigidBody ref={cube} position={[6, 3, 0]} colliders="cuboid" type="dynamic">
//         <Box
//           onPointerEnter={() => setHover(true)}
//           onPointerLeave={() => setHover(false)}
//           onClick={jump}
//         >
//           <meshStandardMaterial color={hover ? "hotpink" : "royalblue"} />
//         </Box>
//       </RigidBody>

//       {/* Green Plane */}
//       <RigidBody type="fixed" friction={2}>
//         <Box position={[0, 0, 0]} args={[20, 1, 20]}>
//             <meshStandardMaterial
//             attach="material"
//             color="springgreen"
//             opacity={0}   // Adjust opacity (0 is fully transparent, 1 is fully opaque)
//             transparent={true}  // Enable transparency
//             />
//         </Box>
//       </RigidBody>
//     </>
//   );
// };

// export default Hero3D;


// // 
// import { OrbitControls } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import { Text3D } from "@react-three/drei";
// import { useRef, useState, useEffect } from "react";

// const TEXTS = [
//   { text: "PROTOTYPER,", size: 0.3, height: 0.2, position: [-2, 3, 0] ,interactive: true },
//   { text: "COMPUTER ENGINEER", size: 0.3, height: 0.2, position: [-2, 3, 0.6] ,interactive: true },
//   { text: "EVONI EL", size: 1, height: 0.5, position: [-2, 3, 2], material: "physical",interactive: true  },
//   { text: "DESIGNER", size: 0.4, height: 0.2, position: [-2, 3, 2.5],interactive: true  },
//   { text: "DEVELOPER", size: 0.5, height: 0.2, position: [-2, 3, 3.2],interactive: true  },
//   { text: "ARTIST", size: 0.2, height: 0.2, position: [-2, 3, 3.5], interactive: true },
// ];

// export const Hero3D = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const cube = useRef(null);

//   useEffect(() => {
//     console.log("Cube ref:", cube.current);
//   }, []);

//   const jump = () => {
//     if (cube.current) {
//       console.log("Jump triggered!");
//       cube.current.applyImpulse({ x: 0, y: 10, z: 0 });
//     }
//   };

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <OrbitControls enableZoom enableRotate enablePan target={[0, 0, 0]} />

//       {TEXTS.map(({ text, size, height, position, material, interactive }, index) => (
//         <RigidBody key={index} type="dynamic" restitution={0.5} friction={1} position={position} rotation={[-Math.PI / 2, 0, 0]}>
//           <Text3D font="/fonts/helvetiker_regular.typeface.json" size={size} height={height} 
//             onPointerEnter={interactive ? () => setHoveredIndex(index) : undefined} 
//             onPointerLeave={interactive ? () => setHoveredIndex(null) : undefined}>
//             {text}
//             {material === "physical" ? (
//               <meshPhysicalMaterial
//                 color={hoveredIndex === index ? "hotpink" : "white"}
//                 opacity={0.7} 
//                 transparent 
//                 roughness={0.7} 
//                 metalness={0.2} 
//                 clearcoat={1} 
//                 clearcoatRoughness={0.4}
//               />
//             ) : (
//               <meshStandardMaterial color={hoveredIndex === index ? "hotpink" : "white"} />
//             )}
//           </Text3D>
//         </RigidBody>
//       ))}

//       <RigidBody ref={cube} position={[6, 3, 0]} colliders="cuboid" type="dynamic">
//         <mesh
//           onPointerEnter={() => setHoveredIndex("cube")}
//           onPointerLeave={() => setHoveredIndex(null)}
//           onClick={jump}
//         >
//           <boxGeometry />
//           <meshStandardMaterial color={hoveredIndex === "cube" ? "hotpink" : "royalblue"} />
//         </mesh>
//       </RigidBody>

//       <RigidBody type="fixed" friction={2}>
//         <mesh position={[0, 0, 0]}>
//           <boxGeometry args={[20, 1, 20]} />
//           <meshStandardMaterial color="springgreen" opacity={0} transparent />
//         </mesh>
//       </RigidBody>
//     </>
//   );
// };

// export default Hero3D;


// import { OrbitControls } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import { Text3D, Sphere } from "@react-three/drei";
// import { useRef, useState, useEffect } from "react";
// import { COLOR_PALETTE } from "../constants";
// import { useSpring, a } from "@react-spring/three"; // Import useSpring for animation

// const h = 3

// const TEXTS = [
//   { text: "PROTOTYPER", size: 0.3, height: 0.2, position: [-2, h+4, 0],interactive: true},
//   { text: "COMPUTER ENGINEER", size: 0.3, height: 0.2, position: [-2, h+5, 0.5] , interactive: true},
  
//   { text: "DESIGNER", size: 0.4, height: 0.2, position: [-2, h+7, 2.5] ,interactive: true},
//   { text: "DEVELOPER", size: 0.5, height: 0.2, position: [-2, h+8, 3.2] , interactive: true},
//   { text: "ARTIST", size: 0.25, height: 0.2, position: [-2, h+9, 3.7],interactive: true },
// ];

// const NAMES = [
//   { text: "PIPPI", size: 1, height: 0.5, position: [-2, h+6, 2], material: "physical" ,interactive: true},
//   { text: "PI", size: 1, height: 0.5, position: [1.2, h+6.3, 2.2], material: "physical" ,interactive: true}
// ]



// export const Hero3D = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [ballPosition, setBallPosition] = useState([1, 5, 0]);
//   const [draggingBall, setDraggingBall] = useState(false);
//   const ballRef = useRef(null);
//   const cube = useRef(null);
//   const hoverColorSpring = useSpring({
//     color: hoveredIndex !== null ? COLOR_PALETTE[hoveredIndex >4? hoveredIndex-4: hoveredIndex] : "gray", // Smooth color transition
//     config: { tension: 170, friction: 26 }, // Adjust the speed and smoothness
//   });

//   useEffect(() => {
//     console.log("Cube ref:", cube.current);
//   }, []);

//   // const jump = () => {
//   //   if (cube.current) {
//   //     console.log("Jump triggered!");
//   //     cube.current.applyImpulse({ x: 0, y: 10, z: 0 });
//   //   }
//   // };

//   // const handleBallPointerDown = () => {
//   //   setDraggingBall(true);
//   // };

//   // const handleBallPointerMove = (event) => {
//   //   if (draggingBall) {
//   //     setBallPosition((prev) => [event.point.x, prev[1], event.point.z]);
//   //   }
//   // };

//   // const handleBallPointerUp = () => {
//   //   setDraggingBall(false);
//   // };

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <OrbitControls enableZoom={false} enableRotate enablePan target={[0, 0, 0]} />

//       {TEXTS.map(({ text, size, height, position, material, interactive }, index) => (
//         <RigidBody key={index} type="dynamic" restitution={0.5} friction={1} position={position} rotation={[-Math.PI / 2, 0, 0]}>
//           <Text3D font="/fonts/helvetiker_regular.typeface.json" size={size} height={height} 
//             onPointerEnter={interactive ? () => setHoveredIndex(index) : undefined} 
//             onPointerLeave={interactive ? () => setHoveredIndex(null) : undefined}>
//             {text}
//             <a.meshStandardMaterial color={hoveredIndex === index ? hoverColorSpring.color : "gray"} />
//           </Text3D>
//         </RigidBody>
//       ))}

//       {NAMES.map(({ text, size, height, position, material, interactive }, index) => (
//         <RigidBody key={index} type="dynamic" restitution={0.5} friction={1} position={position} rotation={[-Math.PI / 2, 0, 0]}>
//           <Text3D font="/fonts/helvetiker_regular.typeface.json" size={size} height={height} >
//             {text}
//             <a.meshPhysicalMaterial color={hoverColorSpring.color} />
//           </Text3D>
//         </RigidBody>
//       ))}

//       {/* <RigidBody ref={cube} position={[6, 3, 0]} colliders="cuboid" type="dynamic">
//         <mesh
//           onPointerEnter={() => setHoveredIndex("cube")}
//           onPointerLeave={() => setHoveredIndex(null)}
//           onClick={jump}
//         >
//           <boxGeometry />
//           <meshStandardMaterial color={hoveredIndex === "cube" ? "hotpink" : "royalblue"} />
//         </mesh>
//       </RigidBody> */}

//       {/* <RigidBody position={ballPosition} colliders="ball" type="dynamic" ref={ballRef}
//         onPointerDown={handleBallPointerDown}
//         onPointerMove={handleBallPointerMove}
//         onPointerUp={handleBallPointerUp}>
//         <Sphere args={[0.5, 32, 32]}>
//           <meshStandardMaterial color="blue" />
//         </Sphere>
//       </RigidBody> */}

//       <RigidBody type="fixed" friction={2}>
//         <mesh position={[0, 0, 0]}>
//           <boxGeometry args={[20, 1, 20]} />
//           <meshStandardMaterial color="springgreen" opacity={0} transparent />
//         </mesh>
//       </RigidBody>
//     </>
//   );
// };

// export default Hero3D;

import { OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Text3D } from "@react-three/drei";
import { useState, useEffect } from "react";
import { COLOR_PALETTE_BRIGHT as COLOR_PALETTE } from "../constants";
import { useSpring, a } from "@react-spring/three";

const h = 0;

const TEXTS = [
  { text: "PROTOTYPER", size: 0.3, height: 0.1, position: [-2, h + 4, 0], color: COLOR_PALETTE[0] },
  { text: "COMPUTER ENGINEER", size: 0.3, height: 0.1, position: [-2, h + 5, 0.5], color: COLOR_PALETTE[1] },
  { text: "GAME DESIGNER", size: 0.4, height: 0.1, position: [-2, h + 7, 2.5], color: COLOR_PALETTE[2] },
  { text: "DEVELOPER", size: 0.5, height: 0.1, position: [-2, h + 8, 3.2], color: COLOR_PALETTE[3] },
  { text: "ARTIST", size: 0.25, height: 0.1, position: [-2, h + 9, 3.7], color: COLOR_PALETTE[4] },
];

const NAMES = [
  { text: "P", size: 1, height: 0.3, position: [-2, h + 6, 2] },
  { text: "I", size: 1, height: 0.3, position: [-1.5, h + 6, 2] },
  { text: "P", size: 1, height: 0.3, position: [-1, h + 6, 2] },
  { text: "P", size: 1, height: 0.3, position: [-0.5, h + 6, 2] },
  { text: "I", size: 1, height: 0.3, position: [-0, h + 6, 2] },
  { text: "P", size: 1, height: 0.3, position: [1.5, h + 6, 2] },
  { text: "I", size: 1, height: 0.3, position: [2.5, h + 6.3, 2.2] },
];

export const Hero3D = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [autoIndex, setAutoIndex] = useState(0);

  // Auto-cycle through texts when not hovering
  useEffect(() => {
    if (hoveredIndex === null) {
      const interval = setInterval(() => {
        setAutoIndex((prev) => (prev + 1) % TEXTS.length);
      }, 1500); // Change text every 1.5 seconds

      return () => clearInterval(interval);
    }
  }, [hoveredIndex]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 10, 0]} intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} enableRotate enablePan target={[0, 0, 0]} />

      {TEXTS.map(({ text, size, height, position, color }, index) => {
        const isHovered = hoveredIndex === index;
        const targetColor = isHovered || (hoveredIndex === null && autoIndex === index) ? color : "gray";

        // Smooth transition animation
        const { animatedColor } = useSpring({
          animatedColor: targetColor,
          config: { duration: 500 },
        });

        return (
          <RigidBody
            key={index}
            type="dynamic"
            restitution={0.5}
            friction={1}
            position={position}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <Text3D
              font="/fonts/tiny5.json"
              size={size}
              height={height}
              onPointerEnter={() => setHoveredIndex(index)}
              onPointerLeave={() => setHoveredIndex(null)}
            >
              {text}
              <a.meshStandardMaterial color={animatedColor} />
            </Text3D>
          </RigidBody>
        );
      })}

      {/* NAMES Section */}
      {NAMES.map(({ text, size, height, position }, index) => {
        const targetColor = hoveredIndex !== null ? TEXTS[hoveredIndex].color : TEXTS[autoIndex].color;

        const { animatedColor } = useSpring({
          animatedColor: targetColor,
          config: { duration: 400 },
        });

        return (
          <RigidBody key={index} type="dynamic" restitution={0.5} friction={1} position={position} rotation={[-Math.PI / 2, 0, 0]}>
            <Text3D font="/fonts/tiny5.json" size={size} height={height}>
              {text}
              <a.meshStandardMaterial color={animatedColor} />
            </Text3D>
          </RigidBody>
        );
      })}

      {/* Invisible Ground */}
      <RigidBody type="fixed" friction={2}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[20, 1, 20]} />
          <meshStandardMaterial color="springgreen" opacity={0} transparent />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Hero3D;