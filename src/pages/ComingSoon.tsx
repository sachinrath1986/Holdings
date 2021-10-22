import { IonHeader, IonPage, IonText } from '@ionic/react';

export const ComingSoonSection: React.FC = () => (
  <div className="p-12 text-center">
    <IonText className="text-4xl text-white">Page is coming soon</IonText>
  </div>
);

const ComingSoon: React.FC = () => (
  <IonPage className="flex-col justify-center">
    <IonHeader />
    <ComingSoonSection />
  </IonPage>
);

export default ComingSoon;
