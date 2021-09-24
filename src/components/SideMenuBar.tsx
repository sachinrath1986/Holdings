import { FC } from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonMenu,
} from '@ionic/react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import styles from './SideMenuBar.module.css';
import homeIcon from '../images/home.png';
import documentIcon from '../images/document.png';
import transactionsIcon from '../images/transactions.png';
import profileIcon from '../images/profile.png';
import settingsIcon from '../images/settings.png';
import helpIcon from '../images/help.png';
import logoutIcon from '../images/logout.png';
import profileImage from '../images/profile-image.png';
import rightArrowIcon from '../images/blue-arrow.png';

type SideMenuProps = {
  contentId: string;
};

type RouteCheck = {
  dashboard: boolean;
  transactions: boolean;
  settings: boolean;
};

const SideMenuBar: FC<SideMenuProps> = ({ contentId }) => {
  const { t: translate } = useTranslation();
  const history = useHistory();
  const backToSummary = () => {
    history.replace('/accountsummary');
  };
  const navigateToSettings = () => {
    history.replace('/settings');
  };

  const goToTransactions = () => {
    history.replace('/transactions');
  };

  // const goToPortfolioSummary = () => {
  //   history.replace('/portfoliosummary');
  // };

  const routeCheck: RouteCheck = {
    dashboard: window.location.pathname === '/portfoliosummary',
    transactions: window.location.pathname === '/transactions',
    settings: window.location.pathname === '/settings',
  };

  return (
    <IonMenu
      side="start"
      type="overlay"
      contentId={contentId}
      class={styles['side-menu']}
      menuId={`${contentId}-menu`}
    >
      <IonContent class={styles['menu-content']}>
        <IonGrid class="p-0">
          <IonRow class={styles['profile-row']} onClick={() => backToSummary()}>
            <IonCol size="3" class={styles['profile-image-col']}>
              <img src={profileImage} alt="" />
            </IonCol>
            <IonCol size="7" class={styles['profile-info-col']}>
              <span>John Smith</span>
              <span className={styles['email-and-id']}>
                john.smith@gmail.com
              </span>
              <span className={styles['email-and-id']}>MS12345</span>
            </IonCol>
            <IonCol size="2" class={styles['arrow-btn-col']}>
              <div>
                <img src={rightArrowIcon} alt="" />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList class={styles['menu-list']}>
          <IonItem
            class={`${styles['menu-list-item']} ${
              routeCheck.dashboard ? styles.activeItem : ''
            }`}
          >
            <img src={homeIcon} alt="" />
            <span>{translate('dashboard')}</span>
          </IonItem>
          <IonItem class={styles['menu-list-item']}>
            <img src={documentIcon} alt="" />
            <span>{translate('docsAndReports')}</span>
          </IonItem>
          <IonItem
            class={`${styles['menu-list-item']} ${
              routeCheck.transactions ? styles.activeItem : ''
            }`}
            onClick={() => goToTransactions()}
          >
            <img src={transactionsIcon} alt="" />
            <span>{translate('transactions')}</span>
            <span className={styles['transaction-num']}>12</span>
          </IonItem>
          <IonItem class={styles['menu-list-item']}>
            <img src={profileIcon} alt="" />
            <span>{translate('profile')}</span>
          </IonItem>
          <IonItem
            class={`${styles['menu-list-item']} ${
              routeCheck.settings ? styles.activeItem : ''
            }`}
            onClick={navigateToSettings}
          >
            <img src={settingsIcon} alt="" />
            <span>{translate('settings')}</span>
          </IonItem>
          <IonItem class={styles['menu-list-item']}>
            <img src={helpIcon} alt="" />
            <span>{translate('help')}</span>
          </IonItem>
          <IonItem class={styles['menu-list-item']}>
            <img src={logoutIcon} alt="" />
            <span>{translate('logout')}</span>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export default SideMenuBar;
