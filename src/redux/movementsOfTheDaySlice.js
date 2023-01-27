import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { saveMovements } from '../firebase/firebase-utils';

const movementsOfTheDaySlice = createSlice({
  name: 'movementsOfTheDay',
  initialState: {
    sales: [],
    extractions: [],
    cashWithdrawals: [],
    cashChange: 0,
    cashAvailable: 0,
    currentDay: dayjs().format('DD-MM-YYYY'),
  },
  reducers: {
    getMovementsOfTheDay(state, { payload }) {
      if (!payload) {
        saveMovements(state, state.currentDay);
      } else {
        state.sales = payload.sales;
        state.extractions = payload.extractions;
        state.cashChange = payload.cashChange;
        state.cashAvailable = payload.cashAvailable;
      }
    },
    setSale(state, { payload }) {
      state.sales.push(payload);
      payload.typeOfPayment === 'Efectivo' && (state.cashAvailable += payload.amount);
      saveMovements(state, state.currentDay);
    },
    deleteSale(state, { payload }) {
      const sale = state.sales.find((sale) => sale.hour === payload);
      sale.typeOfPayment === 'Efectivo' && (state.cashAvailable -= sale.amount);
      const auxList = state.sales.filter((sale) => sale.hour !== payload);
      state.sales = auxList;
      saveMovements(state, state.currentDay);
      return state;
    },
    setExtractions(state, { payload }) {
      state.extractions.push(payload);
      state.cashAvailable -= payload.amount;
      saveMovements(state, state.currentDay);
    },
    setCashWithdrawals(state, { payload }) {
      state.cashWithdrawals.push(payload);
      state.cashAvailable -= payload.amount;
      saveMovements(state, state.currentDay);
    },
    setCashChange(state, { payload }) {
      state.cashAvailable -= state.cashChange;
      state.cashChange = payload;
      state.cashAvailable += payload;
      saveMovements(state, state.currentDay);
    },
  },
});

export const { deleteSale, getMovementsOfTheDay, setCashChange, setCashWithdrawals, setExtractions, setSale } =
  movementsOfTheDaySlice.actions;
export default movementsOfTheDaySlice.reducer;
