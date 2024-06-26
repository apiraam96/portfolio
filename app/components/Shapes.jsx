"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Shapes() {
  return (
    <div className="p-0 row-span-1 row-start-1 -mt-60 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -5.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.OctahedronGeometry(4), //Looks like a gem
    },
    {
      position: [1, -0.75, 4],
      r: 0.5,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), //Looks like a gem
    },
    {
      position: [-1.4, 2, -4],
      r: 0.6,
      geometry: new THREE.TorusGeometry(1.5, 0.8, 16, 32), //Looks like a gem
    },
    {
      position: [1.6, 1.6, -4],
      r: 0.5,
      geometry: new THREE.TetrahedronGeometry(2), //Looks like a gem
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.5,
      geometry: new THREE.DodecahedronGeometry(1), //Looks like a gem
    },

  ];

  const materials = [
    new THREE.MeshNormalMaterial(), 
    // new THREE.MeshStandardMaterial({ color: 0x1abc9c})
  ];

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      materials={materials}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, materials }) {
  const [visible, setVisible] = useState(false);
  const meshRef = useRef();
  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3",
      yoyo: true,
    });
    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useGSAP(() => {
    setVisible(true)
    gsap.from(meshRef.current.scale, {
        y: 0,
        x: 0, 
        z: 0,
        delay: 3,
        duration: 2, 
        ease: "bounce.out",
        delay: 3
      })
  })

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
}
