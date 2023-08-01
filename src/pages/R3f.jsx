// import * as THREE from 'three'
import React, { useState, useRef, useEffect } from "react"
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'

import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Environment, Lightformer, OrbitControls, Stage, useDepthBuffer, ScrollControls, Scroll, useScroll, useGLTF, SpotLight, useAnimations, Bounds, CameraShake, Backdrop, Float } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Loader from '../components/Loader'

  const Model = () => {
    const scroll = useScroll()
    const { width, height } = useThree((state) => state.viewport)

    useFrame(() => (gltf.scene.rotation.y = scroll.offset * Math.PI * 2))

    const gltf = useLoader(
      GLTFLoader,
      'https://gyislujtnocdhtdlfbvb.supabase.co/storage/v1/object/sign/cybertruck/cyber_truck.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjeWJlcnRydWNrL2N5YmVyX3RydWNrLmdsYiIsImlhdCI6MTY5MDI1NDM4MiwiZXhwIjoxNzIxNzkwMzgyfQ.8K8gJE9YN9e-4cBElYXIoytbFTiICNnUvPMeBgaF0M8&t=2023-07-25T03%3A06%3A22.815Z'
    )

    return (
      <>
        <primitive object={gltf.scene} scale={0.013} position={[0, -1, 0]}  />
      </>
    )
  }

const R3fPage = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if(window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(()=> {
    window.addEventListener("resize", handleResize)
  })

  const navigate = useNavigate()

  return (
    <>
    <div className="container-fluid" style={{height: '1100px'}}>
      <Canvas
        style={{ background: 'black' }}
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        shadows
        camera={{ position: [-35, 5, 20], fov: 25 }}>
      <Suspense fallback={<Loader />}>
        <hemisphereLight intensity={1} />
        <ambientLight intensity={0.1} />
        <spotLight angle={1} color="white" penumbra={1} position={[0, 25, 5]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
        <spotLight angle={1} color="white" penumbra={1} position={[0, 25, 5]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
        {/* <Bounds fit clip observe> */}
        {/* <Bounds fit clip observe damping={6} margin={1.2}> */}
      <ScrollControls pages={3}>
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
      <Model />
      </Float>
      <Scroll html>
        <h1 id="cybertruck-title"
          style={{
            position: 'absolute',
            top: '8vh',
            left: '50vw',
            color: 'white',
            fontSize: '3rem'
          }}>
          {' '}
          CYBERTRUCK
        </h1>

        <div style={{ width: '30vw' }}>
          <h1 style={{
              position: 'absolute',
              top: '100vh',
              left: '70vw',
              color: 'white'
            }}>EXOSKELETON</h1>

          {!isMobile && (
          <p style={{
              position: 'absolute',
              top: '108vh',
              left: '70vw',
              paddingRight: '50%',
              color: 'white',
              width: '40vw',
              wordWrap: 'break-word',
              fontSize: '0.9rem'
            }}>
            Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable
            exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin
            to Tesla armor glass.
          </p> )}

          <h1 style={{
              position: 'absolute',
              top: '198.5vh',
              left: '70vw',
              color: 'white',
              width: '30vw',
              fontSize: '1.5rem' }}>
              ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL
          </h1>

          {!isMobile && (
          <p
            style={{
              position: 'absolute',
              // top: isMobile? '235vh' : '209vh',
              top: '210vh',
              left: '70vw',
              paddingRight: '50%',
              color: 'white',
              width: '40vw',
              overflowWrap: 'breakWord',
              fontSize: '0.9rem'
            }}>
            If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts
            the shell on the outside of the car and provides you and your passengers maximum protection.
          </p>)}

          <h1 style={{
              position: 'absolute',
              top: '260vh',
              left: '10vw',
              color: 'white',
              width: '40vw',
              fontSize: '1.5rem'
            }}>TESLA ARMOR GLASS</h1>

          {!isMobile && (
          <p
            style={{
              position: 'absolute',
              // top: isMobile? '285vh' : '257vh',
              top: '267vh',
              left: '10vw',
              paddingRight: '50%',
              color: 'white',
              width: '40vw',
              overflowWrap: 'breakWord',
              fontSize: '0.9rem'
            }}>
            Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.
          </p>)}

          <h1 style={{
              position: 'absolute',
              top: '340vh',
              left: '10vw',
              color: 'white',
              width: '40vw',
              fontSize: '1.5rem'
            }}>VERSATILE UTILITY</h1>

          {!isMobile && (
            <ul style={{ position: 'absolute', top: '348vh', left: '10vw', color: 'white', width: '40vw', fontSize: '0.9rem' }}>
            <li>Vault-like storage</li>
            <li>Rugged strength</li>
            <li>Adaptive air suspension</li>
            <li>Flexible interior</li>
            <li>Awesome adaptability</li>
          </ul>
          )}
          </div>

          {!isMobile && (
          <video style={{ position: 'absolute', top: '400vh', left: '25vw', width: '50vw',  height: 'auto' }} autoPlay="autoPlay" muted controls>
            <source src="cybertruck.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>)}

          <button className="order-btn" style={{ position: 'absolute', top: '450vh', left: '50vw' }} onClick={() => navigate('/order')}>ORDER NOW </button>
        </Scroll>
      </ScrollControls>
      <Environment resolution={512}>
        <Lightformer
          form="ring" // circle | ring | rect (optional, default = rect)
          intensity={2} // power level (optional = 1)
          color="red" // (optional = white)
          scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
          target={[0, 0, 0]} // Target position (optional = undefined)
        />
        <Lightformer form="ring" color="aqua" intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} form="ring" color="red" rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} color="red" rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer form="ring" intensity={2} color="pink" rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        <Lightformer form="circle" color="pink" intensity={2} rotation-y={Math.PI / 2} position={[20, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer form="circle" color="lime" intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer form="circle" color="pink" intensity={2} rotation-y={Math.PI / 2} position={[20, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer form="circle" color="white" intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer form="ring" color="blue" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
        <Lightformer form="ring" color="aqua" intensity={10} scale={2} position={[-10, -5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
      {/* </Bounds> */}
      </Suspense>
      </Canvas>
      </div>
    </>
  )
}
useGLTF.preload(
  'https://gyislujtnocdhtdlfbvb.supabase.co/storage/v1/object/sign/cybertruck/cyber_truck.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjeWJlcnRydWNrL2N5YmVyX3RydWNrLmdsYiIsImlhdCI6MTY5MDI1NDM4MiwiZXhwIjoxNzIxNzkwMzgyfQ.8K8gJE9YN9e-4cBElYXIoytbFTiICNnUvPMeBgaF0M8&t=2023-07-25T03%3A06%3A22.815Z'
)

export default R3fPage
