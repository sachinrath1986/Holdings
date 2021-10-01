import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Login from './pages/LoginPage';
import CreatePin from './pages/CreatePortfolioPin';
import AccountSummary from './pages/AccountSummary';
import PortfolioSummary from './pages/PortfolioSummary';
import HoldingSummary from './pages/HoldingSummary';
import Settings from './pages/Settings';
import AlertNotifications from './pages/AlertNotifications';
import Transactions from './pages/Transactions';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Theme tailwind */
import './theme/tailwind.css';
import './App.css';
import AllHoldings from './pages/AllHoldings';

/* Theme App */
import './theme/app.css';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (localStorage.i18nLang) {
      i18n.changeLanguage(localStorage.i18nLang);
    }
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/create-pin">
            <CreatePin />
          </Route>
          <Route exact path="/portfoliosummary">
            <PortfolioSummary />
          </Route>
          <Route exact path="/accountsummary">
            <AccountSummary />
          </Route>
          <Route exact path="/holdingsummary">
            <HoldingSummary />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/alerts">
            <AlertNotifications />
          </Route>
          <Route exact path="/transactions">
            <Transactions />
          </Route>
          <Route exact path="/holdings">
            <AllHoldings />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
