import { useIntersect } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Coffee } from './Coffee'
import { Eye } from './Eye'

function Objects() {
  const { height, width } = useThree((state) => state.viewport)

  return (
    <>
      <pointLight position={[8, -25, 5]} intensity={20} />
      <pointLight  position={[0, -height * 2.25, 5]} intensity={10} />
      <Item position={[3, -4, 0]}>
        <Eye />
      </Item>
      <Item position={[width / 6, -height * 1, 0]}>
        <Eye />
      </Item>
      <Item position={[width / 2, -height * 1.4, -1]}>
        <Coffee args={[1.5, 2, 2]} />
      </Item>
      <Item position={[-width / 5, -height * 1.8, -2]}>
        <Eye args={[1, 1, 3]} />
      </Item>
      <Item position={[width / 4, -height * 2, 0]}>
        <Coffee args={[1.5, 2, 2]} />
      </Item>
      <Item position={[-width / 10, -height * 0.6, 0.5]}>
        <Eye args={[0.75, 2.5, 4]} />
      </Item>
      <Item position={[-width / 2, -height * 1, -2]}>
        <Eye args={[1, 1, 3]} />
      </Item>
      <Item position={[width / 8, -height * 0.8, -1]}>
        <Coffee args={[1.5, 2, 2]} />
      </Item>
      <Item position={[-width / 2,height * 0.2, -1]}>
        <Eye args={[0.75, 2.5, 4]} />
      </Item>
    </>
  )
}

function Item({ color, position, children }) {
  const visible = useRef()
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const [xRandomFactor, yRandomFactor] = useMemo(() => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5], [])

  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime()

    ref.current.rotation.x = elapsedTime * xRandomFactor
    ref.current.rotation.y = elapsedTime * yRandomFactor

    const scale = THREE.MathUtils.damp(ref.current.scale.x, visible.current ? 0.2 : 0.1, 5, delta)
    ref.current.scale.set(scale, scale, scale)
  })

  return (
    <mesh ref={ref} position={position}>
      {children}
      <meshPhysicalMaterial transparent color={color} />
    </mesh>
  )
}

export { Objects }