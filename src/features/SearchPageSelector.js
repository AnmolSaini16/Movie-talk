import { createSlice } from '@reduxjs/toolkit';

export const SearchPageSelector = createSlice({
  name: 'searchSelector',
  initialState : {
    selectMovie: true,
    selectTVShow: false,
  },
  reducers: {
    selectedMovie: (state, action) => {
        state.selectMovie = action.payload
    },
    selectedTVShow: (state, action) => {
        state.selectTVShow = action.payload
    }
  },
});

export const { selectedMovie, selectedTVShow } = SearchPageSelector.actions;

export const onSelectMovie = (state) => state.searchSelector.selectMovie;

export default SearchPageSelector.reducer;
