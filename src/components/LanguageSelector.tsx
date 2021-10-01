import { FC } from 'react';
import {
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';
import { LangDisplay } from '../pages/Settings';
import SelectorStyles from './LanguageSelector.module.css';

type LanguageSelectorProps = {
  handleLangChange: (event: CustomEvent) => void;
  currentLang: keyof LangDisplay;
};

const LanguageSelector: FC<LanguageSelectorProps> = ({
  handleLangChange,
  currentLang,
}) => (
  <div className={SelectorStyles.langListWrapper}>
    <IonList>
      <IonRadioGroup value={currentLang} onIonChange={handleLangChange}>
        <IonItem lines="none" className={SelectorStyles.radioItem}>
          <IonRadio value="en" slot="start" />
          <IonLabel className={SelectorStyles.langLabel}>English</IonLabel>
        </IonItem>
        <IonItem lines="none" className={SelectorStyles.radioItem}>
          <IonRadio value="es" slot="start" />
          <IonLabel className={SelectorStyles.langLabel}>Español</IonLabel>
        </IonItem>
      </IonRadioGroup>
    </IonList>
  </div>
);
export default LanguageSelector;
