import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Building1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Room (3).glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[56.569, 133.835, 29.387]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[23.724, 23.724, 35.986]}>
          <group
            name="dbbf0976afad477bbb527f9ef2d8bc4dfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode">
              <group name="speaker_04_SM" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[56.569, 133.835, 55.981]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[23.724, 23.724, 35.986]}>
          <group
            name="dbbf0976afad477bbb527f9ef2d8bc4dfbx001"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode001">
              <group name="speaker_04_SM001" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
            </group>
          </group>
        </group>
        <group name="defaultMaterial" />
        <group name="7594f3fea56149bab846dc99591597a0fbx" rotation={[Math.PI / 2, 0, 0]}>
          <group name="RootNode002">
            <group
              name="PotWhite"
              position={[0, 1.214, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1, 1, 1.33]}
            />
          </group>
        </group>
        <group name="Object_6" position={[-13.678, 118.685, -0.19]} />
        <group
          name="Sketchfab_model002"
          position={[172.45, 97.292, -66.398]}
          rotation={[-Math.PI / 2, 0, -2.516]}
          scale={[6.846, 6.846, 4.55]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group name="9b5a98f812a744608e589083ffc73b43fbx" rotation={[Math.PI / 2, 0, 0]}>
          <group name="RootNode003" />
        </group>
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['Material.010']}
          position={[-72.59, 164.121, 172.133]}
          rotation={[0, -1.121, -Math.PI]}
          scale={[-0.157, -2.358, -0.157]}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['Material.010']}
          position={[-89.602, 164.121, 180.973]}
          rotation={[0, -1.121, -Math.PI]}
          scale={[-0.157, -2.358, -0.157]}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.010']}
          position={[-81.202, 166.742, 176.599]}
          rotation={[Math.PI / 2, 0, 1.121]}
          scale={[0.857, 11.367, 0.857]}
        />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.010']}
          position={[-80.989, 137.83, 176.48]}
          rotation={[-Math.PI, 1.121, -Math.PI]}
          scale={[0.857, 28.902, 0.857]}
        />
        <group
          name="Cube002"
          position={[-80.563, 139.44, 176.884]}
          rotation={[-Math.PI, 1.121, 0]}
          scale={[-0.309, -12.332, -11.221]}>
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials['Material.011']}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials['Material.015']}
          />
        </group>
        <mesh
          name="Icosphere004"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004.geometry}
          material={materials['Material.020']}
          position={[-89.782, 160.605, 180.964]}
          rotation={[0, 1.571, 0]}
          scale={2.02}
        />
        <mesh
          name="Icosphere005"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005.geometry}
          material={materials['Material.019']}
          position={[-72.548, 161.025, 172.546]}
          rotation={[0, 1.571, 0]}
          scale={2.02}
        />
        <mesh
          name="Cube190"
          castShadow
          receiveShadow
          geometry={nodes.Cube190.geometry}
          material={materials['Material.023']}
          position={[20.516, 128.174, -95.873]}
          rotation={[0, -1.571, 0]}
          scale={[0.037, 0.019, 0.276]}
        />
        <mesh
          name="Cylinder004"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[20.193, 128.229, -95.905]}
          rotation={[0, -1.571, 0]}
          scale={[0.017, 0.077, 0.017]}
        />
        <mesh
          name="Cylinder005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[20.767, 128.229, -95.905]}
          rotation={[0, -1.571, 0]}
          scale={[0.017, 0.077, 0.017]}
        />
        <mesh
          name="Cylinder006"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[20.767, 128.229, -95.227]}
          rotation={[0, -1.571, 0]}
          scale={[0.017, 0.077, 0.017]}
        />
        <mesh
          name="Cylinder007"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={nodes.Cylinder007.material}
          position={[20.234, 128.229, -95.227]}
          rotation={[0, -1.571, 0]}
          scale={[0.017, 0.077, 0.017]}
        />
        <mesh
          name="Cube191"
          castShadow
          receiveShadow
          geometry={nodes.Cube191.geometry}
          material={materials.Joints}
          position={[20.515, 128.361, -95.121]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.107, 0.008, 0.033]}
        />
        <mesh
          name="Cylinder008"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.Eyes}
          position={[20.46, 128.362, -95.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.021, 0.004, 0.031]}
        />
        <mesh
          name="Cylinder009"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials.Eyes}
          position={[20.575, 128.362, -95.11]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.021, 0.004, 0.031]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Body}
          position={[20.509, 128.15, -95.568]}
          rotation={[0, -1.571, 0]}
          scale={[0.458, 0.06, 0.458]}
        />
        <group
          name="leg1"
          position={[20.309, 128.15, -95.648]}
          rotation={[Math.PI, -1.216, Math.PI]}
          scale={[0.458, 0.06, 0.458]}>
          <mesh
            name="Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_2.geometry}
            material={materials.Joints}
          />
        </group>
        <group
          name="Cube061"
          position={[20.642, 128.15, -95.623]}
          rotation={[0, -1.277, 0]}
          scale={[0.458, 0.06, 0.458]}>
          <mesh
            name="Cube062"
            castShadow
            receiveShadow
            geometry={nodes.Cube062.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube062_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_1.geometry}
            material={materials.Joints}
          />
        </group>
        <group
          name="leg3"
          position={[20.596, 128.15, -95.623]}
          rotation={[Math.PI, -1.466, Math.PI]}
          scale={[0.458, 0.06, 0.458]}>
          <mesh
            name="Cube108"
            castShadow
            receiveShadow
            geometry={nodes.Cube108.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube108_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube108_1.geometry}
            material={materials.Joints}
          />
        </group>
        <group
          name="leg2"
          position={[20.361, 128.11, -95.481]}
          rotation={[0.132, -1.291, 0.064]}
          scale={[0.458, 0.06, 0.458]}>
          <mesh
            name="Cube154"
            castShadow
            receiveShadow
            geometry={nodes.Cube154.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cube154_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube154_1.geometry}
            material={materials.Joints}
          />
        </group>
        <mesh
          name="Cube189"
          castShadow
          receiveShadow
          geometry={nodes.Cube189.geometry}
          material={materials.Body}
          position={[20.496, 128.241, -95.568]}
          rotation={[0, -1.571, 0]}
          scale={[0.458, 0.06, 0.458]}
        />
        <group
          name="Sketchfab_model003"
          position={[-148.902, 116.72, 4.139]}
          rotation={[-Math.PI / 2, 0, 2.656]}
          scale={0.114}>
          <group name="9b067b21fa3f41a4ac9d4234752d23fafbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode004">
              <group name="Cube019" scale={100}>
                <mesh
                  name="Cube_metalic_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_metalic_0.geometry}
                  material={materials.metalic}
                />
              </group>
              <group name="Cube020" scale={100}>
                <mesh
                  name="Cube001_has��r_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['Cube001_has��r_0'].geometry}
                  material={materials.hasr}
                />
              </group>
              <group name="Cube021" scale={100}>
                <mesh
                  name="Cube002_Material001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube002_Material001_0.geometry}
                  material={materials['Material.025']}
                />
                <mesh
                  name="Cube002_Material002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube002_Material002_0.geometry}
                  material={materials['Material.026']}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model004"
          position={[-126.557, 117.053, -4.357]}
          rotation={[-3.054, 0.052, 0.007]}
          scale={[1.38, 1.378, 0.828]}>
          <group name="Grassfbx" rotation={[Math.PI, 0, 0]}>
            <group name="RootNode005">
              <group name="Model">
                <mesh
                  name="Model_material0_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Model_material0_0.geometry}
                  material={materials.material0}
                  rotation={[0.036, 0, -0.002]}
                />
                <mesh
                  name="Model_material0_0001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Model_material0_0001.geometry}
                  material={materials.material0}
                />
                <mesh
                  name="Model_material0_0002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Model_material0_0002.geometry}
                  material={materials.material0}
                />
                <mesh
                  name="Model_material0_0003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Model_material0_0003.geometry}
                  material={materials.material0}
                  position={[0.02, -1.787, 0.262]}
                />
                <mesh
                  name="Model_material0_0004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Model_material0_0004.geometry}
                  material={materials.material0}
                  position={[0.032, -2.807, 0.411]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model005"
          position={[-100.745, 113.354, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={18.191}>
          <group name="Grass_02objcleanermaterialmergergles" />
        </group>
        <group
          name="Sketchfab_model006"
          position={[-118.392, 119.841, 74.892]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <group name="grass06objcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials['Material.030']}
              position={[-24.614, 0, 0]}
            />
            <mesh
              name="Object_2001"
              castShadow
              receiveShadow
              geometry={nodes.Object_2001.geometry}
              material={materials['Material.030']}
              position={[-24.614, 104.396, 0]}
            />
          </group>
        </group>
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
          position={[-52.599, 133.176, 30.296]}
          rotation={[-0.375, 0.006, 3.125]}
          scale={[1.07, 16.533, 0.947]}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.GlassBalcony}
          position={[-52.103, 133.618, 15.527]}
          rotation={[0, 0, 1.553]}
          scale={[14.486, 19.077, 57.292]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.GlassBalcony}
          position={[6.367, 133.266, 74.451]}
          rotation={[-1.571, -1.565, 0]}
          scale={[14.773, 17.688, 16.492]}>
          <mesh
            name="Icosphere"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere.geometry}
            material={materials['Material.001']}
            position={[-0.119, -0.094, -0.945]}
            rotation={[1.588, -0.016, -1.546]}
            scale={[0.024, 0.05, 0.049]}
          />
        </mesh>
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['Material.001']}
          position={[-35.499, 164.841, 29.518]}
          rotation={[0.24, 0.108, -2.944]}
          scale={[1.524, 13.864, 1.114]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.001']}
          position={[43.417, 162.923, 2.867]}
          rotation={[-0.312, 0.155, 2.826]}
          scale={[1.378, 13.471, 1.216]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['Material.001']}
          position={[43.177, 163.558, 30.453]}
          rotation={[0.385, -0.104, 2.891]}
          scale={[1.459, 13.089, 1.201]}
        />
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.GlassBalcony}
          position={[-37.294, 173.304, 18.952]}
          rotation={[-0.05, 0, 1.749]}
          scale={[15.643, 22.878, 32.932]}
        />
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials.GlassBalcony}
          position={[2.997, 168.602, 55.541]}
          rotation={[-1.571, -1.553, -0.394]}
          scale={[7.193, 14.357, 21.36]}
        />
        <mesh
          name="Plane007"
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.GlassBalcony}
          position={[43.513, 166.13, 19.501]}
          rotation={[Math.PI, 0, -1.215]}
          scale={[14.756, 22.476, 31.324]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['Material.001']}
          position={[2.562, 168.661, -20.638]}
          rotation={[-0.204, 0, -3.128]}
          scale={[1.135, 7.451, 0.833]}
        />
        <mesh
          name="Plane008"
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.GlassBalcony}
          position={[2.571, 168.705, -20.852]}
          rotation={[1.368, -1.557, -3.14]}
          scale={[7.773, 15.522, 21.32]}
        />
        <mesh
          name="Plane010"
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials['Material.004']}
          position={[46.634, 119.775, -13.733]}
          scale={[98.973, 19, 88.532]}
        />
        <mesh
          name="Plane011"
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials['Material.004']}
          position={[5.383, 153.996, 21.151]}
          rotation={[0, 0, -Math.PI]}
          scale={[37.029, 14.072, 29.143]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['Material.001']}
          position={[-36.6, 165.697, 6.794]}
          rotation={[-0.427, -0.098, -2.931]}
          scale={[1.341, 14.511, 0.997]}
        />
        <mesh
          name="Plane009"
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials['Material.005']}
          position={[48.11, 147.139, 63.274]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane012"
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials['Material.005']}
          position={[48.635, 147.268, 13.424]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane013"
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials['Material.005']}
          position={[-19.167, 147.186, 44.693]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane014"
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials['Material.005']}
          position={[-23.326, 146.378, -18.809]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane015"
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials['Material.005']}
          position={[21.72, 176.129, -7.922]}
          rotation={[0, 0, 3.124]}
          scale={[1.807, 0.276, 2.891]}
        />
        <mesh
          name="Plane016"
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials['Material.005']}
          position={[-28.655, 175.672, -5.385]}
          rotation={[0, 0, 3.124]}
          scale={[1.807, 0.276, 2.891]}
        />
        <mesh
          name="Plane017"
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials['Material.005']}
          position={[-30.491, 176.248, 38.615]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane018"
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials['Material.005']}
          position={[16.039, 176.086, 42.438]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['Material.001']}
          position={[3.496, 167.764, 57.533]}
          rotation={[0.418, 0.352, 3.113]}
          scale={[0.889, 6.631, 0.878]}
        />
        <mesh
          name="Plane020"
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials.GlassBalcony}
          position={[170.217, 160.416, 2.618]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane021"
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials.GlassBalcony}
          position={[170.248, 160.416, 26.245]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane022"
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials.GlassBalcony}
          position={[170.164, 160.416, 49.929]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane023"
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials.GlassBalcony}
          position={[153.542, 160.416, -102.839]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.376, 5.627, 16.864]}
        />
        <mesh
          name="Plane025"
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials.GlassBalcony}
          position={[49.48, 160.416, 73.483]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.354, 6.371, 13.393]}
        />
        <mesh
          name="Plane026"
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials.GlassBalcony}
          position={[22.841, 160.416, 73.483]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.354, 6.371, 13.393]}
        />
        <mesh
          name="Plane027"
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials.GlassBalcony}
          position={[-3.916, 160.416, 73.483]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.354, 6.371, 13.393]}
        />
        <mesh
          name="Plane028"
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials.GlassBalcony}
          position={[-55.665, 160.416, 62.959]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 11.638]}
        />
        <mesh
          name="Plane030"
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials.GlassBalcony}
          position={[-30.313, 133.618, 75.228]}
          rotation={[1.553, Math.PI / 2, 0]}
          scale={[14.264, 19.077, 20.301]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['Material.001']}
          position={[-50.35, 132.934, 73.511]}
          rotation={[0, 0, 3.124]}
          scale={[0.846, 14.515, 1.227]}
        />
        <mesh
          name="Plane019"
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials.GlassBalcony}
          position={[170.217, 160.416, -20.948]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane033"
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials.GlassBalcony}
          position={[169.749, 160.416, 67.425]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 6.031]}
        />
        <mesh
          name="Plane034"
          castShadow
          receiveShadow
          geometry={nodes.Plane034.geometry}
          material={materials.GlassBalcony}
          position={[120.561, 160.416, -102.839]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.376, 5.627, 16.864]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.upperbody}
          position={[3.964, 168.475, 18.461]}
          scale={[52.96, 18.807, 45.708]}
        />
        <mesh
          name="Plane036"
          castShadow
          receiveShadow
          geometry={nodes.Plane036.geometry}
          material={materials.GlassBalcony}
          position={[40.624, 133.186, 74.451]}
          rotation={[-1.571, -1.565, 0]}
          scale={[14.775, 17.688, 17.721]}>
          <mesh
            name="Icosphere001"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={materials['Material.002']}
            position={[-0.127, -0.094, 0.9]}
            rotation={[1.579, -0.008, -1.549]}
            scale={[0.022, 0.05, 0.049]}
          />
        </mesh>
        <mesh
          name="Plane042"
          castShadow
          receiveShadow
          geometry={nodes.Plane042.geometry}
          material={materials['Material.005']}
          position={[70.792, 146.941, 8.586]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 1.401]}
        />
        <mesh
          name="Plane044"
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials['Material.005']}
          position={[70.792, 144.294, 62.962]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 1.401]}
        />
        <mesh
          name="Plane045"
          castShadow
          receiveShadow
          geometry={nodes.Plane045.geometry}
          material={materials['Material.005']}
          position={[140.522, 147.747, 64.478]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 1.401]}
        />
        <mesh
          name="Plane046"
          castShadow
          receiveShadow
          geometry={nodes.Plane046.geometry}
          material={materials['Material.005']}
          position={[140.522, 147.817, 4.614]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 1.401]}
        />
        <mesh
          name="Plane047"
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={materials['Material.005']}
          position={[49.396, 147.008, -84.256]}
          rotation={[0, 0, 3.124]}
          scale={[0.897, 0.165, 0.836]}
        />
        <mesh
          name="Plane048"
          castShadow
          receiveShadow
          geometry={nodes.Plane048.geometry}
          material={materials['Material.005']}
          position={[56.257, 147.666, -52.123]}
          rotation={[0, 0, 3.124]}
          scale={[0.897, 0.165, 0.836]}
        />
        <mesh
          name="Plane049"
          castShadow
          receiveShadow
          geometry={nodes.Plane049.geometry}
          material={materials['Material.005']}
          position={[134.962, 147.255, -44.919]}
          rotation={[0, 0, 3.124]}
          scale={[0.897, 0.165, 0.836]}
        />
        <mesh
          name="Plane050"
          castShadow
          receiveShadow
          geometry={nodes.Plane050.geometry}
          material={materials['Material.005']}
          position={[134.962, 145.719, -86.957]}
          rotation={[0, 0, 3.124]}
          scale={[0.897, 0.165, 0.836]}
        />
        <mesh
          name="Plane043"
          castShadow
          receiveShadow
          geometry={nodes.Plane043.geometry}
          material={materials['Material.005']}
          position={[22.736, 146.009, -50.963]}
          rotation={[0, 0, 3.124]}
          scale={[1.314, 0.142, 1.233]}
        />
        <mesh
          name="Plane051"
          castShadow
          receiveShadow
          geometry={nodes.Plane051.geometry}
          material={materials['Material.005']}
          position={[47.336, 144.986, -87.483]}
          rotation={[0, 0, 3.124]}
          scale={[1.314, 0.142, 1.233]}
        />
        <mesh
          name="Plane052"
          castShadow
          receiveShadow
          geometry={nodes.Plane052.geometry}
          material={materials['Material.005']}
          position={[-47.335, 147.511, -50.399]}
          rotation={[0, 0, 3.124]}
          scale={[1.314, 0.142, 1.233]}
        />
        <mesh
          name="Plane053"
          castShadow
          receiveShadow
          geometry={nodes.Plane053.geometry}
          material={materials['Material.005']}
          position={[-46.481, 145.707, -88.956]}
          rotation={[0, 0, 3.124]}
          scale={[1.314, 0.142, 1.233]}
        />
        <mesh
          name="Plane054"
          castShadow
          receiveShadow
          geometry={nodes.Plane054.geometry}
          material={materials['Material.005']}
          position={[139.12, 146.484, -11.769]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane055"
          castShadow
          receiveShadow
          geometry={nodes.Plane055.geometry}
          material={materials.GlassBalcony}
          position={[-51.616, 134.824, -68.921]}
          rotation={[0, -0.056, -Math.PI / 2]}
          scale={[5.784, 7.901, 11.961]}
        />
        <mesh
          name="Plane056"
          castShadow
          receiveShadow
          geometry={nodes.Plane056.geometry}
          material={materials.GlassBalcony}
          position={[102.733, 132.703, 74.779]}
          rotation={[1.553, Math.PI / 2, 0]}
          scale={[7.889, 11.34, 12.483]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.001']}
          position={[103.414, 132.588, 74.757]}
          rotation={[0, 0, 3.124]}
          scale={[0.701, 8.176, 0.438]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Material.001']}
          position={[-50.91, 135.637, -68.446]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.472, 4.378, 0.529]}
        />
        <mesh
          name="Plane060"
          castShadow
          receiveShadow
          geometry={nodes.Plane060.geometry}
          material={materials.GlassBalcony}
          position={[-19.678, 134.117, -109.6]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[6.524, 7.909, 15.47]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['Material.001']}
          position={[-17.465, 134.93, -109.086]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[0.472, 5.054, 0.685]}
        />
        <mesh
          name="Plane061"
          castShadow
          receiveShadow
          geometry={nodes.Plane061.geometry}
          material={materials.GlassBalcony}
          position={[101.336, 134.117, -109.024]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[7.182, 7.909, 18.038]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['Material.001']}
          position={[102.958, 136.134, -109.341]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[0.092, 5.36, 0.798]}
        />
        <mesh
          name="Plane076"
          castShadow
          receiveShadow
          geometry={nodes.Plane076.geometry}
          material={materials['Material.005']}
          position={[22.927, 146.378, -21.892]}
          rotation={[0, 0, 3.124]}
          scale={[1.502, 0.276, 2.403]}
        />
        <mesh
          name="Plane077"
          castShadow
          receiveShadow
          geometry={nodes.Plane077.geometry}
          material={materials['Material.005']}
          position={[27.15, 145.602, -84.805]}
          rotation={[0, 0, 3.124]}
          scale={[1.314, 0.142, 1.233]}
        />
        <mesh
          name="Plane057"
          castShadow
          receiveShadow
          geometry={nodes.Plane057.geometry}
          material={materials['Material.006']}
          position={[14.017, 130.037, -40.226]}
          rotation={[-1.571, 1.559, -3.142]}
          scale={[10.065, 8.724, 8.928]}>
          <mesh
            name="Icosphere003"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere003.geometry}
            material={materials['Material.002']}
            position={[-0.091, 0.127, 0.778]}
            rotation={[-1.572, -0.001, -1.58]}
            scale={[0.048, 0.047, 0.054]}
          />
        </mesh>
        <mesh
          name="Plane038"
          castShadow
          receiveShadow
          geometry={nodes.Plane038.geometry}
          material={materials.GlassBalcony}
          position={[-36.187, 160.416, 73.483]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.354, 6.371, 19.448]}
        />
        <mesh
          name="Plane068"
          castShadow
          receiveShadow
          geometry={nodes.Plane068.geometry}
          material={materials.GlassBalcony}
          position={[-55.665, 160.416, 39.829]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 11.341]}
        />
        <mesh
          name="Plane069"
          castShadow
          receiveShadow
          geometry={nodes.Plane069.geometry}
          material={materials.GlassBalcony}
          position={[-55.665, 160.416, 17.086]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 11.341]}
        />
        <mesh
          name="Plane078"
          castShadow
          receiveShadow
          geometry={nodes.Plane078.geometry}
          material={materials.GlassBalcony}
          position={[-55.665, 160.416, -5.427]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 11.341]}
        />
        <mesh
          name="Plane080"
          castShadow
          receiveShadow
          geometry={nodes.Plane080.geometry}
          material={materials.GlassBalcony}
          position={[86.33, 160.416, -102.839]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.376, 5.627, 16.864]}
        />
        <mesh
          name="Plane079"
          castShadow
          receiveShadow
          geometry={nodes.Plane079.geometry}
          material={materials.GlassBalcony}
          position={[53.74, 160.416, -102.839]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.376, 5.627, 16.864]}
        />
        <mesh
          name="Plane081"
          castShadow
          receiveShadow
          geometry={nodes.Plane081.geometry}
          material={materials.GlassBalcony}
          position={[170.217, 160.416, -43.925]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane082"
          castShadow
          receiveShadow
          geometry={nodes.Plane082.geometry}
          material={materials.GlassBalcony}
          position={[170.217, 160.416, -67.422]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane083"
          castShadow
          receiveShadow
          geometry={nodes.Plane083.geometry}
          material={materials.GlassBalcony}
          position={[170.217, 160.416, -90.85]}
          rotation={[Math.PI, 0, -1.553]}
          scale={[6.355, 7.238, 11.788]}
        />
        <mesh
          name="Plane024"
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials.GlassBalcony}
          position={[20.366, 160.416, -102.839]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.376, 5.627, 16.864]}
        />
        <mesh
          name="Plane029"
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials.GlassBalcony}
          position={[-13.441, 160.416, -102.839]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.376, 5.627, 16.864]}
        />
        <mesh
          name="Plane084"
          castShadow
          receiveShadow
          geometry={nodes.Plane084.geometry}
          material={materials.GlassBalcony}
          position={[-42.914, 160.416, -102.839]}
          rotation={[-1.588, -Math.PI / 2, 0]}
          scale={[6.376, 5.627, 13.324]}
        />
        <mesh
          name="Plane085"
          castShadow
          receiveShadow
          geometry={nodes.Plane085.geometry}
          material={materials.GlassBalcony}
          position={[-55.665, 160.416, -27.713]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 11.341]}
        />
        <mesh
          name="Plane086"
          castShadow
          receiveShadow
          geometry={nodes.Plane086.geometry}
          material={materials.GlassBalcony}
          position={[-55.665, 160.416, -50.17]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 11.341]}
        />
        <mesh
          name="Plane087"
          castShadow
          receiveShadow
          geometry={nodes.Plane087.geometry}
          material={materials.GlassBalcony}
          position={[-55.665, 160.416, -72.912]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 11.341]}
        />
        <mesh
          name="Plane088"
          castShadow
          receiveShadow
          geometry={nodes.Plane088.geometry}
          material={materials.GlassBalcony}
          position={[-55.665, 160.416, -92.804]}
          rotation={[0, 0, 1.588]}
          scale={[6.354, 6.371, 8.877]}
        />
        <mesh
          name="Plane035"
          castShadow
          receiveShadow
          geometry={nodes.Plane035.geometry}
          material={materials.right}
          position={[57.663, 133.618, 37.043]}
          rotation={[0, 0, 1.553]}
          scale={[14.332, 7.191, 38.238]}
        />
        <mesh
          name="Plane039"
          castShadow
          receiveShadow
          geometry={nodes.Plane039.geometry}
          material={materials.right}
          position={[102.075, 133.342, 74.899]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[16.773, 10.915, 43.884]}
        />
        <mesh
          name="Plane037"
          castShadow
          receiveShadow
          geometry={nodes.Plane037.geometry}
          material={materials.right}
          position={[145.87, 132.868, 36.888]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[15.817, 7.191, 38.238]}
        />
        <group
          name="Plane041"
          position={[102.291, 132.614, -0.83]}
          rotation={[Math.PI / 2, 1.571, 0]}
          scale={[16.071, 7.647, 43.972]}>
          <mesh
            name="Plane053_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane053_1.geometry}
            material={materials.right}
          />
          <mesh
            name="Plane053_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane053_2.geometry}
            material={materials.right}
          />
        </group>
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.RightBack}
          position={[41.547, 132.419, -72.317]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[15.293, 9.239, 31.411]}
        />
        <group
          name="Plane040"
          position={[93.002, 133.064, -40.765]}
          rotation={[Math.PI / 2, 1.571, 0]}
          scale={[14.724, 7.647, 51.301]}>
          <mesh
            name="Plane045_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane045_1.geometry}
            material={materials.RightBack}
          />
          <mesh
            name="Plane045_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane045_2.geometry}
            material={materials.RightBack}
          />
        </group>
        <mesh
          name="Plane031"
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={materials.RightBack}
          position={[144.897, 132.571, -71.209]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[15.358, 9.239, 29.994]}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.leftBack}
          position={[-4.179, 132.871, -40.489]}
          rotation={[Math.PI / 2, 1.571, 0]}
          scale={[15.238, 8.817, 46.256]}
        />
        <mesh
          name="Plane032"
          castShadow
          receiveShadow
          geometry={nodes.Plane032.geometry}
          material={materials.leftBack}
          position={[-52.103, 133.017, -71.158]}
          rotation={[0, 0, 1.553]}
          scale={[15.259, 19.077, 29.88]}
        />
        <group
          name="Plane075"
          position={[30.02, 130.884, -96.889]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[1.439, 1.548, 3.392]}>
          <mesh
            name="Plane077_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane077_1.geometry}
            material={materials.CzTcyZGBTOTEuIC}
          />
          <mesh
            name="Plane077_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane077_2.geometry}
            material={materials.Screen}
          />
        </group>
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['TableBody.001']}
          position={[37.137, 123.569, -96.479]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[5.318, 3.766, 3.529]}>
          <mesh
            name="Plane070"
            castShadow
            receiveShadow
            geometry={nodes.Plane070.geometry}
            material={materials['Material.016']}
            position={[1.031, 0.489, 4.602]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.035, 0.102, 0.13]}
          />
          <mesh
            name="Plane071"
            castShadow
            receiveShadow
            geometry={nodes.Plane071.geometry}
            material={materials['TableBody.001']}
            position={[1.007, 0.539, 4.626]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.175, 0.177, 0.95]}
          />
          <mesh
            name="Plane072"
            castShadow
            receiveShadow
            geometry={nodes.Plane072.geometry}
            material={materials['Material.017']}
            position={[1.031, 0.489, -0.022]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.035, 0.102, 0.13]}
          />
          <mesh
            name="Plane073"
            castShadow
            receiveShadow
            geometry={nodes.Plane073.geometry}
            material={materials['TableBody.001']}
            position={[1.007, 0.539, 0.002]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.175, 0.177, 0.95]}
          />
          <mesh
            name="Plane074"
            castShadow
            receiveShadow
            geometry={nodes.Plane074.geometry}
            material={materials['Material.018']}
            position={[0.175, 1, 2.307]}
            scale={[1.128, 1.434, 3.475]}
          />
        </mesh>
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.CzTcyZGBTOTEuIC}
          position={[30.747, 127.773, -96.881]}
          rotation={[Math.PI / 2, 0, 2.126]}
          scale={[0.098, 0.93, 0.036]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.CzTcyZGBTOTEuIC}
          position={[30.007, 129.21, -97.273]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.13, 1.492, 0.22]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.Material}
          position={[57.262, 134.152, -10.139]}
          scale={[119.054, 19.443, 100.739]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['Material.007']}
          position={[-24.584, 141.152, -41.2]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3.096, 2.572, 2.888]}
        />
        <mesh
          name="Plane058"
          castShadow
          receiveShadow
          geometry={nodes.Plane058.geometry}
          material={materials['Material.007']}
          position={[144.665, 140.613, -67.025]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[3.096, 2.572, 3.975]}
        />
        <mesh
          name="Plane059"
          castShadow
          receiveShadow
          geometry={nodes.Plane059.geometry}
          material={materials['Material.021']}
          position={[61.357, 114.656, -84.151]}
          scale={1153.108}
        />
        <group
          name="Plane089"
          position={[-33.958, 135.309, -40.465]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[4.915, 4.915, 8.293]}>
          <mesh
            name="Plane024_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane024_1.geometry}
            material={materials['Material.027']}
          />
          <mesh
            name="Plane024_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane024_2.geometry}
            material={materials['Material.028']}
          />
        </group>
        <group name="Garden_board" position={[-102.363, 115.545, 33.13]} scale={11.663}>
          <mesh
            name="benches003"
            castShadow
            receiveShadow
            geometry={nodes.benches003.geometry}
            material={materials['Desk wood.001']}
            position={[-0.802, 0.177, 0]}
          />
          <mesh
            name="benches004"
            castShadow
            receiveShadow
            geometry={nodes.benches004.geometry}
            material={materials['Desk wood.001']}
            position={[0.802, 0.177, 0]}
          />
          <mesh
            name="leg-part-1001"
            castShadow
            receiveShadow
            geometry={nodes['leg-part-1001'].geometry}
            material={materials['Desk wood.001']}
            position={[0.029, 0.342, -0.912]}
          />
          <group name="leg-part-2001" position={[-0.023, 0.342, -0.912]}>
            <mesh
              name="Cube019_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube019_1.geometry}
              material={materials['Desk wood.001']}
            />
            <mesh
              name="Cube019_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube019_2.geometry}
              material={materials['Desk wood.001']}
            />
          </group>
          <mesh
            name="leg-part-3001"
            castShadow
            receiveShadow
            geometry={nodes['leg-part-3001'].geometry}
            material={materials['Desk wood.001']}
            position={[0.003, 0.685, -0.912]}
          />
          <mesh
            name="screew-lag001"
            castShadow
            receiveShadow
            geometry={nodes['screew-lag001'].geometry}
            material={materials['Material.024']}
            position={[0.003, 0.305, -0.932]}
          />
          <mesh
            name="screew-table001"
            castShadow
            receiveShadow
            geometry={nodes['screew-table001'].geometry}
            material={nodes['screew-table001'].material}
            position={[-0.45, 0.672, -0.915]}
          />
          <mesh
            name="up-part001"
            castShadow
            receiveShadow
            geometry={nodes['up-part001'].geometry}
            material={materials['Desk wood.001']}
            position={[0.02, 0.725, 0.773]}
          />
        </group>
        <group
          name="Plane062"
          position={[15.81, 146.846, 36.794]}
          rotation={[0, 1.482, -Math.PI]}
          scale={8.559}>
          <mesh
            name="Plane047_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane047_1.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Plane047_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane047_2.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="Plane063"
            castShadow
            receiveShadow
            geometry={nodes.Plane063.geometry}
            material={nodes.Plane063.material}
            position={[-0.839, 0.076, 0.119]}
            rotation={[0, 0, -0.381]}
            scale={[0.042, 0.06, 0.362]}
          />
          <mesh
            name="Plane064"
            castShadow
            receiveShadow
            geometry={nodes.Plane064.geometry}
            material={nodes.Plane064.material}
            position={[0.79, 0.076, 0.172]}
            rotation={[0, 0, 0.347]}
            scale={[0.042, 0.06, 0.362]}
          />
          <mesh
            name="Plane065"
            castShadow
            receiveShadow
            geometry={nodes.Plane065.geometry}
            material={nodes.Plane065.material}
            position={[0.006, 0.084, 0.807]}
            rotation={[-0.381, 1.571, 0]}
            scale={[0.035, 0.059, 0.459]}
          />
          <mesh
            name="Plane066"
            castShadow
            receiveShadow
            geometry={nodes.Plane066.geometry}
            material={nodes.Plane066.material}
            position={[0.006, 0.084, -0.851]}
            rotation={[-2.76, -Math.PI / 2, 0]}
            scale={[0.035, 0.059, 0.459]}
          />
          <mesh
            name="Plane067"
            castShadow
            receiveShadow
            geometry={nodes.Plane067.geometry}
            material={materials['Material.014']}
            position={[-0.435, 0.076, 0.036]}
            scale={[0.012, 0.017, 0.55]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Room (3).glb')
