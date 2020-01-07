const router = require("express").Router(); // Routing of CRUD operations
let User = require("../models/user.model"); // User model created to store user data

router.route("/").get((req, res) => {
  // First endpoint that will handle HTTP GET request on the user side
  User.find() // GET request method that will get all users from DB based on a promise (JSON format)
    .then(users => res.json(users)) // Returns all users in JSON format from DB
    .catch(err => res.status(400).json("Error: " + err)); // Error handling
});

router.route("/add").post((req, res) => {
  // Second endpoint that will handle POST requests
  const username = req.body.username;

  const newUser = new User({ username }); // New user to add to collection

  newUser
    .save() // Save user to the DB
    .then(() => res.json("User added!")) // Follow up message indicating user was successfully added
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
