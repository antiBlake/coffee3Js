import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Scene } from '../../Scene'

const Third = () => {
  const canvasStyle = {
    height: '700px',
    width: '100%', 
    background: 'transparent', 
  };
  return (
      <Canvas style={canvasStyle}>
      <directionalLight intensity={2} position={[5, 5, 5]} />
        <pointLight intensity={2} position={[-5, -5, -5]} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export default Third