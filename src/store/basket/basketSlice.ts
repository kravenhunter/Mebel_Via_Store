import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../types/ITypes";

interface IProductState {
  products: ICard[];
}
const initialState: IProductState = {
  products: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, actions: PayloadAction<ICard>) {
      console.log(state);
      console.log(actions.payload);
      state.products.push(actions.payload);
    },
    removeProduct(state, actions: PayloadAction<{ id: number }>) {
      console.log(actions.payload.id);
      state.products = state.products.filter((el) => el.id !== actions.payload.id);

      console.log(state);
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
