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
  IonImg,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { alertCircle } from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// Custom Components
import SideMenuBar from '../components/SideMenuBar';
import DoughnutChart from '../components/DoughnutChart';
import HoldingCard from '../components/HoldingCard';
import { currencyFormatter } from '../utils/currency';
import PortfolioSummaryStyles from './PortfolioSummary.module.css';
import BellIcon from '../images/notification-bell.png';
import NextIcon from '../images/next_arrow.png';

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
  holdingHistory: number[];
};

const Portfolio: FC = () => {
  const { t: translate } = useTranslation();
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
      oneDayPercentChange: 3.28,
      holdingHistory: [
        10.5, 11.5, 12, 11, 10, 11, 10, 11, 12, 13, 13.5, 14, 13, 14, 14.5,
      ],
    },
    {
      holdingId: 'b34',
      holdingName: 'indigo',
      investmentAmount: 2789.0,
      holdingType: 'Royalties',
      holdingAmount: 2500.0,
      holdingChange: -111.0,
      holdingPercentChange: -15.8,
      oneDayChange: -20.0,
      oneDayPercentChange: -0.28,
      holdingHistory: [
        12.5, 11, 12, 11, 10, 9, 10, 10.5, 9.5, 10, 11, 10, 8, 9.5, 10,
      ],
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
      oneDayPercentChange: 1.28,
      holdingHistory: [
        10.5, 11.5, 12, 11, 10, 11, 10, 11, 12, 13, 13.5, 14, 13, 14, 14.5,
      ],
    },
    {
      holdingId: 'd78',
      holdingName: 'uti assets',
      investmentAmount: 2789.0,
      holdingType: 'Bonds',
      holdingAmount: 2900.0,
      holdingChange: -111.0,
      holdingPercentChange: -15.8,
      oneDayChange: -20.0,
      oneDayPercentChange: -2.28,
      holdingHistory: [
        12.5, 11, 12, 11, 10, 9, 10, 10.5, 9.5, 10, 11, 10, 8, 9.5, 10,
      ],
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
      oneDayPercentChange: 0.28,
      holdingHistory: [
        10.5, 11.5, 12, 11, 10, 11, 10, 11, 12, 13, 13.5, 14, 13, 14, 14.5,
      ],
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

  const history = useHistory();
  const openNotifications = () => {
    history.replace('/alerts');
  };

  const navigateToAllHoldings = () => {
    history.replace('/holdings');
  };

  return (
    <IonPage>
      <SideMenuBar contentId="main" />
      <IonHeader class={`${PortfolioSummaryStyles.header_bg}`}>
        <div className="w-full p-4 pl-2 pr-2 flex flex-row items-center justify-between">
          <IonButtons slot="start">
            <IonMenuButton color="light" class="h-8" />
          </IonButtons>
          <IonText color="light">
            <h1 className="font-bold text-xl tracking-wider">
              {translate('portfolio')}
            </h1>
          </IonText>
          <IonButton
            fill="clear"
            onClick={() => openNotifications()}
            class="m-0 h-8"
          >
            <IonImg src={BellIcon} class="w-6" />
            <span
              className={`${PortfolioSummaryStyles.notifNum} flex items-center justify-center absolute h-4 rounded-3xl text-white w-4`}
            >
              2
            </span>
          </IonButton>
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
                            <h2 className="text-sm text-white text-opacity-40">
                              {translate('current')}
                            </h2>
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
                            {translate('invested')}:{' '}
                            {currencyFormatter(overallData.investmentAmount)}
                          </p>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol class="p-0 pl-4">
                      <div className="flex flex-row items-center">
                        <div className="mr-1">
                          <IonText>
                            <h2 className="text-sm text-white text-opacity-40">
                              P&#38;L
                            </h2>
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
                                +{overallData.holdingChange}
                              </p>
                            ) : (
                              <p
                                className={`${PortfolioSummaryStyles.loss_text} text-lg`}
                              >
                                {overallData.holdingChange}
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
                                <FontAwesomeIcon
                                  icon={faArrowUp}
                                  className="text-sm"
                                />
                                &nbsp;{overallData.holdingPercentChange}%)
                              </p>
                            ) : (
                              <p
                                className={`${PortfolioSummaryStyles.loss_text} text-base`}
                              >
                                (
                                <FontAwesomeIcon
                                  icon={faArrowDown}
                                  className="text-sm"
                                />
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
                            {translate('todays')} P&#38;L
                          </h2>
                        </IonText>
                      </div>
                    </IonCol>
                    <IonCol class="p-0 pl-4">
                      <div className="flex flex-row items-center tracking-wider">
                        <div className="mr-1">
                          <IonText>
                            {overallData.oneDayChange > 0 ? (
                              <p
                                className={`text-sm font-semibold ${PortfolioSummaryStyles.profit_text}`}
                              >
                                +{overallData.oneDayChange}
                              </p>
                            ) : (
                              <p
                                className={`text-sm font-semibold ${PortfolioSummaryStyles.loss_text}`}
                              >
                                {overallData.oneDayChange}
                              </p>
                            )}
                          </IonText>
                        </div>
                        <div>
                          {overallData.oneDayChange > 0 ? (
                            <IonText class={PortfolioSummaryStyles.profit_text}>
                              <p className="text-sm font-semibold">
                                (
                                <FontAwesomeIcon
                                  icon={faArrowUp}
                                  className="text-xs"
                                />
                                &nbsp;{overallData.oneDayPercentChange}%)
                              </p>
                            </IonText>
                          ) : (
                            <IonText class={PortfolioSummaryStyles.loss_text}>
                              <p className="text-sm font-semibold">
                                (
                                <FontAwesomeIcon
                                  icon={faArrowDown}
                                  className="text-xs"
                                />
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
          <div className="p-4 pb-0">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <div className="mr-1">
                  <IonText>
                    <h2 className="text-sm text-white text-opacity-30 uppercase font-semibold tracking-wider">
                      {translate('top5Holdings')}
                    </h2>
                  </IonText>
                </div>
                <div>
                  <IonIcon
                    icon={alertCircle}
                    class="text-white text-opacity-50 text-xs"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div>
                  <IonButton
                    fill="clear"
                    onClick={navigateToAllHoldings}
                    color="secondary"
                    class={`capitalize tracking-wider m-0 text-sm mb-1 ${PortfolioSummaryStyles.view_all_holdings_btn}`}
                  >
                    {translate('viewAllHoldings')}
                    <IonImg src={NextIcon} class="w-2 ml-1" />
                  </IonButton>
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
