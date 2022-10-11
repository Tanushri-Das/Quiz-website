import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Option.css";

const Option = ({ option, correctAnswer, id }) => {
  console.log(correctAnswer);
  const handleClick = (option, correctAnswer) => {
    if (option === correctAnswer) {
      console.log(correctAnswer, option);
      alert("dfgh");
    } else {
      console.log("beng");
    }
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name={id}
          id=""
          onClick={() => handleClick(option, correctAnswer)}
        />
        {option}
      </label>
    </div>
  );
};

export default Option;
