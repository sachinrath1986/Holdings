import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="login page" /> */}
        <form noValidate onSubmit={() => {}}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Username</IonLabel>
              <IonInput name="username" type="text" value={""} spellCheck={false} autocapitalize="off" onIonChange={e => {}}
                >
              </IonInput>
            </IonItem>

            {/* {formSubmitted && usernameError && <IonText color="danger">
              <p className="ion-padding-start">
                Username is required
              </p>
            </IonText>} */}

            <IonItem>
              <IonLabel position="stacked" color="primary">Password</IonLabel>
              <IonInput name="password" type="password" value={''} onIonChange={e => {}}>
              </IonInput>
            </IonItem>

            {/* {formSubmitted && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
                Password is required
              </p>
            </IonText>} */}
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">Login</IonButton>
            </IonCol>
            <IonCol>
              <IonButton routerLink="/signup" color="light" expand="block">Signup</IonButton>
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
