import { createSlice } from '@reduxjs/toolkit';
import { saveAmount } from '../firebase/firebase-utils';

const movementsOfTheDaySlice = createSlice({
  name: 'movementsOfTheDay',
  initialState: {
    Sales: [],
  },
  reducers: {
    getMovementsOfTheDay(state, { payload }) {
      state.Sales = payload.Sales;
    },
    setSale(state, { payload }) {
      //Object.keys(payload).forEach((key) => state.sales.push({ [key]: payload[key] }));
      state.Sales.push(payload);
      saveAmount(state);
    },
  },
});

export const { getMovementsOfTheDay, setSale } = movementsOfTheDaySlice.actions;
export default movementsOfTheDaySlice.reducer;
