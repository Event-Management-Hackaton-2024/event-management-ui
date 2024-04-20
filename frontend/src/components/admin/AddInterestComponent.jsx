import React, { useState } from "react";
import { addInterest } from "../../services/InterestService";

const AddInterestComponent = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    const interest = { name };
    event.preventDefault();
    try {
      await addInterest(interest);
      setName("");
    } catch (error) {
      console.error("Error adding interest:", error);
    }
  };

  return (
    <div className="flex m-2">
      <h3>Add Interest</h3>
      <form onSubmit={handleSubmit} className="row g-3 space-around">
        <div className="col-2">Interest name:</div>
        <div className="col-3">
          <input
            type="text"
            className="form-controlm"
            id="name"
            placeholder="Interest Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-2 m-2">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInterestComponent;
