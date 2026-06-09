import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const TESTIMONIALS = [
  {
    id: "alice",
    name: "Alice",
    role: "UX Lead",
    company: "Indie Studio",
    avatar: "👩‍💻",
    color: "#ec4899",
    text: "Roshan's creative approach is mind-blowing. The 3D scene and neo-brutalist interface he built got us an immediate 40% engagement boost!",
    initialX: -200,
    initialY: -120,
  },
  {
    id: "bob",
    name: "Bob",
    role: "Founder",
    company: "Tech Innovators",
    avatar: "👨‍💼",
    color: "#06b6d4",
    text: "Roshan is a phenomenal full-stack engineer. He delivered clean code, robust backend APIs, and set up our MongoDB Atlas cluster effortlessly.",
    initialX: 220,
    initialY: -100,
  },
  {
    id: "carol",
    name: "Carol",
    role: "Senior Developer",
    company: "Open Source Hub",
    avatar: "👩‍🎨",
    color: "#a855f7",
    text: "A pleasure to work with. Roshan's contributions to our React modules are clean, highly performance-optimized, and extremely well-documented.",
    initialX: -180,
    initialY: 120,
  },
  {
    id: "david",
    name: "David",
    role: "PM",
    company: "MetaForm Creations",
    avatar: "👨‍💻",
    color: "#fde047",
    text: "High-impact, high-contrast, beautiful aesthetic. Roshan has an incredible eye for animations, details, and fluid micro-interactions.",
    initialX: 200,
    initialY: 110,
  },
  {
    id: "emma",
    name: "Emma",
    role: "Director",
    company: "SevaSetu NGO",
    avatar: "👩‍💼",
    color: "#10b981",
    text: "Roshan built SevaSetu connecting NGOs and donors smoothly. His problem-solving skill under pressure is next level. Highly recommended!",
    initialX: 10,
    initialY: -200,
  },
];

const TestimonialGraph = () => {
  const containerRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(TESTIMONIALS[0]);
  const [nodes, setNodes] = useState(
    TESTIMONIALS.map((t) => ({
      ...t,
      x: t.initialX,
      y: t.initialY,
    }))
  );

  // Center node (representing Roshan)
  const centerNode = { id: "center", name: "ROSHAN", avatar: "🚀", x: 0, y: 0 };

  // Track the actual center offset of the container to draw relative to center
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleDrag = (id, info) => {
    setNodes((prev) =>
      prev.map((node) => {
        if (node.id === id) {
          // Calculate drag position relative to the container's center
          const rect = containerRef.current.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          // Current absolute mouse position relative to container
          const absoluteX = info.point.x - rect.left;
          const absoluteY = info.point.y - rect.top;

          return {
            ...node,
            x: absoluteX - centerX,
            y: absoluteY - centerY,
          };
        }
        return node;
      })
    );
  };

  const cx = dimensions.width / 2;
  const cy = dimensions.height / 2;

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "550px",
        background: "var(--bg-secondary)",
        border: "3px solid var(--border-color)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1.5rem",
        userSelect: "none",
        transition: "all var(--transition-base)"
      }}
    >
      <div style={{ pointerEvents: "none" }}>
        <h4 style={{ 
          margin: 0, 
          fontFamily: "var(--font-mono)", 
          color: "var(--accent-secondary)",
          fontSize: "var(--fs-sm)",
          textTransform: "uppercase",
          letterSpacing: "2px"
        }}>
          Network Graph
        </h4>
        <p style={{ margin: "4px 0 0 0", color: "var(--text-secondary)", fontSize: "var(--fs-xs)" }}>
          Drag client nodes to interact or click them to reveal recommendations.
        </p>
      </div>

      {/* SVG Canvas for Lines */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <defs>
          <radialGradient id="glow-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow behind center */}
        <circle cx={cx} cy={cy} r="200" fill="url(#glow-grad)" />

        {/* Dynamic Lines connecting clients to center node */}
        {nodes.map((node) => {
          // Node coordinates relative to SVG
          const startX = cx + centerNode.x;
          const startY = cy + centerNode.y;
          const endX = cx + node.x;
          const endY = cy + node.y;

          return (
            <g key={`line-${node.id}`}>
              {/* Outer thicker glowing line */}
              <line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={node.color}
                strokeWidth="2"
                strokeOpacity="0.4"
                strokeDasharray="4 4"
                style={{ transition: "stroke var(--transition-base)" }}
              />
              {/* Core solid line */}
              <line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke="var(--border-color)"
                strokeWidth="1"
                strokeOpacity="0.8"
                style={{ transition: "stroke var(--transition-base)" }}
              />
            </g>
          );
        })}
      </svg>

      {/* Interactive Nodes layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      >
        {/* Center Node (Fixed ROSHAN Node) */}
        <div
          style={{
            position: "absolute",
            left: `${cx + centerNode.x}px`,
            top: `${cy + centerNode.y}px`,
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "var(--accent-primary)",
            border: "3px solid #000000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-md)",
            zIndex: 10,
            transition: "all var(--transition-base)"
          }}
        >
          <span style={{ fontSize: "1.8rem" }}>{centerNode.avatar}</span>
          <span
            style={{
              fontSize: "0.65rem",
              fontFamily: "var(--font-mono)",
              fontWeight: "900",
              color: "#000000",
              marginTop: "2px",
            }}
          >
            {centerNode.name}
          </span>
        </div>

        {/* Client Nodes (Draggable) */}
        {nodes.map((node) => {
          const isSelected = selectedNode.id === node.id;
          
          return (
            <motion.div
              key={node.id}
              drag
              dragMomentum={false}
              dragElastic={0.1}
              onDrag={(e, info) => handleDrag(node.id, info)}
              style={{
                position: "absolute",
                left: `${cx + node.x}px`,
                top: `${cy + node.y}px`,
                x: "-50%",
                y: "-50%",
                cursor: "grab",
                zIndex: isSelected ? 9 : 8,
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <div
                onClick={() => setSelectedNode(node)}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-card)",
                  border: isSelected 
                    ? `4px solid ${node.color}` 
                    : `2px solid var(--border-color)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  boxShadow: isSelected ? `0 0 15px ${node.color}` : "var(--shadow-sm)",
                  transition: "border var(--transition-fast), box-shadow var(--transition-fast)"
                }}
              >
                {node.avatar}
              </div>
              
              {/* Client Label */}
              <div
                style={{
                  position: "absolute",
                  top: "105%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--bg-tertiary)",
                  color: "var(--text-primary)",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  fontSize: "0.65rem",
                  fontFamily: "var(--font-mono)",
                  whiteSpace: "nowrap",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-sm)",
                  pointerEvents: "none",
                  transition: "all var(--transition-base)"
                }}
              >
                {node.name}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Node Testimonial Speech Bubble */}
      <AnimatePresence mode="wait">
        {selectedNode && (
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              position: "relative",
              zIndex: 5,
              backgroundColor: "var(--bg-card)",
              border: `3px solid ${selectedNode.color}`,
              borderRadius: "var(--radius-md)",
              padding: "1.2rem",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "auto",
              maxWidth: "600px",
              alignSelf: "center",
              backdropFilter: "blur(var(--blur-sm))",
              transition: "all var(--transition-base)"
            }}
          >
            {/* Speech bubble arrow decoration */}
            <div
              style={{
                position: "absolute",
                top: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                borderBottom: `15px solid ${selectedNode.color}`,
              }}
            />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span
                  style={{
                    fontWeight: "900",
                    color: "var(--text-heading)",
                    fontSize: "var(--fs-base)",
                    fontFamily: "var(--font-heading)"
                  }}
                >
                  {selectedNode.name}
                </span>
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--fs-xs)",
                    marginLeft: "8px",
                    fontFamily: "var(--font-mono)"
                  }}
                >
                  {selectedNode.role} @ {selectedNode.company}
                </span>
              </div>
              <span
                style={{
                  fontSize: "1.2rem",
                  color: selectedNode.color,
                  fontWeight: "bold",
                }}
              >
                ⭐⭐⭐⭐⭐
              </span>
            </div>

            <p
              style={{
                margin: 0,
                color: "var(--text-primary)",
                fontSize: "var(--fs-sm)",
                lineHeight: "1.5",
                fontStyle: "italic",
              }}
            >
              "{selectedNode.text}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialGraph;
