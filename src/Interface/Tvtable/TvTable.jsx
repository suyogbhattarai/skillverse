/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TvTable(props) {
  const { nodes, materials } = useGLTF('/models/TvTable.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[52.987, 50.574, 37.51]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 1, 9.787]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044_1.geometry}
          material={materials['Material.008']}
        />
      </group>
      <group position={[51.484, 46.55, 38.5]} scale={[4.914, 3.137, 15.899]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.009']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/modles/TvTable.glb')
