import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./baseRequest";
interface IDrinks {
  strIngredient1: string;
}

export interface IAllIngredientsPayload {
  drinks: IDrinks[];
}

export const getAllIngredients = createAsyncThunk(
  "data/AllIngredients",
  async function (_) {
    const response = await instance.get<IAllIngredientsPayload>("/list.php", {
      params: { i: "list" },
    });
    return response.data.drinks;
  }
);
