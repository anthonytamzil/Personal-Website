/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useAspect,
  useTexture
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#FFF8EB"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ array }) => {
  return (
    <>
      hi
    </>
    // <Canvas camera={{ position: [0, 0, 20], fov: 25}} className='h-fit'>
    //   <Suspense fallback={<CanvasLoader />}>
    //     <OrbitControls 
    //       enableZoom={false}
    //     />
    //       <Flex size={[50, 20, 0]} flexDirection="row" flexWrap="wrap">
    //         {array.map((tech) => (
    //           <Box key={tech.icon} margin={1}>
    //             <Ball imgUrl={tech.icon} />
    //           </Box>
    //         ))}
    //       </Flex>
    //     </Suspense>
    //   <Preload all/>
    // </Canvas>
  )
}

export default BallCanvas;