import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../../components/navbar/Navbar";
import EditExercise from "../../../components/editExercise/EditExercise";
import CreateExercise from "../../../components/createExercise/CreateExercise";
import CreateUser from "../../../components/createUser/CreateUser";
import Homepage from "../homepage/Homepage";
import Profile from "../../../components/profile/Profile";
import { useAuth0, Auth0Context } from "../../../react-auth0-spa";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Homepage} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/profile" component={Profile} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;