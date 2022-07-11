const mongoose = require("mongoose");

const Schema = new mongoose.Schema();
const workoutSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);
module.exports = mongoose.model("Workout", workoutSchema);
