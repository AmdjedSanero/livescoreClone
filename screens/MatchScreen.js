import {
    Image,
    ScrollView,
    Text,
    View,

} from 'react-native';

import {
    useLayoutEffect
} from 'react';
import { useTheme } from '../context/ThemeContext';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { UsbIcon } from "./../public/images/clubicon/usbbiskra.png";
import { ChevronRightIcon, ChevronUpIcon, EllipsisVerticalIcon, StarIcon } from "react-native-heroicons/solid";
import { StarIcon as StarIconOutline, ExclamationCircleIcon } from "react-native-heroicons/outline";
import MatchSection from '../components/MatchSection';
import LeagueSection from '../components/LeagueSection';
import ClubvsClub from '../components/ClubvsClub';


const MatchScreen = () => {
    const { Colors } = useTheme();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: Colors.appColor,
                height: 80,
            },

            headerTitle: "",
            headerTintColor: 'white',

            headerShadowVisible: false,

            headerRight: () => (
                <View className="flex-row-reverse   w-full left-4 ">
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
            ),
        });
    }, []);

    const match = {
        isStart: true,
        isFavourite: true,
        time: "18",
        clubs: {
            home: {
                name: "Everton",
                logo: './../public/images/clubicon/everton.png',
                score: "0"
            },
            away: {
                name: "Chelsea",
                logo: './../public/images/clubicon/chelsea.png',
                score: "2"
            }
        }
    }



    return (
        <ScrollView className=" px-2 bg-white dark:bg-[#121212]  " >
            <ClubvsClub />
            <ScrollView horizontal={true} >
                <Text className="text-[#F2F2F2] font-bold text-base mx-2 " >Info</Text>
                <Text className="text-[#F2F2F2] font-bold text-base mx-2 " >Predection</Text>
                <Text className="text-[#F2F2F2] font-bold text-base mx-2 " >Stats</Text>
                <Text className="text-[#FF6B01] font-bold text-base mx-2 " >Line-ups</Text>
                <Text className="text-[#F2F2F2] font-bold text-base mx-2 " >Table</Text>
                <Text className="text-[#F2F2F2] font-bold text-base mx-2 " >News</Text>
                <Text className="text-[#F2F2F2] font-bold text-base mx-2 " >H2H</Text>
            </ScrollView>
            <View className={`my-2 px-2 py-1 h-10 w-screen flex-row items-center  `} style={{ backgroundColor: Colors.appColor }}>
                <ExclamationCircleIcon color={"#FF6B01"} size={24} />
                <Text className="text-[#F2F2F2] font-bold text-xs mx-2 " >Possible line-up</Text>

            </View>
            <View className="bg-[#58741f] py-4 px-2 ">
                <View className="border-[#F2F2F2] border w-full relative overflow-hidden h-[800]">
                    <View className="justify-center items-center absolute top-2 z-50 right-[156] ">
                        <View className="w-8 h-8 justify-center items-center bg-black rounded-full">
                            <Text className="text-white">13</Text>
                        </View>
                        <Text className="text-white text-xs">Amdjed</Text>

                    </View>
                    <View className="justify-center items-center flex-col absolute top-24 z-50 right-24 ">
                        <View className="w-8 h-8 justify-center items-center bg-black rounded-full">
                            <Text className="text-white">5</Text>
                        </View>
                        <Text className="text-white text-xs">Ilyas Chicha </Text>

                    </View>
                    {/* Defence */}
                    <View className="justify-center items-center flex-col absolute top-24 z-50 left-24 ">
                        <View className="w-8 h-8 justify-center items-center bg-black rounded-full">
                            <Text className="text-white">4</Text>
                        </View>
                        <Text className="text-white text-xs">Raafet Ghaoui </Text>

                    </View>
                    <View className="justify-center items-center flex-col absolute top-24 z-50 right-[280]  ">
                        <View className="w-8 h-8 justify-center items-center bg-black rounded-full">
                            <Text className="text-white">2</Text>
                        </View>
                        <Text className="text-white text-xs">Rahim Toumi </Text>

                    </View>
                    <View className="justify-center items-center flex-col absolute top-24 z-50 left-[290]  ">
                        <View className="w-8 h-8 justify-center items-center bg-black rounded-full">
                            <Text className="text-white">3</Text>
                        </View>
                        <Text className="text-white text-xs">Rafik Telli </Text>

                    </View>
                    {/* end Defence */}
                    {/* Center */}
                    <View className="justify-center items-center flex-col absolute top-44 z-50 left-56  ">
                        <View className="w-8 h-8 justify-center items-center bg-black rounded-full">
                            <Text className="text-white">3</Text>
                        </View>
                        <Text className="text-white text-xs">Fayez Bouhitem </Text>

                    </View>
                    <View className="justify-center items-center flex-col absolute top-44 z-50 right-56  ">
                        <View className="w-8 h-8 justify-center items-center bg-black rounded-full">
                            <Text className="text-white">3</Text>
                        </View>
                        <Text className="text-white text-xs">Fayez Bouhitem </Text>

                    </View>
                    {/* end Center */}

                    {/* Corners */}
                    <View className="absolute right-80 top-[-136] z-20 border-[#F2F2F2]  border h-40 rounded-full w-28"></View>
                    <View className="absolute left-80 top-[-136] z-20 border-[#F2F2F2]  border h-40 rounded-full w-28"></View>
                    <View className="absolute left-80 bottom-[-136] z-20 border-[#F2F2F2]  border h-40 rounded-full w-28"></View>
                    <View className="absolute right-80 bottom-[-136] z-20 border-[#F2F2F2]  border h-40 rounded-full w-28"></View>
                    {/* end Corners */}
                    {/* Goals */}
                    <View className="absolute  top-[-136] right-36 z-20 border-[#F2F2F2]  border h-40  w-16"></View>
                    <View className="absolute  top-[-100] right-24 z-20 border-[#F2F2F2]  border h-40  w-40"></View>
                    {/* <View className="absolute right-[130] top-[10] z-30 overflow-hidden border-[#F2F2F2]  border h-20 rounded-full w-20">

                    </View> */}


                    <View className="absolute  bottom-[-100] right-24 z-20 border-[#F2F2F2]  border h-40  w-40"></View>


                    <View className="absolute  bottom-[-136] right-36 z-20 border-[#F2F2F2]  border h-40  w-16"></View>
                    {/* end Goals */}


                    <View className="bg-[#516D14] w-full h-20"></View>
                    <View className=" w-full h-20"></View>
                    <View className="bg-[#516D14] w-full h-20"></View>
                    <View className=" w-full h-20"></View>
                    <View className="bg-[#516D14] w-full h-20"></View>
                    {/* Center */}
                    <View className="bg-[#F2F2F2] h-[1] z-10 "></View>
                    <View className="bg-[#F2F2F2] h-2 w-2 rounded-full z-10 right-[180] top-[396] absolute "></View>
                    <View className="absolute right-32 top-[340] z-0 border-[#F2F2F2] bg-[#58741f] border h-28 rounded-full w-28"></View>

                    {/* end Center */}

                    <View className=" w-full h-20"></View>
                    <View className="bg-[#516D14] w-full h-20"></View>
                    <View className=" w-full h-20"></View>
                    <View className="bg-[#516D14] w-full h-20"></View>
                    <View className=" w-full h-20"></View>
                    <View className="bg-[#516D14] w-full h-20"></View>
                    <View className=" w-full h-20"></View>

                </View>


            </View>
        </ScrollView>
    );
    // }
};


export default MatchScreen;
