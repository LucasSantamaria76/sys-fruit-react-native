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
      state.Sales.push(payload);
      saveAmount(state);
    },
    deleteSale(state, { payload }) {
      const auxList = state.Sales.filter((sale) => sale.hour !== payload);
      state.Sales = auxList;
      saveAmount(state);
      return state;
    },
  },
});

export const { deleteSale, getMovementsOfTheDay, setSale } = movementsOfTheDaySlice.actions;
export default movementsOfTheDaySlice.reducer;
