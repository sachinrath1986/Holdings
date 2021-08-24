import { useState, FC } from 'react';
import { IonContent, IonPage, IonText, IonButton } from '@ionic/react';
import OtpInput from 'react-otp-input';
import { useHistory } from 'react-router';
import Avatar from '../components/Avatar';
import CreatePortfolioPinStyles from '../theme/styles.module.css';
import './CreatePortfolioPin.css';

const CreatePin: FC = () => {
  // State Variables
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const isInvalid = pin === '' || confirmPin === '' || pin !== confirmPin;

  const handleChangePin = (e: string) => {
    setPin(e);
  };

  const handleChangeConfirmPin = (e: string) => {
    setConfirmPin(e);
  };

  const history = useHistory();
  const doLogin = () => {
    history.push('/accountsummary');
  };

  return (
    <IonPage>
      <IonContent class={CreatePortfolioPinStyles.screen_bg}>
        <div className="p-4">
          <div className="mb-4">
            <Avatar />
          </div>
          <div className="mb-6">
            <IonText color="light">
              <h1 className="text-2xl font-bold">Create Pin</h1>
            </IonText>
          </div>
          <div className="mb-4">
            <div className="mb-1">
              <IonText>
                <h6 className="text-sm text-gray-500 font-bold">Enter Pin</h6>
              </IonText>
            </div>
            <div className="otp-div">
              <OtpInput
                className="otp-input"
                value={pin}
                onChange={handleChangePin}
                numInputs={6}
                isInputNum
                isInputSecure
              />
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-1">
              <IonText color="light">
                <h6 className="text-sm text-gray-500 font-bold">Confirm Pin</h6>
              </IonText>
            </div>
            <div className="otp-div">
              <OtpInput
                className="otp-input"
                value={confirmPin}
                onChange={handleChangeConfirmPin}
                numInputs={6}
                isInputSecure
                isInputNum
              />
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
