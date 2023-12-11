import { View, Text } from 'react-native'
import React from 'react'
import { ExclamationCircleIcon } from 'react-native-heroicons/outline'
import { useTheme } from '../context/ThemeContext';
import Tactic from '../components/Tactic';
import StadeDesign from '../components/StadeDesign';


function InjuryAndSusp({ data }) {
    const dateReturn = data.dateReturn ? data.dateReturn : "Unknown"
    return (<View className="flex-row  items-center gap-3 mb-2">
        {data.type === "injury" && <View className="justify-center items-center bg-white h-5 w-5 rounded-full ">
            <Text className="text-red-500 font-extrabold text-[20px] bottom-1 ">+</Text>
        </View>}
        {data.type === "red" && <View className="justify-center items-center bg-[#DF2357] h-6 w-5 rounded-md ">
        </View>}
        {data.type === "yellow" && <View className="justify-center items-center bg-[#FFCE00] h-6 w-5 rounded-md ">
            <Text className="text-black font-bold  ">5</Text>
        </View>}
        <View>
            <Text className="text-white font-bold text-base capitalize">{data.name}</Text>
            <Text className="text-gray-400  text-xs capitalize ">{data.desc}</Text>
            {data.type === "injury" && <Text className="text-gray-400  text-xs capitalize ">{dateReturn}</Text>}
        </View>
    </View>);
}
const data = {
    type: "injury",
    name: "Amdjed",
    desc: "Achilles tendon injury",
}
const data1 = {
    type: "yellow",
    name: "Amdjed",
    desc: "Disciplinary points",
}
const data2 = {
    type: "red",
    name: "Amdjed",
    desc: "Straight red card",
}
const data3 = {
    type: "injury",
    name: "Amdjed",
    desc: "Muscle injury",
}
const LineUp = () => {
    const { Colors } = useTheme();
    const tacticsHome = {
        tactic: "1-3-4-2-1",
        isHome: true,
        players: [{
            number: "1",
            name: "Amdjed Sahra"
        },
        {
            number: "2",
            name: "Amdjed Sahra"
        }, {
            number: "4",
            name: "Amdjed Sahra"
        }, {
            number: "5",
            name: "Amdjed Sahra"
        }, {
            number: "3",
            name: "Amdjed Sahra"
        }, {
            number: "8",
            name: "Amdjed Sahra"
        }, {
            number: "10",
            name: "Amdjed Sahra"
        }, {
            number: "6",
            name: "Amdjed Sahra"
        }, {
            number: "7",
            name: "Amdjed Sahra"
        }, {
            number: "11",
            name: "Amdjed Sahra"
        },
        {
            number: "9",
            name: "Amdjed Sahra"
        }
        ]
    }
    const tacticsAway = {
        tactic: "1-4-3-2-1",
        isHome: false,
        players: [{
            number: "1",
            name: "Amdjed Sahra"
        },
        {
            number: "2",
            name: "Amdjed Sahra"
        }, {
            number: "4",
            name: "Amdjed Sahra"
        }, {
            number: "5",
            name: "Amdjed Sahra"
        }, {
            number: "3",
            name: "Amdjed Sahra"
        }, {
            number: "8",
            name: "Amdjed Sahra"
        }, {
            number: "10",
            name: "Amdjed Sahra"
        }, {
            number: "6",
            name: "Amdjed Sahra"
        }, {
            number: "7",
            name: "Amdjed Sahra"
        }, {
            number: "11",
            name: "Amdjed Sahra"
        },
        {
            number: "9",
            name: "Amdjed Sahra"
        },

        ]
    }

    return (
        <>
            <View className={`my-2 px-2 py-1 h-10 w-screen flex-row items-center  `} style={{ backgroundColor: Colors.appColor }}>
                <ExclamationCircleIcon color={"#FF6B01"} size={24} />
                <Text className="text-[#F2F2F2] font-bold text-xs mx-2 " >Possible line-up</Text>

            </View>
            <View className="bg-[#58741f] py-4 px-2   ">
                <View className="border-[#a5be72] border-2 w-full   relative overflow-hidden h-[800]">
                    <Tactic tactics={tacticsHome} />
                    <Tactic tactics={tacticsAway} />
                    <StadeDesign />
                </View>
            </View>
            <View className="my-2">
                <Text className="text-white font-bold text-sm my-3">INJURIES & SUSPENSIONS</Text>
                <View className="border-[1px] border-gray-700 rounded-md w-full  my-3 flex flex-row justify-between items-start  p-4">
                    <View className="flex-1 ">
                        <InjuryAndSusp data={data} />
                        <InjuryAndSusp data={data1} />
                        <InjuryAndSusp data={data2} />

                    </View>
                    <View className="flex-1">
                        <InjuryAndSusp data={data} />
                        <InjuryAndSusp data={data} />
                        <InjuryAndSusp data={data3} />
                        <InjuryAndSusp data={data3} />
                        <InjuryAndSusp data={data1} />
                        <InjuryAndSusp data={data2} />

                    </View>
                </View>
                <Text className="text-white font-bold text-sm my-3">COACHES</Text>
                <View className="border-[1px] border-gray-700 rounded-md w-full  my-3 flex flex-row justify-between items-start  p-4">
                    <View className="flex-1  ">
                        <Text className="text-white  text-sm  text-center">Amdjed</Text>


                    </View>
                    <View className="flex-1 ">
                        <Text className="text-white text-sm  text-center ">Amdjed</Text>


                    </View>
                </View>

            </View>
        </>
    )
}

export default LineUp