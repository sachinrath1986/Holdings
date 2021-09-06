import { FC, useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';

const AllHoldings: FC = () => {
  const [holdingData, setHoldingDate] = useState([]);

  useEffect(() => {
    setHoldingDate([]);
  }, []);

  return (
    <IonPage>
      <IonHeader>All Holdings</IonHeader>
      <IonContent>
        <div>holding container</div>
      </IonContent>
    </IonPage>
  );
};

export default AllHoldings;
