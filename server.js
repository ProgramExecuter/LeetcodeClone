import express from "express";
import dotenv from "dotenv";

import apiRoutes from "./routes/index.js";

const app = express();
dotenv.config();

// Parse JSON data in body of a request
app.use(express.json());

// Attach API routes
app.use("/api/v1", apiRoutes);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
