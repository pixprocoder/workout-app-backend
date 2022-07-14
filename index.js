const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const app = express();
//Router
const workoutRoutes = require("./routes/workouts");

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  next();
});

// All router
app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`The app is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.dir(error);
  });
