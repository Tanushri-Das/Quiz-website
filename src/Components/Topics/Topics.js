import React from "react";
import { useLoaderData } from "react-router-dom";
import HeaderBack from "../HeaderBack/HeaderBack";
import Topic from "../Topic/Topic";
import "./Topics.css";
const Topics = () => {
  const topics = useLoaderData();
  console.log(topics.data);
  return (
    <div>
      <HeaderBack></HeaderBack>
      <h1>All topics are here : {topics.data.length}</h1>
      <div className="topics">
        {topics.data.map((topic) => (
          <Topic topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
