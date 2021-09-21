import React, { useState } from 'react';
// eslint-disable-next-line
import { IonText } from '@ionic/react';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChartStyles from './DoughnutChart.module.css';

const DoughnutChart = () => {
  const [innerData, setInnerData] = useState(2515666);
  const [activeLegend, setActiveLegend] = useState('Total Holding');
  const [chartData] = useState({
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
        data: [450000, 560000, 350000, 850000, 160000, 145666],
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
  });

  const FormatWholeNumber = (labelValue: number) => {
    let formattedValue = '';

    if (Math.abs(Number(labelValue)) >= 1.0e9) {
      formattedValue = `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(0)}B`;
    } else if (Math.abs(Number(labelValue)) >= 1.0e6) {
      formattedValue = `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(0)}M`;
    } else if (Math.abs(Number(labelValue)) >= 1.0e3) {
      formattedValue = `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(0)}K`;
    } else {
      formattedValue = labelValue.toString();
    }

    return formattedValue;
  };

  const ChartInnerContent = () => (
    <>
      <IonText class="text-white text-center font-semibold text-3xl">
        <p>{FormatWholeNumber(innerData)}</p>
      </IonText>
      <IonText class="text-white text-opacity-50 text-center text-xs">
        <p>{activeLegend}</p>
      </IonText>
    </>
  );

  const handleOnClickLegend = (e: CustomEvent, legendItem: any) => {
    setInnerData(chartData.datasets[0].data[legendItem.index]);
    setActiveLegend(legendItem.text);
  };

  const chartOptions = {
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
        onClick: handleOnClickLegend,
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

  const DoughnutComponent = () => (
    <Doughnut options={chartOptions} data={chartData} />
  );

  return (
    <div className="relative">
      <DoughnutComponent />
      <div className={`${DoughnutChartStyles.inner_content} absolute`}>
        <ChartInnerContent />
      </div>
    </div>
  );
};

export default DoughnutChart;
