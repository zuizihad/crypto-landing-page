"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  Title,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement
} from "chart.js";

ChartJS.register(
  LineElement,
  Title,
  LinearScale,
  CategoryScale,
  Tooltip,
  PointElement,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Jan 24", "Mar 24", "May 24", "Aug 24", "Oct 24", "Dec 24"],
      datasets: [
        {
          label: "TransferCoin",
          data: [90, 120, 100, 130, 150, 125, 110],
          backgroundColor: "#363EF5",
          borderColor: "#363EF5",
          borderWidth: 1,
          tension: 0.1,
          fill: true,
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: false,
          text: "Daily Revenue",
        },
      },
      
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className=" m-auto h-[250px] w-full md:col-span-2 lg:h-[350px]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default LineChart;