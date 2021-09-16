import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';

type ChartProps = {
  data: (canvas: any) => any;
  options: any;
};

const PortSumLineChart: FC<ChartProps> = ({ data, options }) => (
  <Line data={data} options={options} />
);

export default PortSumLineChart;
