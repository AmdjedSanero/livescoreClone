import { View, Text } from 'react-native'
import React from 'react'

const PlayerInTactic = ({ player, isHome }) => {
    return (
        <View>
            <View className="  justify-center items-center ">
                <View className="w-8 h-8 justify-center items-center  rounded-full " style={{ backgroundColor: isHome ? 'black' : "white" }}>
                    <Text className="text-white" style={{ color: isHome ? 'white' : "black" }}>{player.number}</Text>
                </View>
                <Text className=" text-xs mt-2 font-bold text-white text-ce " >{player.name}</Text>

            </View>
        </View>
    )
}

export default PlayerInTactic