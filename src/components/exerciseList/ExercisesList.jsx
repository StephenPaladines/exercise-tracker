import React, { useState } from "react";
import "./ExerciseList.css";

const ExercisesList = props => {
  const { description, duration } = props.data;
  return (
    <div className="test">
      <input type="checkbox" className="exercise-Desc" />
      {`${description} (${duration} minutes)`}
    </div>
  );
};

export default ExercisesList;
