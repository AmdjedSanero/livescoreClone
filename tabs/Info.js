import { View, Text, Image } from 'react-native'
import React from 'react'
import { BuildingStorefrontIcon, CalendarDaysIcon } from 'react-native-heroicons/solid'





const Info = () => {

    return (
        <>
            <Text className="text-gray-200 uppercase font-bold text-sm mt-4">Match Info</Text>

            <View className="border-[1px] border-gray-700 rounded-md w-full  my-3   p-4">

                <View className="flex-row  justify-evenly  mb-2 gap-4 flex-wrap">
                    <View className="flex-row items-center gap-1">
                        <CalendarDaysIcon color={"white"} />
                        <Text className="font-bold  text-xs">12 Dec 2023</Text>

                    </View>
                    <View className="flex-row items-center gap-1">
                        <CalendarDaysIcon color={"white"} />
                        <Text className="font-bold  text-xs">Espen Eskaas (Norway)</Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                        <BuildingStorefrontIcon color={"white"} />
                        <Text className="font-bold  text-xs">Old Trafford</Text>
                    </View>



                </View>

            </View>



        </>
    )
}

export default Info