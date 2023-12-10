// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const { setColorScheme } = useColorScheme()

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    useEffect(() => {
        // Load the theme preference from AsyncStorage on component mount
        const loadThemePreference = async () => {
            try {
                const savedThemePreference = await AsyncStorage.getItem('theme_preference');
                if (savedThemePreference !== null) {
                    setIsDarkTheme(savedThemePreference === 'light');
                }
            } catch (error) {
                console.error('Error loading theme preference:', error);
            }
        };

        loadThemePreference();
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);

    };

    useEffect(() => {
        // Save the theme preference to AsyncStorage whenever it changes
        const saveThemePreference = async () => {
            try {
                await AsyncStorage.setItem('theme_preference', isDarkTheme ? 'dark' : 'light');
                setColorScheme(isDarkTheme ? "dark" : "light")

            } catch (error) {
                console.error('Error saving theme preference:', error);
            }
        };

        saveThemePreference();
    }, [isDarkTheme]);

    const theme = isDarkTheme;
    console.log("🚀 ~ file: ThemeContext.js:49 ~ ThemeProvider ~ theme:", theme)
    const Colors = {
        appColor: theme ? "#191919" : "#191919",
        bgCheck: theme ? "#273c75" : "#3498db",
        primaryText: theme ? "#ffffff" : "#3498db",
        placeholder: theme ? "#ffffff" : "#555",




        bgAppColor: theme ? 'bg-[#273c75]' : 'bg-[#3498db]',
        bgBackground: theme ? 'bg-[#343a40]' : 'bg-white',

        background: theme ? '#374151' : '#ffffff',
        bSheetBackground: theme ? '#2C2F33' : 'white',
        bSheetHandle: theme ? 'white' : 'black',


        bgText: theme ? "text-[#fffff1]" : "text-[#000001]",
        text: theme ? '#ffffff' : '#000000',
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, Colors }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
