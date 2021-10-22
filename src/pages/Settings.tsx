import { FC, useState } from 'react';
// Ionic Components
import {
  IonPage,
  IonContent,
  IonList,
  IonText,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonListHeader,
  IonLabel,
  IonToggle,
  IonImg,
} from '@ionic/react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

// Custom Components
import SideMenuBar from '../components/SideMenuBar';
import LanguageSelector from '../components/LanguageSelector';
import SettingsSummaryStyles from './Settings.module.css';
import rightArrowIcon from '../images/next_arrow.png';
import faceIdIcon from '../images/face_id.png';
import darkModeIcon from '../images/dark_mode.png';
import notificationIcon from '../images/bell_ico.png';
import languageIcon from '../images/language_ico.png';
import documentIcon from '../images/document.png';
import helpIcon from '../images/help.png';
import homeIcon from '../images/home_2x.png';

export type ApplicationLanguages = 'en' | 'es';

interface LangDisplayObj {
  [lang: string]: string;
}

const langDisplayObj: LangDisplayObj = {
  en: 'English',
  es: 'Español',
};

const Settings: FC = () => {
  const { i18n, t: translate } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [showLangs, setShowLangs] = useState<boolean>(false);
  const handleLangChange = (key: ApplicationLanguages) => {
    setLang(key);
    setShowLangs(false);
  };

  const history = useHistory();
  const navigatetoHome = () => {
    history.replace('/portfoliosummary');
  };

  return (
    <IonPage className={SettingsSummaryStyles.header_bg}>
      <SideMenuBar contentId="settings" />
      <IonHeader className={SettingsSummaryStyles.header_bg}>
        <div className="w-full p-4 pl-2 flex items-center justify-between">
          <IonButtons slot="start">
            <IonMenuButton color="light" />
          </IonButtons>
          <IonText color="light">
            <h1 className="font-semibold text-xl">{translate('settings')}</h1>
          </IonText>
          <div>
            <IonImg
              src={homeIcon}
              onClick={() => navigatetoHome()}
              class="w-6"
            />
          </div>
        </div>
      </IonHeader>
      <IonContent className={SettingsSummaryStyles.screen_bg} id="settings">
        <IonList className={`m-0 p-0 ${SettingsSummaryStyles.screen_bg}`}>
          <IonListHeader className={SettingsSummaryStyles.settings_list_header}>
            <IonLabel>{translate('preferences')}</IonLabel>
          </IonListHeader>

          <div className={SettingsSummaryStyles.settings_list_item}>
            <IonLabel className={SettingsSummaryStyles.settings_label}>
              <img src={faceIdIcon} alt="" className="mr-3" />{' '}
              {translate('faceId')}
            </IonLabel>
            <IonToggle slot="end" checked />
          </div>

          <div className={SettingsSummaryStyles.settings_list_item}>
            <IonLabel className={SettingsSummaryStyles.settings_label}>
              <img src={darkModeIcon} alt="" className="mr-3" />
              {translate('darkTheme')}
            </IonLabel>
            <IonToggle slot="end" checked />
          </div>
          <div className={SettingsSummaryStyles.settings_list_item}>
            <IonLabel className={SettingsSummaryStyles.settings_label}>
              <img src={notificationIcon} alt="" className="mr-3" />
              {translate('notifications')}
            </IonLabel>
            <IonLabel
              className={SettingsSummaryStyles.settings_option_list_item}
            >
              ON <img src={rightArrowIcon} alt="" />
            </IonLabel>
          </div>
          <div
            className={`${SettingsSummaryStyles.settings_list_item} ${
              showLangs ? SettingsSummaryStyles.noItemBorder : ''
            }`}
          >
            <IonLabel className={SettingsSummaryStyles.settings_label}>
              <img src={languageIcon} alt="" className="mr-3" />
              {translate('language')}
            </IonLabel>
            <IonLabel
              className={SettingsSummaryStyles.settings_option_list_item}
              onClick={() => setShowLangs(!showLangs)}
            >
              <span>{langDisplayObj[lang]}</span>
              <img src={rightArrowIcon} alt="" />
            </IonLabel>
          </div>
          {showLangs && (
            <LanguageSelector
              handleLangChange={handleLangChange}
              currentLang={lang}
            />
          )}
        </IonList>
        {/** Others section */}
        <IonList className={`m-0 p-0 pt-5 ${SettingsSummaryStyles.screen_bg}`}>
          <IonListHeader className={SettingsSummaryStyles.settings_list_header}>
            <IonLabel>{translate('others')}</IonLabel>
          </IonListHeader>
          <div className={SettingsSummaryStyles.settings_list_item}>
            <IonLabel className={SettingsSummaryStyles.settings_label}>
              <img src={helpIcon} alt="" className="mr-3" />
              {translate('aboutUs')}
            </IonLabel>
            <img
              src={rightArrowIcon}
              alt=""
              className={SettingsSummaryStyles.setting_next_arrow_img}
            />
          </div>
          <div className={SettingsSummaryStyles.settings_list_item}>
            <IonLabel className={SettingsSummaryStyles.settings_label}>
              <img src={documentIcon} alt="" className="mr-3" />
              {translate('privacyPolicy')}
            </IonLabel>
            <img
              src={rightArrowIcon}
              alt=""
              className={SettingsSummaryStyles.setting_next_arrow_img}
            />
          </div>
          <div className={SettingsSummaryStyles.settings_list_item}>
            <IonLabel className={SettingsSummaryStyles.settings_label}>
              <img src={documentIcon} alt="" className="mr-3" />
              {translate('termsAndCondition')}
            </IonLabel>
            <img
              src={rightArrowIcon}
              alt=""
              className={SettingsSummaryStyles.setting_next_arrow_img}
            />
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
