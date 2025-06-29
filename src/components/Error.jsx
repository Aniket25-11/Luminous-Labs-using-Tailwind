import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  OrbitControls,
  shaderMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { useRouteError, Link } from "react-router-dom";

//  Custom shader material for sphere wave distortion
const WaveShaderMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color(0.0, 0.5, 1.0) },
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vUv = uv;
      vNormal = normal;
      vec3 newPosition = position + normal * 0.1 * sin(uv.y * 10.0 + uv.x * 10.0);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  `
    uniform float uTime;
    uniform vec3 uColor;
    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
      float wave = 0.5 + 0.5 * sin(uTime + vUv.x * 20.0 + uTime + vUv.y * 20.0);
      vec3 color = uColor * wave;
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ WaveShaderMaterial });

//  Custom shader sphere component
function WavySphere() {
  const materialRef = useRef();
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[1, 64]} />
      <waveShaderMaterial ref={materialRef} uColor={[0.2, 0.6, 1.0]} />
    </mesh>
  );
}

//  Fancy particles background
function ParticlesBackground() {
  const points = useRef();
  const sphere = new THREE.SphereGeometry(5, 64, 64);
  const vertices = [];
  for (let i = 0; i < sphere.attributes.position.count; i++) {
    vertices.push(sphere.attributes.position.array[i * 3]);
    vertices.push(sphere.attributes.position.array[i * 3 + 1]);
    vertices.push(sphere.attributes.position.array[i * 3 + 2]);
  }

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={points} positions={vertices} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

//  Error page component with React Router DOM
const Error = () => {
  const error = useRouteError();

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <ParticlesBackground />
          <WavySphere />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
        <h1 className="text-8xl text-white font-extrabold drop-shadow-lg">
          404
        </h1>
        <p className="text-xl text-gray-300 mt-4 max-w-xl">
          Oops! This page is lost in the cosmos.
        </p>
        <p className="text-sm text-gray-400 mt-2 max-w-xl">
          {error?.statusText || error?.message || "Unknown error occurred."}
        </p>
        <Link
          to="/"
          className="pointer-events-auto mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Error;