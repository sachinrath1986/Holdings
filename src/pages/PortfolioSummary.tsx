import { FC, useState } from 'react';
// Ionic Components
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router';
import { alertCircle, chevronForwardOutline } from 'ionicons/icons';
// Custom Components
import SideMenuBar from '../components/SideMenuBar';

// CSS Files
import PortfolioSummaryStyles from '../theme/styles.module.css';
import bellIcon from '../images/notification-bell.png';

const Portfolio: FC = () => {
  const [holdingsData, setHoldingsData] = useState([
    {
      HoldingId: 'a12',
      HoldingName: 'rcom',
      Invested: '$2,789.00',
      HoldingType: 'Bonds',
      ProfitOrLoss: {
        PorL: 'Profit',
        Value: '$150.55',
        HoldingPercentage: '15.8',
        StockValue: '7.89',
        StockPercentage: '0.28',
      },
    },
    {
      HoldingId: 'b34',
      HoldingName: 'indigo',
      Invested: '$2,789.00',
      HoldingType: 'Royalties',
      ProfitOrLoss: {
        PorL: 'Loss',
        Value: '$150.55',
        HoldingPercentage: '15.8',
        StockValue: '7.89',
        StockPercentage: '0.28',
      },
    },
    {
      HoldingId: 'c56',
      HoldingName: 'bit coin',
      Invested: '$2,789.00',
      HoldingType: 'Stocks',
      ProfitOrLoss: {
        PorL: 'Profit',
        Value: '$150.55',
        HoldingPercentage: '15.8',
        StockValue: '7.89',
        StockPercentage: '0.28',
      },
    },
    {
      HoldingId: 'd78',
      HoldingName: 'uti assets',
      Invested: '$2,789.00',
      HoldingType: 'Bonds',
      ProfitOrLoss: {
        PorL: 'Loss',
        Value: '$150.55',
        HoldingPercentage: '15.8',
        StockValue: '7.89',
        StockPercentage: '0.28',
      },
    },
    {
      HoldingId: 'e90',
      HoldingName: 'ibulhsgfin',
      Invested: '$2,789.00',
      HoldingType: 'Bonds',
      ProfitOrLoss: {
        PorL: 'Profit',
        Value: '$150.55',
        HoldingPercentage: '15.8',
        StockValue: '7.89',
        StockPercentage: '0.28',
      },
    },
  ]);
  const [overallData, setOverAllData] = useState({
    Current: '$280,977.10',
    Invested: '$240,977.10',
    ProfitOrLoss: {
      PorL: 'Loss',
      Value: '43,097.10',
      Percentage: '1.67',
    },
    TodayProfitOrLoss: {
      PorL: 'Loss',
      Value: '23,097.10',
      Percentage: '1.67',
    },
  });

  const history = useHistory();
  const selectHolding = () => {
    history.push('/holdingsummary');
  };

  const openNotifications = () => {
    history.push('/alerts');
  };

  return (
    <IonPage>
      <SideMenuBar />
      <IonHeader class={PortfolioSummaryStyles.header_bg}>
        <div className="w-full p-4 flex flexx-row items-center justify-between">
          <IonButtons slot="start">
            <IonMenuButton color="light" />
          </IonButtons>
          <IonText color="light">
            <h1 className="font-semibold text-xl">Portfolio</h1>
          </IonText>
          <IonButton fill="clear" onClick={() => openNotifications()}>
            <IonImg src={bellIcon} />
          </IonButton>
        </div>
      </IonHeader>
      <IonContent fullscreen class={PortfolioSummaryStyles.screen_bg} id="main">
        <div className="mt-6">
          <div className="p-4 pt-0">
            <div
              className={`px-5 py-3 pt-0 w-full rounded-xl mb-3 ${PortfolioSummaryStyles.data_container}`}
            >
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
                          <IonIcon
                            icon={alertCircle}
                            class="text-gray-500 text-xs"
                          />
                        </div>
                      </div>
                      <div>
                        <IonText color="light">
                          <p className="text-lg">{overallData.Current}</p>
                        </IonText>
                      </div>
                      <div>
                        <IonText>
                          <p className="text-xs text-gray-300">
                            Invested: {overallData.Invested}
                          </p>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol class="p-0">
                      <div className="flex flex-row items-center">
                        <div className="mr-1">
                          <IonText color="light">
                            <h2 className="text-sm text-gray-500">P&#38;L</h2>
                          </IonText>
                        </div>
                        <div>
                          <IonIcon
                            icon={alertCircle}
                            class="text-gray-500 text-xs"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="mr-1">
                          {overallData.ProfitOrLoss.PorL === 'Profit' ? (
                            <IonText class={PortfolioSummaryStyles.profit_text}>
                              <p className="text-lg">
                                +{overallData.ProfitOrLoss.Value}
                              </p>
                            </IonText>
                          ) : (
                            <IonText class={PortfolioSummaryStyles.loss_text}>
                              <p className="text-lg">
                                -{overallData.ProfitOrLoss.Value}
                              </p>
                            </IonText>
                          )}
                        </div>
                        <div>
                          {overallData.ProfitOrLoss.PorL === 'Profit' ? (
                            <IonText class={PortfolioSummaryStyles.profit_text}>
                              <p className="text-sm">
                                ({overallData.ProfitOrLoss.Percentage}%)
                              </p>
                            </IonText>
                          ) : (
                            <IonText class={PortfolioSummaryStyles.loss_text}>
                              <p className="text-sm">
                                ({overallData.ProfitOrLoss.Percentage}%)
                              </p>
                            </IonText>
                          )}
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
                          <h2 className="text-sm text-gray-500">
                            Today&lsquo;s P&#38;L
                          </h2>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol class="p-0">
                      <div className="flex flex-row items-center">
                        <div className="mr-1">
                          {overallData.TodayProfitOrLoss.PorL === 'Profit' ? (
                            <IonText class={PortfolioSummaryStyles.profit_text}>
                              <p className="text-sm font-bold">
                                +{overallData.TodayProfitOrLoss.Value}
                              </p>
                            </IonText>
                          ) : (
                            <IonText class={PortfolioSummaryStyles.loss_text}>
                              <p className="text-sm font-bold">
                                -{overallData.TodayProfitOrLoss.Value}
                              </p>
                            </IonText>
                          )}
                        </div>
                        <div>
                          {overallData.TodayProfitOrLoss.PorL === 'Profit' ? (
                            <IonText class={PortfolioSummaryStyles.profit_text}>
                              <p className="text-sm font-bold">
                                ({overallData.TodayProfitOrLoss.Percentage}%)
                              </p>
                            </IonText>
                          ) : (
                            <IonText class={PortfolioSummaryStyles.loss_text}>
                              <p className="text-sm font-bold">
                                ({overallData.TodayProfitOrLoss.Percentage}%)
                              </p>
                            </IonText>
                          )}
                        </div>
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="h-40" />
          </div>
          <div className="p-4 pb-1">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <div className="mr-1">
                  <IonText color="light">
                    <h2 className="text-sm text-gray-600 uppercase font-bold">
                      top 5 holdings
                    </h2>
                  </IonText>
                </div>
                <div>
                  <IonIcon icon={alertCircle} class="text-gray-400 text-xs" />
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div>
                  <IonText color="secondary">
                    <h2 className="text-sm">View all Holdings</h2>
                  </IonText>
                </div>
                <div>
                  <IonIcon
                    icon={chevronForwardOutline}
                    class="text-sm font-bold"
                    color="secondary"
                  />
                </div>
              </div>
            </div>
          </div>
          <IonList class={PortfolioSummaryStyles.holdings_list}>
            {holdingsData.map((data, index) => (
              <IonItem
                class={PortfolioSummaryStyles.holdings_list_item}
                key={data.HoldingId}
                onClick={selectHolding}
              >
                <div className="w-full p-4 pt-3">
                  <IonGrid class="p-0">
                    <IonRow>
                      <IonCol class="pl-0 pb-0">
                        <IonText color="secondary">
                          <p className="text-lg uppercase font-bold">
                            {data.HoldingName}
                          </p>
                        </IonText>
                        <IonText color="light">
                          <p className="text-sm">
                            Invested:&nbsp;{data.Invested}
                          </p>
                        </IonText>
                        <IonText color="medium">
                          <p className="text-sm">{data.HoldingType}</p>
                        </IonText>
                      </IonCol>
                      <IonCol class="pb-0" />
                      <IonCol class="pr-0 pb-0">
                        <IonText>
                          {data.ProfitOrLoss.PorL === 'Profit' ? (
                            <p
                              className={`text-sm text-right ${PortfolioSummaryStyles.profit_text}`}
                            >
                              +{data.ProfitOrLoss.HoldingPercentage}%
                            </p>
                          ) : (
                            <p
                              className={`text-sm text-right ${PortfolioSummaryStyles.loss_text}`}
                            >
                              -{data.ProfitOrLoss.HoldingPercentage}%
                            </p>
                          )}
                        </IonText>
                        <IonText>
                          {data.ProfitOrLoss.PorL === 'Profit' ? (
                            <p
                              className={`${PortfolioSummaryStyles.profit_text} text-lg font-bold text-right`}
                            >
                              {data.ProfitOrLoss.Value}
                            </p>
                          ) : (
                            <p
                              className={`${PortfolioSummaryStyles.loss_text} text-lg font-bold text-right`}
                            >
                              {data.ProfitOrLoss.Value}
                            </p>
                          )}
                        </IonText>
                        <h6 className="text-sm text-right flex justify-end">
                          <IonText color="medium">
                            {data.ProfitOrLoss.PorL === 'Profit' ? '+' : '-'}
                            {data.ProfitOrLoss.StockValue}&nbsp;
                          </IonText>
                          <IonText>
                            {data.ProfitOrLoss.PorL === 'Profit' ? (
                              <p
                                className={`${PortfolioSummaryStyles.profit_text} text-sm font-bold text-right`}
                              >
                                ({data.ProfitOrLoss.StockPercentage}%)
                              </p>
                            ) : (
                              <p
                                className={`${PortfolioSummaryStyles.loss_text} text-sm font-bold text-right`}
                              >
                                ({data.ProfitOrLoss.StockPercentage}%)
                              </p>
                            )}
                          </IonText>
                        </h6>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Portfolio;
