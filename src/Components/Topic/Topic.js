import React from "react";
import { Link } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="topic">
      <img src={logo} alt="" />

      <div className="topic-info">
        <h1>{name}</h1>
        <p>Total Questions : {total}</p>
        <Link to={`/topic/${id}`}>
          <button className="details-btn">Show Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
