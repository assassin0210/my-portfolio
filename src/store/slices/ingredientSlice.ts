import { createSlice } from "@reduxjs/toolkit";
import { getAllIngredients } from "../requests/getAllIngredients";
import { IStatus } from "./cocktailsSlice";

interface IInitialState {
  ingredients: string[];
  status: IStatus;
}

const initialState: IInitialState = {
  ingredients: [],
  status: "init",
};
const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllIngredients.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllIngredients.fulfilled, (state, { payload }) => {
      state.ingredients = payload.map((el) => el.strIngredient1);
      state.status = "loaded";
    });
    builder.addCase(getAllIngredients.rejected, (state) => {
      state.status = "error";
    });
  },
});
// export const {} = translateSlice.actions;
export const allIngredientsData = ingredientsSlice.reducer;
