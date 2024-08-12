/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Podium(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/AssistedVisionPodium.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['Material.012']}
          position={[247.108, 128.749, -36.826]}
          scale={[4.845, 6.535, 4.309]}
        />
        <mesh
          name="Circle001"
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials['Material.003']}
          position={[247.027, 135.196, -36.428]}
          scale={[2.763, 2.134, 2.763]}
        />
        <mesh
          name="Circle"
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials['Material.003']}
          position={[247.027, 134.891, -36.428]}
          scale={[3.611, 2.789, 3.611]}
        />
        <group
          name="Sketchfab_model"
          position={[247.064, 139.87, -36.986]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.47}>
          <group name="VRHeadset&Controlerobjcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.WhitePlasticWithLogoSG}
            />
            <mesh
              name="Object_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.aiStandardSurface4SG}
            />
            <mesh
              name="Object_4005"
              castShadow
              receiveShadow
              geometry={nodes.Object_4005.geometry}
              material={materials.aiStandardSurface1SG}
            />
            <mesh
              name="Object_4006"
              castShadow
              receiveShadow
              geometry={nodes.Object_4006.geometry}
              material={materials.aiStandardSurface1SG}
            />
            <mesh
              name="Object_4007"
              castShadow
              receiveShadow
              geometry={nodes.Object_4007.geometry}
              material={materials.aiStandardSurface1SG}
            />
            <mesh
              name="Object_4008"
              castShadow
              receiveShadow
              geometry={nodes.Object_4008.geometry}
              material={materials.aiStandardSurface1SG}
            />
            <mesh
              name="Object_4009"
              castShadow
              receiveShadow
              geometry={nodes.Object_4009.geometry}
              material={materials.aiStandardSurface1SG}
            />
            <mesh
              name="Object_4010"
              castShadow
              receiveShadow
              geometry={nodes.Object_4010.geometry}
              material={materials.aiStandardSurface1SG}
            />
            <mesh
              name="Object_5"
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.aiStandardSurface3SG}
            />
            <mesh
              name="Object_6"
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.aiStandardSurface2SG}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/AssistedVisionPodium.glb')
