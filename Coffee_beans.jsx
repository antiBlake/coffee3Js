/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/coffee_beans.glb 
Author: Yusuf Scott (https://sketchfab.com/yousefskout27)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/coffee-beans-33189f74a03a430abf9cfc373219e178
Title: coffee beans
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/coffee_beans.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.COFFEE_COFFEE_MAT_0.geometry} material={materials.COFFEE_MAT} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/coffee_beans.glb')