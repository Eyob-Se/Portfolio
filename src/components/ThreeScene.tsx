import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={mesh} args={[1, 100, 200]} scale={1.8}>
      <MeshDistortMaterial 
        color="#4299e1" 
        attach="material" 
        distort={0.5} 
        speed={1.5} 
        roughness={0.2}
      />
    </Sphere>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full"
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default ThreeScene;