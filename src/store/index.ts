import { configureStore } from "@reduxjs/toolkit";
import BasketReduser from "./basket/basketSlice";
import CounterReducer from "./counter/countSlice";
import { textSliceReduser } from "./textSlice";

export const store = configureStore({
  // здесь регистрируем все нажи редюсеры
  reducer: {
    basket: BasketReduser,
    testReducer: textSliceReduser,
    counter: CounterReducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
