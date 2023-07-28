import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
