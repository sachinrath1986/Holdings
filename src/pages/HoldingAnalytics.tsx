import React, { useState } from 'react';
import {
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonList,
  IonItem,
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import LineChart from '../components/LineChart';
import HoldingAnalyticsStyles from './HoldingAnalytics.module.css';

const chartDuration = ['1M', '6M', 'YTD', '1Y', '5Y', 'All'];

const HoldingAnalytics: React.FC = () => {
  const [overViewData, setOverViewData] = useState({
    Invested: '$234,56.10',
    Current: '$534,56.10',
    ProfitOrLoss: {
      PorL: 'Profit',
      Value: '5194.40',
    },
    DayProfitOrLoss: '$513.80',
    AveragePrice: '$268.89',
    Quantity: 'T1:549',
    Open: '$268.89',
    High: '$250.00',
    Low: '$236.89',
    PreviousClose: '$263.60',
    WeekLowOrHigh: {
      Low: '$51,800.00',
      High: '$57,800.00',
    },
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
                      <p className="text-lg">{overViewData.Open}</p>
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
                      <p className="text-lg">{overViewData.High}</p>
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
                      <p className="text-lg">{overViewData.Low}</p>
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
                      <p className="text-lg">{overViewData.PreviousClose}</p>
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
                <IonText color="primary">
                  <h3 className="text-lg">Income Statements</h3>
                </IonText>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-1">
                  <IonText color="light">
                    <h3 className="text-lg">$21,34,980</h3>
                  </IonText>
                </div>
                <div className="mr-1">
                  <IonIcon icon={chevronForwardOutline} color="primary" />
                </div>
              </div>
            </div>
          </IonItem>
          <IonItem class={HoldingAnalyticsStyles.holdings_analytics_list_item}>
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                <IonText color="primary">
                  <h3 className="text-lg">Balance Sheet</h3>
                </IonText>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-1">
                  <IonText color="light">
                    <h3 className="text-lg">$21,34,980</h3>
                  </IonText>
                </div>
                <div className="mr-1">
                  <IonIcon icon={chevronForwardOutline} color="primary" />
                </div>
              </div>
            </div>
          </IonItem>
          <IonItem class={HoldingAnalyticsStyles.holdings_analytics_list_item}>
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                <IonText color="primary">
                  <h3 className="text-lg">Cash Flow</h3>
                </IonText>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-1">
                  <IonText color="light">
                    <h3 className="text-lg">$21,34,980</h3>
                  </IonText>
                </div>
                <div className="mr-1">
                  <IonIcon icon={chevronForwardOutline} color="primary" />
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
