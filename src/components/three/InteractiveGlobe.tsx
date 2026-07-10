"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InteractiveGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe Geometry: particles representation
    const radius = 6;
    const particleGeometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];

    const color1 = new THREE.Color("#1E1B4B"); // Midnight Blue
    const color2 = new THREE.Color("#7C3AED"); // Cyber Purple
    const color3 = new THREE.Color("#FAB818"); // Logo Golden-Yellow

    // Spherical distribution
    for (let i = 0; i < 900; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push(x, y, z);

      // Random color gradient assignment
      const rand = Math.random();
      const chosenColor = rand < 0.33 ? color1 : rand < 0.66 ? color2 : color3;
      colors.push(chosenColor.r, chosenColor.g, chosenColor.b);
    }

    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    // Store original positions and calculate direction vectors for dispersion physics
    const originalPositions = new Float32Array(positions);
    const randomDirs = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];
      const z = originalPositions[i + 2];
      const len = Math.sqrt(x * x + y * y + z * z) || 1;
      
      // Add slight chaotic noise to perfect radial lines for organic look
      randomDirs[i] = (x / len) + (Math.random() - 0.5) * 0.25;
      randomDirs[i + 1] = (y / len) + (Math.random() - 0.5) * 0.25;
      randomDirs[i + 2] = (z / len) + (Math.random() - 0.5) * 0.25;
    }

    // Shader or simple texture for glowing dots
    const canvasDot = document.createElement("canvas");
    canvasDot.width = 16;
    canvasDot.height = 16;
    const ctxDot = canvasDot.getContext("2d");
    if (ctxDot) {
      const grad = ctxDot.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.3, "rgba(255,255,255,0.8)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctxDot.fillStyle = grad;
      ctxDot.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvasDot);

    const isMobileDevice = typeof window !== "undefined" && window.innerWidth < 768;
    const particleMaterial = new THREE.PointsMaterial({
      size: isMobileDevice ? 0.22 : 0.32,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const globePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(globePoints);

    // Inner Glowing Sphere mesh representation
    const innerGeo = new THREE.SphereGeometry(radius * 0.96, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7C3AED,
      transparent: true,
      opacity: 0.08,
      wireframe: true,
    });
    const innerGlobe = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerGlobe);

    // Connecting Network Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xFAB818,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });

    const linesGroup = new THREE.Group();
    const posArr = particleGeometry.attributes.position.array as Float32Array;

    // Draw lines between nearest points
    for (let i = 0; i < posArr.length; i += 3) {
      const x1 = posArr[i];
      const y1 = posArr[i + 1];
      const z1 = posArr[i + 2];

      let count = 0;
      for (let j = i + 3; j < posArr.length; j += 3) {
        if (count > 2) break; // Limit connections per node
        const x2 = posArr[j];
        const y2 = posArr[j + 1];
        const z2 = posArr[j + 2];

        // Euclidean distance check
        const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
        if (dist < 2.5) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(x1, y1, z1),
            new THREE.Vector3(x2, y2, z2),
          ]);
          const line = new THREE.Line(lineGeo, lineMaterial);
          linesGroup.add(line);
          count++;
        }
      }
    }
    scene.add(linesGroup);

    // Lighting (for atmosphere)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Mouse control coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll Tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    observer.observe(container);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return; // Release CPU/GPU cycles when off-screen

      const elapsedTime = clock.getElapsedTime();

      // Map scroll Y position to progress (0 to 1) over a range of scroll (e.g. 0 to 600 pixels)
      const maxScroll = 600;
      const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

      // 1. Shift position horizontally on desktop (starts shifted right at x=4.5, slides to center x=0 on scroll)
      const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
      const isMobileDevice = typeof window !== "undefined" && window.innerWidth < 768;
      const shiftX = isMobile ? 0 : 4.5 * (1 - scrollProgress);
      const shiftY = isMobileDevice ? -2.2 : 0;
      
      globePoints.position.x = shiftX;
      globePoints.position.y = shiftY;
      innerGlobe.position.x = shiftX;
      innerGlobe.position.y = shiftY;
      linesGroup.position.x = shiftX;
      linesGroup.position.y = shiftY;

      // Soft base rotation
      globePoints.rotation.y = elapsedTime * 0.08;
      globePoints.rotation.x = elapsedTime * 0.03;
      innerGlobe.rotation.y = -elapsedTime * 0.04;
      linesGroup.rotation.y = elapsedTime * 0.08;
      linesGroup.rotation.x = elapsedTime * 0.03;

      // Parallax mouse follow interpolation
      targetX = mouseX * 0.45;
      targetY = mouseY * 0.45;

      globePoints.rotation.y += (targetX - globePoints.rotation.y) * 0.05;
      globePoints.rotation.x += (targetY - globePoints.rotation.x) * 0.05;
      linesGroup.rotation.y += (targetX - linesGroup.rotation.y) * 0.05;
      linesGroup.rotation.x += (targetY - linesGroup.rotation.x) * 0.05;

      // 2. Scale Up / Expand on Scroll (Normal scale is 1, scales up to 2.2)
      const baseScale = isMobileDevice ? 0.6 : 1.0;
      const scaleVal = (1 + scrollProgress * 1.2) * baseScale;
      globePoints.scale.set(scaleVal, scaleVal, scaleVal);
      innerGlobe.scale.set(scaleVal, scaleVal, scaleVal);
      linesGroup.scale.set(scaleVal, scaleVal, scaleVal);

      // 3. Dispersal / Explosion logic
      const posAttr = particleGeometry.attributes.position;
      const posArray = posAttr.array as Float32Array;
      const maxDispersal = 15; // units to push particles outward

      for (let i = 0; i < posArray.length; i += 3) {
        const speedMultiplier = 1 + (i % 7) * 0.25; // unique speed per particle
        posArray[i] = originalPositions[i] + randomDirs[i] * scrollProgress * maxDispersal * speedMultiplier;
        posArray[i + 1] = originalPositions[i + 1] + randomDirs[i + 1] * scrollProgress * maxDispersal * speedMultiplier;
        posArray[i + 2] = originalPositions[i + 2] + randomDirs[i + 2] * scrollProgress * maxDispersal * speedMultiplier;
      }
      posAttr.needsUpdate = true;

      // 4. Fading connecting lines and inner sphere to prevent stretching artifacts
      lineMaterial.opacity = 0.12 * (1 - scrollProgress);
      innerMat.opacity = 0.08 * (1 - scrollProgress);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      observer.unobserve(container);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      // Dispose resources
      particleGeometry.dispose();
      particleMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      lineMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {/* Container where the WebGL renderer inserts the canvas */}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
