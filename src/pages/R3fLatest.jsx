

import * as THREE from 'three'
import { Vector3 } from 'three'
import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


import { Suspense } from 'react' //useRef, useEffect, useLayoutEffect
import { Link, useNavigate } from 'react-router-dom'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Environment, Lightformer, ContactShadows, OrbitControls, Stage, useDepthBuffer, ScrollControls, Scroll, useScroll, useGLTF, SpotLight, useAnimations, Bounds, CameraShake, Backdrop, Float } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Loader from '../components/Loader'
// import './styles.css'

// import { useGlitch } from 'react-powerglitch'



function Rig() {
  // const [vec] = useState(() => new THREE.Vector3())
  // const { camera, mouse } = useThree()
  // useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05))
  // return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />

    const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

  const Model = () => {
    // const ref = useRef()
    const { width, height } = useThree((state) => state.viewport)
    const scroll = useScroll()

    useFrame(() => (gltf.scene.rotation.y = scroll.offset * Math.PI * 2))

//     const dir = [0,0,0]
//     const ref = useRef()
// useLayoutEffect(() => {
//   ref.current.lookAt({dir})
//     // eslint-disable-next-line
// }, [])

    const gltf = useLoader(
      GLTFLoader,
      'https://gyislujtnocdhtdlfbvb.supabase.co/storage/v1/object/sign/cybertruck/cyber_truck.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjeWJlcnRydWNrL2N5YmVyX3RydWNrLmdsYiIsImlhdCI6MTY5MDI1NDM4MiwiZXhwIjoxNzIxNzkwMzgyfQ.8K8gJE9YN9e-4cBElYXIoytbFTiICNnUvPMeBgaF0M8&t=2023-07-25T03%3A06%3A22.815Z'
    )
//width * .000007, height *, 1
    // gltf.scene.rotation.z = 180
    //
    //scale={[[width, height, 1]]}
    // castShadow, receiveShadow
    return (
      <>
        <primitive object={gltf.scene} scale={0.012} position={[0, -2, 0]} rotation={[0, Math.PI / 1.5, 0]} />
      </>
    )
  }


function MovingSpot({ vec = new Vector3(), ...props }) {
      const scroll = useScroll()
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  // useFrame((state) => {
  //   light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
  //   light.current.target.updateMatrixWorld()
  // })

  useFrame(() => {
    light.current.position.x = scroll.offset * Math.PI * 2
  })
  return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={2} {...props} />
}

const Scene = () => {
  const depthBuffer = useDepthBuffer({ frames: 1 })
  return (
  <>
    <MovingSpot depthBuffer={depthBuffer}  color="#0c8cbf" position={[3, 3, 2]} />
      <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[1, 3, 0]} />
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

  // const glitch = useGlitch()
  const navigate = useNavigate()

  // useFrame(() => (gltf.scene.rotation.y = scroll.offset * Math.PI * 2))

  return (
    <>
    <div className="container-fluid" style={{height: '1100px'}}>
      <Canvas
        style={{ background: 'black' }}
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        shadows
        camera={{ position: [-5, 15, 50], fov: 25 }}>
      <Suspense fallback={<Loader />}>
        {/* higher z index closer to user. 30 */}
        <pointLight position={[0, 20, 10]} intensity={5} />
        <hemisphereLight intensity={0.5} />
        {/* <hemisphereLight intensity={0.5} /> */}
        {/* <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} /> */}
        <ambientLight intensity={0.1} />
        {/* <fog attach="fog" args={['black', 5, 100]} /> */}
        <spotLight angle={0.5} color="white" penumbra={1} position={[25, 50, 5]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
        <spotLight angle={0.5} color="white" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />

        {/* <Suspense fallback={null}> */}
        {/* <Suspense fallback={<Loader />}> */}
        {/* <Bounds fit clip observe> */}
        <Bounds fit clip observe damping={6} margin={1.2}>
          {/* Wrap contents you want to scroll into <ScrollControls> */}

          <ScrollControls pages={3}>
            {/* <Scroll> */}
            {/* <Stage intensity={0.5} shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={false}> */}

<Float
  speed={1} // Animation speed, defaults to 1
  rotationIntensity={1} // XYZ rotation intensity, defaults to 1
  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
>
<Scene />

            <Model />

            </Float>
            {/* <Backdrop
  floor={0.25} // Stretches the floor segment, 0.25 by default
  segments={20} // Mesh-resolution, 20 by default
>
  <meshStandardMaterial color="#353540" />
</Backdrop> */}

            {/* <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
              <ringGeometry args={[0.9, 1, 3, 1]} />
              <meshStandardMaterial color="white" roughness={0.75} />
            </mesh>

            <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
              <ringGeometry args={[0.9, 1, 4, 1]} />
              <meshStandardMaterial color="white" roughness={0.75} />
            </mesh> */}

            {/* <OrbitControls /> */}
            {/* <Environment preset="sunset" background /> */}
            {/* <LittlestTokyo scale={0.005} position={[0, 2, 0]} /> */}
            {/* </Stage> */}

{/* top: isMobile ? 'top: 340vh': 'top: 100px',  */}
            <Scroll html>
              <h1
                // ref={glitch.ref}
                // className="display-2"
                id="cybertruck-title"
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
                <h1 style={{ position: 'absolute', top: '100vh', left: isMobile ? 'left: 20vw' : 'left: 70vw', color: 'white' }}>EXOSKELETON</h1>
                <p
                  style={{
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
                </p>
              </div>

              <h1 style={{ position: 'absolute', top: '198.5vh', left: '70vw', color: 'white', width: '30vw', fontSize: '1.5rem' }}>
                ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL
              </h1>

              <p
                style={{
                  position: 'absolute',
                  top: '209vh',
                  left: '70vw',
                  paddingRight: '50%',
                  color: 'white',
                  width: '40vw',
                  overflowWrap: 'breakWord',
                  fontSize: '0.9rem'
                }}>
                If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts
                the shell on the outside of the car and provides you and your passengers maximum protection.
              </p>

              <h1 style={{ position: 'absolute', top: '250vh', left: '10vw', color: 'white', width: '40vw', fontSize: '1.5rem' }}>TESLA ARMOR GLASS</h1>
              <p
                style={{
                  position: 'absolute',
                  top: '257vh',
                  left: '10vw',
                  paddingRight: '50%',
                  color: 'white',
                  width: '40vw',
                  overflowWrap: 'breakWord',
                  fontSize: '0.9rem'
                }}>
                Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.
              </p>
              <h1 style={{ position: 'absolute', top: '340vh', left: '10vw', color: 'white', width: '40vw', fontSize: '1.5rem' }}>VERSATILE UTILITY</h1>
              <ul style={{ position: 'absolute', top: '348vh', left: '10vw', color: 'white', width: '40vw', fontSize: '0.9rem' }}>
                <li>Vault-like storage</li>
                <li>Rugged strength</li>
                <li>Adaptive air suspension</li>
                <li>Flexible interior</li>
                <li>Awesome adaptability</li>
              </ul>


              <video style={{ position: 'absolute', top: '380vh', left: '20vw', width: '60vw',  height: 'auto' }} autoPlay="autoPlay" muted controls>
                <source src="cybertruck.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button className="order-btn" style={{ position: 'absolute', top: '450vh', left: '50vw' }} onClick={() => navigate('/order')}>ORDER NOW </button>


              {/* <button onClick={() => router.push(`/draft/${cardId}/submitted`)} type="button" className="btn btn-light button mx-auto">SEND</button> */}
              {/* <h1
                color="white"
                style={{
                  position: 'absolute',
                  top: '400vh',
                  left: '40vw',
                  color: 'white',
                  fontSize: '1.3vw',
                  width: '100vw'
                }}>
                BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR
              </h1> */}

            </Scroll>
          </ScrollControls>
          {/* <OrderButton /> */}
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

            <Lightformer form="circle" color="pink" intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
            <Lightformer form="circle" color="white" intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />

                    <Lightformer form="circle" color="pink" intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
            <Lightformer form="circle" color="white" intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />

            {/* <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} /> */}
            <Lightformer form="ring" color="blue" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            <Lightformer form="ring" color="aqua" intensity={10} scale={2} position={[-10, -5, -10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
          </Environment>
          </Bounds>
          {/* <Rig /> */}
        </Suspense>
        {/* <CameraShake
        maxYaw={0.05} // Max amount camera can yaw in either direction
        maxPitch={0.05} // Max amount camera can pitch in either direction
        maxRoll={0.1} // Max amount camera can roll in either direction
        yawFrequency={0.1} // Frequency of the the yaw rotation
        pitchFrequency={0.1} // Frequency of the pitch rotation
        rollFrequency={0.1} // Frequency of the roll rotation
        intensity={0.8} // initial intensity of the shake
        decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
      /> */}
      </Canvas>
      {/* <html>
        <div style={{ color: 'red' }}> HERE I AM</div>
      </html> */}
      {/* <div ref={scrollRef} onScroll={(e) => (scroll.current = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight))} className="scroll">
        <div style={{ height: `200vh`, pointerEvents: 'none' }}></div>
      </div> */}
      </div>
    </>
  )
}

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload(
  'https://gyislujtnocdhtdlfbvb.supabase.co/storage/v1/object/sign/cybertruck/cyber_truck.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjeWJlcnRydWNrL2N5YmVyX3RydWNrLmdsYiIsImlhdCI6MTY5MDI1NDM4MiwiZXhwIjoxNzIxNzkwMzgyfQ.8K8gJE9YN9e-4cBElYXIoytbFTiICNnUvPMeBgaF0M8&t=2023-07-25T03%3A06%3A22.815Z'
)

export default R3fPage

// const R3fPage = () => {
//   return (
//     <>
//     <Container id="about-container" className="h-100">
//     <Row className="h-100">
//     <Col>
//    <h1>r3fe</h1>
//       </Col>
//       </Row>
//   </Container>
//     </>
//   )
// }
