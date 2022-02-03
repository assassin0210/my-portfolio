import { createSlice } from "@reduxjs/toolkit";
import {
  getCocktailsRequest,
  IDrinkItem,
} from "../requests/getCocktailsRequest";

export type IStatus = "init" | "loading" | "loaded" | "error";

interface IInitialState {
  stack: IDrinkItem[];
  status: IStatus;
}

const initialState: IInitialState = {
  stack: [],
  status: "init",
};
const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCocktailsRequest.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCocktailsRequest.fulfilled, (state, { payload }) => {
      state.stack = payload;
      state.status = "loaded";
    });
    builder.addCase(getCocktailsRequest.rejected, (state) => {
      state.status = "error";
    });
  },
});
export const cocktailsData = cocktailsSlice.reducer;
