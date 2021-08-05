import { useState, FC } from 'react';
import './CreatePin.css';
import { IonContent, IonPage, IonAvatar, IonText, IonButton} from '@ionic/react';
import OtpInput from "react-otp-input";

const CreatePin: FC = () => {

    const [pin, setPin] = useState("")
    const [confirmPin, setConfirmPin] = useState("")
    const isInvalid = pin === "" || confirmPin === '' || pin !== confirmPin;


    const handleChangePin = (e: string) => {
        setPin(e)
    }

    const handleChangeConfirmPin = (e: string) => {
        setConfirmPin(e)
    }

    return (
        <IonPage>
            <IonContent class="createpin-ion-content">
                <div className="p-2">
                    <IonAvatar class="screen-avatar">
                    </IonAvatar>
                    <div className="mb-2"></div>
                    <IonText color="light">
                        <h1 className="--font-bold heading-h1">Create Pin</h1>
                    </IonText>
                    <div className="mb-2"></div>
                    <div className="mb-2"></div>
                    <IonText color="light">
                        <h6 className="heading-h6">Enter Pin</h6>
                    </IonText>
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
                    <div className="mb-2"></div>
                    <IonText color="light">
                        <h6 className="heading-h6">Confirm Pin</h6>
                    </IonText>
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
                    <div className="mb-2"></div>
                    <div className="mb-2"></div>
                    <IonButton disabled={isInvalid} expand="full" size="large" class="btn-orange" shape="round">Create</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CreatePin;