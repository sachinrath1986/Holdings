import { IonButton, IonImg, IonText } from '@ionic/react';
import { useHistory } from 'react-router';
import NavigateBackStyles from './NavigateBack.module.css';
import BackArrowImg from '../images/white-arrow-back.png';

const NavigateBack: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <IonButton
      fill="clear"
      class={`h-4 p-0 m-0 normal-case ${NavigateBackStyles.back_btn}`}
      onClick={handleBack}
    >
      <div className="flex flex-row items-center">
        <div className="mr-1">
          <IonImg src={BackArrowImg} class="w-6" alt="NavigateBack" />
        </div>
        <div>
          <IonText color="light">
            <p className="text-lg">Back</p>
          </IonText>
        </div>
      </div>
    </IonButton>
  );
};

export default NavigateBack;
