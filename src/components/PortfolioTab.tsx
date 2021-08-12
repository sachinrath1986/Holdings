import { FC } from "react";
//Ionic Components 
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
// Ionic Icons
import { settings, swapHorizontalOutline, fileTrayFullOutline } from 'ionicons/icons';
// React Router
import { Route } from 'react-router';
// Custom Components
import CreatePin from '../pages/CreatePortfolioPin';
import CreatePin1 from '../pages/CreatePortfolioPin';
import CreatePin2 from '../pages/CreatePortfolioPin';
// CSS Files
import './PortfolioTab.css';

const PortfolioTab: FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/createpin1" component={CreatePin} exact={true} />
                <Route path="/createpin2" component={CreatePin2} exact={true} />
                <Route path="/createpin3" component={CreatePin1} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" class="summary-screen-tab-bar">
                <IonTabButton tab="Portfolio">
                    <IonIcon icon={fileTrayFullOutline} />
                    <IonLabel>Portfolio</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Transactions">
                    <IonIcon icon={swapHorizontalOutline} />
                    <IonLabel>Transactions</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Setting">
                    <IonIcon icon={settings} />
                    <IonLabel>Setting</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )

}

export default PortfolioTab;