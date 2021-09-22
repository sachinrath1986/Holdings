import { FC } from 'react';
import {
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { LangDisplay } from '../pages/Settings';
import SelectorStyles from './LanguageSelector.module.css';

type LanguageSelectorProps = {
  handleLangChange: (key: keyof LangDisplay) => void;
  currentLang: keyof LangDisplay;
};

const LanguageSelector: FC<LanguageSelectorProps> = ({
  handleLangChange,
  currentLang,
}) => {
  const { i18n } = useTranslation();
  const handleLangSelect = (event: CustomEvent) => {
    const languageSelected = event.detail.value;
    handleLangChange(languageSelected);
    i18n.changeLanguage(languageSelected);
  };

  return (
    <div className={SelectorStyles.langListWrapper}>
      <IonList>
        <IonRadioGroup value={currentLang} onIonChange={handleLangSelect}>
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
};

export default LanguageSelector;
