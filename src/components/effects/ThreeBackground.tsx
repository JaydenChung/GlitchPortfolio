import React, { useRef, useEffect } from "react";
import * as THREE from "three";

type ThreeBackgroundProps = {
  color?: string;
};

export const ThreeBackground = ({
  color = "#800080",
}: ThreeBackgroundProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Camera position
    camera.position.z = 5;

    // Grid
    const gridSize = 20;
    const gridDivisions = 20;
    const gridHelper = new THREE.GridHelper(
      gridSize,
      gridDivisions,
      new THREE.Color(color),
      new THREE.Color(color),
    );
    gridHelper.position.y = -3;
    gridHelper.rotation.x = Math.PI / 8;
    scene.add(gridHelper);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    scene.add(particlesMesh);

    // Glowing lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.5,
    });

    for (let i = 0; i < 20; i++) {
      const lineGeometry = new THREE.BufferGeometry();
      const points = [];
      const startPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      );

      points.push(startPoint);

      for (let j = 0; j < 5; j++) {
        const nextPoint = new THREE.Vector3(
          startPoint.x + (Math.random() - 0.5) * 5,
          startPoint.y + (Math.random() - 0.5) * 5,
          startPoint.z + (Math.random() - 0.5) * 5,
        );
        points.push(nextPoint);
      }

      lineGeometry.setFromPoints(points);
      const line = new THREE.Line(lineGeometry, linesMaterial);
      scene.add(line);
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;

      gridHelper.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, [color]);

  return (
    <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};
