import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./baseRequest";
import { IGetCocktailsResponse } from "./getCocktailsRequest";

export const getCocktailDetail = createAsyncThunk(
  "data/cocktailDetail",
  async function ({ id }: { id?: string }) {
    const response = await instance.get<IGetCocktailsResponse>("/lookup.php", {
      params: { i: id },
    });
    return response.data.drinks[0];
  }
);
