import React, { useState, useEffect } from "react";
import ExerciseList from "../../../components/exerciseList/ExercisesList";
import { useAuth0 } from "../../../react-auth0-spa";
import "./Homepage.css";

const Homepage = props => {
  // To-do: Swtich generic name, Bob, for actual name once implemented
  const [exerciseData, setExerciseData] = useState([]);
  const { user } = useAuth0(); // Grabs the user state from Auth0

  // Hook used to fetch data and then set exerciseData
  // Passed empty array to avoid re-rendering (no dependency on props or states)
  useEffect(() => {
    if (!user) return;
    fetch("http://localhost:5000/exercises", null)
      .then(response => response.json())
      .then(data => {
        // To-do: Filter exercises by username once implemented
        const userExercise = data.filter(exercise => {
          if (
            exercise.username === user.name ||
            exercise.username === user.nickname
          )
            return exercise;
        });
        setExerciseData(userExercise);
      });
  }, [user]);

  return (
    <div>
      <h1 className="title">
        {!user
          ? "Welcome"
          : user.name === ""
          ? `Hello, ${user.nickname}`
          : `Hello, ${user.name}`}
      </h1>
      <div>
        <h3 className="title currentDay">
          {new Date().toLocaleDateString("en-us", { weekday: "long" })}
        </h3>
        {exerciseData.map(exercise => (
          <ExerciseList key={Math.random(0, 10)} data={exercise} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
