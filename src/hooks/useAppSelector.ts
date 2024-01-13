import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../store";

// хук для получения состояния хранилища
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
