import React, { FC, useState } from 'react';
import {
  IonContent,
  IonPage,
  IonText,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonImg,
} from '@ionic/react';
import { alertCircle } from 'ionicons/icons';
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import Avatar from '../components/Avatar';
import { currencyFormatter } from '../utils/currency';
import RightArrow from '../images/navigate-right-long-arrow.png';
import AccountSummaryStyles from './AccountSummary.module.css';

export type PortfolioDataType = {
  portfolioId: string;
  holdingAmount: number;
  investmentAmount: number;
  holdingChange: number;
  holdingPercentChange: number;
  oneDayChange: number;
  oneDayPercentChange: number;
};

const AccountSummary: FC = () => {
  const [portfolios] = useState<PortfolioDataType[]>([
    {
      portfolioId: 'MS98765',
      holdingAmount: 280977.1,
      investmentAmount: 240977.1,
      holdingChange: 40000,
      holdingPercentChange: 15.8,
      oneDayChange: 2000,
      oneDayPercentChange: 1.67,
    },
    {
      portfolioId: 'MS12345',
      holdingAmount: 280977.1,
      investmentAmount: 240977.1,
      holdingChange: -40000,
      holdingPercentChange: -15.8,
      oneDayChange: -2000,
      oneDayPercentChange: -1.67,
    },
  ]);

  const [summaryData] = useState({
    holdingAmount: 280977.1,
    investmentAmount: 240977.1,
    holdingChange: 40000,
    holdingPercentChange: 15.8,
  });

  const history = useHistory();
  const selectPortfolio = () => {
    history.push('/portfoliosummary');
  };

  return (
    <IonPage>
      <IonContent class={AccountSummaryStyles.screen_bg}>
        <div className="p-4 flex flex-col items-center justify-center">
          <div className="p-4 pb-3 pt-0 flex flex-col items-center justify-center">
            <div className="mb-6">
              <Avatar />
            </div>
            <div className="mb-4">
              <IonText color="light">
                <h1 className="font-semibold text-xl tracking-widest">
                  Your Account Summary
                </h1>
              </IonText>
            </div>
            <div>
              <IonText>
                <h2 className="text-white text-sm text-opacity-50">
                  All numbers in thousands. Currency USD
                </h2>
              </IonText>
            </div>
          </div>
          <div
            className={`w-full px-6 py-3 w-full rounded-xl ${AccountSummaryStyles.data_container}`}
          >
            <div className="pb-3">
              <IonGrid class="p-0">
                <IonRow class="p-0 items-center">
                  <IonCol class="p-0">
                    <div className="flex flex-row items-center">
                      <div className="mr-1">
                        <IonText>
                          <h2 className="text-sm text-white text-opacity-40">
                            Invested
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
                        <p className={AccountSummaryStyles.text_1_5xl}>
                          {currencyFormatter(summaryData.investmentAmount)}
                        </p>
                      </IonText>
                    </div>
                  </IonCol>
                  <IonCol class="p-0 pl-4">
                    <div className="flex flex-row items-center">
                      <div className="mr-1">
                        <IonText color="light">
                          <h2 className="text-sm text-white text-opacity-40">
                            Current
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
                        <p className={AccountSummaryStyles.text_1_5xl}>
                          {currencyFormatter(summaryData.holdingAmount)}
                        </p>
                      </IonText>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
            <div className="h-px w-full bg-gray-500" />
            <div className="pt-3">
              <IonGrid class="p-0">
                <IonRow class="p-0 items-center">
                  <IonCol class="p-0" size="2">
                    <div>
                      <IonText>
                        <h2 className="text-lg text-white text-opacity-50">
                          P&#38;L
                        </h2>
                      </IonText>
                    </div>
                  </IonCol>
                  <IonCol class="p-0 flex">
                    <div className="flex flex-row items-center flex-wrap justify-end w-full">
                      <div className="mr-1">
                        <IonText class="text-lg">
                          {summaryData.holdingChange > 0 ? (
                            <p className={AccountSummaryStyles.profit_text}>
                              +{summaryData.holdingChange}
                            </p>
                          ) : (
                            <p className={AccountSummaryStyles.loss_text}>
                              {summaryData.holdingChange}
                            </p>
                          )}
                        </IonText>
                      </div>
                      <div>
                        <IonText class="text-lg">
                          {summaryData.holdingChange > 0 ? (
                            <p className={AccountSummaryStyles.profit_text}>
                              (
                              <FontAwesomeIcon
                                icon={faArrowUp}
                                className="text-sm"
                              />
                              &nbsp;{summaryData.holdingPercentChange})
                            </p>
                          ) : (
                            <p className={AccountSummaryStyles.loss_text}>
                              (
                              <FontAwesomeIcon
                                icon={faArrowDown}
                                className="text-sm"
                              />
                              &nbsp;
                              {summaryData.holdingPercentChange
                                .toString()
                                .replace('-', '')}
                              )
                            </p>
                          )}
                        </IonText>
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
                  <IonText>
                    <h2 className="text-base text-white text-opacity-40 uppercase">
                      select portfolio
                    </h2>
                  </IonText>
                </div>
                <div className="flex">
                  <IonIcon
                    icon={alertCircle}
                    class=" text-white text-opacity-50 text-xs"
                  />
                </div>
              </div>
            </div>
            <IonGrid class="p-0">
              <IonRow class="p-0">
                {portfolios.map((data, index) => (
                  <IonCol
                    size="12"
                    class="p-0"
                    key={data.portfolioId}
                    onClick={selectPortfolio}
                  >
                    <div
                      className={`px-6 py-3 w-full rounded-xl mb-4 ${AccountSummaryStyles.data_container}`}
                    >
                      <div className="pb-3 flex flex-row justify-between items-center">
                        <div>
                          <IonText
                            class={AccountSummaryStyles.portfolio_id_text}
                          >
                            <h2 className="text-xl">{data.portfolioId}</h2>
                          </IonText>
                        </div>
                        <div className="flex">
                          <IonImg
                            src={RightArrow}
                            alt="Navigate_Arrow"
                            class="w-5"
                          />
                          {/* <IonText color="secondary">
                            <FontAwesomeIcon
                              icon={faLongArrowAltRight}
                              className="text-lg"
                            />
                          </IonText> */}
                        </div>
                      </div>
                      <div className="h-px w-full bg-gray-500" />
                      <div className="pb-3 pt-3">
                        <IonGrid class="p-0">
                          <IonRow class="p-0">
                            <IonCol class="p-0">
                              <div className="flex flex-row items-center">
                                <div className="mr-1">
                                  <IonText>
                                    <h2 className="text-sm text-white text-opacity-40">
                                      Current
                                    </h2>
                                  </IonText>
                                </div>
                                <div>
                                  <IonIcon
                                    icon={alertCircle}
                                    class=" text-white text-opacity-50 text-xs"
                                  />
                                </div>
                              </div>
                              <div className="mb-1">
                                <IonText color="light">
                                  <p
                                    className={AccountSummaryStyles.text_1_5xl}
                                  >
                                    {currencyFormatter(data.holdingAmount)}
                                  </p>
                                </IonText>
                              </div>
                              <div>
                                <IonText>
                                  <p className="text-sm text-white text-opacity-70">
                                    Invested:{' '}
                                    {currencyFormatter(data.investmentAmount)}
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
                                <div>
                                  <IonIcon
                                    icon={alertCircle}
                                    class=" text-white text-opacity-50 text-xs"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="mr-1">
                                  <IonText class="text-lg">
                                    {data.holdingChange > 0 ? (
                                      <p
                                        className={
                                          AccountSummaryStyles.profit_text
                                        }
                                      >
                                        +{data.holdingChange}
                                      </p>
                                    ) : (
                                      <p
                                        className={
                                          AccountSummaryStyles.loss_text
                                        }
                                      >
                                        {data.holdingChange}
                                      </p>
                                    )}
                                  </IonText>
                                </div>
                                <div>
                                  <IonText class="text-base">
                                    {data.holdingChange > 0 ? (
                                      <p
                                        className={
                                          AccountSummaryStyles.profit_text
                                        }
                                      >
                                        (
                                        <FontAwesomeIcon
                                          icon={faArrowUp}
                                          className="text-sm"
                                        />
                                        &nbsp;{data.holdingPercentChange}%)
                                      </p>
                                    ) : (
                                      <p
                                        className={
                                          AccountSummaryStyles.loss_text
                                        }
                                      >
                                        (
                                        <FontAwesomeIcon
                                          icon={faArrowDown}
                                          className="text-sm"
                                        />
                                        &nbsp;
                                        {data.holdingPercentChange
                                          .toString()
                                          .replace('-', '')}
                                        %)
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
                          <IonRow class="p-0 items-center">
                            <IonCol class="p-0">
                              <div>
                                <IonText color="light">
                                  <h2 className="text-sm text-white text-opacity-50">
                                    Today&lsquo;s P&#38;L
                                  </h2>
                                </IonText>
                              </div>
                            </IonCol>
                            <IonCol class="p-0 pl-4">
                              <div className="flex flex-row items-center w-full flex-wrap">
                                <div className="mr-1 flex">
                                  <IonText class="text-sm font-semibold">
                                    {data.oneDayChange > 0 ? (
                                      <p
                                        className={
                                          AccountSummaryStyles.profit_text
                                        }
                                      >
                                        +{data.oneDayChange}
                                      </p>
                                    ) : (
                                      <p
                                        className={
                                          AccountSummaryStyles.loss_text
                                        }
                                      >
                                        {data.oneDayChange}
                                      </p>
                                    )}
                                  </IonText>
                                </div>
                                <div>
                                  <IonText class="text-sm font-semibold">
                                    {data.oneDayChange > 0 ? (
                                      <p
                                        className={
                                          AccountSummaryStyles.profit_text
                                        }
                                      >
                                        (
                                        <FontAwesomeIcon
                                          icon={faArrowUp}
                                          className="text-xs"
                                        />
                                        &nbsp;{data.oneDayPercentChange}%)
                                      </p>
                                    ) : (
                                      <p
                                        className={
                                          AccountSummaryStyles.loss_text
                                        }
                                      >
                                        (
                                        <FontAwesomeIcon
                                          icon={faArrowDown}
                                          className="text-xs"
                                        />
                                        &nbsp;
                                        {data.oneDayPercentChange
                                          .toString()
                                          .replace('-', '')}
                                        %)
                                      </p>
                                    )}
                                  </IonText>
                                </div>
                              </div>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </div>
                    </div>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AccountSummary;
