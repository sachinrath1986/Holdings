import React from 'react';
// eslint-disable-next-line
import { Doughnut } from 'react-chartjs-2';
import './DoughnutChart.css';

const data = {
  labels: [
    'Cash & Equivalents',
    'Convertible Securities',
    'Commodities',
    'Equities',
    'Debt Instruments',
    'Others',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(84,82,216)',
        'rgb(207,95,81)',
        'rgb(207,167,61)',
        'rgb(208,193,53)',
        'rgb(2,210,143)',
        'rgb(74,150,216)',
      ],
      borderColor: [
        'rgb(84,82,216)',
        'rgb(207,95,81)',
        'rgb(207,167,61)',
        'rgb(208,193,53)',
        'rgb(2,210,143)',
        'rgb(74,150,216)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  aspectRatio: 2,
  datasets: {
    doughnut: {
      cutout: '65%',
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'right',
      align: 'start',
      borderRadius: '50',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 10,
        boxWidth: 6,
        boxHeight: 6,
        font: 10,
        color: '#C4C7CE',
      },
      title: {
        display: true,
        padding: 0,
        font: 10,
      },
    },
  },
};

const DoughnutChart = ({ children }: any) => {
  const getInnerContent = () => {
    if (children) {
      return children;
    }
    return (
      <>
        <div className="main-content">1248</div>
        <div className="sub-content">Total Holding</div>
      </>
    );
  };
  return (
    <div className="relative">
      <Doughnut options={options} data={data} />
      <div className="absolute inner-content">{getInnerContent()}</div>
    </div>
  );
};

export default DoughnutChart;
