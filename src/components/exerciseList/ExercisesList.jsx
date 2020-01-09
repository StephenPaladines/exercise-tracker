import React, { useState } from "react";
import "./ExerciseList.css";

const ExercisesList = props => {
  const { description, duration, _id, completion } = props.data;
  const [checked, setCheck] = useState(props.data.completion);

  const updateClick = event => {
    setCheck(!checked);
    const newExercise = {
      ...props.data,
      completion: !checked
    };
    console.log({ ...newExercise });
    const url = "http://localhost:5000/exercises/update/" + _id;

    const options = {
      method: "POST",
      body: JSON.stringify(newExercise),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => res.json())
      .then(res => console.log(res));
  };

  return (
    <div className="test">
      <input
        type="checkbox"
        className="exercise-Desc"
        checked={checked}
        onChange={updateClick}
      />
      {`${description} (${duration} minutes)`}
    </div>
  );
};

export default ExercisesList;
