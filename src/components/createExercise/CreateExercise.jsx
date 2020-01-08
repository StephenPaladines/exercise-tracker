import React, { useState, useEffect } from "react";

const CreateExercise = () => {
  const [{ exercise, duration }, setInputText] = useState({
    exercise: "",
    duration: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setInputText(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <h3>New Exercise: {exercise}</h3>
          <input
            type="text"
            className="form-control"
            name="exercise"
            value={exercise}
            onChange={handleChange}
            placeholder="Exercise"
          />
        </div>
        <div className="form-group">
          <h3>Duration: {!duration ? null : `${duration} minutes`}</h3>
          <input
            type="text"
            className="form-control"
            name="duration"
            value={duration}
            onChange={handleChange}
            placeholder="Minutes"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateExercise;
