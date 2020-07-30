import React from "react";
// import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const Chart = (props) => {
  const d = [...props.data];
  // console.log(d);
  const labelsArr = [];
  const dataArr = [];
  const colorArr = [];
  d.map((item) => {
    labelsArr.push(item.label);
    dataArr.push(item.value);
    colorArr.push(item.color);
    return null;
  });
  // console.log(labelsArr);
  // console.log(dataArr);
  const data = {
    labels: labelsArr.reverse(),
    datasets: [
      {
        label: labelsArr.reverse(),
        fill: false,
        lineTension: 1,
        backgroundColor: colorArr.reverse(),
        borderColor: colorArr.reverse(),
        hoverBackgroundColor: colorArr.reverse(),
        hoverBorderColor: colorArr.reverse(),
        hoverBorderWidth: 2,
        data: dataArr.reverse(),
      },
    ],
  };
  return (
    <div style={{ width: "100%" }}>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default Chart;
