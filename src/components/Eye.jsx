import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Eye(props) {
  const { nodes, materials } = useGLTF('./models/coffee1.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.coffee_bean} rotation={[Math.PI / 2, 0, 0]} scale={0.045} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/coffee1.glb')
