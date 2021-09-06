import { FC, useState } from 'react';
// Ionic Components
import {
  IonPage,
  IonContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonIcon,
} from '@ionic/react';
import {
  alertCircle,
  chevronForwardOutline,
} from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// Custom Components
import SideMenuBar from '../components/SideMenuBar';
import DoughnutChart from '../components/DoughnutChart';
import HoldingCard from '../components/HoldingCard';
import { currencyFormatter } from '../utils/currency';
import PortfolioSummaryStyles from './PortfolioSummary.module.css';

export type HoldingDataType = {
  holdingId: string;
  holdingName: string;
  investmentAmount: number;
  holdingType: string;
  holdingAmount: number;
  holdingChange: number;
  holdingPercentChange: number;
  oneDayChange: number;
  oneDayPercentChange: number;
};

const Portfolio: FC = () => {
  const [holdingsData] = useState<HoldingDataType[]>([
    {
      holdingId: 'a12',
      holdingName: 'rcom',
      investmentAmount: 2789.0,
      holdingType: 'Bonds',
      holdingAmount: 2900.0,
      holdingChange: 111.0,
      holdingPercentChange: 15.8,
      oneDayChange: 20.0,
      oneDayPercentChange: -0.28,
    },
    {
      holdingId: 'b34',
      holdingName: 'indigo',
      investmentAmount: 2789.0,
      holdingType: 'Royalties',
      holdingAmount: 2500.0,
      holdingChange: -111.0,
      holdingPercentChange: 15.8,
      oneDayChange: 20.0,
      oneDayPercentChange: -0.28,
    },
    {
      holdingId: 'c56',
      holdingName: 'bit coin',
      investmentAmount: 2789.0,
      holdingType: 'Stocks',
      holdingAmount: 2900.0,
      holdingChange: 111.0,
      holdingPercentChange: 15.8,
      oneDayChange: 20.0,
      oneDayPercentChange: -0.28,
    },
    {
      holdingId: 'd78',
      holdingName: 'uti assets',
      investmentAmount: 2789.0,
      holdingType: 'Bonds',
      holdingAmount: 2900.0,
      holdingChange: 111.0,
      holdingPercentChange: 15.8,
      oneDayChange: 20.0,
      oneDayPercentChange: -0.28,
    },
    {
      holdingId: 'e90',
      holdingName: 'ibulhsgfin',
      investmentAmount: 2789.0,
      holdingType: 'Bonds',
      holdingAmount: 2900.0,
      holdingChange: 111.0,
      holdingPercentChange: 15.8,
      oneDayChange: 20.0,
      oneDayPercentChange: -0.28,
    },
  ]);

  const [overallData] = useState({
    holdingAmount: 280977.1,
    investmentAmount: 240977.1,
    holdingChange: 40000,
    holdingPercentChange: 15.8,
    oneDayChange: 2000,
    oneDayPercentChange: 1.67,
  });

  return (
    <IonPage>
      <SideMenuBar />
      <IonHeader class={`${PortfolioSummaryStyles.header_bg}`}>
        <div className="w-full p-4 pl-2 pr-2 flex flexx-row items-center justify-between">
          <IonButtons slot="start">
            <IonMenuButton color="light" />
          </IonButtons>
          <IonText color="light">
            <h1 className="font-semibold text-xl">Portfolio</h1>
          </IonText>
          <div />
        </div>
      </IonHeader>
      <IonContent fullscreen class={PortfolioSummaryStyles.screen_bg} id="main">
        <div className="mt-2">
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
                          <IonText>
                            <h2 className="text-sm text-white text-opacity-40">Current</h2>
                          </IonText>
                        </div>
                        <div className="flex">
                          <IonIcon
                            icon={alertCircle}
                            class="text-white text-opacity-50 text-xs"
                          />
                        </div>
                      </div>
                      <div>
                        <IonText color="light">
                          <p className={PortfolioSummaryStyles.text_1_5xl}>
                            {currencyFormatter(overallData.holdingAmount)}
                          </p>
                        </IonText>
                      </div>
                      <div>
                        <IonText color="light">
                          <p className="text-sm">
                            Invested:{' '}
                            {currencyFormatter(overallData.investmentAmount)}
                          </p>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol class="p-0 pl-4">
                      <div className="flex flex-row items-center">
                        <div className="mr-1">
                          <IonText>
                            <h2 className="text-sm text-white text-opacity-40">P&#38;L</h2>
                          </IonText>
                        </div>
                        <div className="flex">
                          <IonIcon
                            icon={alertCircle}
                            class="text-white text-opacity-50 text-xs"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="mr-1">
                          <IonText>
                            {overallData.holdingChange > 0 ? (
                              <p
                                className={`${PortfolioSummaryStyles.profit_text} text-lg`}
                              >
                                +{currencyFormatter(overallData.holdingChange)}
                              </p>
                            ) : (
                              <p
                                className={`${PortfolioSummaryStyles.loss_text} text-lg`}
                              >
                                -{currencyFormatter(overallData.holdingChange)}
                              </p>
                            )}
                          </IonText>
                        </div>
                        <div>
                          <IonText>
                            {overallData.holdingChange > 0 ? (
                              <p
                                className={`${PortfolioSummaryStyles.profit_text} text-base`}
                              >
                                (
                                <FontAwesomeIcon icon={faArrowUp} className="text-sm"/>
                                &nbsp;{overallData.holdingPercentChange}%)
                              </p>
                            ) : (
                              <p
                                className={`${PortfolioSummaryStyles.loss_text} text-base`}
                              >
                                (
                                <FontAwesomeIcon icon={faArrowDown} className="text-sm"/>
                                &nbsp;{overallData.holdingPercentChange}%)
                              </p>
                            )}
                          </IonText>
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
                          <h2 className="text-sm text-opacity-50">
                            Today&lsquo;s P&#38;L
                          </h2>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol class="p-0 pl-4">
                      <div className="flex flex-row items-center">
                        <div className="mr-1">
                          <IonText>
                            {overallData.oneDayChange > 0 ? (
                              <p
                                className={`text-sm font-semibold ${PortfolioSummaryStyles.profit_text}`}
                              >
                                +{currencyFormatter(overallData.oneDayChange)}
                              </p>
                            ) : (
                              <p
                                className={`text-sm font-semibold ${PortfolioSummaryStyles.loss_text}`}
                              >
                                -{currencyFormatter(overallData.oneDayChange)}
                              </p>
                            )}
                          </IonText>
                        </div>
                        <div>
                          {overallData.oneDayChange > 0 ? (
                            <IonText class={PortfolioSummaryStyles.profit_text}>
                              <p className="text-sm font-semibold">
                                (
                                <FontAwesomeIcon icon={faArrowUp} className="text-xs"/>
                                &nbsp;{overallData.oneDayPercentChange}%)
                              </p>
                            </IonText>
                          ) : (
                            <IonText class={PortfolioSummaryStyles.loss_text}>
                              <p className="text-sm font-semibold">
                                (
                                <FontAwesomeIcon icon={faArrowDown} className="text-xs"/>
                                &nbsp;{overallData.oneDayPercentChange}%)
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
          <div className="px-4">
            <DoughnutChart />
          </div>
          <div className="p-4 pb-1">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <div className="mr-1">
                  <IonText>
                    <h2 className="text-sm text-white text-opacity-30 uppercase font-semibold tracking-wider">
                      top 5 holdings
                    </h2>
                  </IonText>
                </div>
                <div>
                  <IonIcon icon={alertCircle} class="text-white text-opacity-50 text-xs" />
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div>
                  <IonText color="secondary">
                    <h2 className="text-sm tracking-wider">View all Holdings</h2>
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
            {holdingsData.map((data) => (
              <HoldingCard key={data.holdingId} holdingData={data} />
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Portfolio;
