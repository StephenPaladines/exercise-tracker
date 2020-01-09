/* TODO */
// https://www.youtube.com/watch?v=7CqJlxBYj-M
// https://mongoosejs.com/docs/api.html#model_Model.findById Explains find methods
const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params._id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);
      exercise.completion = req.body.completion;

      exercise
        .save()
        .then(() => res.json("Selected exercise has been updated!"))
        .catch(err => res.status(400).json("Error " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const completion = req.body.completion;

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
    completion
  });

  newExercise
    .save()
    .then(() => res.json("Exercise Added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/delete").delete((req, res) => {});
module.exports = router;
