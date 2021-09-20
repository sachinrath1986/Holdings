import React, { useEffect } from 'react';
import { Line, Chart } from 'react-chartjs-2';

const LineChart: React.FC<{ chartData: number[], chartLabels: string[] }> = ({chartData,chartLabels}) => {
  const options = {
    layout: {
      padding: {
        left: -10,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 15,
        ticks: {
          display: false,
          stepSize: 1,
        },
      },
      X: {
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        caretSize: 0,
        caretPadding: 6,
        enabled: true,
        displayColors: false,
        backgroundColor: '#0a95ff',
        mode: 'nearest',
        callbacks: {
          title: (context: any) => {
            const title = `₹ ${chartData[context[0].dataIndex].toString()}`;
            return title;
          },
          label: (context: any) => {
            const label = `( ${context.label} )`;
            return label;
          }
        }
      },
    },
    elements: {
      point: {
        pointRadius: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#0a95ff',
      },
      line: {
        tension: 0.4,
      },
    },
  };

  useEffect(() => {
    // reference: https://stackoverflow.com/questions/45800521/chartjs-draw-vertical-line-at-data-point-on-chart-on-mouseover
    Chart.register({
      id: 'chart-line',
      afterDraw: (chart: any, easing: any) => {
        /* eslint no-underscore-dangle: "warn" */
        /* eslint prefer-destructuring: "warn" */
        if (chart.tooltip._active && chart.tooltip._active.length) {
          const { ctx } = chart;
          const { x } = chart.tooltip._active[0].element;
          const { top: topY, bottom: bottomY } = chart.scales.y;
          // draw line
          ctx.save();
          ctx.setLineDash([6, 2]);
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 1;
          ctx.strokeStyle = '#fff';
          ctx.stroke();
          ctx.restore();
        }
      },
    } as any);
  }, []);

  const data = (canvas: any) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(200, 0, 200, 190);
    gradient.addColorStop(1, '#d8d8d800');
    gradient.addColorStop(0, '#36B37E');
    return {
      labels: chartLabels,
      datasets: [
        {
          label: '₹ ',
          data: chartData,
          fill: true,
          backgroundColor: gradient,
        },
      ],
    };
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
