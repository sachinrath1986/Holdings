import { useState, FC } from 'react';
import { IonContent, IonPage, IonText, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import OtpInput from 'react-otp-input';
import Avatar from '../components/Avatar';
import EnterPinStyles from './EnterPin.module.css';
import './EnterPin.css';

const EnterPin: FC = () => {
  // State Variables
  const [pin, setPin] = useState('');
  const isInvalid = pin === '' || pin.length !== 6;

  const handleChangePin = (e: string) => {
    setPin(e);
  };

  const history = useHistory();
  const doLogin = () => {
    history.push('/portfoliosummary');
  };

  return (
    <IonPage>
      <IonContent class={EnterPinStyles.screen_bg}>
        <div className="p-8">
          <div className="mb-4">
            <Avatar />
          </div>
          <div className="mb-6">
            <div className="mb-1">
              <IonText color="light">
                <h1 className="text-sm font-semibold tracking-widest">Welcome to Wissen</h1>
              </IonText>
            </div>
            <div>
              <IonText color="light">
                <h1 className="text-3xl font-bold tracking-widest">Let&apos;s sign you in</h1>
              </IonText>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-6">
              <IonText>
                <h6 className="text-base text-white tracking-wider">To signin enter your pin code</h6>
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
          <IonButton
            disabled={isInvalid}
            expand="full"
            size="large"
            class={EnterPinStyles.btn_blue}
            shape="round"
            onClick={doLogin}
          >
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EnterPin;
