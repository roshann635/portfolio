const express = require("express");
const cors = require("cors");
const path = require("path");
const { connectDB } = require("./config/db");
const { loadEnv } = require("./config/env");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const routes = require("./routes");

// Load environment variables
loadEnv();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware

const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-weld-eight-88.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (origin.includes(".vercel.app")) {
        return callback(null, true);
      }

      console.log("Blocked by CORS:", origin);
      return callback(null, false);
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Static files for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api", routes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
