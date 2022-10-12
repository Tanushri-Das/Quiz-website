import React, { useState } from "react";

import "./Option.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, correctAnswer, id }) => {
  console.log(correctAnswer);
  const [count, setCount] = useState([]);
  const handleClick = (option, correctAnswer) => {
    if (option === correctAnswer) {
      count = option + 1;
      console.log(count);
      toast.success("Correct Answer");
    } else {
      toast.error("Wrong Answer");
    }
  };
  const handleAddToClick = () => {
    console.log("clik");
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
      <div>
        <h2>Order</h2>
      </div>
    </div>
  );
};

export default Option;
