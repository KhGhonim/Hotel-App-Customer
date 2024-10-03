"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartHome() {
  const [activeTab, setActiveTab] = useState("daily");

  const dataSets = {
    daily: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu"],
      data: [12, 19, 3, 5, 2],
    },
    weekly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [65, 59, 80, 81],
    },
    monthly: {
      labels: ["January", "February", "March", "April"],
      data: [11.5, 45, 70, 20],
    },
  };

  const data = {
    labels: dataSets[activeTab].labels,
    datasets: [
      {
        label: "KG Cave Hotel",

        data: dataSets[activeTab].data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],

        borderWidth: 1, // Border width of the every bar

        tooltip: {
          callbacks: {
            label: (tooltipItem) => `Value: ${tooltipItem.raw}`, // Whem you hover over the chart you will see the value : number
          },
        },
      },
    ],
  };

  const options = {
    indexAxis: "x", //// Y will make the chart horizontal
    responsive: true, //// This will make the chart responsive and stay inside the parent div
    maintainAspectRatio: false, // This allows the chart to fill the parent div
    plugins: {
      legend: {
        position: "bottom", // Position of the Label
      },
      title: {
        display: true,
        text: "Reservation Stats", // Title of the chart in top
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "black", // Color of the text in the chart in the Y axis
        },

        grid: {
          display: true, // This will show the grid in the chart
        },
      },
    },
  };

  return (
    <div className="w-full py-2 px-4 rounded-lg h-80 ">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setActiveTab("daily")}
          className={`flex-1 px-4 py-2 text-center rounded-lg transition-colors duration-200 
                    ${
                      activeTab === "daily"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
        >
          Daily
        </button>
        <button
          onClick={() => setActiveTab("weekly")}
          className={`flex-1 px-4 py-2 text-center rounded-lg transition-colors duration-200 
                    ${
                      activeTab === "weekly"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
        >
          Weekly
        </button>
        <button
          onClick={() => setActiveTab("monthly")}
          className={`flex-1 px-4 py-2 text-center rounded-lg transition-colors duration-200 
                    ${
                      activeTab === "monthly"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
        >
          Monthly
        </button>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
