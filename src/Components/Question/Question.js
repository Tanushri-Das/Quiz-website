import React from "react";
import "./Question.css";
import Option from "../Option/Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ querys }) => {
  const { id, question, options, correctAnswer } = querys;
  const handleClick = (correctAnswer) => {
    toast.info(correctAnswer);
  };

  return (
    <div className="question">
      <div className="question-container">
        <h3>Quiz :{question}</h3>
        <div className="font">
          <FontAwesomeIcon
            onClick={() => handleClick(correctAnswer)}
            icon={faEye}
          ></FontAwesomeIcon>
          <ToastContainer position="top-center" />
        </div>
      </div>
      <div className="options">
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
  );
};

export default Question;
