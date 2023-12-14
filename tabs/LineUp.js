import { View, Text } from 'react-native'
import React from 'react'
import { ExclamationCircleIcon } from 'react-native-heroicons/outline'
import { useTheme } from '../context/ThemeContext';
import Tactic from '../components/Tactic';
import StadeDesign from '../components/StadeDesign';


function InjuryAndSusp({ data }) {
    const dateReturn = data.dateReturn ? data.dateReturn : "Unknown"
    return (<View className="flex-row  items-center gap-3 mb-2">
        {data.type === "injury" && <View className="justify-center items-center bg-white h-4 w-4 rounded-full ">
            <Text className="text-red-500 font-extrabold text-[16px] top-[-4] ">+</Text>
        </View>}
        {data.type === "red" && <View className="justify-center items-center bg-[#DF2357] h-5 w-3 rounded-sm mr-[1]">
        </View>}
        {data.type === "yellow" && <View className="justify-center items-center bg-[#FFCE00] h-5 w-3 rounded-sm mr-[1] ">
            <Text className="text-black font-bold text-xs ">5</Text>
        </View>}
        <View >
            <Text className="text-white font-bold text-base capitalize">{data.name}</Text>
            <Text className="text-gray-400  text-xs capitalize ">{data.desc}</Text>
            {data.type === "injury" && <Text className="text-gray-400  text-xs capitalize ">{dateReturn}</Text>}
        </View>
    </View>);
}
const data = {
    type: "injury",
    name: "Nibou",
    desc: "Achilles tendon injury",
}
const data1 = {
    type: "yellow",
    name: "Yacine",
    desc: "Disciplinary points",
}
const data2 = {
    type: "red",
    name: "Khaled",
    desc: "Straight red card",
}
const data3 = {
    type: "injury",
    name: "Wassel",
    desc: "Muscle injury",
}
const LineUp = () => {
    const { Colors } = useTheme();
    const tacticsHome = {
        tactic: "1-3-4-2-1",
        isHome: true,
        players: [{
            number: "1",
            name: "Rahim Toumi"
        },
        {
            number: "2",
            name: "Safouane"
        }, {
            number: "4",
            name: "Raafet"
        }, {
            number: "5",
            name: "Taha"
        }, {
            number: "3",
            name: "Souheil"
        }, {
            number: "8",
            name: "Islam"
        }, {
            number: "10",
            name: "Ilyas"
        }, {
            number: "6",
            name: "Ousaama"
        }, {
            number: "7",
            name: "Fayez"
        }, {
            number: "11",
            name: "Rafik"
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
            name: "Imed"
        },
        {
            number: "2",
            name: "Houssem"
        }, {
            number: "4",
            name: "Amine"
        }, {
            number: "5",
            name: "Mohamed"
        }, {
            number: "3",
            name: "Reda"
        }, {
            number: "8",
            name: "Aymen"
        }, {
            number: "10",
            name: "Salah"
        }, {
            number: "6",
            name: "Hassen"
        }, {
            number: "7",
            name: "Raouf"
        }, {
            number: "11",
            name: "Mehdi"
        },
        {
            number: "9",
            name: "Riad"
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