import React from 'react';
import { RiNotification3Line } from "react-icons/ri";

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';

function Header() {
  function onNotificationClick(message: IMessage) {
    // your logic to handle the notification click
    if (message?.cta?.data?.url) {
      window.location.href = message.cta.data.url;
    }
  }

  const currentMode = localStorage.getItem("themeMode");

  return (
    <NovuProvider subscriberId={'63ed28cb777af8e017b4cd49'} applicationIdentifier={'I143FiGkYoDk'} i18n="he" >
      <PopoverNotificationCenter onNotificationClick={onNotificationClick} colorScheme={currentMode} position="bottom">
        {({ unseenCount }) => <RiNotification3Line unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
}


const Notification2 = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Notification2