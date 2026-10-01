import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const SKILL_NODES = [
  { name: 'LEADERSHIP', category: 'Management', color: '#c5a059' },
  { name: 'FINANCE', category: 'Business', color: '#dfba53' },
  { name: 'LAW', category: 'Jurisprudence', color: '#d8a49b' },
  { name: 'COMMUNICATION', category: 'Practice', color: '#e8c5be' },
  { name: 'MANAGEMENT', category: 'Strategy', color: '#c5a059' },
  { name: 'ANALYSIS', category: 'Research', color: '#dfba53' },
  { name: 'PROBLEM SOLVING', category: 'Execution', color: '#d8a49b' },
  { name: 'ADAPTABILITY', category: 'Mindset', color: '#f5efe6' },
];

export default function SkillConstellation() {
  const mountRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const isMobile = window.innerWidth < 768;
    const width = currentMount.clientWidth || 800;
    const height = currentMount.clientHeight || 550;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Ambient & Point light
    const ambientLight = new THREE.AmbientLight(0xf5efe6, 1.2);
    scene.add(ambientLight);

    const centerLight = new THREE.PointLight(0xc5a059, 2.5, 12);
    centerLight.position.set(0, 0, 0);
    scene.add(centerLight);

    // Helper: Canvas Text Sprite
    const createTextSprite = (text, isCenter = false, color = '#ffffff') => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 128;

      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = isCenter
        ? 'bold 36px "Cinzel", serif'
        : '600 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Subtle shadow for legibility
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 8;
      ctx.fillText(text, 256, 64);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: isCenter ? 0.95 : 0.85
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(isCenter ? 2.4 : 1.8, isCenter ? 0.6 : 0.45, 1);
      return sprite;
    };

    // Center Node: SATARUPA DUTTA
    const centerGeo = new THREE.SphereGeometry(0.38, 32, 32);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x967635,
      emissiveIntensity: 0.6
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    group.add(centerMesh);

    // Center Glowing Ring
    const centerRingGeo = new THREE.TorusGeometry(0.55, 0.015, 16, 64);
    const centerRingMat = new THREE.MeshBasicMaterial({
      color: 0xe6ca85,
      transparent: true,
      opacity: 0.7
    });
    const centerRing = new THREE.Mesh(centerRingGeo, centerRingMat);
    group.add(centerRing);

    // Center Text
    const centerText = createTextSprite('SATARUPA DUTTA', true, '#f5efe6');
    centerText.position.set(0, 0.7, 0);
    group.add(centerText);

    // Orbiting Nodes
    const nodeMeshes = [];
    const nodePositions = [];
    const radius = isMobile ? 2.8 : 3.4;
    const numNodes = SKILL_NODES.length;

    SKILL_NODES.forEach((node, i) => {
      const phi = Math.acos(-1 + (2 * i) / numNodes);
      const theta = Math.sqrt(numNodes * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = (radius * Math.sin(theta) * Math.sin(phi)) * 0.75;
      const z = radius * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      // Node Sphere
      const nodeGeo = new THREE.SphereGeometry(0.18, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(node.color),
        metalness: 0.6,
        roughness: 0.3,
        emissive: new THREE.Color(node.color),
        emissiveIntensity: 0.35
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      nodeMesh.userData = { ...node, index: i };
      group.add(nodeMesh);
      nodeMeshes.push(nodeMesh);

      // Node Label
      const label = createTextSprite(node.name, false, node.color);
      label.position.set(x, y + 0.38, z);
      group.add(label);
    });

    // Constellation Connecting Lines
    const linePositions = [];
    // 1. Connect each to center
    nodePositions.forEach((pos) => {
      linePositions.push(0, 0, 0);
      linePositions.push(pos.x, pos.y, pos.z);
    });

    // 2. Connect neighbor nodes
    for (let i = 0; i < numNodes; i++) {
      const nextIdx = (i + 1) % numNodes;
      linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
      linePositions.push(nodePositions[nextIdx].x, nodePositions[nextIdx].y, nodePositions[nextIdx].z);

      const crossIdx = (i + 3) % numNodes;
      linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
      linePositions.push(nodePositions[crossIdx].x, nodePositions[crossIdx].y, nodePositions[crossIdx].z);
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xc5a059,
      transparent: true,
      opacity: 0.28,
      linewidth: 1
    });
    const constellationLines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(constellationLines);

    // Subtle background dust particles
    const particleCount = 60;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 12;
      dustPos[i + 1] = (Math.random() - 0.5) * 8;
      dustPos[i + 2] = (Math.random() - 0.5) * 8;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xd8a49b,
      size: 0.035,
      transparent: true,
      opacity: 0.4
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    group.add(dust);

    // Mouse Interaction & Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouse.x = (x / rect.width) * 2 - 1;
      mouse.y = -(y / rect.height) * 2 + 1;

      mouseX = mouse.x;
      mouseY = mouse.y;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        setActiveNode(hit.userData);
      } else {
        setActiveNode(null);
      }
    };

    currentMount.addEventListener('mousemove', onPointerMove, { passive: true });

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing rotation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Slow natural rotation + mouse reaction
      group.rotation.y = elapsedTime * 0.12 + targetX * 0.6;
      group.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 - targetY * 0.4;

      // Central ring pulse
      centerRing.rotation.z += 0.008;
      centerRing.rotation.x = Math.sin(elapsedTime * 0.5) * 0.3;

      // Pulse nodes subtly
      nodeMeshes.forEach((mesh, idx) => {
        const scale = 1 + Math.sin(elapsedTime * 1.5 + idx) * 0.08;
        mesh.scale.set(scale, scale, scale);
      });

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
      currentMount.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '520px' }}>
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          borderRadius: '24px',
          overflow: 'hidden'
        }}
        aria-label="3D Interactive Skill Constellation Visualization"
      />
      {/* Node Tooltip / Status Display */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(24, 25, 30, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(197, 160, 89, 0.3)',
          borderRadius: '999px',
          padding: '8px 24px',
          color: '#faf7f2',
          fontSize: '0.85rem',
          letterSpacing: '0.08em',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          transition: 'all 0.3s ease'
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: activeNode ? activeNode.color : '#c5a059',
            boxShadow: `0 0 10px ${activeNode ? activeNode.color : '#c5a059'}`
          }}
        />
        <span>
          {activeNode
            ? `${activeNode.name} • ${activeNode.category} Pillar`
            : 'Interactive 3D Constellation • Move mouse to inspect skill pillars'}
        </span>
      </div>
    </div>
  );
}
