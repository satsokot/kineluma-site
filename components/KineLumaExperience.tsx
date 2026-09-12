"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Scene({ progress }: { progress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useFrame((state, delta) => {
    const p = progress.current;
    if (!group.current || !shell.current || !core.current) return;

    const targetRotY = p * Math.PI * 3.2;
    const targetRotX = Math.sin(p * Math.PI * 2) * 0.35;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 4, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 4, delta);

    const scale = 1 + Math.sin(p * Math.PI) * 0.18;
    group.current.scale.setScalar(THREE.MathUtils.damp(group.current.scale.x, scale, 4, delta));

    shell.current.position.x = THREE.MathUtils.damp(shell.current.position.x, Math.sin(p * Math.PI * 2) * 0.9, 4, delta);
    core.current.position.x = THREE.MathUtils.damp(core.current.position.x, -Math.sin(p * Math.PI * 2) * 0.55, 4, delta);

    const targetZ = 5.7 - p * 1.4 + Math.sin(p * Math.PI * 2) * 0.35;
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 4, delta);
    camera.position.x = THREE.MathUtils.damp(camera.position.x, Math.sin(p * Math.PI * 1.3) * 1.2, 4, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, Math.cos(p * Math.PI * 1.7) * 0.45, 4, delta);
    camera.lookAt(0, 0, 0);

    shell.current.rotation.z += delta * 0.08;
    core.current.rotation.y -= delta * 0.15;
    state.gl.toneMappingExposure = 1.05 + Math.sin(p * Math.PI) * 0.25;
  });

  return (
    <group ref={group}>
      <Float speed={1.15} rotationIntensity={0.2} floatIntensity={0.35}>
        <mesh ref={shell}>
          <torusKnotGeometry args={[1.2, 0.36, 220, 32]} />
          <meshPhysicalMaterial color="#f2f0ea" metalness={0.92} roughness={0.18} clearcoat={1} clearcoatRoughness={0.08} />
        </mesh>
        <mesh ref={core} scale={0.78}>
          <icosahedronGeometry args={[1.1, 4]} />
          <meshPhysicalMaterial color="#8b7cff" emissive="#241d60" emissiveIntensity={1.2} metalness={0.55} roughness={0.12} transmission={0.08} />
        </mesh>
      </Float>
      <pointLight position={[4, 2, 4]} intensity={34} color="#ffffff" />
      <pointLight position={[-4, -1, 2]} intensity={18} color="#7666ff" />
    </group>
  );
}

export default function KineLumaExperience() {
  const progress = useRef(0);
  const counter = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const trigger = ScrollTrigger.create({
      trigger: ".site",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        progress.current = self.progress;
        if (counter.current) counter.current.textContent = `${String(Math.round(self.progress * 100)).padStart(2, "0")} / 100`;
      },
    });

    lenis.on("scroll", ScrollTrigger.update);
    return () => {
      trigger.kill();
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="site">
      <div className="canvas-wrap">
        <Canvas camera={{ position: [0, 0, 5.7], fov: 42 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
          <color attach="background" args={["#050505"]} />
          <ambientLight intensity={0.3} />
          <Scene progress={progress} />
          <Environment preset="city" />
        </Canvas>
      </div>
      <div className="veil" />
      <div className="brand">KineLuma</div>
      <div className="counter" ref={counter}>00 / 100</div>
      <div className="sections">
        <section className="panel">
          <div className="copy">
            <div className="kicker">Immersive systems</div>
            <h1 className="title">Light in motion.</h1>
            <p className="body">A scroll-driven 3D experience where form, camera and light move as one continuous scene.</p>
          </div>
          <div className="scroll-hint">Scroll to explore</div>
        </section>
        <section className="panel right">
          <div className="copy">
            <div className="kicker">Chapter 01</div>
            <h2 className="title">Form shifts.</h2>
            <p className="body">Geometry separates, rotates and recomposes while the camera moves through a single persistent WebGL world.</p>
          </div>
        </section>
        <section className="panel">
          <div className="copy">
            <div className="kicker">Chapter 02</div>
            <h2 className="title">Depth responds.</h2>
            <p className="body">The page does not cut between scenes. It behaves like one interactive film controlled by the user’s scroll.</p>
          </div>
        </section>
        <section className="panel right">
          <div className="copy">
            <div className="kicker">Chapter 03</div>
            <h2 className="title">Light leads.</h2>
            <p className="body">Lighting and reflections carry the visual hierarchy so the 3D object remains cinematic without becoming visual noise.</p>
          </div>
        </section>
        <section className="panel">
          <div className="copy">
            <div className="kicker">KineLuma</div>
            <h2 className="title">Built to evolve.</h2>
            <p className="body">This is the production foundation. Real models, materials, transitions and brand storytelling can now replace the procedural test object without changing the architecture.</p>
            <div className="cta">Experience complete</div>
          </div>
        </section>
      </div>
    </main>
  );
}
