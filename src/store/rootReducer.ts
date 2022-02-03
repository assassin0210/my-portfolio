import { combineReducers } from "@reduxjs/toolkit";
import { cocktailsData } from "./slices/cocktailsSlice";
import { cocktailItem } from "./slices/cocktailItemSlice";
import { allIngredientsData } from "./slices/ingredientSlice";

export const rootReducer = combineReducers({
  cocktailsData,
  cocktailItem,
  allIngredientsData,
});
export type RootStateType = ReturnType<typeof rootReducer>;
