import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from 'react-native-paper';
import { toggleIsLive } from '../redux/services/favoritesSlice';

const DateHorizontal = () => {
    const dispatch = useDispatch()
    const isLive = useSelector((state) => state.favorites.isLive);
    const handleToggle = useCallback(() => {
        dispatch(toggleIsLive());
    }, [dispatch]);

    const startDate = new Date('2023-12-01');
    const endDate = new Date('2023-12-31');

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

    const offset = todayIndex >= 0 ? todayIndex * 40.5 : 0;
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
            initialNumToRender={6}
            contentOffset={{ x: offset, y: 0 }}
            pagingEnabled


        />

        <Pressable onPress={() => { }} className="flex-row items-center right-0   w-10 ">
            <IconButton icon="calendar-month-outline" iconColor={'#F2F2F2'} className="p-0 m-0  " />

            <IconButton icon="chevron-down" className="p-0 m-0 right-4" size={14} iconColor={'#F2F2F2'} />
        </Pressable>
    </View>);


}

export default DateHorizontal