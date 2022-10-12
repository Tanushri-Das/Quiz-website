import React from "react";
import { useLoaderData } from "react-router-dom";

import HeaderBack from "../HeaderBack/HeaderBack";
import Topic from "../Topic/Topic";
import "./Topics.css";
const Topics = () => {
  const topics = useLoaderData();
  return (
    <div>
      <HeaderBack></HeaderBack>
      <h1 className="topics-text">All topics are here</h1>
      <div className="topics">
        {topics.data.map((topic) => (
          <Topic topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
