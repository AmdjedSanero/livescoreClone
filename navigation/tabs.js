import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Image, TouchableWithoutFeedback, View, Text } from 'react-native';

import { IconButton, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { API_URL } from '../context/AuthContext';
import { useFetchAdminInfoQuery } from '../redux/services/apiAuthSlice';
import HomeScreen from '../screens/HomeScreen';
import NextReservation from '../screens/NextReservation';
import Reservations from '../screens/Reservations';
import Service, { RenderCheckboxes } from '../screens/HomeScreen';
import BottomSheetComponent from '../components/BottomSheets/BottomSheetComponent';

const Tab = createBottomTabNavigator();
const AddButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} className={`     `}>
      <View className="bg-white rounded-t-[300] rounded-b-[300] w-16 h-16 p-3 justify-center items-center border-[#3498db] border-4 absolute bottom-1">
        {/* <CalendarIcon color={'#8582FF'} strokeWidth={2} size={32} /> */}
        <IconButton icon={'shape-square-rounded-plus'} size={32} />
      </View>
    </TouchableWithoutFeedback>
  );
};


const AddTabScreen = () => {
  const navigation = useNavigation();

  navigation.navigate('AddReservation');
};
const Tabs = ({ navigation, route }) => {

  const openReservationModal = () => {
    navigation.navigate('AddReservation');
  };
  const {
    data: profileInfo,

    isLoading,
    isError,
    isSuccess,
  } = useFetchAdminInfoQuery();
  const myServicess = profileInfo ? profileInfo.services : [];

  const GoNewService = () => {
    bottomSheetRef.current?.dismiss(); // or bottomSheetReff.current?.hide();

    navigation.navigate('ServiceEdit', { newService: true, id: '0' });
  };

  const selectedMyServiceId = useSelector(
    state => state.reservationForm.selectedMyServiceId,
  );


  const selectedService = myServicess?.find(
    service => service?.id === selectedMyServiceId,
  );

  let serviceName;
  let photos;
  let photoName;

  if (selectedService) {
    serviceName = selectedService.name;
    photos = selectedService.Photos;
    photoName = photos.map(photo => photo.name);
  }
  const bottomSheetRef = useRef(null);

  // const snapPoints = useMemo(() => [300], [600]);
  const snapPoints = useMemo(() => [myServicess?.length * 80 + 120, '100%']);

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  return (
    // <SafeAreaView style={{flex: 1}}>
    <View style={{ flex: 1 }}>

      <Tab.Navigator
        initialRouteName={route.params?.screen}
        screenOptions={{
          tabBarShowLabel: true,
          // tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 60,
          },

          tabBarIconStyle: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            bottom: 8,
          },
          tabBarLabelStyle: { color: 'black', position: 'absolute', bottom: 6 },
        }}>

        <Tab.Screen
          name="Dashboard"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <>
                  <View className="bg-[#3498db] w-full h-[2px] top-[5px]"></View>
                  <IconButton icon={'view-dashboard'} size={size} />
                </>
              ) : (
                <IconButton icon={'view-dashboard-outline'} size={size} />
              ),
            freezeOnBlur: true,
          }}
        />

        <Tab.Screen
          name="Reservation"
          initialParams={{ id: route.params?.id }}
          component={Reservations}
          options={{
            tabBarHideOnKeyboard: false,

            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <>
                  <View className="bg-[#3498db] w-full h-[2px] top-[5px]"></View>
                  <IconButton icon={'calendar'} size={size} />
                </>
              ) : (
                <IconButton icon={'calendar-outline'} size={size} />
              ),
            freezeOnBlur: true,
          }}
        />
        <Tab.Screen
          name=" "
          component={AddTabScreen}
          options={{
            tabBarIcon: () => <AddButton onPress={openReservationModal} />,
          }}
        />

        <Tab.Screen
          name="Next reservation"
          component={NextReservation}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <>
                  <View className="bg-[#3498db] w-full h-[2px] top-[5px]"></View>
                  <IconButton icon={'page-next'} size={size} />
                </>
              ) : (
                <IconButton icon={'page-next-outline'} size={size} />
              ),
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="Service"
          // initialParams={{
          //   serviceId: selectedMyServiceId
          //     ? selectedMyServiceId
          //     : myServicess[0].id,
          // }}
          listeners={{
            tabLongPress: () => {
              openBottomSheet()
            },
          }}
          component={Service}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <>
                  <View className="bg-[#3498db] w-full h-[2px] top-2 z-50 absolute"></View>

                  <Image
                    source={{
                      uri: API_URL + '/storage/image/' + photoName,
                    }}
                    resizeMode={'cover'}
                    className="h-7 w-7 rounded-full "
                  />
                </>
              ) : (
                <Image
                  source={{
                    uri: API_URL + '/storage/image/' + photoName,
                  }}
                  resizeMode={'cover'}
                  className="h-8 w-8 rounded-full  "
                />
              ),
            freezeOnBlur: true,
          }}
        />

      </Tab.Navigator>
    </View>

    // </SafeAreaView>
  );
};

export default Tabs;
