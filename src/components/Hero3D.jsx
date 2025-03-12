

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

import { OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Box, Sphere, Torus, Text3D } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

export const Hero3D = () => {
  const [hover, setHover] = useState(false);
  const cube = useRef(null);

  useEffect(() => {
    console.log("Cube ref:", cube.current); // Debugging to check if ref is assigned
  }, []);

  const jump = () => {
    if (cube.current) {
      console.log("Jump triggered!"); // Debugging
      cube.current.applyImpulse({ x: 0, y: 10, z: 0 });
    }
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />

      {/* letter A */}


        <RigidBody type="dynamic" restitution={0.5} friction={1}>
          
            <Text3D font="/fonts/helvetiker_regular.typeface.json" size={1.5} height={0.5}>
            HELLO
            <meshStandardMaterial color="red" />
            </Text3D>
            
        </RigidBody>

    {/* <RigidBody type="dynamic" restitution={0.5} friction={1}>
        <Text3D font="/fonts/helvetiker_regular.typeface.json" size={1.5} height={0.5}>
            A
            <meshStandardMaterial color="pink" />
        </Text3D>
    </RigidBody> */}

      {/* Blue Ball */}
      <RigidBody position={[1, 5, 0]} colliders="ball">
        <Sphere position-y={1}>
          <meshStandardMaterial color="blue" />
        </Sphere>
        <Torus>
          <meshStandardMaterial color="yellow" />
        </Torus>
      </RigidBody>

      {/* Pink Cube with Click Interaction */}
      <RigidBody ref={cube} position={[0, 3, 0]} colliders="cuboid" type="dynamic">
        <Box
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          onClick={jump}
        >
          <meshStandardMaterial color={hover ? "hotpink" : "royalblue"} />
        </Box>
      </RigidBody>

      {/* Green Plane */}
      <RigidBody type="fixed" friction={2}>
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial attach="material" color="springgreen" />
        </Box>
      </RigidBody>
    </>
  );
};

export default Hero3D;