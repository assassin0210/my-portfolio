import { createSlice } from "@reduxjs/toolkit";
import { IStatus } from "./cocktailsSlice";
import { getCocktailDetail } from "../requests/getCocktailDetail";
import { IDrinkItem } from "../requests/getCocktailsRequest";

interface IInitialState {
  drink?: IDrinkItem;
  status: IStatus;
}

const initialState: IInitialState = {
  drink: undefined,
  status: "init",
};
const cocktailItemSlice = createSlice({
  name: "cocktailItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCocktailDetail.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCocktailDetail.fulfilled, (state, { payload }) => {
      state.drink = payload;
      state.status = "loaded";
    });
    builder.addCase(getCocktailDetail.rejected, (state) => {
      state.status = "error";
    });
  },
});
// export const {} = translateSlice.actions;
export const cocktailItem = cocktailItemSlice.reducer;
