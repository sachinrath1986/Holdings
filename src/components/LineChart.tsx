import React, { useEffect } from 'react';
// eslint-disable-next-line
import { Line, Chart } from 'react-chartjs-2';

const data = (canvas: any) => {
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(200, 0, 200, 190);
  gradient.addColorStop(1, '#12203F');
  gradient.addColorStop(0.5, '#0f7761');
  gradient.addColorStop(0, '#3ed5c2');
  return {
    labels: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
    ],
    datasets: [
      {
        label: 'Total',
        data: [
          10.5, 11.5, 12, 11, 10, 11, 10, 11, 12, 13, 13.5, 14, 13, 14, 14.5,
        ],
        fill: true,
        backgroundColor: gradient,
      },
    ],
  };
};

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
        title: () => '₹ 292.89',
        label: () => '(21 july 2021)',
      },
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

const LineChart = () => {
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

  return <Line data={data} options={options} />;
};

export default LineChart;
