import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";

const CreateExercise = () => {
  const { user } = useAuth0();
  const [{ duration, description }, setInputText] = useState({
    username: "",
    duration: "",
    date: new Date(),
    description: "",
    completion: false
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setInputText(prevState => ({ ...prevState, [name]: value }));
  };

  const postData = event => {
    event.preventDefault();
    if (!user) return;
    const newExercise = {
      username: user.nickname,
      duration: duration,
      description: description,
      date: new Date(),
      completion: false
    };

    const url = "http://localhost:5000/exercises/add";

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
    <div>
      <form action="">
        <div className="form-group">
          <h3>New Exercise: {description}</h3>
          <input
            type="text"
            className="form-control"
            name="description"
            value={description}
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
        <button type="submit" className="btn btn-primary" onClick={postData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateExercise;
