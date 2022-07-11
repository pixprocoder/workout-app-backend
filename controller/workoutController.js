const mongoose = require("mongoose");
const Workout = require("../models/workoutModels");

// GET ALL WORKOUT
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).send(workouts);
};

// GET SINGLE WORKOUT
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "Not found" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).send({ message: "No such workout" });
  }
  res.status(200).send(workout);
};

// CREATE WORKOUT
const createWorkout = async (req, res) => {
  const { title, reps, load, name } = req.body;
  console.log(title, reps, load, name);
  try {
    const workout = await Workout.create({ title, reps, load, name });
    res.send(workout);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// DELETE SINGLE  WORKOUT
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "No document found" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).send({ message: "No such workout" });
  }
  res.status(200).send({ workout, success: true });
};

// UPDATE SINGLE WORKOUT
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({ error: "No document found" });
    }
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!workout) {
      return res.status(404).send({ message: "No such workout" });
    }
    return res.status(200).send(workout);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
