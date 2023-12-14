import { View, Text, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../context/ThemeContext';

const ClubvsClub = () => {
    const { Colors } = useTheme();

    return (
        <View className={`my-2  py-1  h-24  flex-row items-center justify-center `} style={{ backgroundColor: Colors.appColor }}>
            <View className="  px-2   rounded-full  flex-col items-center justify-center ">
                <Image
                    className="w-12 h-12 object-fill"
                    source={require('./../public/images/clubicon/manu.png')}
                />
                <Text className="text-white font-bold text-xs mt-2 " >Manchester United</Text>

            </View>
            <View className="items-center">
                <Text className="text-white font-bold text-2xl">21:00</Text>
                <Text className="text-white  text-xs">Today</Text>

            </View>
            <View className="  px-2   rounded-full  flex-col items-center justify-center ">
                <Image
                    className="w-12 h-12 object-fill"
                    source={require('./../public/images/clubicon/bayern.png')}
                />
                <Text className="text-white font-bold text-xs mt-2 " >Bayern Munich</Text>

            </View>
        </View>
    )
}

export default ClubvsClub