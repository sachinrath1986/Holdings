import { FC } from 'react';
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
    IonItem,
    IonToggle,
} from '@ionic/react';

// Custom Components
import SideMenuBar from '../components/SideMenuBar';
import SettingsSummaryStyles from './Settings.module.css';
import rightArrowIcon from '../images/right-arrow-blue.png'

const Portfolio: FC = () => (
    <IonPage className={SettingsSummaryStyles.header_bg}>
        <SideMenuBar />
        <IonHeader className={SettingsSummaryStyles.header_bg}>
            <div className="w-full p-4 pl-2 pr-2 flex flexx-row items-center justify-between">
                <IonButtons slot="start">
                    <IonMenuButton color="light" />
                </IonButtons>
                <IonText color="light">
                    <h1 className="font-semibold text-xl">Settings</h1>
                </IonText>
                <div />
            </div>
        </IonHeader>
        <IonContent className={SettingsSummaryStyles.screen_bg} >
            <IonList className={`m-0 p-0 ${SettingsSummaryStyles.screen_bg}`}>
                <IonListHeader className={SettingsSummaryStyles.settings_list_header}>
                    <IonLabel>
                        PREFERENCES
                    </IonLabel>
                </IonListHeader>

                <div className={SettingsSummaryStyles.settings_list_item}>
                    <IonLabel>Facebook</IonLabel>
                    <IonToggle slot="end" checked />
                </div>


                <div className={SettingsSummaryStyles.settings_list_item}>
                    <IonLabel>Dark theme</IonLabel>
                    <IonToggle slot="end" checked />
                </div>
                <div className={SettingsSummaryStyles.settings_list_item}>

                    <IonLabel>Notifications</IonLabel>
                    <IonLabel className={SettingsSummaryStyles.settings_option_list_item}>
                        ON <img src={rightArrowIcon} alt="" />
                    </IonLabel>

                </div>
                <div className={SettingsSummaryStyles.settings_list_item}>

                    <IonLabel>Language</IonLabel>
                    <IonLabel className={SettingsSummaryStyles.settings_option_list_item}>
                        English <img src={rightArrowIcon} alt="" />
                    </IonLabel>

                </div>
            </IonList>
            {/** Others section */}
            <IonList className={`m-0 p-0 pt-5 ${SettingsSummaryStyles.screen_bg}`}>
                <IonListHeader className={SettingsSummaryStyles.settings_list_header}>
                    <IonLabel>
                        OTHERS
                    </IonLabel>
                </IonListHeader>
                <div className={SettingsSummaryStyles.settings_list_item}>

                    <IonLabel>About  us</IonLabel>
                    <img src={rightArrowIcon} alt="" />
                </div>
                <div className={SettingsSummaryStyles.settings_list_item}>

                    <IonLabel>Privacy Policy</IonLabel>
                    <img src={rightArrowIcon} alt="" />
                </div>
                <div className={SettingsSummaryStyles.settings_list_item}>

                    <IonLabel>Terms & Conditions</IonLabel>
                    <img src={rightArrowIcon} alt="" />
                </div>

            </IonList>
        </IonContent>
    </IonPage>
);

export default Portfolio;
