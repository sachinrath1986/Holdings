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
import SearchBar from '../components/SearchBar';
import backArrow from '../images/white-arrow-back.png';
import PageStyles from './AlertNotifications.module.css';

type AlertDataType = {
  holding: string;
  status: string[];
  remark: string[];
  time: string;
  seen: boolean;
};

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

const AlertNotifications: React.FC = () => {
  const [alertsArr, setAlertsArr] = useState<AlertDataType[]>(alerts);
  const history = useHistory();
  const handleBack = () => {
    history.push('/portfoliosummary');
  };

  const searchNotifs = (key: string) => {
    if (key.length >= 3) {
      const lowerCaseKey = key.toLowerCase();
      const filteredNotifs = [];
      for (let i = 0; i < alerts.length; i += 1) {
        if (alerts[i].holding.toLowerCase().indexOf(lowerCaseKey) > -1) {
          filteredNotifs.push(alerts[i]);
        } else if (alerts[i].status.length === 1) {
          if (alerts[i].status[0].toLowerCase().indexOf(lowerCaseKey) > -1) {
            filteredNotifs.push(alerts[i]);
          }
        } else if (
          alerts[i].status[1].toLowerCase().indexOf(lowerCaseKey) > -1
        ) {
          filteredNotifs.push(alerts[i]);
        }
      }
      setAlertsArr(filteredNotifs);
    } else {
      setAlertsArr(alerts);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleFilter = () => {};

  return (
    <IonPage>
      <IonHeader class={`p-4 ${PageStyles.pageHeader} pl-0 pb-1`}>
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
        <div className={PageStyles.searchContainer}>
          <SearchBar
            onSearchChange={searchNotifs}
            placeholder="Search"
            onClickFilter={handleFilter}
          />
        </div>

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
