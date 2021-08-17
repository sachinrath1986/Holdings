import { FC, useState } from 'react';
// Ionic Components
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonFooter,
} from '@ionic/react';
// Custom Components
import PortfolioTab from '../components/PortfolioTab';
// CSS Files
import './PortfolioSummary.css';

const Portfolio: FC = () => {
  const [holdings, setHoldings] = useState(new Array(5).fill(' '));

  return (
    <IonPage>
      <IonContent fullscreen class="summary-screen-content">
        <div className="p-1">
          <IonText color="light">
            <h1 className="--font-bold heading-h1">Portfolio</h1>
          </IonText>
        </div>
        {/* Top Section */}
        <div className="p-1">
          <div className="current-data-container" />
        </div>
        {/* End of Top Section */}
        <div className="mb-2" />
        {/* Holdings Section */}
        <div className="p-1 pb-0">
          <IonText color="medium">
            <h6 className="--uppercase --small-text heading-h6">
              top 5 holdings
            </h6>
          </IonText>
        </div>
        <IonList class="holdings-list">
          {holdings.map((data, index) => (
            <IonItem class="holdings-list-item" key={index}>
              <div className="w-100 p-1">
                <IonGrid class="holdings-grid">
                  <IonRow>
                    <IonCol class="pl-0">
                      <IonText color="medium">
                        <h6 className="--small-text heading-h6">
                          Invested:&nbsp;51009.00
                        </h6>
                      </IonText>
                      <IonText color="light">
                        <h6 className="--uppercase heading-h6">rcom</h6>
                      </IonText>
                      <IonText color="medium">
                        <h6 className="--small-text heading-h6">Royalties</h6>
                      </IonText>
                    </IonCol>
                    <IonCol />
                    <IonCol class="pr-0">
                      <IonText color="success">
                        <h6 className="--small-text --text-right heading-h6">
                          +15.36%
                        </h6>
                      </IonText>
                      <IonText color="success">
                        <h6 className="--text-right heading-h6">270.55</h6>
                      </IonText>
                      <p className="--small-text --text-right ">
                        <IonText color="medium">+7.89&nbsp;</IonText>
                        <IonText color="success">(0.68%)</IonText>
                      </p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </IonItem>
          ))}
        </IonList>
        {/* End of Holdings Section */}
        <div className="mb-2" />
        <div className="p-1">
          <IonText color="danger">
            <h6 className="--small-text">View all holdings</h6>
          </IonText>
        </div>
        <div className="mb-2" />
      </IonContent>
      <IonFooter class="summary-screen-footer">
        <PortfolioTab />
      </IonFooter>
    </IonPage>
  );
};

export default Portfolio;
