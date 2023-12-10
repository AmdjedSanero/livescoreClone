import { View, Text, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../context/ThemeContext';

const ClubvsClub = () => {
    const { Colors } = useTheme();

    return (
        <View className={`my-2  py-1 -mx-4 h-24 w-screen flex-row items-center justify-center `} style={{ backgroundColor: Colors.appColor }}>
            <View className="  px-2   rounded-full  flex-col items-center justify-center ">
                <Image
                    className="w-12 h-12 object-fill"
                    source={require('./../public/images/clubicon/usbbiskra.png')}
                />
                <Text className="text-white font-bold text-xs " >Tottenham Hotspur</Text>

            </View>
            <View className="items-center">
                <Text className="text-white font-bold text-2xl">17:30</Text>
                <Text className="text-white  text-xs">Today</Text>

            </View>
            <View className="  px-2   rounded-full  flex-col items-center justify-center ">
                <Image
                    className="w-12 h-12 object-fill"
                    source={require('./../public/images/clubicon/usbbiskra.png')}
                />
                <Text className="text-white font-bold text-xs " >Tottenham Hotspur</Text>

            </View>
        </View>
    )
}

export default ClubvsClub