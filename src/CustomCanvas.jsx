import * as THREE from 'three'
import { extend, createRoot, events } from '@react-three/fiber'

// Register the THREE namespace as native JSX elements.
// See below for notes on tree-shaking
extend(THREE)

// Create a react root
const root = createRoot(document.querySelector('canvas'))

// Configure the root, inject events optionally, set camera, etc
root.configure({ events, camera: { position: [0, 0, 50] } })

// createRoot by design is not responsive, you have to take care of resize yourself
window.addEventListener('resize', () => {
  root.configure({ size: { width: window.innerWidth, height: window.innerHeight } })
})

// Trigger resize
window.dispatchEvent(new Event('resize'))

// Render entry point
root.render(<CustomApp />)

// Unmount and dispose of memory
// root.unmount()

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += delta))
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// function CustomCanvas() {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[1.2, 0, 0]} />
//     </Canvas>
//   )
// }

export default CustomCanvas