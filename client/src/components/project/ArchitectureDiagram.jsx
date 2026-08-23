import "./ArchitectureDiagram.css";

const CodeForgeDiagram = () => (
  <svg
    className="arch-diagram__svg"
    viewBox="0 0 680 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="CodeForge System Architecture Diagram"
  >
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--text-muted)" />
      </marker>
      <marker
        id="arrow-accent"
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--accent-primary)" />
      </marker>
    </defs>

    {/* Client Node */}
    <rect x="20" y="30" width="160" height="70" rx="4" className="arch-node" />
    <text x="35" y="55" className="arch-node-title">
      Client Layer
    </text>
    <text x="35" y="75" className="arch-node-sub">
      React 19 + Monaco
    </text>

    {/* Proctoring Branch */}
    <rect x="20" y="180" width="160" height="80" rx="4" className="arch-node" />
    <text x="35" y="205" className="arch-node-title">
      Proctoring Engine
    </text>
    <text x="35" y="225" className="arch-node-sub">
      face-api.js (Webcam)
    </text>
    <text x="35" y="243" className="arch-node-sub">
      Tab-switch detection
    </text>

    {/* Connecting Client -> Proctoring */}
    <path
      d="M 100 100 L 100 180"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />

    {/* API Gateway */}
    <rect x="250" y="30" width="160" height="70" rx="4" className="arch-node" />
    <text x="265" y="55" className="arch-node-title">
      API Gateway
    </text>
    <text x="265" y="75" className="arch-node-sub">
      Express 5 + JWT Auth
    </text>

    {/* Client -> API Gateway */}
    <path d="M 180 65 L 250 65" className="arch-edge" markerEnd="url(#arrow)" />

    {/* Sandboxed Execution Service (Highlighted) */}
    <rect
      x="250"
      y="180"
      width="180"
      height="80"
      rx="4"
      className="arch-node arch-node--highlight"
    />
    <text
      x="265"
      y="205"
      className="arch-node-title arch-node-title--highlight"
    >
      Judge0 Execution
    </text>
    <text x="265" y="225" className="arch-node-sub">
      Docker Isolated Sandbox
    </text>
    <text x="265" y="243" className="arch-node-sub">
      C++ / Python / JS Test Runner
    </text>

    {/* API Gateway -> Judge0 (Highlighted) */}
    <path
      d="M 330 100 L 330 180"
      className="arch-edge arch-edge--highlight"
      markerEnd="url(#arrow-accent)"
    />

    {/* Database Layer */}
    <rect x="490" y="30" width="160" height="70" rx="4" className="arch-node" />
    <text x="505" y="55" className="arch-node-title">
      Persistence & Cache
    </text>
    <text x="505" y="75" className="arch-node-sub">
      MongoDB + Redis Queue
    </text>

    {/* API Gateway -> DB */}
    <path d="M 410 65 L 490 65" className="arch-edge" markerEnd="url(#arrow)" />

    {/* Judge0 -> DB (Telemetry results) */}
    <path
      d="M 430 220 L 570 220 L 570 100"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />
  </svg>
);

const CoComputeDiagram = () => (
  <svg
    className="arch-diagram__svg"
    viewBox="0 0 680 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="CoCompute Master-Worker Architecture Diagram"
  >
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--text-muted)" />
      </marker>
      <marker
        id="arrow-accent"
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--accent-primary)" />
      </marker>
    </defs>

    {/* Parent Coordinator Node */}
    <rect
      x="220"
      y="20"
      width="240"
      height="60"
      rx="4"
      className="arch-node arch-node--highlight"
    />
    <text x="235" y="44" className="arch-node-title arch-node-title--highlight">
      Parent Coordinator
    </text>
    <text x="235" y="62" className="arch-node-sub">
      FastAPI Control Plane · mDNS Discovery
    </text>

    {/* Scheduler & Redis Queue Node */}
    <rect
      x="220"
      y="115"
      width="240"
      height="55"
      rx="4"
      className="arch-node"
    />
    <text x="235" y="138" className="arch-node-title">
      Scheduler &amp; Redis Queue
    </text>
    <text x="235" y="155" className="arch-node-sub">
      Telemetry-Aware Batch Dispatch
    </text>

    {/* Coordinator -> Queue */}
    <path
      d="M 340 80 L 340 115"
      className="arch-edge arch-edge--highlight"
      markerEnd="url(#arrow-accent)"
    />

    {/* Worker 1 */}
    <rect x="30" y="210" width="180" height="70" rx="4" className="arch-node" />
    <text x="45" y="235" className="arch-node-title">
      Worker Node 1
    </text>
    <text x="45" y="253" className="arch-node-sub">
      Docker Isolated Sandbox
    </text>
    <text x="45" y="268" className="arch-node-sub">
      CPU / GPU Matrix Kernel
    </text>

    {/* Worker 2 */}
    <rect
      x="250"
      y="210"
      width="180"
      height="70"
      rx="4"
      className="arch-node"
    />
    <text x="265" y="235" className="arch-node-title">
      Worker Node 2
    </text>
    <text x="265" y="253" className="arch-node-sub">
      Docker Isolated Sandbox
    </text>
    <text x="265" y="268" className="arch-node-sub">
      Chunked Batch Task
    </text>

    {/* Worker 3 */}
    <rect
      x="470"
      y="210"
      width="180"
      height="70"
      rx="4"
      className="arch-node"
    />
    <text x="485" y="235" className="arch-node-title">
      Worker Node 3
    </text>
    <text x="485" y="253" className="arch-node-sub">
      Docker Isolated Sandbox
    </text>
    <text x="485" y="268" className="arch-node-sub">
      Hardware Telemetry Emitter
    </text>

    {/* Queue to Worker 1 */}
    <path
      d="M 280 170 L 280 190 L 120 190 L 120 210"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />

    {/* Queue to Worker 2 */}
    <path
      d="M 340 170 L 340 210"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />

    {/* Queue to Worker 3 */}
    <path
      d="M 400 170 L 400 190 L 560 190 L 560 210"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />
  </svg>
);

const Prep10XDiagram = () => (
  <svg
    className="arch-diagram__svg"
    viewBox="0 0 680 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Prep10X Ingestion Pipeline Architecture Diagram"
  >
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--text-muted)" />
      </marker>
      <marker
        id="arrow-accent"
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--accent-primary)" />
      </marker>
    </defs>

    {/* Upload Ingestion */}
    <rect x="30" y="40" width="150" height="75" rx="4" className="arch-node" />
    <text x="45" y="65" className="arch-node-title">
      Document Intake
    </text>
    <text x="45" y="85" className="arch-node-sub">
      PDF / Image Upload
    </text>
    <text x="45" y="100" className="arch-node-sub">
      Multer / Cloudinary
    </text>

    {/* OCR Pipeline */}
    <rect x="230" y="40" width="170" height="75" rx="4" className="arch-node" />
    <text x="245" y="65" className="arch-node-title">
      OCR Preprocessing
    </text>
    <text x="245" y="85" className="arch-node-sub">
      OpenCV Filtering
    </text>
    <text x="245" y="100" className="arch-node-sub">
      Pytesseract + PyMuPDF
    </text>

    {/* Upload -> OCR */}
    <path d="M 180 77 L 230 77" className="arch-edge" markerEnd="url(#arrow)" />

    {/* Gemini Generation Core (Highlighted) */}
    <rect
      x="450"
      y="40"
      width="200"
      height="85"
      rx="4"
      className="arch-node arch-node--highlight"
    />
    <text x="465" y="65" className="arch-node-title arch-node-title--highlight">
      FastAPI + Gemini AI
    </text>
    <text x="465" y="85" className="arch-node-sub">
      Google Gemini 1.5 Pro
    </text>
    <text x="465" y="103" className="arch-node-sub">
      Structured Question Extraction
    </text>

    {/* OCR -> Gemini (Highlighted) */}
    <path
      d="M 400 77 L 450 77"
      className="arch-edge arch-edge--highlight"
      markerEnd="url(#arrow-accent)"
    />

    {/* Persistence & Schema Validation */}
    <rect
      x="450"
      y="180"
      width="200"
      height="75"
      rx="4"
      className="arch-node"
    />
    <text x="465" y="205" className="arch-node-title">
      Exam Store & Schema
    </text>
    <text x="465" y="225" className="arch-node-sub">
      MongoDB + Mongoose
    </text>
    <text x="465" y="240" className="arch-node-sub">
      Answer Key Generator
    </text>

    {/* Gemini -> DB */}
    <path
      d="M 550 125 L 550 180"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />

    {/* Frontend Assessment Dashboard */}
    <rect
      x="130"
      y="180"
      width="200"
      height="75"
      rx="4"
      className="arch-node"
    />
    <text x="145" y="205" className="arch-node-title">
      React UI + Analytics
    </text>
    <text x="145" y="225" className="arch-node-sub">
      TanStack React Query
    </text>
    <text x="145" y="240" className="arch-node-sub">
      Recharts Performance View
    </text>

    {/* DB -> Frontend */}
    <path
      d="M 450 217 L 330 217"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />
  </svg>
);

const SamvaadDiagram = () => (
  <svg
    className="arch-diagram__svg"
    viewBox="0 0 680 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Samvaad Real-Time Architecture Diagram"
  >
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--text-muted)" />
      </marker>
      <marker
        id="arrow-accent"
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1 L 8 5 L 0 9 z" fill="var(--accent-primary)" />
      </marker>
    </defs>

    {/* Client A */}
    <rect x="30" y="40" width="150" height="70" rx="4" className="arch-node" />
    <text x="45" y="65" className="arch-node-title">
      PWA Client A
    </text>
    <text x="45" y="85" className="arch-node-sub">
      React 19 / Vite 8
    </text>

    {/* Client B */}
    <rect x="30" y="180" width="150" height="70" rx="4" className="arch-node" />
    <text x="45" y="205" className="arch-node-title">
      PWA Client B
    </text>
    <text x="45" y="225" className="arch-node-sub">
      React Router 7
    </text>

    {/* Socket.IO Real-Time Engine (Highlighted) */}
    <rect
      x="260"
      y="40"
      width="180"
      height="85"
      rx="4"
      className="arch-node arch-node--highlight"
    />
    <text x="275" y="65" className="arch-node-title arch-node-title--highlight">
      Socket.IO Cluster
    </text>
    <text x="275" y="85" className="arch-node-sub">
      Bi-directional Broadcast
    </text>
    <text x="275" y="103" className="arch-node-sub">
      Rooms & Typings Emitter
    </text>

    {/* Client A <-> Socket.IO */}
    <path
      d="M 180 75 L 260 75"
      className="arch-edge arch-edge--highlight"
      markerEnd="url(#arrow-accent)"
    />

    {/* Client B <-> Socket.IO */}
    <path
      d="M 180 215 L 220 215 L 220 100 L 260 100"
      className="arch-edge arch-edge--highlight"
      markerEnd="url(#arrow-accent)"
    />

    {/* HTTP REST & JWT Auth */}
    <rect
      x="260"
      y="180"
      width="180"
      height="75"
      rx="4"
      className="arch-node"
    />
    <text x="275" y="205" className="arch-node-title">
      REST Auth Gateway
    </text>
    <text x="275" y="225" className="arch-node-sub">
      JWT Verification
    </text>
    <text x="275" y="240" className="arch-node-sub">
      bcrypt Password Hashing
    </text>

    {/* Client -> Auth Gateway */}
    <path
      d="M 180 215 L 260 215"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />

    {/* Database Persistence */}
    <rect
      x="500"
      y="110"
      width="150"
      height="75"
      rx="4"
      className="arch-node"
    />
    <text x="515" y="135" className="arch-node-title">
      MongoDB Store
    </text>
    <text x="515" y="155" className="arch-node-sub">
      Mongoose 9 Models
    </text>
    <text x="515" y="170" className="arch-node-sub">
      Chat & User State
    </text>

    {/* Socket.IO -> DB */}
    <path
      d="M 440 82 L 470 82 L 470 135 L 500 135"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />

    {/* Auth Gateway -> DB */}
    <path
      d="M 440 217 L 470 217 L 470 160 L 500 160"
      className="arch-edge"
      markerEnd="url(#arrow)"
    />
  </svg>
);

const DIAGRAM_COMPONENTS = {
  1: CodeForgeDiagram,
  14: CoComputeDiagram,
  3: Prep10XDiagram,
  4: SamvaadDiagram,
};

const ArchitectureDiagram = ({ projectId }) => {
  const Diagram = DIAGRAM_COMPONENTS[projectId];
  if (!Diagram) return null;

  return (
    <div className="arch-diagram">
      <div className="arch-diagram__header">
        <span className="arch-diagram__badge">SYSTEM ARCHITECTURE</span>
        <span className="arch-diagram__hint">Vector Topology</span>
      </div>
      <div className="arch-diagram__canvas">
        <Diagram />
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
