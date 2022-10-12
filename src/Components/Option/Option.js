import React, { useState } from "react";

import "./Option.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, correctAnswer, id }) => {
  console.log(correctAnswer);

  const handleClick = (option, correctAnswer) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer");
    } else {
      toast.error("Wrong Answer");
    }
  };

  return (
    <div className="option">
      <div className="all-option">
        <label>
          <input
            type="radio"
            name={id}
            id=""
            onClick={() => handleClick(option, correctAnswer)}
          />
          {option} <ToastContainer position="top-center" />
        </label>
      </div>
    </div>
  );
};

export default Option;
