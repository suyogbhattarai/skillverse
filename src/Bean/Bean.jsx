/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Bean(props) {
  const { nodes, materials } = useGLTF('/BeanBag (2).glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow1
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.016']}
        position={[364.933, 145.279, -56.749]}
        rotation={[Math.PI, -0.504, Math.PI]}
        scale={9.474}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials['Material.016']}
        position={[364.933, 145.279, -56.749]}
        rotation={[Math.PI, -0.504, Math.PI]}
        scale={9.474}
      />
    </group>
  )
}

useGLTF.preload('/BeanBag (2).glb')
