import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// здесь объявляем переменные для стэйта
const initialState: string[] = [];
const textSlice = createSlice({
  name: "test",
  // первоначальное состояние

  initialState,

  // перечисляем набор методов которые хотим испольховать
  reducers: {
    addText(state, actions: PayloadAction<string>) {
      console.log(state);
      console.log(actions.payload);
      state.push(actions.payload);
    },
    removeText(state, actions: PayloadAction<string>) {
      console.log(state);
      console.log(actions.payload);
      state = state.filter((el) => el !== actions.payload);

      console.log(state);
    },
  },
});

// экспортируем  экшены
// export const { addProduct, removeProduct } = basketSlice.actions;
// export const textSliceActions = textSlice.actions;
export const { addText, removeText } = textSlice.actions;
// reducer - формирует набор всех методов
export const textSliceReduser = textSlice.reducer;
