import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken();
  }
}

async function GetFCMToken() {
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log(fcmtoken, 'old token');

  if (!fcmtoken) {
    try {
      const fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        console.log(fcmtoken, 'new token');
        await AsyncStorage.setItem('fcmtoken', fcmtoken);
      }
    } catch (error) {
      console.log('error in fcmtoken: ' + error);
    }
  }
}

export const NotificationListner = navigation => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // navigation.navigate(remoteMessage.data.type);
    if (remoteMessage.data['ReservationId']) {
      console.log('is here 1');

      navigation.navigate('Tabs', {
        screen: 'Reservation',
        id: remoteMessage.data['ReservationId'],
      });
    }
    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          if (remoteMessage.data['ReservationId']) {
            console.log('is here 2');
            navigation.navigate('Tabs', {
              screen: 'Reservation',
              id: remoteMessage.data['ReservationId'],
            });
          }
          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        //   setLoading(false);
      });
  });

  messaging().onMessage(async remoteMessage => {
    console.log('notification on forground state......', remoteMessage);
  });
};
