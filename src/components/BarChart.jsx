import React from "react";
// import styled from "styled-components";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
  const d = [...props.data];
  // console.log(d);
  const labelsArr = [];
  const dataArr = [];
  const colorArr = ["#68d4cd", "#cef57a", "#fd8080", "#26e7a6", "#6d848e"];
  d.map((item) => {
    labelsArr.push(item.name);
    dataArr.push(item.stargazers_count);
    return null;
  });
  // console.log(labelsArr);
  // console.log(dataArr);
  const data = {
    labels: labelsArr,
    datasets: [
      {
        fill: false,
        lineTension: 1,
        backgroundColor: colorArr,
        borderColor: colorArr,
        hoverBackgroundColor: colorArr,
        hoverBorderColor: colorArr,
        hoverBorderWidth: 2,
        data: dataArr,
      },
    ],
  };
  return (
    <div style={{ width: "100%" }}>
      <Bar
        data={data}
        options={{
          responsive: true,
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: true,
                },
                ticks: {
                  beginAtZero: true,
                  fontColor: props.backgroundColor,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: props.backgroundColor,
                },
                position: "left",
                gridLines: { display: true },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Chart;
