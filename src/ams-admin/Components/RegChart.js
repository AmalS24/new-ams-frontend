import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  BarElement,
  LineElement
);

const RegChart = () => {
  const data = {
    labels: ["CSE","CE","ME","EEE","ECE"],
    datasets: [
      {
        label: "Registration Data",
        data: [200, 210, 150, 450, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        display: true,
      },
      yAxes: {
        display: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} height={400} options={options} />
    </div>
  );
};

export default RegChart;
