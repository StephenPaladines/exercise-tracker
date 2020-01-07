import React, { useState, useEffect } from "react";
import ExerciseList from "./ExercisesList";

const Homepage = props => {
  const [data, newList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/exercises")
      .then(response => response.json())
      .then(data => {
        let exerciseElement = document.getElementById("exercise-list");
        let result = data.map(exercise => {
          let newListItem = document.createElement("li");
          newListItem.innerText = exercise.description;
          exerciseElement.append(newListItem);
          return exercise.description;
        });
        return newList(() => {
          return result;
        });
      });
  }, []);

  return (
    <div>
      <h1>{data.length === 0 ? "Hello" : "Hello, " + {}}</h1>
      <ul>
        <li>{new Date().toLocaleDateString("en-us", { weekday: "long" })}</li>
        <ul id="exercise-list"></ul>
      </ul>
      <ExerciseList />
    </div>
  );
};

export default Homepage;
