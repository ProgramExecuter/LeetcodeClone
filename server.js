import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Parse JSON data in body of a request
app.use(express.json());

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
