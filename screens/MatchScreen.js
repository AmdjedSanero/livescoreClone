import {
    ScrollView,
    Text,
    View,

} from 'react-native';

import {
    useLayoutEffect, useRef, useState
} from 'react';
import { useTheme } from '../context/ThemeContext';
import { IconButton } from 'react-native-paper';
import ClubvsClub from '../components/ClubvsClub';
import LineUp from '../tabs/LineUp';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Table from '../tabs/Table';


const MatchScreen = (
    { navigation }
) => {
    const { Colors } = useTheme();


    const Tab = createMaterialTopTabNavigator();

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>


            <View className=" items-center h-14 flex-row justify-between px-4 bg-[#121212]" >
                <View>
                    <IconButton
                        icon="arrow-left"
                        iconColor={'#F2F2F2'}
                        size={26}
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <View className="flex-row-reverse    left-4 ">
                    <IconButton
                        icon="star-outline"
                        iconColor={'#F2F2F2'}
                        size={26}
                        onPress={() => { }}
                    />
                    <IconButton
                        icon="stadium"
                        iconColor={'#F2F2F2'}
                        size={26}
                        onPress={() => { }}
                    />
                    <IconButton
                        icon="video"
                        iconColor={'#F2F2F2'}
                        size={26}
                        onPress={() => { }}
                    />


                </View>
            </View>

            <View className=" px-2 bg-white dark:bg-[#121212]">
                <ClubvsClub />
            </View>
            <ScrollView contentContainerStyle={{ flex: 1 }}>

                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarLabel: ({ focused }) => {
                        const labelColor = focused ? '#FF6B01' : '#F2F2F2';
                        return (
                            <Text style={{ color: labelColor, fontWeight: 'bold', fontSize: 14 }} >
                                {route.name}
                            </Text>
                        );
                    },

                    tabBarIndicatorStyle: { backgroundColor: '#FF6B01', height: 0 },
                    tabBarStyle: { backgroundColor: "#121212", height: 30, },
                    tabBarScrollEnabled: true,
                    tabBarItemStyle: { width: "auto", top: -10, margin: 0, paddingHorizontal: 20 },
                    tabBarShowIcon: false,
                })}
                >
                    <Tab.Screen name="Info" >
                        {() => (
                            <ScrollView className=" px-2 bg-white dark:bg-[#121212]">
                            </ScrollView>
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Predection" >
                        {() => (
                            <ScrollView className=" px-2 bg-white dark:bg-[#121212]">
                            </ScrollView>
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Stats" >
                        {() => (
                            <ScrollView className=" px-2 bg-white dark:bg-[#121212]">
                            </ScrollView>
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Line-Ups" >
                        {() => (
                            <ScrollView className=" px-2 bg-white dark:bg-[#121212]" >
                                <LineUp />

                            </ScrollView>
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="Table" >
                        {() => (
                            <ScrollView className=" px-2 bg-white dark:bg-[#121212]">
                                <Table />
                            </ScrollView>
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="News">
                        {() => (
                            <ScrollView className=" px-2 bg-white dark:bg-[#121212]">
                            </ScrollView>
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="H2H">
                        {() => (
                            <ScrollView className=" px-2 bg-white dark:bg-[#121212]">
                            </ScrollView>
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
            </ScrollView>


        </ScrollView>
    );
};


export default MatchScreen;
