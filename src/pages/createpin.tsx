import { useState, FC } from 'react';
import './createpin.css';
import { IonContent, IonPage, IonAvatar, IonText, IonButton, IonList, IonInput, IonItem } from '@ionic/react';
import OtpInput from "react-otp-input";

const CreatePin: FC = () => {

    const [pin, setPin] = useState("")
    const [confirmPin, setConfirmPin] = useState("")
    const isInvalid = pin === "" || confirmPin === '' || pin !== confirmPin;


    const handleChangePin = (e: any) => {
        setPin(e)
    }

    const handleChangeConfirmPin = (e: any) => {
        setConfirmPin(e)
    }

    return (
        <IonPage>
            <IonContent>
                <div className="p-2">
                    <IonAvatar>
                    </IonAvatar>
                    <IonText color="light">
                        <h1 className="--font-bold">Create Pin</h1>
                    </IonText>
                    <div className="mb-2"></div>
                    <div className="mb-2"></div>
                    <IonText color="light">
                        <h6>Enter Pin</h6>
                    </IonText>
                    <OtpInput
                        className="otp-ip"
                        value={pin}
                        onChange={handleChangePin}
                        numInputs={6}
                        isInputNum
                        isInputSecure
                    />
                    <div className="mb-2"></div>
                    <IonText color="light">
                        <h6>Confirm Pin</h6>
                    </IonText>
                    <OtpInput
                        className="otp-ip"
                        value={confirmPin}
                        onChange={handleChangeConfirmPin}
                        numInputs={6}
                        isInputSecure
                        isInputNum
                    />
                    <div className="mb-2"></div>
                    <div className="mb-2"></div>
                    <IonButton disabled={isInvalid} expand="full" size="large" class="btn-orange" shape="round">Create</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CreatePin;