import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VisualizationChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [{ label: 'Transactions', data: data.values, backgroundColor: 'rgba(75,192,192,0.4)' }],
  };

  return <Bar data={chartData} />;
};

export default VisualizationChart;