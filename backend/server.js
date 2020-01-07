const express = require("express"); // Requirements from express
const cors = require("cors"); // Allow access to cors (access to remote server)
const mongoose = require("mongoose");

require("dotenv").config(); // Configures out environment variables in the dotenv file

const app = express(); // Create server
const port = process.env.PORT || 5000; // On port 5000

app.use(cors()); // Middleware (using cors for functionality)
app.use(express.json()); // Allows the parsing of JSON since server will send/receive JSON

const uri = process.env.ATLAS_URI; // The databse URI (where db lives)
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}); // Pass the URI to start connection

const connection = mongoose.connection; // Establishes conneciton with the DB and responds
connection.once("open", () => {
  console.log("MongoDB database connection etablished successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  // Starts server
  console.log("Server is running on port:" + port);
});
