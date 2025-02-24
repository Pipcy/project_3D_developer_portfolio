import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Edges } from "@react-three/drei";
// import { EffectComposer, Outline } from "@react-three/postprocessing";

import CanvasLoader from "../Loader";

// Custom Cel-Shading Material
// const ToonMaterial = shaderMaterial(
//   { color: new THREE.Color(0x00aaff) },
//   `
//   varying vec3 vNormal;
//   void main() {
//     vNormal = normalize(normalMatrix * normal);
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
//   `,
//   `
//   varying vec3 vNormal;
//   void main() {
//     float intensity = dot(vNormal, vec3(0.0, 0.0, 1.0));
//     float levels = 3.0; 
//     intensity = floor(intensity * levels) / levels;
//     gl_FragColor = vec4(vec3(intensity), 1.0);
//   }
//   `
// );

// extend({ ToonMaterial });

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./test-block.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={computer.scene} >
        {/* scale={1} //{isMobile ? 1 : 6}
        position= {[0, 0, 0]} {isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, 0, 0]}> */}
        <meshStandardMaterial color="white" />
        <Edges color="black" />
      </primitive>

    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;


// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas, extend, useFrame } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF, shaderMaterial } from "@react-three/drei";
// import { EffectComposer, Outline } from "@react-three/postprocessing";
// import * as THREE from "three";

// import CanvasLoader from "../Loader";

// // Custom Cel-Shading Material
// const ToonMaterial = shaderMaterial(
//   { color: new THREE.Color(0x00aaff) },
//   `
//   varying vec3 vNormal;
//   void main() {
//     vNormal = normalize(normalMatrix * normal);
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
//   `,
//   `
//   varying vec3 vNormal;
//   void main() {
//     float intensity = dot(vNormal, vec3(0.0, 0.0, 1.0));
//     float levels = 3.0; 
//     intensity = floor(intensity * levels) / levels;
//     gl_FragColor = vec4(vec3(intensity), 1.0);
//   }
//   `
// );

// extend({ ToonMaterial });

// const Computers = ({ isMobile }) => {
//   const { scene } = useGLTF("./test-block.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.5} groundColor='black' />
//       <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
//       <primitive object={scene} scale={isMobile ? 6 : 6} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}>
//         <toonMaterial attach="material" />
//       </primitive>
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);
//     const handleMediaQueryChange = (event) => setIsMobile(event.matches);
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//         <Computers isMobile={isMobile} />
//         <EffectComposer>
//           <Outline edgeStrength={10} visibleEdgeColor="white" hiddenEdgeColor="black" />
//         </EffectComposer>
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;
