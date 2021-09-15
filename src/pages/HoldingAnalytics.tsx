import React, { useState } from 'react';
import {
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
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
  return (
    <div>
      <LineChart />
      <div
        className={`flex justify-between items-center p-4 ${HoldingAnalyticsStyles.chartDuration}`}
      >
        {chartDuration.map((item, index) => (
          <span
            key={item}
            className={index === 1 ? HoldingAnalyticsStyles.activeDuration : ''}
          >
            {item}
          </span>
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
