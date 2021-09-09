import React, { useState } from 'react';
import { IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { currencyFormatter } from '../utils/currency';
import HoldingOverViewStyles from './HoldingOverView.module.css';

export type HoldingOverviewDataType = {
  investmentAmount: number;
  holdingAmount: number;
  holdingChange: number;
  oneDayChange: number;
  averagePrice: number;
  quantity: string;
  open: number;
  low: number;
  high: number;
  previousClose: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
};

const HoldingOverView: React.FC = () => {
  const [overViewData] = useState<HoldingOverviewDataType>({
    investmentAmount: 23456.10,
    holdingAmount: 53456.10,
    holdingChange: 534.55,
    oneDayChange: 513.80,
    averagePrice: 268.89,
    quantity: 'T1:549',
    open: 268.89,
    high: 250.00,
    low: 236.89,
    previousClose: 263.60,
    fiftyTwoWeekLow: 51800.00,
    fiftyTwoWeekHigh: 57800.00,
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
                    <p className="text-lg">{currencyFormatter(overViewData.investmentAmount)}</p>
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
                    <p className="text-lg">{currencyFormatter(overViewData.holdingAmount)}</p>
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
                    {overViewData.holdingChange > 0 ? (
                      <p
                        className={`text-lg ${HoldingOverViewStyles.profit_text}`}
                      >
                        +{overViewData.holdingChange}
                      </p>
                    ) : (
                      <p
                        className={`text-lg ${HoldingOverViewStyles.loss_text}`}
                      >
                        {overViewData.holdingChange}
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
                    <p className="text-lg">{currencyFormatter(overViewData.oneDayChange)}</p>
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
                    <p className="text-lg">{currencyFormatter(overViewData.averagePrice)}</p>
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
                    <p className="text-lg">{overViewData.quantity}</p>
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
                    <p className="text-lg">{currencyFormatter(overViewData.open)}</p>
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
                    <p className="text-lg">{currencyFormatter(overViewData.high)}</p>
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
                    <p className="text-lg">{currencyFormatter(overViewData.low)}</p>
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
                    <p className="text-lg">{currencyFormatter(overViewData.previousClose)}</p>
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
                    {currencyFormatter(overViewData.fiftyTwoWeekLow)}
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
                    {currencyFormatter(overViewData.fiftyTwoWeekHigh)}
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
