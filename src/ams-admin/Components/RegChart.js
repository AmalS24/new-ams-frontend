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
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar } from "react-chartjs-2";

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
    labels: ["CSE","CSE-AI","CE","ME","EEE","ECE"],
    datasets: [
      {
        label: "Registration's",
        data: [310, 120, 210, 150, 350, 280],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "rgb(125,97,186)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  var options = {
    maintainAspectRatio: false,
    responsive: true,
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
    <div className=""> 
      <Doughnut data={data} responsive={true} height={400} options={options} />  
    </div>
  );
};

export default RegChart;
