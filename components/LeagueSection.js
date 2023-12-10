import {
    Image,
    Text,
    View,

} from 'react-native';
import { ChevronRightIcon, StarIcon } from "react-native-heroicons/solid";
const LeagueSection = ({ league }) => {
    return (
        <View className={` h-10 w-full flex-row  items-center mt-2 `} >
            <View className="w-1/12  h-6">
                <Image
                    className="w-5 h-full  object-contain"
                    source={require('./../public/images/leagueicon/pl.png')}
                />
            </View>
            <View className={` h-10 w-11/12 flex-row items-center justify-between`} >
                <View>
                    <View className="flex-row items-center">
                        <Text className="text-lg text-white font-bold mr-1">{league.title}</Text>
                        <StarIcon color={"white"} size={12} />
                    </View>
                    <Text className="text-xs text-[#F2F2F2] font-bold mr-1">{league.country}</Text>
                </View>
                <View className=" justify-center flex-row ">

                    <ChevronRightIcon color={"white"} size={16} />
                </View>
            </View>


        </View>
    )
}

export default LeagueSection