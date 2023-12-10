import {
  Image,
  ScrollView,
  Text,
  View,

} from 'react-native';

import {
  useLayoutEffect
} from 'react';
import { useTheme } from '../context/ThemeContext';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { UsbIcon } from "./../public/images/clubicon/usbbiskra.png";
import { ChevronRightIcon, ChevronUpIcon, EllipsisVerticalIcon, StarIcon } from "react-native-heroicons/solid";
import { StarIcon as StarIconOutline } from "react-native-heroicons/outline";
import MatchSection from '../components/MatchSection';
import LeagueSection from '../components/LeagueSection';


const HomeScreen = () => {
  const { Colors } = useTheme();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: Colors.appColor,
        height: 80,
      },

      headerTitle: () => (
        <View className="flex-row ">
          <Text className="font-bold text-white text-3xl">LiveScore</Text>
          <Text className="font-bold text-white text-base">™</Text>


        </View>
      ),
      headerTintColor: 'white',

      headerShadowVisible: false,

      headerRight: () => (
        <View className="flex-row-reverse   w-full left-4 ">
          <IconButton
            icon="menu"
            iconColor={'#F2F2F2'}
            size={26}
            onPress={() => { }}
          />
          <IconButton
            icon="magnify"
            iconColor={'#F2F2F2'}
            size={26}
            onPress={() => { }}
          />

        </View>
      ),
    });
  }, []);

  const match = {
    isStart: true,
    isFavourite: true,
    time: "18",
    clubs: {
      home: {
        name: "Everton",
        logo: './../public/images/clubicon/everton.png',
        score: "0"
      },
      away: {
        name: "Chelsea",
        logo: './../public/images/clubicon/chelsea.png',
        score: "2"
      }
    }
  }
  const match1 = {
    isStart: false,
    isFavourite: false,
    time: "16:00",
    clubs: {
      home: {
        name: "Fulham",
        logo: './../public/images/clubicon/fulham.png',
        score: "0"
      },
      away: {
        name: "West Ham United",
        logo: './../public/images/clubicon/westham.png',
        score: "0"
      }
    }
  };
  const match2 = {
    isStart: false,
    isFavourite: false,
    time: "16:00",
    clubs: {
      home: {
        name: "Luton Town",
        logo: './../public/images/clubicon/luton.png',
        score: "0"
      },
      away: {
        name: "Manchester City",
        logo: './../public/images/clubicon/mancity.png',
        score: "0"
      }
    }
  };
  const match3 = {
    isStart: false,
    isFavourite: false,
    time: "16:00",
    clubs: {
      home: {
        name: "Tottenham",
        logo: './../public/images/clubicon/tottenham.png',
        score: "0"
      },
      away: {
        name: "Newcastle",
        logo: './../public/images/clubicon/newcastle.png',
        score: "0"
      }
    }
  };

  const LeaguePL = {
    title: "Premier League",
    country: "England",

  };
  const LeagueLaLiga = {
    title: "LaLiga",
    country: "Spain",

  };

  console.log("🚀 ~ file: HomeScreen.js:81 ~ HomeScreen ~ match:", match)

  return (
    <ScrollView className=" px-4  dark:bg-[#121212]  " >
      <View className={`my-2 px-4 py-1 -mx-4 h-14 w-screen`} style={{ backgroundColor: Colors.appColor }}>
        <View className="bg-gray-800  px-2 w-16  rounded-full  flex-row items-center justify-center ">
          <Image
            className="w-5 h-5 object-fill"
            source={require('./../public/images/clubicon/usbbiskra.png')}
          />
          <Text className="text-white font-bold text-xs " >USB</Text>

        </View>

      </View>
      <View className={` h-10 w-full flex-row items-center `} >
        <Text className="text-2xl text-white font-bold">Football</Text>
        <IconButton
          icon="chevron-down"
          iconColor={'white'}
          onPress={() => { }}
        />
      </View>
      {/* Date Section */}
      <View className={` h-10 w-full flex-row items-center  `} >
        <View className="bg-[#F2F2F2] px-1 rounded-sm left-0 ">
          <Text className="text-sm text-black font-bold">LIVE</Text>
        </View>
        <View className="flex-row justify-between items-center flex-1 px-2 mx-2">
          <View className="flex-col justify-center items-center ">
            <Text className="text-xs text-gray-300 font-bold uppercase ">Fri</Text>
            <Text className="text-xs text-gray-300 font-bold uppercase ">8 DEC</Text>

          </View>
          <View className="flex-col justify-center items-center ">
            <Text className="text-xs text-gray-300 font-bold uppercase ">sat</Text>
            <Text className="text-xs text-gray-300 font-bold uppercase ">9 DEC</Text>

          </View>
          <View className="flex-col justify-center items-center ">
            <Text className="text-xs text-white font-extrabold uppercase ">today</Text>
            <Text className="text-xs text-white font-bold uppercase ">10 DEC</Text>

          </View>
          <View className="flex-col justify-center items-center ">
            <Text className="text-xs text-gray-300 font-bold uppercase ">mon</Text>
            <Text className="text-xs text-gray-300 font-bold uppercase ">11 DEC</Text>

          </View>
          <View className="flex-col justify-center items-center ">
            <Text className="text-xs text-gray-300 font-bold uppercase ">tue</Text>
            <Text className="text-xs text-gray-300 font-bold uppercase ">12 DEC</Text>

          </View>

        </View>
        <View className="flex-row items-center right-0   w-10 ">
          <IconButton
            icon="calendar-month-outline"
            iconColor={'#F2F2F2'}
            className="p-0 m-0  "
            onPress={() => { }}
          />

          <IconButton
            icon="chevron-down"
            className="p-0 m-0 right-4"
            size={14}
            iconColor={'#F2F2F2'}
            onPress={() => { }}
          />
        </View>
      </View>
      {/* End Date Section */}
      {/* Favorits Section */}
      <View className={` h-10 w-full flex-row  items-center mt-2 `} >
        <View className="w-1/12  h-6">
          <StarIconOutline color={"white"} size={28} />

        </View>
        <View className={` h-10 w-11/12 flex-row items-center justify-between`} >
          <View>
            <View className="flex-row items-center">
              <Text className="text-lg text-white font-bold ml-2">My Favourites</Text>
              <StarIcon color={"white"} size={12} />
            </View>
          </View>
          <View className=" justify-center gap-2 flex-row items-center ">
            <View className=" bg-[#191919] p-1 rounded-md ">
              <EllipsisVerticalIcon color={"white"} size={24} />
            </View>
            <View className=" bg-[#191919] p-1 rounded-md">
              <ChevronUpIcon color={"white"} size={24} />
            </View>

          </View>
        </View>


      </View>
      <MatchSection match={match} />

      {/* End Favorits Section */}
      {/* League Section */}
      <LeagueSection league={LeaguePL} />

      {/* End League Section */}
      {/* Match Section */}
      <MatchSection match={match} />
      <MatchSection match={match1} />
      <MatchSection match={match2} />
      <MatchSection match={match3} />


      {/* End Match Section */}
      {/* League Section */}
      <LeagueSection league={LeagueLaLiga} />

      {/* End League Section */}
      {/* Match Section */}
      <MatchSection match={match1} />
      <MatchSection match={match2} />
      <MatchSection match={match3} />
      <MatchSection match={match1} />

      {/* End Match Section */}
    </ScrollView>
  );
  // }
};


export default HomeScreen;
