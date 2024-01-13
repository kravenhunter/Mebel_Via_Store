import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import type { AppDispatch, RootState } from "../store";

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// type DispatchFunc = () => AppDispatch;
// export const useAppDispatch: DispatchFunc = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
