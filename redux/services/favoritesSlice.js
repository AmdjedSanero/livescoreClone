import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [],
        isLive: false,
        myFavouritesCollapse: false,
        myFavouritesRefresh: false,
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const id = action.payload;
            if (state.ids.includes(id)) {
                state.ids = state.ids.filter((prevId) => prevId !== id);

            } else {
                state.ids = [...state.ids, id];

            }
        },
        toggleIsLive: (state) => {
            state.isLive = !state.isLive;
        },
        toggleMyFavouritesCollapse: (state) => {
            state.myFavouritesCollapse = !state.myFavouritesCollapse;
        },
        toggleMyFavouritesRefresh: (state) => {
            state.myFavouritesRefresh = true;
        },

    },
});

export const { toggleFavorite, toggleIsLive, toggleMyFavouritesCollapse, toggleMyFavouritesRefresh } = favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites.ids;
export const isLive = (state) => state.favorites.isLive;
export const myFavouritesCollapse = (state) => state.favorites.myFavouritesCollapse;



export default favoritesSlice.reducer;
