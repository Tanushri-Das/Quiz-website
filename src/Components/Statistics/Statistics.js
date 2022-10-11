import React from "react";
import { useLoaderData } from "react-router-dom";
import Chart from "../Chart/Chart";

const Statistics = () => {
  const totalQuiz = useLoaderData();
  console.log(totalQuiz.data);
  return (
    <div>
      {totalQuiz.data.map((quiz) => (
        <Chart key={quiz.id} quiz={quiz}></Chart>
      ))}
    </div>
  );
};

export default Statistics;
