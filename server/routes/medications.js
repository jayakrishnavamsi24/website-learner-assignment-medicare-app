const express = require("express");
const router = express.Router();
const { getMedications, addMedication, markAsTaken } = require("../controllers/medicationController");
const { authenticate } = require("../middleware/authMiddleware");

router.get("/", authenticate, getMedications);
router.post("/", authenticate, addMedication);
router.put("/:id/taken", authenticate, markAsTaken);

module.exports = router;
