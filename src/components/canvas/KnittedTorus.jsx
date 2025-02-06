import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Torus, MeshDistortMaterial } from "@react-three/drei";

import CanvasLoader from "../Loader";

const KnittedTorusMesh = ({ isMobile }) => {
  const torusRef = useRef();

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Torus
      ref={torusRef}
      args={[1.5, 0.5, 64, 128]} // [radius, tube, radialSegments, tubularSegments]
      position={isMobile ? [0, 0, 0] : [0, 0, 0]}
    >
      <MeshDistortMaterial
        color="#915EFF"
        distort={0.3}
        speed={2}
        roughness={0.8}
        metalness={0.2}
      />
    </Torus>
  );
};

const KnittedTorus = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [3, 2, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <KnittedTorusMesh isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default KnittedTorus;
