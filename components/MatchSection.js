import {
    Image,
    Pressable,
    Text,
    View,

} from 'react-native';
import { StarIcon } from "react-native-heroicons/solid";
import { StarIcon as StarIconOutline } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

const MatchSection = ({ match, handleButtonClick, isFavorite }) => {
    const navigation = useNavigation();

    return (
        <View className={` h-20 dark:bg-[#191919] pl-4 overflow-hidden  w-full flex-row  items-center mt-2 rounded-md `} >
            {match.isStart && <View className="w-2 h-14 rounded-full left-[-4] absolute bg-[#FF6B01]">

            </View>}
            <View className={` h-6 `}>
                <Text className={`${match.isStart ? 'text-[#FF6B01] left-1' : 'text-[#F2F2F2] left-[-8]'} absolute   text-center text-xs font-bold `} >{match.time}{match.isStart ? "'" : ""}</Text>
            </View>
            <View className={` h-10 w-10/12 flex-row items-center absolute left-14 justify-between `} >
                <Pressable onPress={() => { navigation.navigate("MatchScreen") }} >
                    <View className="flex-row items-center mb-2 ">
                        <Image
                            className="w-5 h-5 object-fill"
                            source={require('./../public/images/clubicon/manu.png')}
                        />
                        <Text className="text-sm dark:text-[#F2F2F2] w-10/12  ml-1">{match.clubs?.home?.name}</Text>
                        {match.isStart && <Text className="text-[#F2F2F2]  text-base font-bold " >{match.clubs?.home?.score}</Text>}

                    </View>
                    <View className="flex-row items-center  ">
                        <Image
                            className="w-5 h-5 object-fill"
                            source={require('./../public/images/clubicon/bayern.png')}
                        />
                        <Text className="text-sm dark:text-[#F2F2F2] w-10/12  ml-1">{match.clubs?.away?.name}</Text>
                        {match.isStart && <Text className="text-[#F2F2F2]  text-base font-bold " >{match.clubs?.away?.score}</Text>}

                    </View>
                </Pressable>
                <Pressable onPress={() => { handleButtonClick(match.id) }} className={`justify-center flex-row  ${match.isStart ? "" : "ml-2"} `}>
                    {isFavorite === true ? <StarIcon color={"#FF6B01"} size={24} /> : <StarIconOutline color={"white"} size={24} />}
                </Pressable>
            </View>

        </View>
    )
}

export default MatchSection