import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Neuron from "./Neuron";
const NeuronRenderer = () => {
  return (
    <div className='md:w-full w-2/3 h-60'>
      <Canvas
        gl={{ preserveDrawingBuffer: false }}
        frameloop='demand'
        camera={{
          fov: window.innerWidth >= 1000 ? 8 : 10,
          position: [45, 10, 5],
        }}
      >
        <ambientLight intensity={0.2}>
          <pointLight position={[10, 10, 10]} intensity={0.8} />
        </ambientLight>
        <Neuron />
        <OrbitControls
          autoRotate={window.innerWidth >= 1000 ? true : false}
          autoRotateSpeed={4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default NeuronRenderer;
