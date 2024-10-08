/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { TransformControls, useGLTF } from '@react-three/drei'

export function Tv(props) {
  const { nodes, materials } = useGLTF('/Tv.glb')
  const tvRef=useRef()
  return (
    <>
 
    <group ref={tvRef} {...props} dispose={null}>
      <group
        position={[56.569, 133.835, 55.981]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[23.724, 23.724, 35.986]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.speaker_04_SM_speaker_04_0001.geometry}
              material={materials.speaker_04}
              position={[-0.135, -0.032, 0.049]}
              scale={[1, 1, 0.784]}
            />
          </group>
        </group>
      </group>
      <group
        position={[56.569, 133.835, 29.387]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[23.724, 23.724, 35.986]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.speaker_04_SM_speaker_04_0.geometry}
              material={materials.speaker_04}
              position={[-0.252, -0.032, 0.05]}
              scale={[1, 1, 0.793]}
            />
          </group>
        </group>
      </group>
      <group
        position={[57.102, 136.79, 38.545]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[9.198, 2.984, 3.771]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_1.geometry}
          material={materials['Material.002']}
        />
      </group>
    </group>
    </>
 
  )
}

useGLTF.preload('/Tv.glb')
