import { createSlice } from '@reduxjs/toolkit';
import { saveMovements } from '../firebase/firebase-utils';

const movementsOfTheDaySlice = createSlice({
  name: 'movementsOfTheDay',
  initialState: {
    Sales: [],
    extractions: [],
  },
  reducers: {
    getMovementsOfTheDay(state, { payload }) {
      state.Sales = payload.Sales;
      state.extractions = payload.extractions;
    },
    setSale(state, { payload }) {
      state.Sales.push(payload);
      saveMovements(state);
    },
    deleteSale(state, { payload }) {
      const auxList = state.Sales.filter((sale) => sale.hour !== payload);
      state.Sales = auxList;
      saveMovements(state);
      return state;
    },
    setExtractions(state, { payload }) {
      state.extractions.push(payload);
      saveMovements(state);
    },
  },
});

export const { deleteSale, getMovementsOfTheDay, setExtractions, setSale } = movementsOfTheDaySlice.actions;
export default movementsOfTheDaySlice.reducer;
