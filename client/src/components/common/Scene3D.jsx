import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scene3D = () => {
  const containerRef = useRef(null);

  // --- React State for 3D Centerpiece Configurator ---
  const [activeShape, setActiveShape] = useState("torusKnot"); // torusKnot, icosahedron, sphere, octahedron
  const [materialStyle, setMaterialStyle] = useState("chrome"); // chrome, neon, glass, gold
  const [orbitSpeed, setOrbitSpeed] = useState("normal"); // slow, normal, hyper
  const [panelOpen, setPanelOpen] = useState(false);

  // References to meshes for dynamic updates
  const coreMeshRef = useRef(null);
  const wireMeshRef = useRef(null);

  // Map speed settings
  const speedMultiplier = {
    slow: 0.3,
    normal: 1.0,
    hyper: 2.5,
  };

  // Dynamic mesh shape and material updates
  useEffect(() => {
    const coreMesh = coreMeshRef.current;
    const wireMesh = wireMeshRef.current;
    if (!coreMesh || !wireMesh) return;

    // --- Update Geometry ---
    let newCoreGeo, newWireGeo;
    switch (activeShape) {
      case "icosahedron":
        newCoreGeo = new THREE.IcosahedronGeometry(0.8, 0);
        newWireGeo = new THREE.IcosahedronGeometry(0.85, 1);
        break;
      case "sphere":
        newCoreGeo = new THREE.SphereGeometry(0.7, 32, 32);
        newWireGeo = new THREE.SphereGeometry(0.75, 16, 16);
        break;
      case "octahedron":
        newCoreGeo = new THREE.OctahedronGeometry(0.8, 0);
        newWireGeo = new THREE.OctahedronGeometry(0.85, 1);
        break;
      case "torusKnot":
      default:
        newCoreGeo = new THREE.TorusKnotGeometry(0.5, 0.16, 100, 16);
        newWireGeo = new THREE.TorusKnotGeometry(0.52, 0.18, 64, 8);
        break;
    }

    coreMesh.geometry.dispose();
    coreMesh.geometry = newCoreGeo;

    wireMesh.geometry.dispose();
    wireMesh.geometry = newWireGeo;

    // --- Update Materials ---
    let newCoreMat, newWireMat;
    switch (materialStyle) {
      case "gold":
        newCoreMat = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.9,
          roughness: 0.15,
        });
        newWireMat = new THREE.MeshBasicMaterial({
          color: 0xfacc15,
          wireframe: true,
          transparent: true,
          opacity: 0.4,
        });
        break;
      case "glass":
        newCoreMat = new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.5,
          roughness: 0.1,
          metalness: 0.1,
          transmission: 0.9,
          ior: 1.5,
          thickness: 1.0,
        });
        newWireMat = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
          transparent: true,
          opacity: 0.3,
        });
        break;
      case "neon":
        newCoreMat = new THREE.MeshStandardMaterial({
          color: 0x000000,
          roughness: 0.9,
        });
        newWireMat = new THREE.MeshStandardMaterial({
          color: 0x00ffcc,
          emissive: 0x00ffcc,
          emissiveIntensity: 1.5,
          wireframe: true,
        });
        break;
      case "chrome":
      default:
        newCoreMat = new THREE.MeshStandardMaterial({
          color: 0xdddddd,
          metalness: 0.95,
          roughness: 0.08,
        });
        newWireMat = new THREE.MeshBasicMaterial({
          color: 0xbc13fe,
          wireframe: true,
          transparent: true,
          opacity: 0.4,
        });
        break;
    }

    coreMesh.material.dispose();
    coreMesh.material = newCoreMat;

    wireMesh.material.dispose();
    wireMesh.material = newWireMat;
  }, [activeShape, materialStyle]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(40, rect.width / rect.height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Scroll state for camera transitions
    const scrollState = {
      cameraZ: 7.5,
      cameraY: 0,
      groupScale: 1.0,
      groupX: 0,
      groupY: 0,
      lightIntensity: 1.0,
    };

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const neonPointLight = new THREE.PointLight(0x00ffcc, 2, 15);
    neonPointLight.position.set(-3, 2, 3);
    scene.add(neonPointLight);

    const pinkPointLight = new THREE.PointLight(0xbc13fe, 2, 15);
    pinkPointLight.position.set(3, -2, 3);
    scene.add(pinkPointLight);

    // --- GEOMETRIC GROUP ---
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Rotating Core Centerpiece Group
    const centerGroup = new THREE.Group();
    mainGroup.add(centerGroup);

    // Create Initial Core Mesh
    const initCoreGeo = new THREE.TorusKnotGeometry(0.5, 0.16, 100, 16);
    const initCoreMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 0.95,
      roughness: 0.08,
    });
    const coreMesh = new THREE.Mesh(initCoreGeo, initCoreMat);
    centerGroup.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // Create Initial Wireframe Overlay Mesh
    const initWireGeo = new THREE.TorusKnotGeometry(0.52, 0.18, 64, 8);
    const initWireMat = new THREE.MeshBasicMaterial({
      color: 0xbc13fe,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireMesh = new THREE.Mesh(initWireGeo, initWireMat);
    centerGroup.add(wireMesh);
    wireMeshRef.current = wireMesh;

    // --- Orbiting 3D Props ---
    const propsGroup = new THREE.Group();
    mainGroup.add(propsGroup);

    const yellowMat = new THREE.MeshStandardMaterial({ color: 0xfde047, roughness: 0.3, emissive: 0xfde047, emissiveIntensity: 0.2 });
    const pinkMat = new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.3, emissive: 0xec4899, emissiveIntensity: 0.2 });
    const cyanMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.3, emissive: 0x06b6d4, emissiveIntensity: 0.2 });

    const propsList = [];

    // Prop 1: Voxel Star
    const starGroup = new THREE.Group();
    starGroup.position.set(-2.2, 1.2, -0.5);
    const starCenter = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.25), yellowMat);
    starGroup.add(starCenter);
    [[0.25, 0, 0], [-0.25, 0, 0], [0, 0.25, 0], [0, -0.25, 0]].forEach(([x, y, z]) => {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), yellowMat);
      p.position.set(x, y, z);
      starGroup.add(p);
    });
    propsGroup.add(starGroup);
    propsList.push({ group: starGroup, speed: 0.7, offset: 0, radius: 0.15 });

    // Prop 2: 3D Heart
    const heartGroup = new THREE.Group();
    heartGroup.position.set(2.2, 1.0, -0.5);
    const heartBase = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.25), pinkMat);
    heartBase.rotation.z = Math.PI / 4;
    heartGroup.add(heartBase);
    const heartL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), pinkMat);
    heartL.position.set(-0.12, 0.12, 0);
    heartGroup.add(heartL);
    const heartR = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), pinkMat);
    heartR.position.set(0.12, 0.12, 0);
    heartGroup.add(heartR);
    propsGroup.add(heartGroup);
    propsList.push({ group: heartGroup, speed: 0.9, offset: Math.PI / 2, radius: 0.12 });

    // Prop 3: 3D Flower
    const flowerGroup = new THREE.Group();
    flowerGroup.position.set(-2.0, -1.0, 0);
    const flowerCenter = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), yellowMat);
    flowerGroup.add(flowerCenter);
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const petal = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), cyanMat);
      petal.position.set(Math.cos(angle) * 0.24, Math.sin(angle) * 0.24, 0);
      flowerGroup.add(petal);
    }
    propsGroup.add(flowerGroup);
    propsList.push({ group: flowerGroup, speed: 0.6, offset: Math.PI, radius: 0.1 });

    // Prop 4: Voxel Lightning Bolt
    const boltGroup = new THREE.Group();
    boltGroup.position.set(2.0, -1.1, 0);
    const b1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.4, 0.22), yellowMat);
    b1.position.set(0.1, 0.3, 0);
    b1.rotation.z = -Math.PI / 12;
    boltGroup.add(b1);
    const b2 = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.15, 0.22), yellowMat);
    b2.position.set(0, 0.1, 0);
    boltGroup.add(b2);
    const b3 = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.4, 0.22), yellowMat);
    b3.position.set(-0.1, -0.15, 0);
    b3.rotation.z = -Math.PI / 12;
    boltGroup.add(b3);
    propsGroup.add(boltGroup);
    propsList.push({ group: boltGroup, speed: 1.1, offset: Math.PI * 1.5, radius: 0.16 });

    // --- MOUSE TRACKING ---
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // --- GSAP SCROLL TRIGGER LINKING ---
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    scrollTl.to(scrollState, {
      cameraZ: 10,
      cameraY: 0.5,
      groupScale: 0.55,
      groupX: -2.2,
      groupY: -0.6,
      lightIntensity: 0.5,
      duration: 1,
      ease: "none",
    }, 0);

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Get speed setting
      const currentSpeed = speedMultiplier[orbitSpeed] || 1.0;

      // Camera transitions
      camera.position.z += (scrollState.cameraZ - camera.position.z) * 0.08;
      camera.position.y += (scrollState.cameraY - camera.position.y) * 0.08;

      // Scale and positions
      const scale = scrollState.groupScale;
      mainGroup.scale.x += (scale - mainGroup.scale.x) * 0.08;
      mainGroup.scale.y += (scale - mainGroup.scale.y) * 0.08;
      mainGroup.scale.z += (scale - mainGroup.scale.z) * 0.08;

      mainGroup.position.x += (scrollState.groupX - mainGroup.position.x) * 0.06;
      mainGroup.position.y += (scrollState.groupY - mainGroup.position.y) * 0.06;

      // Look at mouse look-around effect
      const lookFactor = Math.max(0, 1 - (scrollState.cameraZ - 7.5) / 2.5);
      targetRotation.y = mouse.x * 0.5 * lookFactor;
      targetRotation.x = -mouse.y * 0.5 * lookFactor;

      centerGroup.rotation.y += (targetRotation.y - centerGroup.rotation.y) * 0.05;
      centerGroup.rotation.x += (targetRotation.x - centerGroup.rotation.x) * 0.05;

      // Base idle rotations for centerpiece
      coreMesh.rotation.y += 0.005 * currentSpeed;
      coreMesh.rotation.z += 0.002 * currentSpeed;
      wireMesh.rotation.y -= 0.008 * currentSpeed;
      wireMesh.rotation.x += 0.003 * currentSpeed;

      // Sinusoidal drift for centerpiece
      centerGroup.position.y = Math.sin(elapsed * 1.2) * 0.08;

      // Animate orbiting props
      propsList.forEach((prop) => {
        const drift = Math.sin(elapsed * prop.speed + prop.offset) * prop.radius;
        prop.group.position.y = prop.group.position.y + (drift - (prop.group.position.y - prop.group.position.y)) * 0.02;

        prop.group.rotation.x += 0.006 * currentSpeed;
        prop.group.rotation.y += 0.012 * currentSpeed;
      });

      // Ambient lighting modulation
      neonPointLight.intensity = (1.5 + Math.sin(elapsed * 2.5) * 0.4) * scrollState.lightIntensity;
      pinkPointLight.intensity = (1.5 + Math.cos(elapsed * 2.0) * 0.4) * scrollState.lightIntensity;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const r = container.getBoundingClientRect();
      camera.aspect = r.width / r.height;
      camera.updateProjectionMatrix();
      renderer.setSize(r.width, r.height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
      scrollTl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars?.trigger === ".landing-section") t.kill();
      });
      scene.clear();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [orbitSpeed]); // Re-run animate loop when speed changes

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* 3D Canvas */}
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />

      {/* --- 3D Centerpiece Configurator Overlay Panel --- */}
      <div
        className="avatar-customizer"
        style={{
          position: "absolute",
          top: "5.5rem",
          right: "1.5rem",
          zIndex: 20,
          fontFamily: "var(--font-mono)",
        }}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setPanelOpen(!panelOpen)}
          style={{
            background: "var(--bg-tertiary)",
            border: "2px solid var(--border-color)",
            color: "var(--text-primary)",
            padding: "0.6rem 1rem",
            borderRadius: "var(--radius-md)",
            cursor: "pointer",
            fontSize: "0.75rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            boxShadow: "var(--shadow-sm)",
            textTransform: "uppercase",
            transition: "all var(--transition-fast)"
          }}
        >
          ⚙️ {panelOpen ? "Close Control" : "Configure 3D Center"}
        </button>

        {/* Configuration Panel */}
        {panelOpen && (
          <div
            style={{
              position: "absolute",
              top: "3.2rem",
              right: 0,
              width: "280px",
              background: "var(--bg-card)",
              border: "3px solid var(--border-color)",
              borderRadius: "var(--radius-md)",
              padding: "1.2rem",
              boxShadow: "var(--shadow-lg)",
              backdropFilter: "blur(var(--blur-md))",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transition: "all var(--transition-base)",
              color: "var(--text-primary)"
            }}
          >
            <div style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.4rem" }}>
              <h4 style={{ margin: 0, fontSize: "0.85rem", textTransform: "uppercase" }}>Core Visualizer</h4>
              <span style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>Customize background 3D nodes</span>
            </div>

            {/* Shape Selector */}
            <div>
              <label style={{ fontSize: "0.7rem", display: "block", marginBottom: "0.3rem", fontWeight: "bold" }}>GEOMETRY</label>
              <select
                value={activeShape}
                onChange={(e) => setActiveShape(e.target.value)}
                style={{
                  background: "var(--bg-tertiary)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "4px",
                  padding: "0.3rem",
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-mono)",
                  width: "100%",
                  cursor: "pointer"
                }}
              >
                <option value="torusKnot">Torus Knot (Default)</option>
                <option value="icosahedron">Icosahedron</option>
                <option value="octahedron">Octahedron</option>
                <option value="sphere">Perfect Sphere</option>
              </select>
            </div>

            {/* Material Style Selector */}
            <div>
              <label style={{ fontSize: "0.7rem", display: "block", marginBottom: "0.3rem", fontWeight: "bold" }}>SHADER STYLE</label>
              <select
                value={materialStyle}
                onChange={(e) => setMaterialStyle(e.target.value)}
                style={{
                  background: "var(--bg-tertiary)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "4px",
                  padding: "0.3rem",
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-mono)",
                  width: "100%",
                  cursor: "pointer"
                }}
              >
                <option value="chrome">Cyber Chrome (Default)</option>
                <option value="neon">Poison Neon Wireframe</option>
                <option value="glass">Crystalline Glass</option>
                <option value="gold">Pure Gold Leaf</option>
              </select>
            </div>

            {/* Orbit Speed Selector */}
            <div>
              <label style={{ fontSize: "0.7rem", display: "block", marginBottom: "0.3rem", fontWeight: "bold" }}>PHYSICS SPEED</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {["slow", "normal", "hyper"].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setOrbitSpeed(speed)}
                    style={{
                      background: orbitSpeed === speed ? "var(--accent-secondary)" : "var(--bg-tertiary)",
                      color: orbitSpeed === speed ? "#fff" : "var(--text-primary)",
                      border: "1.5px solid var(--border-color)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      flex: 1,
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    {speed}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scene3D;
