import React from 'react';
import {
  IonPage,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonInput,
  IonText,
  IonAvatar,
  IonCheckbox,
  IonGrid,
} from '@ionic/react';
import './LoginPage.css';
import { useHistory } from 'react-router';

const SIGN_IN_MSG = `Let's sign you in`;
const Login: React.FC = () => {
  const history = useHistory();
  const doLogin = () => {
    history.push('/summary');
  }
  const doRegister = () => {
    history.push('/create-pin');
  }
  return (
    <IonPage id="login-page">
      <IonAvatar className="logo" />

      <div className="header">
        <IonText color="light">
          <h5>Welcome to Wissen</h5>
        </IonText>
        <IonText color="light">
          <h2>{SIGN_IN_MSG}</h2>
        </IonText>
      </div>

      <form className="login-form">
        <IonLabel className="input-label">Email</IonLabel>
        <IonInput
          value=""
          type="email"
          placeholder="Enter email"
          className="input"
        />
        <IonLabel className="input-label">Password</IonLabel>
        <IonInput
          value=""
          type="password"
          placeholder="Enter password"
          className="input"
        />

        <IonGrid className="terms-check-grid">
          <IonRow>
            <IonCol size="1" className="checkbox-col">
              <IonCheckbox className="terms-check" />
            </IonCol>
            <IonCol size="11" className="label-col">
              <IonLabel>
                By creating or logging into an account you agree to our Terms and
                Conditions and Privacy policies.
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonButton className="login-btn" onClick={doLogin}>Login</IonButton>
      </form>

      <div className="foot-note">
        <IonText>
          <span>Not registered yet?&nbsp;</span>
        </IonText>
        <IonText className="create-account" onClick={doRegister}>
          <span>Create an account.</span>
        </IonText>
      </div>
    </IonPage>
  );
}

export default Login;
