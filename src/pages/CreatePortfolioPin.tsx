import { useState, FC } from 'react';
import { IonContent, IonPage, IonText, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import Avatar from '../components/Avatar';
import CreatePortfolioPinStyles from './CreatePortfolioPin.module.css';
import './CreatePortfolioPin.css';

const CreatePin: FC = () => {
  // State Variables
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const isInvalid = pin === '' || confirmPin === '' || pin !== confirmPin;
  // TODO: OTP library removal
  // const handleChangePin = (e: string) => {
  //   setPin(e);
  // };

  // const handleChangeConfirmPin = (e: string) => {
  //   setConfirmPin(e);
  // };

  const history = useHistory();
  const doLogin = () => {
    history.replace('/portfoliosummary');
  };

  return (
    <IonPage>
      <IonContent class={CreatePortfolioPinStyles.screen_bg}>
        <div className="p-8">
          <div className="mb-4">
            <Avatar />
          </div>
          <div className="mb-6">
            <div className="mb-1">
              <IonText color="light">
                <h1 className="text-sm font-semibold tracking-widest">
                  Welcome to Wissen
                </h1>
              </IonText>
            </div>
            <div>
              <IonText color="light">
                <h1 className="text-3xl font-bold tracking-widest">
                  Create Pin
                </h1>
              </IonText>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-1">
              <IonText>
                <h6 className="text-sm text-white tracking-wider">Enter Pin</h6>
              </IonText>
            </div>
            <div className="otp-div">
              {/* <OtpInput
                className="otp-input"
                value={pin}
                onChange={handleChangePin}
                numInputs={6}
                isInputNum
                isInputSecure
              /> */}
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-1">
              <IonText color="light">
                <h6 className="text-sm text-white tracking-wider">
                  Confirm Pin
                </h6>
              </IonText>
            </div>
            <div className="otp-div">
              {/* <OtpInput
                className="otp-input"
                value={confirmPin}
                onChange={handleChangeConfirmPin}
                numInputs={6}
                isInputSecure
                isInputNum
              /> */}
            </div>
          </div>
          <IonButton
            disabled={isInvalid}
            expand="full"
            size="large"
            class={CreatePortfolioPinStyles.btn_blue}
            shape="round"
            onClick={doLogin}
          >
            Create
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreatePin;
