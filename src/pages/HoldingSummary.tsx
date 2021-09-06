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
  IonButton,
} from '@ionic/react';
import {
  alertCircle,
  arrowBackOutline,
} from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import HoldingOverView from './HoldingOverView';
import HoldingAnalytics from './HoldingAnalytics';
import HoldingSummaryStyles from './HoldingSummary.module.css';

const HoldingSummary: React.FC = () => {
  const [holdingData, setHoldingData] = useState({
    HoldingName: 'rcom',
    ProfitOrLoss: {
      PorL: 'Profit',
      Value: '$270.55',
    },
    TodayData: {
      PorL: 'Profit',
      Value: '7.89',
      Percentage: '0.68',
    },
  });
  const [tab, setTab] = useState('Overview');

  const history = useHistory();
  const handleBack = () => {
    history.push('/portfoliosummary');
  };

  const handleTabChange = (e: CustomEvent) => {
    setTab(e.detail.value);
  };

  return (
    <IonPage>
      <IonHeader class={`p-4 ${HoldingSummaryStyles.header_bg} pl-0`}>
        <div className="flex flex-row items-center justify-between">
          <IonButton fill="clear" class="h-4 p-0 m-0 normal-case" onClick={handleBack}>
            <div className="flex flex-row items-center">
              <div className="mr-1">
                <IonIcon
                  icon={arrowBackOutline}
                  class="text-xl"
                  color="light"
                />
              </div>
              <div>
                <IonText color="light">
                  <p className="text-lg">Back</p>
                </IonText>
              </div>
            </div>
          </IonButton>
          <div className="flex flex-row items-center">
            <div className="mr-1">
              <IonText color="primary">
                <FontAwesomeIcon icon={faDownload} className="text-sm" />
              </IonText>
            </div>
            <div>
              <IonText color="primary">
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
                  {holdingData.HoldingName}
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
                          className={`uppercase font-bold ${HoldingSummaryStyles.text_3_5xl}`}
                        >
                          {holdingData.ProfitOrLoss.Value}
                        </h1>
                      </IonText>
                    </div>
                    <div>
                      {holdingData.ProfitOrLoss.PorL === 'Profit' ? (
                        <FontAwesomeIcon
                          icon={faChartLine}
                          className={`text-2xl ${HoldingSummaryStyles.profit_text}`}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faChartLine}
                          className={`text-2xl ${HoldingSummaryStyles.loss_text}`}
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
                      <div className="mr-1">
                        <IonText>
                          {holdingData.TodayData.PorL === 'Profit' ? (
                            <p
                              className={`text-sm font-bold ${HoldingSummaryStyles.profit_text}`}
                            >
                              +{holdingData.TodayData.Value}&nbsp;(
                              {holdingData.TodayData.Percentage}%)
                            </p>
                          ) : (
                            <p
                              className={`text-sm font-bold ${HoldingSummaryStyles.loss_text}`}
                            >
                              -{holdingData.TodayData.Value}&nbsp;(
                              {holdingData.TodayData.Percentage}%)
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
          <div className="p-4 pt-0 pb-2">
            <IonSegment
              mode="md"
              onIonChange={handleTabChange}
              value={tab}
              swipeGesture={false}
            >
              <IonSegmentButton
                value="Overview"
                class={HoldingSummaryStyles.tab_btn}
              >
                <IonLabel class="normal-case text-lg">Overview</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                value="Analytics"
                class={HoldingSummaryStyles.tab_btn}
              >
                <IonLabel class="normal-case text-lg">Analytics</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton
                value="Statements"
                class={HoldingSummaryStyles.tab_btn}
              >
                <IonLabel class="normal-case text-lg">Statements</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>
          {tab === 'Overview' ? <HoldingOverView /> : null}
          {tab === 'Analytics' ? <HoldingAnalytics /> : null}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HoldingSummary;
