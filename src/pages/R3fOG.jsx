

import * as THREE from 'three'
import React from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


import { Suspense } from 'react' //useRef, useEffect, useLayoutEffect
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { Environment, Lightformer, ContactShadows, OrbitControls, Stage, ScrollControls, Scroll, useScroll, useGLTF, useAnimations } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import Loader from './Loader.js'
// import './styles.css'

// import { useGlitch } from 'react-powerglitch'

const R3fPage = () => {
  // const glitch = useGlitch()

  const Model = () => {
    const { width, height } = useThree((state) => state.viewport)
    const scroll = useScroll()

    useFrame(() => (gltf.scene.rotation.y = scroll.offset * Math.PI * 2))

    const gltf = useLoader(
      GLTFLoader,
      'https://gyislujtnocdhtdlfbvb.supabase.co/storage/v1/object/sign/cybertruck/cyber_truck.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjeWJlcnRydWNrL2N5YmVyX3RydWNrLmdsYiIsImlhdCI6MTY5MDI1NDM4MiwiZXhwIjoxNzIxNzkwMzgyfQ.8K8gJE9YN9e-4cBElYXIoytbFTiICNnUvPMeBgaF0M8&t=2023-07-25T03%3A06%3A22.815Z'
    )

    // gltf.scene.rotation.z = 180
    //
    // scale={[width * 0.5, height * 0.5, 1]}
    return (
      <>
        <primitive object={gltf.scene} scale={0.012} position={[0, -2, 0]} rotation={[0, Math.PI / 1.5, 0]} />
      </>
    )
  }

  return (
    <>
      <Canvas
        style={{ background: 'black' }}
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        shadows
        camera={{ position: [-5, 15, 30], fov: 25 }}>
        <hemisphereLight intensity={0.3} />
        {/* <hemisphereLight intensity={0.5} /> */}
        {/* <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} /> */}
        <ambientLight intensity={0.1} />
        {/* <fog attach="fog" args={['black', 5, 100]} /> */}
        <spotLight angle={0.5} color="white" penumbra={1} position={[25, 50, 5]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
        <spotLight angle={0.5} color="white" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />

        {/* <Suspense fallback={<Loader />}> */}
          {/* Wrap contents you want to scroll into <ScrollControls> */}

          <ScrollControls pages={3}>
            {/* <Scroll> */}
            {/* <Stage intensity={0.5} shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={false}> */}
            <Model />

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

            <Scroll html>
              <h1
                // ref={glitch.ref}
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
                <h1 style={{ position: 'absolute', top: '100vh', left: '70vw', color: 'white' }}>EXOSKELETON</h1>
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

              <button id="order-btn" style={{ position: 'absolute', top: '400vh', left: '50vw', whiteSpace: 'nowrap', fontSize: '0.9rem', fontWeight: 'bold' }}>
                ORDER NOW
              </button>
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
            {/* <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} /> */}
            <Lightformer form="ring" color="blue" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            <Lightformer form="ring" color="aqua" intensity={10} scale={2} position={[-10, -5, -10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
          </Environment>
        {/* </Suspense> */}
      </Canvas>
      {/* <html>
        <div style={{ color: 'red' }}> HERE I AM</div>
      </html> */}
      {/* <div ref={scrollRef} onScroll={(e) => (scroll.current = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight))} className="scroll">
        <div style={{ height: `200vh`, pointerEvents: 'none' }}></div>
      </div> */}
    </>
  )
}

// function LittlestTokyo({ ...props }) {
//   const { viewport } = useThree()
//   // This hook gives you offets, ranges and other useful things
//   // const scroll = useScroll()
//   // const data = useScroll()
//   const scroll = useScroll()
//   // const { width, height } = useThree((state) => state.viewport)
//   const { scene } = useGLTF(
//     'https://gyislujtnocdhtdlfbvb.supabase.co/storage/v1/object/sign/cybertruck/cyber_truck.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjeWJlcnRydWNrL2N5YmVyX3RydWNrLmdsYiIsImlhdCI6MTY5MDI1NDM4MiwiZXhwIjoxNzIxNzkwMzgyfQ.8K8gJE9YN9e-4cBElYXIoytbFTiICNnUvPMeBgaF0M8&t=2023-07-25T03%3A06%3A22.815Z'
//   )

//   // const { scene, nodes, animations } = useGLTF(
//   //   'https://gyislujtnocdhtdlfbvb.supabase.co/storage/v1/object/sign/cybertruck/cyber_truck.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjeWJlcnRydWNrL2N5YmVyX3RydWNrLmdsYiIsImlhdCI6MTY5MDI1NDM4MiwiZXhwIjoxNzIxNzkwMzgyfQ.8K8gJE9YN9e-4cBElYXIoytbFTiICNnUvPMeBgaF0M8&t=2023-07-25T03%3A06%3A22.815Z'
//   // )
//   // const { actions } = useAnimations(animations, scene)

//   const myMesh = React.useRef()

//   // useEffect(() => {
//   //   myMesh.current.rotation.y = 40
//   // })

//   // useFrame((state, delta) => {
//   //   myMesh.current.rotation.y = THREE.MathUtils.damp(myMesh.current.rotation.y, viewport.height * scroll.current, 4, delta)
//   // })
//   // useFrame((state, delta) => {
//   // const r1 = scroll.range(0 / 4, 1 / 4)
//   // const r2 = scroll.range(1 / 4, 1 / 4)
//   // const r3 = scroll.visible(4 / 5, 1 / 5)
//   // myMesh.current.rotation.y = Math.PI / 1.45

//   // keyLight.current.position.set(0.25 + -15 * (1 - r1), 4 + 11 * (1 - r1), 3 + 2 * (1 - r1))
//   // left.current?.classList.toggle('show', r3)
//   // right.current?.classList.toggle('show', r3)
//   // })

//   // useFrame(({ clock }) => {
//   //   const a = clock.getElapsedTime()
//   //   myMesh.current.rotation.y = a
//   // })

//   // useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
//   // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])

//   const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)

//   useFrame(() => (scene.rotation.y = scroll.offset * Math.PI * 2))

//   // useFrame((state, delta) => {
//   //   const r1 = scroll.range(0 / 4, 1 / 4)
//   //   const r2 = scroll.range(1 / 4, 1 / 4)
//   //   //   const action = actions['Take 001']
//   //   //   // The offset is between 0 and 1, you can apply it to your models any way you like
//   //   // const offset = 1 - scroll.offset
//   //   myMesh.current.rotation.y = 0.005 * Math.PI //THREE.MathUtils.damp(myMesh.current.rotation.z, Math.PI / 0.25)
//   //   //Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * 2 //
//   //   //THREE.MathUtils.damp(myMesh.current.rotation.x, (-Math.PI / 1.45) * r2, 4, delta)
//   //   //
//   //   //mbp16.current.rotation.x = Math.PI - (Math.PI / 2) * rsqw(r1) + r2 * 0.33
//   //   // myMesh.current.rotation.z = myMesh.current.rotation.z / Math.sin(0.2 * scroll.current) //THREE.MathUtils.damp(myMesh.current.rotation.y, viewport.height * scroll.current, 4, delta)
//   // })
//   return <primitive ref={myMesh} object={scene} {...props} />
// }

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
