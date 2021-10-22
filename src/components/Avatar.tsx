import React, { FC } from 'react';
import { IonAvatar } from '@ionic/react';
import AppLogo from '../images/Money-Matters.png';
import AvatarStyles from './Avatar.module.css';

const Avatar: FC = () => (
  <IonAvatar class={AvatarStyles.screen_avatar}>
    <img src={AppLogo} alt="AppLogo" className={AvatarStyles.app_logo} />
  </IonAvatar>
);

export default Avatar;
