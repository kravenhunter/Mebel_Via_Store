import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  data: number;
  testArr: string[];
}
const initialState: CounterState = { data: 10, testArr: [] };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //increment
    incremented(state) {
      // под шапкой редакс делает копию  стэйта изменяет ее и мутирует
      // реальный стейт
      state.data++;
    },
    //decrement
    dicremented(state) {
      state.data--;
    },
    amountAdded(state, actions: PayloadAction<number>) {
      state.data += actions.payload;
    },
    addText(state, actions: PayloadAction<string>) {
      state.testArr.push(actions.payload);
    },
    deleteText(state, actions: PayloadAction<string>) {
      state.testArr = state.testArr.filter((el) => el !== actions.payload);
    },
  },
});

export const { incremented, amountAdded, dicremented, addText, deleteText } = counterSlice.actions;

export default counterSlice.reducer;
