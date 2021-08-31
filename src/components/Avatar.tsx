import React, { FC } from "react";
import { IonAvatar } from '@ionic/react';
import AvatarStyles from './Avatar.module.css';

const Avatar: FC = () => (
  <IonAvatar class={AvatarStyles.screen_avatar} />
);

export default Avatar;