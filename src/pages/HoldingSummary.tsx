import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonText,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonImg,
  IonBackButton,
} from '@ionic/react';
import { alertCircle } from 'ionicons/icons';
// eslint-disable-next-line
import HoldingOverView from './HoldingOverView';
import HoldingAnalytics from './HoldingAnalytics';
import { currencyFormatter } from '../utils/currency';
import HoldingSummaryStyles from './HoldingSummary.module.css';
import ChartLineUpImg from '../images/chart_line_up.png';
import DownloadImg from '../images/Download_Icon_Blue.png';
import { ComingSoonSection } from './ComingSoon';

export type HoldingDetailDataType = {
  holdingName: string;
  holdingAmount: number;
  oneDayChange: number;
  oneDayPercentChange: number;
};

const HoldingSummary: React.FC = () => {
  const [holdingData] = useState<HoldingDetailDataType>({
    holdingName: 'rcom',
    holdingAmount: 270.55,
    oneDayChange: 7.89,
    oneDayPercentChange: 0.68,
  });
  const [tab, setTab] = useState('Overview');

  const handleTabChange = (e: CustomEvent) => {
    setTab(e.detail.value);
  };

  return (
    <IonPage>
      <IonHeader class={`p-4 ${HoldingSummaryStyles.header_bg} pl-3`}>
        <div className="flex flex-row items-center justify-between">
          <IonBackButton color="primary" />
          <div className="flex flex-row items-center">
            <div className="mr-1">
              <IonImg src={DownloadImg} class="w-3" alt="DownloadImg" />
            </div>
            <div>
              <IonText class={HoldingSummaryStyles.download_text}>
                <p className="text-base">Download</p>
              </IonText>
            </div>
          </div>
        </div>
      </IonHeader>
      <IonContent class={HoldingSummaryStyles.screen_bg}>
        <div className="mb-1">
          <div className="p-4 pb-0 flex flex-row items-center">
            <div className="mr-1">
              <IonText color="light">
                <h2 className="text-lg tracking-wider uppercase">
                  {holdingData.holdingName}
                </h2>
              </IonText>
            </div>
            <div className="flex">
              <IonIcon
                icon={alertCircle}
                class="text-white text-opacity-50 text-base"
              />
            </div>
          </div>
          <div className="p-4 pb-0 pt-0 holding-data-container">
            <IonGrid class="p-0">
              <IonRow>
                <IonCol class="pt-0">
                  <div className="flex flex-row items-baseline h-full">
                    <div className="mr-2">
                      <IonText color="light">
                        <h1
                          className={`uppercase font-bold tracking-wider ${HoldingSummaryStyles.text_3_5xl}`}
                        >
                          {currencyFormatter(holdingData.holdingAmount)}
                        </h1>
                      </IonText>
                    </div>
                    <div>
                      {holdingData.oneDayChange > 0 ? (
                        <IonImg
                          src={ChartLineUpImg}
                          class="w-6 h-6"
                          alt="ChartLineUp"
                        />
                      ) : (
                        <IonImg
                          src={ChartLineUpImg}
                          class="w-6 h-6"
                          alt="ChartLineDown"
                        />
                      )}
                    </div>
                  </div>
                </IonCol>
                <IonCol class="pt-0 pl-4">
                  <div className="flex flex-col pl-4">
                    <div>
                      <IonText color="light">
                        <h5 className="text-sm text-gray-500 font-bold">
                          Today
                        </h5>
                      </IonText>
                    </div>
                    <div className="flex flex-row items-center">
                      <div>
                        <IonText class="tracking-widest">
                          {holdingData.oneDayChange > 0 ? (
                            <p
                              className={`text-sm font-bold ${HoldingSummaryStyles.profit_text}`}
                            >
                              +{holdingData.oneDayChange}(
                              {holdingData.oneDayPercentChange}%)
                            </p>
                          ) : (
                            <p
                              className={`text-sm font-bold ${HoldingSummaryStyles.loss_text}`}
                            >
                              {holdingData.oneDayChange}(
                              {holdingData.oneDayPercentChange}%)
                            </p>
                          )}
                        </IonText>
                      </div>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div className="p-4 pb-2">
            <IonSegment
              mode="md"
              onIonChange={handleTabChange}
              value={tab}
              swipeGesture={false}
              class="justify-between"
            >
              <IonSegmentButton
                value="Overview"
                class={`${HoldingSummaryStyles.tab_btn} holding-tab`}
              >
                <IonLabel class="normal-case text-lg pl-1 pr-1 m-0 tab_label">
                  Overview
                </IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                value="Analytics"
                class={`${HoldingSummaryStyles.tab_btn} holding-tab`}
              >
                <IonLabel class="normal-case text-lg m-0 pl-1 pr-1 tab_label">
                  Analytics
                </IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                value="Statements"
                class={`${HoldingSummaryStyles.tab_btn} holding-tab`}
              >
                <IonLabel class="normal-case text-lg m-0 pl-1 pr-1 tab_label">
                  Statements
                </IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>
          {tab === 'Overview' ? <HoldingOverView /> : null}
          {tab === 'Analytics' ? <HoldingAnalytics /> : null}
          {tab === 'Statements' ? <ComingSoonSection /> : null}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HoldingSummary;
