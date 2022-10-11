import React from "react";
import "./Question.css";
import Option from "../Option/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Question = ({ querys, handleClick }) => {
  const { id, question, options, correctAnswer } = querys;

  return (
    <div>
      <h3>Quiz :{question}</h3>

      <div className="option">
        <FontAwesomeIcon className="font" icon={faCoffee}></FontAwesomeIcon>
        {options.map((option) => (
          <Option
            id={id}
            option={option}
            correctAnswer={correctAnswer}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
