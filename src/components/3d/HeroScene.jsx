import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Detect mobile or low power
    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    const width = currentMount.clientWidth || 500;
    const height = currentMount.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 6.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    currentMount.appendChild(renderer.domElement);

    // Group for entire interactive assembly
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0xf5efe6, 0.9);
    scene.add(ambientLight);

    // Key Champagne Gold Light
    const keyLight = new THREE.DirectionalLight(0xe6ca85, 2.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Soft Blush Rim Light
    const rimLight = new THREE.DirectionalLight(0xd8a49b, 1.6);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // Point light for glowing highlights
    const pointLight = new THREE.PointLight(0xc5a059, 1.2, 8);
    pointLight.position.set(0, 1.5, 2);
    scene.add(pointLight);

    // --- MATERIALS ---
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      metalness: 0.85,
      roughness: 0.25,
      envMapIntensity: 1.2
    });

    const darkLeatherMaterial = new THREE.MeshStandardMaterial({
      color: 0x18191e,
      roughness: 0.7,
      metalness: 0.15
    });

    const pageMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5efe6,
      roughness: 0.8,
      metalness: 0.05
    });

    const frostedGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.65,
      opacity: 0.8,
      transparent: true,
      roughness: 0.2,
      ior: 1.45,
      metalness: 0.1
    });

    const blushCrystalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd8a49b,
      transmission: 0.55,
      opacity: 0.85,
      transparent: true,
      roughness: 0.25,
      metalness: 0.2
    });

    // --- 1. ELEGANT SCALES OF JUSTICE (Symbol of Law) ---
    const scalesGroup = new THREE.Group();
    scalesGroup.position.set(0.1, 0.4, 0);

    // Pillar Base
    const baseGeo = new THREE.CylinderGeometry(0.55, 0.65, 0.12, 32);
    const baseMesh = new THREE.Mesh(baseGeo, goldMaterial);
    scalesGroup.add(baseMesh);

    // Central Pillar
    const pillarGeo = new THREE.CylinderGeometry(0.045, 0.065, 1.8, 24);
    const pillarMesh = new THREE.Mesh(pillarGeo, goldMaterial);
    pillarMesh.position.y = 0.95;
    scalesGroup.add(pillarMesh);

    // Top Finial
    const finialGeo = new THREE.SphereGeometry(0.1, 24, 24);
    const finialMesh = new THREE.Mesh(finialGeo, goldMaterial);
    finialMesh.position.y = 1.9;
    scalesGroup.add(finialMesh);

    // Balance Beam
    const beamGeo = new THREE.CylinderGeometry(0.028, 0.028, 2.2, 24);
    const beamMesh = new THREE.Mesh(beamGeo, goldMaterial);
    beamMesh.rotation.z = Math.PI / 2;
    beamMesh.position.y = 1.75;
    scalesGroup.add(beamMesh);

    // Left Pan Assembly
    const panGeo = new THREE.CylinderGeometry(0.35, 0.1, 0.1, 32);
    const leftPan = new THREE.Mesh(panGeo, goldMaterial);
    leftPan.position.set(-0.95, 1.05, 0);
    scalesGroup.add(leftPan);

    // Left Cord
    const cordGeo = new THREE.CylinderGeometry(0.007, 0.007, 0.7, 8);
    const leftCord = new THREE.Mesh(cordGeo, goldMaterial);
    leftCord.position.set(-0.95, 1.4, 0);
    scalesGroup.add(leftCord);

    // Right Pan Assembly
    const rightPan = new THREE.Mesh(panGeo, goldMaterial);
    rightPan.position.set(0.95, 1.05, 0);
    scalesGroup.add(rightPan);

    const rightCord = new THREE.Mesh(cordGeo, goldMaterial);
    rightCord.position.set(0.95, 1.4, 0);
    scalesGroup.add(rightCord);

    mainGroup.add(scalesGroup);

    // --- 2. LEGAL CODEX / BOOK (Symbol of Knowledge & Law) ---
    const bookGroup = new THREE.Group();
    bookGroup.position.set(-1.45, -0.6, 0.4);
    bookGroup.rotation.set(0.4, 0.6, -0.2);

    // Book Cover
    const coverGeo = new THREE.BoxGeometry(1.3, 0.16, 1.75);
    const coverMesh = new THREE.Mesh(coverGeo, darkLeatherMaterial);
    bookGroup.add(coverMesh);

    // Pages Block
    const pagesGeo = new THREE.BoxGeometry(1.22, 0.12, 1.68);
    const pagesMesh = new THREE.Mesh(pagesGeo, pageMaterial);
    pagesMesh.position.set(0.03, 0, 0);
    bookGroup.add(pagesMesh);

    // Gold Trim / Spine accent
    const spineGeo = new THREE.BoxGeometry(0.04, 0.17, 1.77);
    const spineMesh = new THREE.Mesh(spineGeo, goldMaterial);
    spineMesh.position.set(-0.62, 0, 0);
    bookGroup.add(spineMesh);

    mainGroup.add(bookGroup);

    // --- 3. FINANCIAL GROWTH / ANALYTICAL BARS (Symbol of Business & Finance) ---
    const chartGroup = new THREE.Group();
    chartGroup.position.set(1.5, -0.6, -0.2);
    chartGroup.rotation.set(0.2, -0.5, 0.1);

    const barHeights = [0.4, 0.7, 1.05, 1.4];
    barHeights.forEach((h, i) => {
      const barGeo = new THREE.BoxGeometry(0.2, h, 0.2);
      const barMesh = new THREE.Mesh(barGeo, i % 2 === 0 ? frostedGlassMaterial : blushCrystalMaterial);
      barMesh.position.set(i * 0.3 - 0.45, h / 2, 0);
      chartGroup.add(barMesh);

      // Gold base accent for each bar
      const barBaseGeo = new THREE.BoxGeometry(0.22, 0.04, 0.22);
      const barBaseMesh = new THREE.Mesh(barBaseGeo, goldMaterial);
      barBaseMesh.position.set(i * 0.3 - 0.45, 0.02, 0);
      chartGroup.add(barBaseMesh);
    });

    mainGroup.add(chartGroup);

    // --- 4. FLOATING GLASS EMBLEM / BUSINESS CARD (Symbol of Professional Management) ---
    const cardGroup = new THREE.Group();
    cardGroup.position.set(0, -0.85, 0.9);
    cardGroup.rotation.set(-0.35, 0.1, 0.05);

    const cardGeo = new THREE.BoxGeometry(1.6, 0.9, 0.03);
    const cardMesh = new THREE.Mesh(cardGeo, frostedGlassMaterial);
    cardGroup.add(cardMesh);

    // Gold border line on card
    const cardBorderGeo = new THREE.BoxGeometry(1.64, 0.94, 0.015);
    const edges = new THREE.EdgesGeometry(cardBorderGeo);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xc5a059, transparent: true, opacity: 0.6 });
    const cardLine = new THREE.LineSegments(edges, lineMat);
    cardGroup.add(cardLine);

    mainGroup.add(cardGroup);

    // --- 5. ELEGANT ORBITING RINGS & SUBTLE AMBIENT PARTICLES ---
    const ringGeo = new THREE.TorusGeometry(2.4, 0.015, 16, 100);
    const ringMesh = new THREE.Mesh(ringGeo, goldMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    mainGroup.add(ringMesh);

    // Second intersecting blush ring
    const ringGeo2 = new THREE.TorusGeometry(2.1, 0.01, 16, 100);
    const ringMesh2 = new THREE.Mesh(ringGeo2, blushCrystalMaterial);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.z = Math.PI / 5;
    mainGroup.add(ringMesh2);

    // Subtle champagne particles
    const particleCount = isMobile ? 35 : 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 6;
      particlePositions[i + 1] = (Math.random() - 0.5) * 5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xe6ca85,
      size: 0.04,
      transparent: true,
      opacity: 0.65
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // --- MOUSE PARALLAX & ANIMATION LOOP ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Gentle floating physics
      mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;
      mainGroup.rotation.y = targetX * 0.45 + elapsedTime * 0.08;
      mainGroup.rotation.x = -targetY * 0.25;

      // Scales gentle balancing sway
      beamMesh.rotation.z = Math.PI / 2 + Math.sin(elapsedTime * 1.2) * 0.06;
      leftPan.position.y = 1.05 + Math.sin(elapsedTime * 1.2) * 0.06;
      rightPan.position.y = 1.05 - Math.sin(elapsedTime * 1.2) * 0.06;

      // Book slow tilt
      bookGroup.rotation.y = 0.6 + Math.sin(elapsedTime * 0.7) * 0.05;
      bookGroup.position.y = -0.6 + Math.cos(elapsedTime * 0.9) * 0.04;

      // Card float
      cardGroup.rotation.z = 0.05 + Math.sin(elapsedTime * 1.1) * 0.03;
      cardGroup.position.y = -0.85 + Math.sin(elapsedTime * 1.3) * 0.05;

      // Torus rings rotation
      ringMesh.rotation.z += 0.002;
      ringMesh2.rotation.y -= 0.0025;

      // Particles gentle drift
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '480px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
      aria-label="Interactive 3D representation of Business, Law and Management"
    />
  );
}
