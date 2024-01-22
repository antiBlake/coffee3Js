import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Mug } from './Mug';
import Article from './Article';

const AnimatedArticle = () => {
  const groupRef = useRef();
  const [clock] = useState(() => new THREE.Clock());

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Html distanceFactor={7}>
        <Article />
      </Html>
    </group>
  );
};

const Fourth = () => {
  const canvasStyle = {
    height: '700px',
    width: '100%',
    background: 'transparent',
  };

  return (
    <Canvas style={canvasStyle}>
      <directionalLight intensity={20} position={[1, 3, 20]} />
      <pointLight intensity={8} position={[-5, -5, -5]} />

      <Mug />

      <Suspense fallback={null}>
        <AnimatedArticle />
      </Suspense>
    </Canvas>
  );
};

export default Fourth;
