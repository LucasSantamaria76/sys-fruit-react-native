import { configureStore } from '@reduxjs/toolkit';
import movementsOfTheDay from './movementsOfTheDaySlice';

export const store = configureStore({
  reducer: {
    movementsOfTheDay,
  },
});
