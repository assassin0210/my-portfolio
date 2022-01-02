import { combineReducers } from "@reduxjs/toolkit";
import { lang } from "./translateSlice";

export const rootReducer = combineReducers({
  lang,
});
export type RootStateType = ReturnType<typeof rootReducer>;
