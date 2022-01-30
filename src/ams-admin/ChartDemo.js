import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, BarElement,Tooltip, Legend ,LinearScale ,CategoryScale ,PointElement ,LineElement ,RadialLinearScale} from 'chart.js'
import { Doughnut ,Line ,Bar, PolarArea }  from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    CategoryScale,
    LinearScale,
    Tooltip, 
    Legend,
    ArcElement,
    PointElement,
    BarElement
)

const ChartDemo = () => {
    const data = {
        labels: [
          'Management',
          'Government',
          'NRI'
        ],
        datasets: [{
          label: 'Registration Data',
          data: [200, 210, 150],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
        }]
      };
    var options = {
        maintainAspectRatio : false,
        scale: {
            gridLines: {
                display:false
            }
        },
        plugins: {
            legend: {
              position: 'bottom',
            }
          }
      
    }
 
  return (
      <div>
          <PolarArea
          data={data}
          height={400}
          options={options}
          />
      </div>
  );
};

export default ChartDemo;