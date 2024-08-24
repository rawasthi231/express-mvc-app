import express from "express";

import { config } from "dotenv";

import apiRoutes from "./routes/api";
import connectDB from "./config/database";

// Load environment variables
config();
// Connect to database
connectDB();

const app = express();

app.disable("x-powered-by");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", apiRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
