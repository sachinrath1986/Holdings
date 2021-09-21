import React, { useState } from 'react';
import {
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonImg,
} from '@ionic/react';
import LineChart from '../components/LineChart';
import { currencyFormatter } from '../utils/currency';
import HoldingAnalyticsStyles from './HoldingAnalytics.module.css';
import NextIcon from '../images/next_arrow.png';

export type HoldingAnalyticsDataType = {
  open: number;
  low: number;
  high: number;
  previousClose: number;
  incomeStatements: number;
  balanceSheet: number;
  cashFlow: number;
};

const chartDuration = ['1M', '6M', 'YTD', '1Y', '5Y', 'All'];
const chartDurationData = {
  '1M': {
    labels: [
      '21 Aug 2021',
      '22 Aug 2021',
      '23 Aug 2021',
      '24 Aug 2021',
      '25 Aug 2021',
      '26 Aug 2021',
      '27 Aug 2021',
      '28 Aug 2021',
      '29 Aug 2021',
      '30 Aug 2021',
      '31 Aug 2021',
      '1 Sep 2021',
      '2 Sep 2021',
      '3 Sep 2021',
      '4 Sep 2021',
      '5 Sep 2021',
      '6 Sep 2021',
      '7 Sep 2021',
      '8 Sep 2021',
      '9 Sep 2021',
      '10 Sep 2021',
      '11 Sep 2021',
      '12 Sep 2021',
      '13 Sep 2021',
      '14 Sep 2021',
      '15 Sep 2021',
      '16 Sep 2021',
      '17 Sep 2021',
      '18 Sep 2021',
      '19 Sep 2021',
    ],
    data: [
      10.5, 2.5, 12, 7, 10, 11, 10, 6, 12, 13, 8, 14, 7, 14, 6, 10.5, 2.5, 12,
      7, 10, 11, 10, 6, 12, 13, 8, 14, 7, 14, 6,
    ],
  },
  '6M': {
    labels: [
      '25-31 Mar 2021',
      '1-7 Apr 2021',
      '8-14 Apr 2021',
      '15-21 Apr 2021',
      '22-28 Apr 2021',
      '29 Apr - 5 May 2021',
      '6-12 May 2021',
      '13-19 May 2021',
      '20-16 May 2021',
      '27 May - 2 Jun 2021',
      '3-9 Jun 2021',
      '10-16 Jun 2021',
      '17-23 Jun 2021',
      '24-30 Jun 2021',
      '1-7 Jul 2021',
      '8-14 Jul 2021',
      '15-21 Jul 2021',
      '22-28 Jul 2021',
      '29 Jul - 4 Aug 2021',
      '5-11 Aug 2021',
      '12-18 Aug 2021',
      '19-25 Aug 2021',
      '26 Aug - 1 Sep 2021',
      '2-8 Sep 2021',
      '9-15 Sep 2021',
      '16-22 Sep 2021',
    ],
    data: [
      1.5, 7.5, 12, 6, 10, 8, 10, 5, 12, 10, 13.5, 14, 13, 14, 14.5, 1.5, 7.5,
      12, 6, 10, 8, 10, 5, 12, 10, 13.5,
    ],
  },
  YTD: {
    labels: [
      'Jan 2021',
      'Feb 2021',
      'Mar 2021',
      'Apr 2021',
      'May 2021',
      'Jun 2021',
      'Jul 2021',
      'Aug 2021',
      'Sep 2021',
    ],
    data: [5.5, 11.5, 12, 11, 10, 11, 10, 11, 12],
  },
  '1Y': {
    labels: [
      'Oct 2020',
      'Nov 2020',
      'Dec 2020',
      'Jan 2021',
      'Feb 2021',
      'Mar 2021',
      'Apr 2021',
      'May 2021',
      'Jun 2021',
      'Jul 2021',
      'Aug 2021',
      'Sep 2021',
    ],
    data: [2.5, 11.5, 5, 11, 6, 11, 10, 11, 12, 13, 10.5, 14],
  },
  '5Y': {
    labels: [
      'Oct 2018',
      'Nov 2018',
      'Dec 2018',
      'Jan 2019',
      'Feb 2019',
      'Mar 2019',
      'Apr 2019',
      'May 2019',
      'Jun 2019',
      'Jul 2019',
      'Aug 2019',
      'Sep 2019',
      'Oct 2019',
      'Nov 2019',
      'Dec 2019',
      'Jan 2020',
      'Feb 2020',
      'Mar 2020',
      'Apr 2020',
      'May 2020',
      'Jun 2020',
      'Jul 2020',
      'Aug 2020',
      'Sep 2020',
      'Oct 2020',
      'Nov 2020',
      'Dec 2020',
      'Jan 2021',
      'Feb 2021',
      'Mar 2021',
      'Apr 2021',
      'May 2021',
      'Jun 2021',
      'Jul 2021',
      'Aug 2021',
      'Sep 2021',
    ],
    data: [
      7.5, 11.5, 5, 11, 10, 7, 10, 11, 12, 13, 3.5, 14, 7.5, 11.5, 5, 11, 10, 7,
      10, 11, 12, 13, 3.5, 14, 7.5, 11.5, 5, 11, 10, 7, 10, 11, 12, 13, 3.5, 14,
    ],
  },
  All: {
    labels: [
      'Oct 2018',
      'Nov 2018',
      'Dec 2018',
      'Jan 2019',
      'Feb 2019',
      'Mar 2019',
      'Apr 2019',
      'May 2019',
      'Jun 2019',
      'Jul 2019',
      'Aug 2019',
      'Sep 2019',
      'Oct 2019',
      'Nov 2019',
      'Dec 2019',
      'Jan 2020',
      'Feb 2020',
      'Mar 2020',
      'Apr 2020',
      'May 2020',
      'Jun 2020',
      'Jul 2020',
      'Aug 2020',
      'Sep 2020',
      'Oct 2020',
      'Nov 2020',
      'Dec 2020',
      'Jan 2021',
      'Feb 2021',
      'Mar 2021',
      'Apr 2021',
      'May 2021',
      'Jun 2021',
      'Jul 2021',
      'Aug 2021',
      'Sep 2021',
    ],
    data: [
      7.5, 11.5, 5, 11, 10, 7, 10, 11, 12, 13, 3.5, 14, 7.5, 11.5, 5, 11, 10, 7,
      10, 11, 12, 13, 3.5, 14, 7.5, 11.5, 5, 11, 10, 7, 10, 11, 12, 13, 3.5, 14,
    ],
  },
};

const HoldingAnalytics: React.FC = () => {
  const [overViewData] = useState<HoldingAnalyticsDataType>({
    open: 268.89,
    high: 250.0,
    low: 236.89,
    previousClose: 263.6,
    incomeStatements: 264890,
    balanceSheet: 364890,
    cashFlow: 464890,
  });

  const [activeDuration, setActiveDuration] = useState('6M');
  const [activeChartLabels, setActiveChartLabels] = useState(
    chartDurationData['6M'].labels
  );
  const [activeChartData, setActiveChartData] = useState(
    chartDurationData['6M'].data
  );

  const handleDurationChange = (duration: string) => {
    setActiveDuration(duration);
    const active = duration as keyof typeof chartDurationData;
    setActiveChartData(chartDurationData[active].data);
    setActiveChartLabels(chartDurationData[active].labels);
  };

  return (
    <div>
      <LineChart chartLabels={activeChartLabels} chartData={activeChartData} />
      <div
        className={`flex justify-between items-center p-4 ${HoldingAnalyticsStyles.chartDuration}`}
      >
        {chartDuration.map((item) => (
          <IonText
            key={item}
            onClick={() => handleDurationChange(item)}
            className={
              activeDuration === item
                ? HoldingAnalyticsStyles.activeDuration
                : ''
            }
          >
            {item}
          </IonText>
        ))}
      </div>
      <div className="p-4">
        <div
          className={`px-5 py-4 w-full rounded-xl mb-4 ${HoldingAnalyticsStyles.data_container}`}
        >
          <div>
            <IonGrid class="p-0">
              <IonRow>
                <IonCol size="6" class="pl-0 pt-0">
                  <div>
                    <IonText>
                      <h2 className="text-base text-white text-opacity-50">
                        Open
                      </h2>
                    </IonText>
                  </div>
                  <div>
                    <IonText color="light">
                      <p className="text-lg">
                        {currencyFormatter(overViewData.open)}
                      </p>
                    </IonText>
                  </div>
                </IonCol>
                <IonCol size="6" class=" pl-4 pt-0">
                  <div>
                    <IonText>
                      <h2 className="text-base text-white text-opacity-50">
                        High
                      </h2>
                    </IonText>
                  </div>
                  <div>
                    <IonText color="light">
                      <p className="text-lg">
                        {currencyFormatter(overViewData.high)}
                      </p>
                    </IonText>
                  </div>
                </IonCol>
                <IonCol size="6" class="pl-0">
                  <div>
                    <IonText>
                      <h2 className="text-base text-white text-opacity-50">
                        Low
                      </h2>
                    </IonText>
                  </div>
                  <div>
                    <IonText color="light">
                      <p className="text-lg">
                        {currencyFormatter(overViewData.low)}
                      </p>
                    </IonText>
                  </div>
                </IonCol>
                <IonCol size="6" class="pl-4">
                  <div>
                    <IonText>
                      <h2 className="text-base text-white text-opacity-50">
                        Prev. close
                      </h2>
                    </IonText>
                  </div>
                  <div>
                    <IonText color="light">
                      <p className="text-lg">
                        {currencyFormatter(overViewData.previousClose)}
                      </p>
                    </IonText>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </div>
      </div>
      <div>
        <IonList class={HoldingAnalyticsStyles.holdings_analytics_list}>
          <IonItem class={HoldingAnalyticsStyles.holdings_analytics_list_item}>
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                <IonText
                  class={HoldingAnalyticsStyles.analytics_statement_header_text}
                >
                  <h3 className="text-lg font-semibold">Income Statements</h3>
                </IonText>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">
                  <IonText color="light">
                    <h3 className="text-lg">
                      {currencyFormatter(overViewData.incomeStatements)}
                    </h3>
                  </IonText>
                </div>
                <div className="mr-1">
                  <IonImg src={NextIcon} class="w-2" />
                </div>
              </div>
            </div>
          </IonItem>
          <IonItem class={HoldingAnalyticsStyles.holdings_analytics_list_item}>
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                <IonText
                  class={HoldingAnalyticsStyles.analytics_statement_header_text}
                >
                  <h3 className="text-lg font-semibold">Balance Sheet</h3>
                </IonText>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">
                  <IonText color="light">
                    <h3 className="text-lg">
                      {currencyFormatter(overViewData.balanceSheet)}
                    </h3>
                  </IonText>
                </div>
                <div className="mr-1">
                  <IonImg src={NextIcon} class="w-2" />
                </div>
              </div>
            </div>
          </IonItem>
          <IonItem class={HoldingAnalyticsStyles.holdings_analytics_list_item}>
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                <IonText
                  class={HoldingAnalyticsStyles.analytics_statement_header_text}
                >
                  <h3 className="text-lg font-semibold">Cash Flow</h3>
                </IonText>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">
                  <IonText color="light">
                    <h3 className="text-lg">
                      {currencyFormatter(overViewData.cashFlow)}
                    </h3>
                  </IonText>
                </div>
                <div className="mr-1">
                  <IonImg src={NextIcon} class="w-2" />
                </div>
              </div>
            </div>
          </IonItem>
        </IonList>
      </div>
    </div>
  );
};

export default HoldingAnalytics;
