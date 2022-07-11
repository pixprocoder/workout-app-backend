const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");

// GET all workout
router.get("/", getWorkouts);

// GET single workout
router.get("/:id", getWorkout);

// POST workout
router.post("/", createWorkout);

// DELETE single workout
router.delete("/:id", deleteWorkout);

// UPDATE single workout
router.patch("/:id", updateWorkout);

module.exports = router;
