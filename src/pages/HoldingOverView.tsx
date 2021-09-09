import React, { useState } from 'react';
import { IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import HoldingOverViewStyles from './HoldingOverView.module.css';

const HoldingOverView: React.FC = () => {
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
    <div className="p-4">
      <div
        className={`px-5 py-4 w-full rounded-xl mb-4 ${HoldingOverViewStyles.data_container}`}
      >
        <div>
          <IonGrid class="p-0">
            <IonRow>
              <IonCol size="6" class="pl-0 pt-0">
                <div>
                  <IonText>
                    <h2 className="text-sm text-white text-opacity-50">
                      Invested
                    </h2>
                  </IonText>
                </div>
                <div>
                  <IonText color="light">
                    <p className="text-lg">{overViewData.Invested}</p>
                  </IonText>
                </div>
              </IonCol>
              <IonCol size="6" class=" pl-4 pt-0">
                <div>
                  <IonText>
                    <h2 className="text-sm text-white text-opacity-50">
                      Current
                    </h2>
                  </IonText>
                </div>
                <div>
                  <IonText color="light">
                    <p className="text-lg">{overViewData.Current}</p>
                  </IonText>
                </div>
              </IonCol>
              <IonCol size="6" class="pl-0">
                <div>
                  <IonText>
                    <h2 className="text-sm text-white text-opacity-50">
                      P&#38;L
                    </h2>
                  </IonText>
                </div>
                <div>
                  <IonText>
                    {overViewData.ProfitOrLoss.PorL === 'Profit' ? (
                      <p
                        className={`text-lg ${HoldingOverViewStyles.profit_text}`}
                      >
                        +{overViewData.ProfitOrLoss.Value}
                      </p>
                    ) : (
                      <p
                        className={`text-lg ${HoldingOverViewStyles.loss_text}`}
                      >
                        -{overViewData.ProfitOrLoss.Value}
                      </p>
                    )}
                  </IonText>
                </div>
              </IonCol>
              <IonCol size="6" class="pl-4">
                <div>
                  <IonText>
                    <h2 className="text-sm text-white text-opacity-50">
                      Day&lsquo;s P&#38;L
                    </h2>
                  </IonText>
                </div>
                <div>
                  <IonText color="light">
                    <p className="text-lg">{overViewData.DayProfitOrLoss}</p>
                  </IonText>
                </div>
              </IonCol>
              <IonCol size="6" class="pl-0">
                <div>
                  <IonText>
                    <h2 className="text-sm text-white text-opacity-50">
                      Avg.price
                    </h2>
                  </IonText>
                </div>
                <div>
                  <IonText color="light">
                    <p className="text-lg">{overViewData.AveragePrice}</p>
                  </IonText>
                </div>
              </IonCol>
              <IonCol size="6" class="pl-4">
                <div>
                  <IonText>
                    <h2 className="text-sm text-white text-opacity-50">Qty.</h2>
                  </IonText>
                </div>
                <div>
                  <IonText color="light">
                    <p className="text-lg">{overViewData.Quantity}</p>
                  </IonText>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="h-px w-full bg-gray-700 mt-3 mb-3" />
        <div>
          <IonGrid class="p-0">
            <IonRow>
              <IonCol size="6" class="pl-0 pt-0">
                <div>
                  <IonText>
                    <h2 className="text-sm text-white text-opacity-50">Open</h2>
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
                    <h2 className="text-sm text-white text-opacity-50">High</h2>
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
                    <h2 className="text-sm text-white text-opacity-50">Low</h2>
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
                    <h2 className="text-sm text-white text-opacity-50">
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
      <div
        className={`px-5 py-4 w-full rounded-xl ${HoldingOverViewStyles.data_container}`}
      >
        <div className="mb-3">
          <IonText>
            <h2 className="text-lg text-white text-opacity-40">
              52 Week low/high
            </h2>
          </IonText>
        </div>
        <IonGrid class="p-0">
          <IonRow>
            <IonCol class="pl-0 pt-0">
              <div>
                <IonText>
                  <h2 className="text-sm text-white text-opacity-50">Low</h2>
                </IonText>
              </div>
              <div>
                <IonText>
                  <p className={`text-lg ${HoldingOverViewStyles.loss_text}`}>
                    {overViewData.WeekLowOrHigh.Low}
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="text-sm ml-2"
                    />
                  </p>
                </IonText>
              </div>
            </IonCol>
            <IonCol class="pl-4 pt-0">
              <div>
                <IonText>
                  <h2 className="text-sm text-white text-opacity-50">High</h2>
                </IonText>
              </div>
              <div>
                <IonText>
                  <p className={`text-lg ${HoldingOverViewStyles.profit_text}`}>
                    {overViewData.WeekLowOrHigh.High}
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="text-sm ml-2"
                    />
                  </p>
                </IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
};

export default HoldingOverView;
