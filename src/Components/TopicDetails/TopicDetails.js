import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Option from "../Option/Option";
import Question from "../Question/Question";
import "./TopicDetails.css";

const TopicDetails = () => {
  const topic = useLoaderData();
  const { name, id } = topic.data;

  const Questions = topic.data.questions;

  return (
    <div className="quiz">
      <h3>Quiz of {name}</h3>

      {Questions.map((querys) => (
        <Question querys={querys}></Question>
      ))}
    </div>
  );
};

export default TopicDetails;
