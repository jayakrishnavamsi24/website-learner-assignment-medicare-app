const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET /medications
exports.getMedications = async (req, res) => {
  try {
    const meds = await prisma.medication.findMany({
      where: { userId: req.userId }
    });
    res.json(meds);
  } catch (err) {
    res.status(500).json({ message: "Error fetching meds", error: err.message });
  }
};

// POST /medications
exports.addMedication = async (req, res) => {
  const { name, dosage, frequency } = req.body;
  try {
    const newMed = await prisma.medication.create({
      data: {
        name,
        dosage,
        frequency,
        takenDates: "",
        userId: req.userId
      }
    });
    res.status(201).json(newMed);
  } catch (err) {
    res.status(500).json({ message: "Error adding med", error: err.message });
  }
};

// PUT /medications/:id/taken
exports.markAsTaken = async (req, res) => {
  const { id } = req.params;
  const today = new Date().toISOString().split("T")[0]; // e.g., "2024-06-20"
  try {
    const med = await prisma.medication.findUnique({ where: { id: parseInt(id) } });
    if (!med || med.userId !== req.userId) {
      return res.status(404).json({ message: "Medication not found" });
    }

    let takenDates = med.takenDates ? med.takenDates.split(",") : [];
    if (!takenDates.includes(today)) {
      takenDates.push(today);
    }

    const updatedMed = await prisma.medication.update({
      where: { id: parseInt(id) },
      data: { takenDates: takenDates.join(",") }
    });

    res.json(updatedMed);
  } catch (err) {
    res.status(500).json({ message: "Error marking as taken", error: err.message });
  }
};
