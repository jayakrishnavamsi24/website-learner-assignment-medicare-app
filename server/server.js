const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/auth");
const medicationRoutes = require("./routes/medications");

// Use Routes
app.use("/auth", authRoutes);
app.use("/medications", medicationRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("MediCare Backend is running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));