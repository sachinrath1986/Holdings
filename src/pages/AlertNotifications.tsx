import React, { useState } from 'react';
import {
  IonText,
  IonList,
  IonItem,
  IonPage,
  IonContent,
  IonHeader,
  IonButton,
  IonImg,
} from '@ionic/react';
import { useHistory } from 'react-router';
import backArrow from '../images/white-arrow-back.png';
import PageStyles from './AlertNotifications.module.css';

const alerts = [
  {
    holding: 'APPL',
    status: ['Report Published', 'CITI'],
    remark: ['Analyst', 'Mark Smith'],
    time: '3 min ago',
    seen: false,
  },

  {
    holding: 'BAML',
    status: ['SELL'],
    remark: ['Stocks/Equities'],
    time: '14 min ago',
    seen: false,
  },

  {
    holding: 'INDIGO',
    status: ['Report Published', 'MS'],
    remark: ['Analyst', 'Sarah Gibson'],
    time: 'Yesterday',
    seen: true,
  },

  {
    holding: 'TSLA',
    status: ['Report Published', 'CITI'],
    remark: ['Analyst', 'Mark Smith'],
    time: 'Yesterday',
    seen: true,
  },
  {
    holding: 'BITCOIN',
    status: ['Invested', '$50,000'],
    remark: ['Currency'],
    time: '10/08/21',
    seen: true,
  },
  {
    holding: 'PFIZER',
    status: ['Invested', '$30,000'],
    remark: ['Mutual Funds'],
    time: '11/08/21',
    seen: true,
  },
];

const searchNotifs = (key: string, notifs: any) => {
  const lowerCaseKey = key.toLocaleLowerCase();
  const filteredNotifs = [];
  for (let i = 0; i < notifs.length; i += 1) {
    if (notifs[i].holding.toLowerCase().indexOf(lowerCaseKey) > -1) {
      filteredNotifs.push(notifs[i]);
    } else if (notifs[i].status.length === 1) {
      if (notifs[i].status[0].toLowerCase().indexOf(lowerCaseKey) > -1) {
        filteredNotifs.push(notifs[i]);
      }
    } else if (notifs[i].status[1].toLowerCase().indexOf(lowerCaseKey) > -1) {
      filteredNotifs.push(notifs[i]);
    }
  }
  return filteredNotifs;
};

const AlertNotifications: React.FC = () => {
  const [alertsArr, setAlertsArr] = useState(alerts);
  const history = useHistory();
  const handleBack = () => {
    history.push('/portfoliosummary');
  };
  return (
    <IonPage>
      <IonHeader class={`p-4 ${PageStyles.pageHeader} pl-0`}>
        <div className="flex flex-row items-center">
          <div className={PageStyles.backBtnTxt}>
            <IonButton
              fill="clear"
              class="p-0 m-0"
              onClick={() => handleBack()}
            >
              <IonImg src={backArrow} alt="" />
              <IonText color="light">
                <span>Back</span>
              </IonText>
            </IonButton>
          </div>
          <div className={PageStyles.headerTxt}>
            <IonText color="light">
              <span>Notifications</span>
            </IonText>
          </div>
        </div>
      </IonHeader>
      <IonContent class={PageStyles.pageContent}>
        <IonList class={PageStyles.alertList}>
          {alertsArr.map((item, index) => (
            <IonItem
              key={item.holding}
              class={`${PageStyles.alertContainer} ${
                item.seen ? '' : PageStyles.newAlert
              }`}
            >
              <div className={PageStyles.subWrapper}>
                {!item.seen && (
                  <div className={PageStyles.notifDot}>
                    <span />
                  </div>
                )}

                <div className={PageStyles.alertInfo}>
                  <div className="flex justify-between">
                    <span className={PageStyles.alertName}>{item.holding}</span>
                    <span
                      className={
                        item.seen ? PageStyles.timetxt : PageStyles.timetxtBlue
                      }
                    >
                      {item.time}
                    </span>
                  </div>
                  <span className={PageStyles.alertStatus}>
                    {item.status.length > 1
                      ? `${item.status[0]}: ${item.status[1]}`
                      : `${item.status}`}
                  </span>
                  <span className={PageStyles.alertRemark}>
                    {item.remark.length > 1
                      ? `${item.remark[0]}: ${item.remark[1]}`
                      : `${item.remark}`}
                  </span>
                </div>
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AlertNotifications;
