import React, { useState, useEffect } from "react";

const CreateExercise = () => {
  const handleChange = event => {};

  return (
    <div>
      <form action="">
        <div className="form-group">
          <h3>New Exercise:</h3>
          <input type="text" placeholder="Name" className="form-control" />
        </div>
        <div className="form-group">
          <h3>Duration:</h3>
          <input type="text" placeholder="Minutes" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateExercise;
