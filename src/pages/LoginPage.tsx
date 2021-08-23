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
  IonGrid
} from '@ionic/react';
import styles from './LoginPage.module.css';

const SIGN_IN_MSG = `Let's sign you in`;

const Login: React.FC = () => (
  <IonPage  className={styles["login-page"]}>
    <IonAvatar className={styles.logo} />

    <div className={styles.header}>
      <IonText color="light">
        <h5>Welcome to Wissen</h5>
      </IonText>
      <IonText color="light">
        <h2>{SIGN_IN_MSG}</h2>
      </IonText>
    </div>

    <form className={styles["login-form"]}>
      <IonLabel className={styles["input-label"]}>Email</IonLabel>
      <IonInput
        value=""
        type="email"
        placeholder="Enter email"
        className={styles.input}
      />
      <IonLabel className={styles["input-label"]}>Password</IonLabel>
      <IonInput
        value=""
        type="password"
        placeholder="Enter password"
        className={styles.input}
      />

      <IonGrid className={styles["terms-check-grid"]}>
        <IonRow>
          <IonCol size="1" className={styles["checkbox-col"]}>
            <IonCheckbox 
            className={styles["terms-check"]} />
          </IonCol>
          <IonCol size="11" className={styles["label-col"]}>
            <IonLabel>
              By creating or logging into an account you agree to our Terms and
              Conditions and Privacy policies.
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonButton className={styles["login-btn"]}>Login</IonButton>
    </form>

    <div className={styles["foot-note"]}>
      <IonText>
        <span>Not registered yet?&nbsp;</span>
      </IonText>
      <IonText className={styles["create-account"]}>
        <span>Create an account.</span>
      </IonText>
    </div>

  </IonPage>
);

export default Login;
