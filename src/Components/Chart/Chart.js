import React from "react";
import { LineChart, Line } from "recharts";

const Chart = ({ quiz }) => {
  const { total } = quiz;
  console.log(total);
  return (
    <div>
      <LineChart width={500} height={400} data={quiz}>
        <Line type="monotone" dataKey="total" stroke="red" />
      </LineChart>
    </div>
  );
};

export default Chart;
