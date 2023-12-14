import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,

} from 'react-native';

import {
  useCallback,
  useEffect,
  useLayoutEffect, useMemo, useRef, useState
} from 'react';
import { useTheme } from '../context/ThemeContext';
import { Dialog, IconButton, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, ChevronUpIcon, EllipsisVerticalIcon, StarIcon } from "react-native-heroicons/solid";
import { StarIcon as StarIconOutline } from "react-native-heroicons/outline";
import MatchSection from '../components/MatchSection';
import LeagueSection from '../components/LeagueSection';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, toggleFavorite, toggleIsLive, isLive, myFavouritesCollapse, toggleMyFavouritesCollapse, toggleMyFavouritesRefresh } from '../redux/services/favoritesSlice';
import DateHorizontal from '../components/DateHorizontal';



function FavouriteSection(props) {
  const myFavouritesCollapse = useSelector((state) => state.favorites.myFavouritesCollapse);
  const myFavouritesRefresh = useSelector((state) => state.favorites.myFavouritesRefresh);

  const handleToggle = () => {
    props.dispatch(toggleMyFavouritesCollapse());
  };

  return (<View className="px-4">
    {props.favouriteMatches.length > 0 && myFavouritesRefresh && <View className={` h-10 w-full  flex-row  items-center mt-2  `}>
      <View className="w-1/12  h-6">
        <StarIconOutline color={"white"} size={28} />
      </View>
      <View className={` h-10 w-11/12 flex-row items-center justify-between`}>
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
          <Pressable onPress={handleToggle} className=" bg-[#191919] p-1 rounded-md">
            {!myFavouritesCollapse ? <ChevronUpIcon color={"white"} size={24} /> : <ChevronDownIcon color={"white"} size={24} />}
          </Pressable>

        </View>
      </View>


    </View>}
    {props.favouriteMatches.map(favouriteMatch => !myFavouritesCollapse && myFavouritesRefresh && <MatchSection key={favouriteMatch.id} match={favouriteMatch} handleButtonClick={props.handleButtonClick} isFavorite={true} />)}
  </View>);
}


function HorizontalScrollView({ children }) {
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    // Handle scroll events if needed
  };

  const handleMomentumScrollEnd = (event) => {
    // Handle momentum scroll end events if needed
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      onScroll={handleScroll}
      onMomentumScrollEnd={handleMomentumScrollEnd}
      showsHorizontalScrollIndicator={false}
    >

      <View className="w-screen">{children}</View>
      <View className="w-screen">{children}</View>

      <View className="w-screen">{children}</View>



      {/* Add more pages as needed */}
    </ScrollView>
  );
};






function LeagueWithMatches(props) {
  const isLive = useSelector((state) => state.favorites.isLive);

  const shouldRenderLeague = props.matchesArray.some((match) => match.isStart);

  return (
    <View className="px-4">
      {(shouldRenderLeague || !isLive) && <LeagueSection league={props.LeagueLaLiga} />}

      {props.matchesArray.map((match) => {
        const shouldRenderMatchSection = !isLive || (match.isStart && isLive);
        return shouldRenderMatchSection ? (
          <MatchSection
            key={match.id}
            match={match}
            handleButtonClick={() => props.handleButtonClick(match.id)}
            isFavorite={props.isMatchFavorite(match.id)}
          />
        ) : null;
      })}
    </View>
  );
}



function DateSection({ dispatch }) {
  const isLive = useSelector((state) => state.favorites.isLive);
  const handleToggle = useCallback(() => {
    dispatch(toggleIsLive());
  }, [dispatch]);

  const startDate = new Date('2023-12-6');
  const endDate = new Date('2024-12-16');

  const allDates = useMemo(() => {
    const dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }, [startDate, endDate]);
  const scrollViewRef = useRef(null);

  const todayIndex = allDates.findIndex(date => date.getDate() === new Date().getDate());

  const offset = todayIndex >= 0 ? todayIndex * 40 : 0;
  const renderItem = useCallback(({ item }) => {
    const dateObject = new Date(item);
    const day = dateObject.toLocaleDateString('en-US', { weekday: 'short' });
    const month = dateObject.toLocaleDateString('en-US', { month: 'short' });
    const formattedDate = dateObject.toLocaleDateString('en-US', { day: 'numeric' });
    const dayChoosed = dateObject.getDate() === new Date().getDate() ? "Today" : day.slice(0, 3);
    const color = dayChoosed === "Today" ? "white" : "rgb(209,213,219)";
    const fontSize = dayChoosed === "Today" ? 12 : 9;

    return (
      <View key={todayIndex} className="flex-col justify-center items-center">
        <Text className="  font-medium uppercase" style={{ color: color, fontSize: fontSize }}>{dayChoosed}</Text>
        <Text className="  font-medium uppercase" style={{ color: color, fontSize: fontSize }}>{formattedDate} {month.toUpperCase()}</Text>
      </View>
    );
  }, [todayIndex]);

  return (<View className={`   w-full flex-row items-center py-2 px-4 dark:bg-[#121212] `}>
    <Pressable onPress={handleToggle} className="bg-[#F2F2F2] px-1 rounded-sm left-0 " style={{ backgroundColor: isLive ? "#FF6B01" : "#F2F2F2" }}>
      <Text className="text-xs text-black font-bold">LIVE</Text>
    </Pressable>
    <FlatList
      data={allDates}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}
      className="flex-1  px-2 mx-2"
      ref={scrollViewRef}

      contentOffset={{ x: offset, y: 0 }}


    />

    <View className="flex-row items-center right-0   w-10 ">
      <IconButton icon="calendar-month-outline" iconColor={'#F2F2F2'} className="p-0 m-0  " onPress={() => { }} />

      <IconButton icon="chevron-down" className="p-0 m-0 right-4" size={14} iconColor={'#F2F2F2'} onPress={() => { }} />
    </View>
  </View>);
}



function TypeOfGame({ showDialog, hideDialog }) {
  return (
    <View className={` h-10 w-full flex-row items-center  px-4`}>
      <Text className="text-2xl text-white font-bold">Football</Text>
      <IconButton icon="chevron-down" iconColor={'white'} onPress={showDialog} />
    </View>);
}



function FavouritesClubs(props) {
  return (<View className={`my-2 px-4 py-1  h-14 w-screen`} style={{
    backgroundColor: props.appColor
  }}>
    <View className="bg-gray-800  px-2 w-16  rounded-full  flex-row items-center justify-center ">
      <Image className="w-5 h-5 object-fill" source={require('./../public/images/clubicon/usbbiskra.png')} />
      <Text className="text-white font-bold text-xs ">USB</Text>
    </View>

  </View>);
}



function AppBar(props) {
  return (<View className=" items-center h-14 flex-row justify-between  w-full px-4 " style={{
    backgroundColor: props.appColor
  }}>
    <View className="flex-row ">
      <Text className="font-bold text-white text-3xl">LiveScore</Text>
      <Text className="font-bold text-white text-base">™</Text>
    </View>
    <View className="flex-row-reverse    ">
      <IconButton icon="menu" iconColor={'#F2F2F2'} size={26} onPress={() => { }} />
      <IconButton icon="magnify" iconColor={'#F2F2F2'} size={26} onPress={() => { }} />
    </View>
  </View>);
}


const HomeScreen = ({ navigation }) => {
  const { Colors } = useTheme();


  useEffect(() => {
    console.log("🚀 ~ file: HomeScreen.js:71 ~ isLive:", isLive)

  }, [isLive])

  const matchesArray = [
    {
      id: 1,
      isStart: true,

      time: "18",
      clubs: {
        home: {
          name: "Manchester United",
          logo: './../public/images/clubicon/everton.png',
          score: "0"
        },
        away: {
          name: "Bayern Munich",
          logo: './../public/images/clubicon/chelsea.png',
          score: "2"
        }
      }
    },
    {
      id: 2,

      isStart: false,

      time: "16:00",
      clubs: {
        home: {
          name: "FC Copenhagen",
          logo: './../public/images/clubicon/fulham.png',
          score: "0"
        },
        away: {
          name: "Galatasaray",
          logo: './../public/images/clubicon/westham.png',
          score: "0"
        }
      }
    },

  ];
  const matchesArray1 = [
    {
      id: 3,
      isStart: true,

      time: "18",
      clubs: {
        home: {
          name: "Fake Data 01",
          logo: './../public/images/clubicon/everton.png',
          score: "5"
        },
        away: {
          name: "Fake Data 02",
          logo: './../public/images/clubicon/chelsea.png',
          score: "2"
        }
      }
    },
    {
      id: 4,

      isStart: false,

      time: "16:00",
      clubs: {
        home: {
          name: "Fake Data 03",
          logo: './../public/images/clubicon/fulham.png',
          score: "0"
        },
        away: {
          name: "Fake Data 04",
          logo: './../public/images/clubicon/westham.png',
          score: "4"
        }
      }
    },
    {
      id: 5,

      isStart: false,

      time: "18:00",
      clubs: {
        home: {
          name: "Fake Data 04",
          logo: './../public/images/clubicon/fulham.png',
          score: "0"
        },
        away: {
          name: "Fake Data 05",
          logo: './../public/images/clubicon/westham.png',
          score: "0"
        }
      }
    },
  ];
  const matchesArray2 = [
    {
      id: 6,
      isStart: false,

      time: "18:45",
      clubs: {
        home: {
          name: "Fake Data 06",
          logo: './../public/images/clubicon/everton.png',
          score: "0"
        },
        away: {
          name: "Fake Data 07",
          logo: './../public/images/clubicon/chelsea.png',
          score: "2"
        }
      }
    },
    {
      id: 7,

      isStart: true,

      time: "45+5",
      clubs: {
        home: {
          name: "Fake Data 08",
          logo: './../public/images/clubicon/fulham.png',
          score: "0"
        },
        away: {
          name: "Fake Data 09",
          logo: './../public/images/clubicon/westham.png',
          score: "0"
        }
      }
    },
    {
      id: 8,

      isStart: false,

      time: "18:00",
      clubs: {
        home: {
          name: "Fake Data 10",
          logo: './../public/images/clubicon/fulham.png',
          score: "0"
        },
        away: {
          name: "Fake Data 11",
          logo: './../public/images/clubicon/westham.png',
          score: "0"
        }
      }
    },
  ];
  const ChampionsLeagueGroupA = {
    title: "Champions League",
    country: "Group A",

  };
  const ChampionsLeagueGroupB = {
    title: "Champions League",
    country: "Group B",

  };
  const ChampionsLeagueGroupC = {
    title: "Champions League",
    country: "Group C",

  };
  const LeaguePL = {
    title: "Premier League",
    country: "England",

  };
  const LeagueLaLiga = {
    title: "LaLiga",
    country: "Spain",

  };
  const dispatch = useDispatch();
  const favouritesArrayID = useSelector(selectFavorites);

  const handleButtonClick = (id) => {
    dispatch(toggleFavorite(id));
  };


  const favouriteMatchesArray = (array, favoritesArray) => {
    return array.filter((item) => favoritesArray.includes(item.id));
  };

  const favouriteMatches1 = favouriteMatchesArray(matchesArray, favouritesArrayID);
  const favouriteMatches2 = favouriteMatchesArray(matchesArray1, favouritesArrayID);
  const favouriteMatches3 = favouriteMatchesArray(matchesArray2, favouritesArrayID);


  const favouriteMatches = favouriteMatches1.concat(favouriteMatches2, favouriteMatches3);

  const isMatchFavorite = (matchId) => favouritesArrayID.includes(matchId);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    toggleMyFavouritesRefresh()
    setTimeout(() => {
      setRefreshing(false);
    }, 50);
  };
  const myFavouritesRefresh = useSelector((state) => state.favorites.myFavouritesRefresh);
  const handleToggleRefresh = () => {
    dispatch(toggleMyFavouritesRefresh());
  };
  useEffect(() => {
    console.log("🚀 ~ file: HomeScreen.js:431 ~ useEffect ~ myFavouritesRefresh:", myFavouritesRefresh)
  }, [myFavouritesRefresh])

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <ScrollView className="dark:bg-[#121212]" stickyHeaderIndices={[3]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleToggleRefresh} />
      }
    >
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} className="bg-transparent">
          <View className="w-2 h-20 bg-black">

          </View>
        </Dialog>
      </Portal>
      <AppBar appColor={Colors.appColor} />
      <FavouritesClubs appColor={Colors.appColor} />
      <TypeOfGame hideDialog={hideDialog} showDialog={showDialog} />
      {/* <DateSection dispatch={dispatch} /> */}
      <DateHorizontal />
      <HorizontalScrollView >
        <FavouriteSection handleButtonClick={handleButtonClick} favouriteMatches={favouriteMatches} dispatch={dispatch} />
        <LeagueWithMatches matchesArray={matchesArray} LeagueLaLiga={ChampionsLeagueGroupA} handleButtonClick={handleButtonClick} isMatchFavorite={isMatchFavorite}></LeagueWithMatches>
        <LeagueWithMatches matchesArray={matchesArray1} LeagueLaLiga={LeaguePL} handleButtonClick={handleButtonClick} isMatchFavorite={isMatchFavorite}></LeagueWithMatches>
        <LeagueWithMatches matchesArray={matchesArray2} LeagueLaLiga={LeagueLaLiga} handleButtonClick={handleButtonClick} isMatchFavorite={isMatchFavorite}></LeagueWithMatches>

      </HorizontalScrollView>


    </ScrollView>

  );
  // }
};


export default HomeScreen;
