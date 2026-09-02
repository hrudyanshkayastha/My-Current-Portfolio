"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { Fallback2D } from "./Fallback2D";

export function CyberWorldCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isSupported, prefersReducedMotion } = useWebGLSupport();
  const { activeSection, scrollProgress } = useScrollProgress();

  // Keep references for animation loop
  const activeSectionRef = useRef(activeSection);
  const scrollProgressRef = useRef(scrollProgress);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

useEffect(() => {
    activeSectionRef.current = activeSection;
    scrollProgressRef.current = scrollProgress;
  }, [activeSection, scrollProgress]);

  useEffect(() => {
    if (!isSupported || prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    let animationFrameId: number;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060910, 0.025);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. PARTICLES FIELD (Network & Data Streams)
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 450 : 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorA = new THREE.Color(0x10b981); // Emerald
    const colorB = new THREE.Color(0x06b6d4); // Cyan
    const colorC = new THREE.Color(0x6366f1); // Indigo

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical distribution with depth
      const radius = 6 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 45;

      positions[i * 3] = radius * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(theta);
      positions[i * 3 + 2] = z;

      // Color variation
      const rand = Math.random();
      const chosenColor = rand < 0.4 ? colorA : rand < 0.75 ? colorB : colorC;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      scales[i] = Math.random() * 2.0 + 0.8;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 2. KERYNTH / ALCDP-X DEFENSE CORE (Left / Center)
    const defenseGroup = new THREE.Group();
    defenseGroup.position.set(0, 0, 0);

    // Inner Core 3D Geometry
    const coreGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    defenseGroup.add(coreMesh);

    // Outer Tactical Node Ring (Observe, Understand, Decide, Act, Verify)
    const ringGeo = new THREE.TorusGeometry(4.2, 0.03, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    defenseGroup.add(ringMesh);

    // Second Ring for Multi-Axis Depth
    const ring2Geo = new THREE.TorusGeometry(3.6, 0.02, 16, 48);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.35,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 3;
    defenseGroup.add(ring2Mesh);

    // 5 Autonomous Loop Nodes
    const loopNodes: THREE.Mesh[] = [];
    const stageColors = [0x10b981, 0x06b6d4, 0x38bdf8, 0x10b981, 0x34d399];
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const nodeGeo = new THREE.SphereGeometry(0.25, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: stageColors[i],
        transparent: true,
        opacity: 0.85,
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(Math.cos(angle) * 4.2, Math.sin(angle) * 4.2, 0);
      defenseGroup.add(node);
      loopNodes.push(node);
    }

    scene.add(defenseGroup);

    // 3. AGLETRAS INTELLIGENCE CONSTELLATION (Right Sector)
    const intelGroup = new THREE.Group();
    intelGroup.position.set(7, -3, -5);

    const intelCoreGeo = new THREE.OctahedronGeometry(2.0, 0);
    const intelCoreMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const intelCoreMesh = new THREE.Mesh(intelCoreGeo, intelCoreMat);
    intelGroup.add(intelCoreMesh);

    // Orbital ring for Agletras
    const intelRingGeo = new THREE.TorusGeometry(3.4, 0.025, 16, 48);
    const intelRingMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.4,
    });
    const intelRing = new THREE.Mesh(intelRingGeo, intelRingMat);
    intelRing.rotation.x = Math.PI / 3;
    intelGroup.add(intelRing);

    // Satellite intelligence nodes
    const intelNodes: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const satGeo = new THREE.SphereGeometry(0.2, 8, 8);
      const satMat = new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.75,
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      sat.position.set(Math.cos(angle) * 3.4, 0, Math.sin(angle) * 3.4);
      intelGroup.add(sat);
      intelNodes.push(sat);
    }

    scene.add(intelGroup);

    // 4. MOUSE PARALLAX TRACKING
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX / innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

// 5. RESIZE HANDLER
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 6. ANIMATION & CHOREOGRAPHY LOOP
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Rotate particle cloud gently
      particleSystem.rotation.y = elapsedTime * 0.03;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;

      // Animate Defense Core
      coreMesh.rotation.x = elapsedTime * 0.2;
      coreMesh.rotation.y = elapsedTime * 0.25;
      ringMesh.rotation.z = elapsedTime * 0.15;
      ring2Mesh.rotation.x = -elapsedTime * 0.18;

      // Pulse nodes
      const pulse = Math.sin(elapsedTime * 2) * 0.08 + 1;
      coreMesh.scale.set(pulse, pulse, pulse);

      // Animate Agletras Core
      intelCoreMesh.rotation.y = -elapsedTime * 0.3;
      intelCoreMesh.rotation.z = elapsedTime * 0.15;
      intelRing.rotation.y = elapsedTime * 0.2;

      for (let i = 0; i < intelNodes.length; i++) {
        const satAngle = (i / 4) * Math.PI * 2 + elapsedTime * 0.3;
        intelNodes[i].position.set(Math.cos(satAngle) * 3.4, Math.sin(satAngle * 0.5) * 0.8, Math.sin(satAngle) * 3.4);
      }

      // CAMERA CHOREOGRAPHY BASED ON ACTIVE SECTION
      const targetCam = { x: 0, y: 0, z: 18, rotX: 0, rotY: 0 };
      const currentSec = activeSectionRef.current;

      if (currentSec === "hero") {
        targetCam.x = mouseRef.current.x * 1.5;
        targetCam.y = mouseRef.current.y * 1.2;
        targetCam.z = 18;
        defenseGroup.position.set(3, 0, 0);
        intelGroup.position.set(12, -4, -6);
      } else if (currentSec === "about") {
        targetCam.x = -2 + mouseRef.current.x * 1.0;
        targetCam.y = 1 + mouseRef.current.y * 0.8;
        targetCam.z = 15;
        defenseGroup.position.set(2, 0.5, 0);
      } else if (currentSec === "kerynth" || currentSec === "alcdpx") {
        targetCam.x = 2.5 + mouseRef.current.x * 1.2;
        targetCam.y = mouseRef.current.y * 0.8;
        targetCam.z = 12;
        defenseGroup.position.set(-3, 0, 2);
        coreMat.opacity = 0.7;
      } else if (currentSec === "agletras") {
        targetCam.x = -3 + mouseRef.current.x * 1.2;
        targetCam.y = mouseRef.current.y * 0.8;
        targetCam.z = 13;
        intelGroup.position.set(3.5, 0, 1);
        intelCoreMat.opacity = 0.7;
      } else if (currentSec === "projects") {
        targetCam.x = mouseRef.current.x * 1.5;
        targetCam.y = -1 + mouseRef.current.y * 0.8;
        targetCam.z = 17;
        defenseGroup.position.set(-5, 2, -2);
        intelGroup.position.set(5, -2, -2);
      } else if (currentSec === "services" || currentSec === "contact") {
        targetCam.x = mouseRef.current.x * 0.8;
        targetCam.y = mouseRef.current.y * 0.6;
        targetCam.z = 20;
      }

      // Smooth camera interpolation
      camera.position.x += (targetCam.x - camera.position.x) * 0.04;
      camera.position.y += (targetCam.y - camera.position.y) * 0.04;
      camera.position.z += (targetCam.z - camera.position.z) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

// CLEANUP
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose particle system
      particleSystem.geometry.dispose();
      particleSystem.material.dispose();

      // Dispose particle geometry and material (buffer attributes)
      particleGeometry.dispose();
      particleMaterial.dispose();

      // Dispose core mesh objects
      coreGeo.dispose();
      coreMat.dispose();

      // Dispose ring meshes
      ringGeo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();

      // Dispose loop nodes (5 autonomous nodes)
      loopNodes.forEach((node) => {
        if (node.geometry) node.geometry.dispose();
        if (node.material) {
          if (Array.isArray(node.material)) {
            node.material.forEach((m) => m.dispose());
          } else {
            node.material.dispose();
          }
        }
      });

      // Dispose Intel group objects
      intelCoreGeo.dispose();
      intelCoreMat.dispose();
      intelRingGeo.dispose();
      intelRingMat.dispose();

      // Dispose satellite nodes from intel group
      intelNodes.forEach((node) => {
        if (node.geometry) node.geometry.dispose();
        if (node.material) {
          if (Array.isArray(node.material)) {
            node.material.forEach((m) => m.dispose());
          } else {
            node.material.dispose();
          }
        }
      });

      // Remove renderer from DOM and dispose
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isSupported, prefersReducedMotion]);

const reducedMotionEnabled = prefersReducedMotion || (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  if (isSupported === false || reducedMotionEnabled) {
    return <Fallback2D />;
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
    />
  );
}
