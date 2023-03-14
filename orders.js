import React from 'react';

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';
import { useStateContext } from '../contexts/contextProvider';

function Header() {
  function onNotificationClick(message: IMessage) {
    // your logic to handle the notification click
    if (message?.cta?.data?.url) {
      window.location.href = message.cta.data.url;
    }
  }

  const currentMode = localStorage.getItem("themeMode");

  return (
    <NovuProvider subscriberId={'USER_ID'} applicationIdentifier={'APP_ID_FROM_ADMIN_PANEL'} i18n="he">
      <PopoverNotificationCenter onNotificationClick={onNotificationClick} colorScheme={currentMode}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
}


const Orders = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Orders