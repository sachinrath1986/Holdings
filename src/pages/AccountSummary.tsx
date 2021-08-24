import React, { FC, useState } from 'react';
import {
  IonContent,
  IonPage,
  IonText,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonButton
} from '@ionic/react';
import {
  alertCircle,
  arrowForwardOutline
} from 'ionicons/icons';
import { useHistory } from 'react-router';
import Avatar from '../components/Avatar';
import AccountSummaryStyles from '../theme/styles.module.css';

const AccountSummary: FC = () => {
  // State variables
  const [portfolios, setPortfolios] = useState([
    {
      "PortfolioId": "MS98765",
      "Current": "$480,977.10",
      "Invested": "$440,977.10",
      "ProfitOrLoss": {
        "PorL": "Profit",
        "Value": "43,097.10",
        "Percentage": "1.67"
      },
      "TodayProfitOrLoss": {
        "PorL": "Profit",
        "Value": "23,097.10",
        "Percentage": "1.67"
      },
    },
    {
      "PortfolioId": "MS12345",
      "Current": "$280,977.10",
      "Invested": "$240,977.10",
      "ProfitOrLoss": {
        "PorL": "Loss",
        "Value": "43,097.10",
        "Percentage": "1.67"
      },
      "TodayProfitOrLoss": {
        "PorL": "Loss",
        "Value": "23,097.10",
        "Percentage": "1.67"
      },
    }
  ]);
  const [overallData, setOverAllData] = useState({
    "Invested": "$430,977.10",
    "Current": "$480,977.10",
    "ProfitOrLoss": {
      "PorL": "Profit",
      "Value": "43,097.10",
      "Percentage": "0.67"
    }
  });

  const history = useHistory();
  const selectPortfolio = () => {
    history.push('/portfoliosummary');
  }

  return (
    <IonPage>
      <IonContent class={AccountSummaryStyles.screen_bg}>
        <div className="p-4 flex flex-col items-center justify-center">
          <div className="mb-4">
            <Avatar />
          </div>
          <div className="mb-4">
            <IonText color="light">
              <h1 className="font-semibold text-xl">Your Account Summary</h1>
            </IonText>
          </div>
          <div className="mb-2">
            <IonText color="light">
              <h2 className="text-sm text-gray-500">All numbers in thousands. Currency USD</h2>
            </IonText>
          </div>
          <div className={`w-full px-6 py-3 w-full rounded-xl ${AccountSummaryStyles.data_container}`}>
            <div className="pb-2">
              <IonGrid class="p-0">
                <IonRow class="p-0">
                  <IonCol class="p-0">
                    <div className="flex flex-row items-center">
                      <div className="mr-1">
                        <IonText color="light">
                          <h2 className="text-sm text-gray-500">Invested</h2>
                        </IonText>
                      </div>
                      <div>
                        <IonIcon icon={alertCircle} class="text-gray-500 text-xs" />
                      </div>
                    </div>
                    <div>
                      <IonText color="light">
                        <p className="text-lg">{overallData.Invested}</p>
                      </IonText>
                    </div>
                  </IonCol>
                  <IonCol class="p-0">
                    <div className="flex flex-row items-center">
                      <div className="mr-1">
                        <IonText color="light">
                          <h2 className="text-sm text-gray-500">Current</h2>
                        </IonText>
                      </div>
                      <div>
                        <IonIcon icon={alertCircle} class="text-gray-500 text-xs" />
                      </div>
                    </div>
                    <div>
                      <IonText color="light">
                        <p className="text-lg">{overallData.Current}</p>
                      </IonText>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
            <div className="h-px w-full bg-gray-500" />
            <div className="pt-2">
              <IonGrid class="p-0">
                <IonRow class="p-0">
                  <IonCol class="p-0">
                    <div>
                      <IonText color="light">
                        <h2 className="text-lg text-gray-500">P&#38;L</h2>
                      </IonText>
                    </div>
                  </IonCol>
                  <IonCol class="p-0">
                    <div className="flex flex-row items-center">
                      <div className="mr-1">
                        {
                          overallData.ProfitOrLoss.PorL === "Profit" ?
                            <IonText class={AccountSummaryStyles.profit_text}>
                              <p className="text-lg">+{overallData.ProfitOrLoss.Value}</p>
                            </IonText>
                            :
                            <IonText class={AccountSummaryStyles.loss_text}>
                              <p className="text-lg">-{overallData.ProfitOrLoss.Value}</p>
                            </IonText>
                        }
                      </div>
                      <div>
                        {
                          overallData.ProfitOrLoss.PorL === "Profit" ?
                            <IonText class={AccountSummaryStyles.profit_text}>
                              <p className="text-lg">({overallData.ProfitOrLoss.Percentage})%</p>
                            </IonText>
                            :
                            <IonText class={AccountSummaryStyles.loss_text}>
                              <p className="text-lg">({overallData.ProfitOrLoss.Percentage})%</p>
                            </IonText>
                        }
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
          <div className="portfolio-container pt-4 w-full">
            <div className="mb-2">
              <div className="flex flex-row items-center">
                <div className="mr-1">
                  <IonText color="light">
                    <h2 className="text-lg text-gray-500 uppercase">select portfolio</h2>
                  </IonText>
                </div>
                <div>
                  <IonIcon icon={alertCircle} class="text-gray-500 text-xs" />
                </div>
              </div>
            </div>
            <div>
              {
                portfolios.map((data, index) => (
                  <div className={`px-6 py-3 w-full rounded-xl mb-4 ${AccountSummaryStyles.data_container}`} key={data.PortfolioId}>
                    <div className="pb-3 flex flex-row justify-between items-center">
                      <div>
                        <IonText color="secondary">
                          <h2 className="text-lg">{data.PortfolioId}</h2>
                        </IonText>
                      </div>
                      <div>
                        <IonButton onClick={selectPortfolio} fill="clear" class="p-0 m-0 h-4">
                          <IonIcon color="secondary" icon={arrowForwardOutline} class="text-gray-500 text-lg" />
                        </IonButton>
                      </div>
                    </div>
                    <div className="h-px w-full bg-gray-500" />
                    <div className="pb-3 pt-3">
                      <IonGrid class="p-0">
                        <IonRow class="p-0">
                          <IonCol class="p-0">
                            <div className="flex flex-row items-center">
                              <div className="mr-1">
                                <IonText color="light">
                                  <h2 className="text-sm text-gray-500">Current</h2>
                                </IonText>
                              </div>
                              <div>
                                <IonIcon icon={alertCircle} class="text-gray-500 text-xs" />
                              </div>
                            </div>
                            <div>
                              <IonText color="light">
                                <p className="text-lg">{data.Current}</p>
                              </IonText>
                            </div>
                            <div>
                              <IonText>
                                <p className="text-sm text-gray-400">Invested: {data.Invested}</p>
                              </IonText>
                            </div>
                          </IonCol>
                          <IonCol class="p-0 pl-4">
                            <div className="flex flex-row items-center">
                              <div className="mr-1">
                                <IonText color="light">
                                  <h2 className="text-sm text-gray-500">P&#38;L</h2>
                                </IonText>
                              </div>
                              <div>
                                <IonIcon icon={alertCircle} class="text-gray-500 text-xs" />
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <div className="mr-1">
                                {
                                  data.ProfitOrLoss.PorL === "Profit" ?
                                    <IonText class={AccountSummaryStyles.profit_text}>
                                      <p className="text-lg">+{data.ProfitOrLoss.Value}</p>
                                    </IonText>
                                    :
                                    <IonText class={AccountSummaryStyles.loss_text}>
                                      <p className="text-lg">-{data.ProfitOrLoss.Value}</p>
                                    </IonText>
                                }
                              </div>
                              <div>
                                {
                                  data.ProfitOrLoss.PorL === "Profit" ?
                                    <IonText class={AccountSummaryStyles.profit_text}>
                                      <p className="text-sm">({data.ProfitOrLoss.Percentage}%)</p>
                                    </IonText>
                                    :
                                    <IonText class={AccountSummaryStyles.loss_text}>
                                      <p className="text-sm">({data.ProfitOrLoss.Percentage}%)</p>
                                    </IonText>
                                }
                              </div>
                            </div>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </div>
                    <div className="h-px w-full bg-gray-500" />
                    <div className="pt-3">
                      <IonGrid class="p-0">
                        <IonRow class="p-0">
                          <IonCol class="p-0">
                            <div>
                              <IonText color="light">
                                <h2 className="text-sm text-gray-500 font-bold">Today&lsquo;s P&#38;L</h2>
                              </IonText>
                            </div>
                          </IonCol>
                          <IonCol class="p-0 pl-4">
                            <div className="flex flex-row items-center">
                              <div className="mr-1">
                                {
                                  data.TodayProfitOrLoss.PorL === "Profit" ?
                                    <IonText class={AccountSummaryStyles.profit_text}>
                                      <p className="text-sm font-bold">+{data.TodayProfitOrLoss.Value}</p>
                                    </IonText>
                                    :
                                    <IonText class={AccountSummaryStyles.loss_text}>
                                      <p className="text-sm font-bold">-{data.TodayProfitOrLoss.Value}</p>
                                    </IonText>
                                }
                              </div>
                              <div>
                                {
                                  data.TodayProfitOrLoss.PorL === "Profit" ?
                                    <IonText class={AccountSummaryStyles.profit_text}>
                                      <p className="text-sm font-bold">({data.TodayProfitOrLoss.Percentage}%)</p>
                                    </IonText>
                                    :
                                    <IonText class={AccountSummaryStyles.loss_text}>
                                      <p className="text-sm font-bold">({data.TodayProfitOrLoss.Percentage}%)</p>
                                    </IonText>
                                }
                              </div>
                            </div>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AccountSummary;
