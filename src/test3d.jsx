import { Canvas } from "@react-three/fiber";

function ThreeComponent() {
  return (
    <div id="threecontainer">
      <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default ThreeComponent