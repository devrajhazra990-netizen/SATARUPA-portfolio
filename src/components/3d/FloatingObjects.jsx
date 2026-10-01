import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FloatingObjects() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 360;
    const height = currentMount.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xf5efe6, 1.2);
    scene.add(ambientLight);

    const goldLight = new THREE.DirectionalLight(0xe6ca85, 2.5);
    goldLight.position.set(3, 4, 3);
    scene.add(goldLight);

    const roseLight = new THREE.PointLight(0xd8a49b, 2.0, 8);
    roseLight.position.set(-3, -2, 2);
    scene.add(roseLight);

    // Glass Envelope Body
    const envelopeGeo = new THREE.BoxGeometry(1.6, 1.05, 0.08);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.75,
      opacity: 0.85,
      transparent: true,
      roughness: 0.15,
      ior: 1.5,
      metalness: 0.15
    });
    const envelope = new THREE.Mesh(envelopeGeo, glassMaterial);
    group.add(envelope);

    // Gold Trim Edges
    const edges = new THREE.EdgesGeometry(envelopeGeo);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xc5a059, linewidth: 2 });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    group.add(wireframe);

    // Envelope Flap (Triangle Geometry)
    const flapShape = new THREE.Shape();
    flapShape.moveTo(-0.8, 0.525);
    flapShape.lineTo(0.8, 0.525);
    flapShape.lineTo(0, 0);
    flapShape.closePath();

    const extrudeSettings = { depth: 0.02, bevelEnabled: false };
    const flapGeo = new THREE.ExtrudeGeometry(flapShape, extrudeSettings);
    const flapMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      metalness: 0.8,
      roughness: 0.3
    });
    const flap = new THREE.Mesh(flapGeo, flapMat);
    flap.position.set(0, 0, 0.045);
    group.add(flap);

    // Minimal Floating Wax Seal / Monogram Sphere
    const sealGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.04, 32);
    const sealMat = new THREE.MeshStandardMaterial({
      color: 0xd8a49b,
      metalness: 0.6,
      roughness: 0.3
    });
    const seal = new THREE.Mesh(sealGeo, sealMat);
    seal.rotation.x = Math.PI / 2;
    seal.position.set(0, 0.04, 0.07);
    group.add(seal);

    // Orbiting Champagne Gold Rings
    const orbitRingGeo = new THREE.TorusGeometry(1.4, 0.012, 16, 80);
    const orbitRingMat = new THREE.MeshStandardMaterial({
      color: 0xe6ca85,
      metalness: 0.9,
      roughness: 0.2
    });
    const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat);
    orbitRing.rotation.x = Math.PI / 3;
    group.add(orbitRing);

    // Tiny orbiting pearl
    const pearlGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const pearlMat = new THREE.MeshStandardMaterial({
      color: 0xf5efe6,
      roughness: 0.2,
      metalness: 0.4
    });
    const pearl = new THREE.Mesh(pearlGeo, pearlMat);
    group.add(pearl);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating and rotation
      group.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
      group.rotation.y = elapsedTime * 0.35;
      group.rotation.x = Math.sin(elapsedTime * 0.8) * 0.15;

      orbitRing.rotation.z = elapsedTime * 0.4;

      // Pearl orbits ring
      const orbitAngle = elapsedTime * 0.9;
      pearl.position.x = Math.cos(orbitAngle) * 1.4;
      pearl.position.y = Math.sin(orbitAngle) * 0.7;
      pearl.position.z = Math.sin(orbitAngle) * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
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
        height: '320px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
      aria-label="3D Floating Glass Envelope Visual"
    />
  );
}
