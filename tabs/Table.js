import { View, Text, Image } from 'react-native'
import React from 'react'


function TableRow({ index }) {
    return (<View className="flex-row flex-1 py-2 border-t  border-gray-700 -mx-4 overflow-hidden ">
        <View className="flex-row px-4 ">
            <View className="w-1/12 justify-center items-center right-2 relative">

                <Text >{index}</Text>
                {index === 1 && <View className="w-6 h-2 absolute border-b-2 rounded-lg bg-[#23DF8C] top-7" />}
                {index === 2 && <View className="w-6 h-2 absolute border-b-2 rounded-lg bg-[#23DF8C] top-7" />}
                {index === 3 && <View className="w-6 h-2 absolute border-b-2 rounded-lg bg-[#4304A0] top-7" />}


            </View>
            <View className="w-8/12 flex-row  ">
                <Image className="w-6  h-6  object-contain" source={require('./../public/images/clubicon/bayern.png')} />
                <Text className="ml-2">Inter</Text>

            </View>

            <Text className="w-1/12  text-center">15</Text>
            <Text className="w-1/12  text-center">6</Text>
            <Text className="w-1/12  text-center">15</Text>
        </View>
    </View>);
}


const Table = () => {
    const generateRows = () => {
        const rows = [];
        for (let i = 1; i <= 4; i++) {
            rows.push(<TableRow key={i} index={i} />);
        }
        return rows;
    };
    return (
        <>
            <View className="border-[1px] border-gray-700 rounded-md w-full  my-3 flex flex-col   pt-2 px-4">
                <View className="flex-row flex-1 mb-2">
                    <Text className="w-1/12 font-bold ">#</Text>
                    <Text className="w-8/12 font-bold ">TEAM</Text>
                    <Text className="w-1/12 font-bold text-center">P</Text>
                    <Text className="w-1/12 font-bold text-center">GD</Text>
                    <Text className="w-1/12 font-bold text-center">PTS</Text>
                </View>
                {generateRows()}
            </View>
            <View className="border-[1px] border-gray-700 rounded-md w-full  my-3 flex flex-col justify-between items-start  p-4">
                <View className="flex-row items-center gap-2 mb-1">
                    <View className="w-2 h-2 bg-[#23DF8C] rounded-full"></View>
                    <Text className="text-white  text-sm font-bold ">Next stage</Text>
                </View>
                <View className="flex-row items-center gap-2 mb-1">
                    <View className="w-2 h-2 bg-[#4304A0] rounded-full"></View>
                    <Text className="text-white  text-sm font-bold ">Qualification to Europa League Final Stage</Text>
                </View>
                {/* <View className="flex-row items-center gap-2 mb-1">
                    <View className="w-2 h-2 bg-blue-600 rounded-full"></View>
                    <Text className="text-white  text-sm font-bold  ">Champions League</Text>
                </View> */}
                {/* <View className="flex-row items-center gap-2 mb-1">
                    <View className="w-2 h-2 bg-[#AB5E03] rounded-full"></View>
                    <Text className="text-white  text-sm  font-bold ">Europa League</Text>
                </View> */}
                {/* <View className="flex-row items-center gap-2 mb-1">
                    <View className="w-2 h-2 bg-[#23DF8C] rounded-full"></View>
                    <Text className="text-white  text-sm font-bold ">Europa Conference League qualification</Text>
                </View> */}

                {/* <View className="flex-row items-center gap-2 mb-1">
                    <View className="w-2 h-2 bg-[#961A3D] rounded-full"></View>
                    <Text className="text-white  text-sm font-bold ">Relegation</Text>
                </View> */}

            </View>
            {/* <View className="border-[1px] bg-[#191919] rounded-md w-full  my-3 flex flex-col justify-between items-start  p-4">

                <Text className="text-white  text-xs  ">If the 1st and 2nd team are tied on equal points at the end of the season, they will play a playoff match to decide the champion.
                </Text>
                <Text className="text-white  text-xs">
                    Cup winner qualifies for European competition.</Text>
            </View> */}

        </>
    )
}

export default Table