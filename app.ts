// app.ts
import express, { Request, Response } from "express";
import { config } from "dotenv";
import webRoutes from "./routes/web";
import path from "path";

// Load environment variables
config();

const app = express();

app.disable("x-powered-by");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// Routes
app.use("/", webRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
