import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import searchSelectorReducer from '../features/SearchPageSelector'

export const store = configureStore({
  reducer: {
    user: userReducer,
    searchSelector: searchSelectorReducer,
  },
});
