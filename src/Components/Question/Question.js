import React from "react";
import "./Question.css";
import Option from "../Option/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Question = ({ querys }) => {
  const { id, question, options, correctAnswer } = querys;
  const handleClick = (correctAnswer) => {
    console.log(correctAnswer);
  };
  return (
    <div>
      <h3>Quiz :{question}</h3>

      <div className="all">
        <div>
          <FontAwesomeIcon
            onClick={() => handleClick(correctAnswer)}
            icon={faCoffee}
          ></FontAwesomeIcon>

          <div className="option">
            {options.map((option) => (
              <Option
                key={option.id}
                id={id}
                option={option}
                correctAnswer={correctAnswer}
              ></Option>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
