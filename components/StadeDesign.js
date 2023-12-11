import { View, Text } from 'react-native'
import React from 'react'

const StadeDesign = () => {
    return (
        <>
            {/* Corners */}
            <View className="absolute right-80 top-[-136] z-20 border-[#F2F2F2]  border h-40 rounded-full w-28"></View>
            <View className="absolute left-80 top-[-136] z-20 border-[#F2F2F2]  border h-40 rounded-full w-28"></View>
            <View className="absolute left-80 bottom-[-136] z-20 border-[#F2F2F2]  border h-40 rounded-full w-28"></View>
            <View className="absolute right-80 bottom-[-136] z-20 border-[#F2F2F2]  border h-40 rounded-full w-28"></View>
            {/* end Corners */}
            {/* Goals */}
            <View className="flex-row w-full absolute z-30 h-20 justify-center items-center">
                <View className="absolute  top-[-100]   border-[#F2F2F2] z-20 bg-[#58741f] border h-44  w-40"></View>
                <View className="absolute  top-[-80] z-10 border-[#F2F2F2] rounded-full border h-44  w-40"></View>
                <View className="absolute  top-[-136]  z-40 border-[#F2F2F2]  border h-40  w-16"></View>
            </View>
            <View className="flex-row w-full  bottom-0  absolute z-30 h-20 justify-center items-center ">
                <View className="absolute  bottom-[-100]   border-[#F2F2F2] z-20 bg-[#58741f] border h-44  w-40"></View>
                <View className="absolute  bottom-[-80] z-10 border-[#F2F2F2] rounded-full border h-44  w-40"></View>
                <View className="absolute  bottom-[-136]  z-40 border-[#F2F2F2]  border h-40  w-16"></View>

            </View>
            {/* end Goals */}
            {/* Center */}
            <View className="flex-row w-full    absolute z-30 h-40  opacity-50  top-[40%]  justify-center items-center ">

                <View className="bg-[#F2F2F2] h-[3] w-full  "></View>
                <View className="bg-[#F2F2F2] h-2 w-2 rounded-full z-40 absolute "></View>
                <View className="absolute opacity-40    border-[#F2F2F2] bg-[#58741f] border-4  h-24 rounded-full w-24"></View>
            </View>

            {/* end Center */}

            <View className="bg-[#516D14] w-full h-20"></View>
            <View className=" w-full h-20"></View>
            <View className="bg-[#516D14] w-full h-20"></View>
            <View className=" w-full h-20"></View>
            <View className="bg-[#516D14] w-full h-20"></View>


            <View className=" w-full h-20"></View>
            <View className="bg-[#516D14] w-full h-20"></View>
            <View className=" w-full h-20"></View>
            <View className="bg-[#516D14] w-full h-20"></View>
            <View className=" w-full h-20"></View>
            <View className="bg-[#516D14] w-full h-20"></View>
            <View className=" w-full h-20"></View>
        </>
    )
}

export default StadeDesign